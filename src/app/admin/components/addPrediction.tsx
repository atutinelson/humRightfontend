"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

import { createPredictionSchema } from "@/lib/validations/auth";
import { useGetFixturesByDateQuery, usePostCreatePredictionMutation } from "@/state/api";
import { toast } from "sonner";

type Fixture = {
  id: number;
  homeTeam: string;
  awayTeam: string;
};

type Plan = {
  id: number;
  name: string;
};

type Props = {
  children: React.ReactNode;
  plans: Plan[];
};

const AddPrediction = ({ children, plans }: Props) => {
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof createPredictionSchema>>({
    resolver: zodResolver(createPredictionSchema) as any,
    defaultValues: {
      tipText: "",
      odd: 0,
      tipDate: new Date(),
      isPublished: false,
      fixtureIds: [],
      planId: undefined,
    },
  });

  // Watch the tipDate field to fetch fixtures for that date
  const selectedDate = form.watch("tipDate");
  const dateString = selectedDate ? selectedDate.toISOString().split('T')[0] : "";
  
  console.log("Selected date:", selectedDate, "Date string:", dateString);
  
  const { data: fixturesData, isLoading: fixturesLoading, error: fixturesError } = useGetFixturesByDateQuery(dateString, {
    skip: !dateString, // Don't fetch if no date is selected
  });

  const availableFixtures = fixturesData?.data || [];
  
  console.log("Available fixtures for", dateString, ":", availableFixtures);

  // Clear selected fixtures when date changes to avoid showing fixtures from wrong date
  React.useEffect(() => {
    if (availableFixtures.length > 0) {
      const currentSelectedFixtures = form.getValues("fixtureIds");
      const validFixtureIds = availableFixtures.map(f => f.id);
      const filteredSelections = currentSelectedFixtures.filter(id => validFixtureIds.includes(id));
      
      if (filteredSelections.length !== currentSelectedFixtures.length) {
        form.setValue("fixtureIds", filteredSelections);
      }
    }
  }, [availableFixtures, form]);

  const [createPrediction, { isLoading: isCreating }] = usePostCreatePredictionMutation();

  const onSubmit = async (values: z.infer<typeof createPredictionSchema>) => {
    try {
      const { fixtureIds, ...predictionData } = values;
      
      // Create predictions for each selected fixture
      const promises = fixtureIds.map(fixtureId => 
        createPrediction({
          ...predictionData,
          tipDate: predictionData.tipDate.toISOString(),
          fixtureId,
        }).unwrap()
      );

      const results = await Promise.allSettled(promises);
      
      const successful = results.filter(result => result.status === 'fulfilled').length;
      const failed = results.filter(result => result.status === 'rejected').length;

      if (successful > 0) {
        toast.success(
          `Successfully created ${successful} prediction${successful > 1 ? 's' : ''}!`,
          {
            description: failed > 0 ? `${failed} prediction${failed > 1 ? 's' : ''} failed to create.` : undefined,
          }
        );
        
        // Reset form on success
        form.reset();
        setOpen(false);
      } else {
        console.log
        toast.error("Failed to create any predictions. Please try again.");
      }

      // Show specific errors for failed predictions
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          const fixture = availableFixtures.find(f => f.id === fixtureIds[index]);
          const fixtureName = fixture ? `${fixture.homeTeam} vs ${fixture.awayTeam}` : `Fixture ${fixtureIds[index]}`;
          
          console.error(`Failed to create prediction for ${fixtureName}:`, result.reason);
        }
      });

    } catch (error) {
      console.error('Error creating predictions:', error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Prediction</DialogTitle>
          <DialogDescription>
            Create prediction and attach to fixtures.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Tip Text */}
            <FormField
              control={form.control}
              name="tipText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tip Text</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter prediction details"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Odd */}
            <FormField
              control={form.control}
              name="odd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Odd</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      {...field}
                      onChange={(e) =>
                        field.onChange(Number(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tip Date */}
            <FormField
              control={form.control}
              name="tipDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tip Date</FormLabel>
                  <FormControl>
                    <Input
                      type="datetime-local"
                      value={
                        field.value
                          ? new Date(field.value)
                              .toISOString()
                              .slice(0, 16)
                          : ""
                      }
                      onChange={(e) =>
                        field.onChange(new Date(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Plan Select */}
            <FormField
              control={form.control}
              name="planId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Plan (Optional)</FormLabel>
                  <FormControl>
                    <select
                      className="w-full border rounded-md p-2"
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value
                            ? Number(e.target.value)
                            : undefined
                        )
                      }
                    >
                      <option value="">No Plan</option>
                      {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Multi Fixture Select */}
            <FormField
              control={form.control}
              name="fixtureIds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Fixtures</FormLabel>
                  <FormControl>
                    <div className="space-y-2 max-h-40 overflow-y-auto border p-2 rounded-md">
                      {fixturesLoading ? (
                        <div className="text-center py-4 text-gray-500">
                          Loading fixtures...
                        </div>
                      ) : fixturesError ? (
                        <div className="text-center py-4 text-red-500">
                          Error loading fixtures. Please select a valid date.
                        </div>
                      ) : availableFixtures.length === 0 ? (
                        <div className="text-center py-4 text-gray-500">
                          No fixtures available for the selected date.
                        </div>
                      ) : (
                        availableFixtures.map((fixture) => (
                          <label
                            key={fixture.id}
                            className="flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              checked={field.value.includes(fixture.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  field.onChange([
                                    ...field.value,
                                    fixture.id,
                                  ]);
                                } else {
                                  field.onChange(
                                    field.value.filter(
                                      (id) => id !== fixture.id
                                    )
                                  );
                                }
                              }}
                            />
                            {fixture.homeTeam} vs {fixture.awayTeam}
                          </label>
                        ))
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Publish Switch */}
            <FormField
              control={form.control}
              name="isPublished"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel>Publish Now</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-[#057857]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-[#057857] disabled:opacity-50"
              disabled={isCreating}
            >
              {isCreating ? "Creating Predictions..." : "Create Prediction"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPrediction;