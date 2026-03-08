"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

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
import { Button } from "@/components/ui/button";
import {useGetFixturesByDateQuery, useCreateJackpotMutation } from "@/state/api";
import { toast } from "sonner";
import { createJackpotSchema, JackpotForm } from "@/lib/validations/auth";

type Fixture = {
  id: number;
  homeTeam: string;
  awayTeam: string;
};
// client-side schema, converts fixtureIds string into array later

const AddJackpot = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const [createJackpot, { isLoading }] = useCreateJackpotMutation();
  const form = useForm<JackpotForm>({
    resolver: zodResolver(createJackpotSchema),
    defaultValues: {
      name: "",
      startDatetime: new Date(),
      endDatetime: new Date(),
      amount: 0,
      fixtureIds: [],
    },
  });


  // Watch the tipDate field to fetch fixtures for that date
    const selectedDate = form.watch("startDatetime") ? new Date(form.watch("startDatetime")) : null;
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

  
  const onSubmit = async (values: JackpotForm) => {
    try {
      const ids = values.fixtureIds
      console.log("Submitting jackpot with fixture IDs:", ids);
      const payload = {
        name: values.name,
        startDatetime: new Date(values.startDatetime).toISOString(),
        endDatetime: new Date(values.endDatetime).toISOString(),
        amount: values.amount,
        fixtureIds: ids,
      };

      await createJackpot(payload).unwrap();
      toast.success("Jackpot created successfully!", {
        position: "bottom-right",
        className: "bg-green-500 text-white",
      });
      form.reset();
    } catch (err: any) {
      console.error("Failed to create jackpot:", err);
      const message = err?.data?.error || err?.message || "Failed to create jackpot";
      toast.error(message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Jackpot</DialogTitle>
          <DialogDescription>Create a new jackpot with fixtures</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Betika Jackpot" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Start */}
            <FormField
              control={form.control}
              name="startDatetime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date/Time</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* End */}
            <FormField
              control={form.control}
              name="endDatetime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date/Time</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Amount */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="1000"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* /* Multi Fixture Select */} 
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

            <Button type="submit" className="w-full bg-[#057857]" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Jackpot"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddJackpot;
