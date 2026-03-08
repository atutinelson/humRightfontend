"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import z from "zod";
import { CreateTipData, createTipPlanSchema } from "@/lib/validations/auth";
import { usePostCreatePlanMutation } from "@/state/api";
import { toast } from "sonner";

const AddPlan = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const[error, setError] = React.useState<string| null>();
  const[createPlan, {isLoading, isError}] = usePostCreatePlanMutation();
  const form = useForm<z.infer<typeof createTipPlanSchema>>({
    resolver: zodResolver(createTipPlanSchema),
    defaultValues: {
      name: "",
      description: "",
      oddRange: "",
      price: 0,
      isActive: true,
    },
  });
  
  if(isError){
    toast.error("Failed to create plan. Please try again.", 
    { position: "bottom-right" , className:"bg-red-500 text-white" });
  }

  const onSubmit = async(values:any) => {
      try {
      const res = await createPlan(values).unwrap();
      toast.success("Plan created successfully!", 
        { position: "bottom-right" , className:"bg-green-500 text-white" });
      
      form.reset();
    } catch (err: any) {
      // prefer the caught error first; fallback to mutation error
      const message =
        err?.data?.message || err?.message || "Invalid email or password";
      toast.error(message,
         { position: "bottom-right" , className:"bg-green-500 text-white" });
    }
    
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Plan</DialogTitle>
          <DialogDescription>
            Create a new premium tip plan.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Plan Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan Name</FormLabel>
                  <FormControl>
                    <Input placeholder="VIP Plan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="100"
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

            {/* Odd Range */}
            <FormField
              control={form.control}
              name="oddRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Odd Range</FormLabel>
                  <FormControl>
                    <Input placeholder="1.5 - 3.0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                    placeholder="Describe the plan"
                    className="min-h-[120px] resize-none"
                    {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Active Switch */}
            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel>Active</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className=" data-[state=checked]:bg-[#057857]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            {/* Submit */}
            <Button type="submit" className="w-full bg-[#057857]" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Premium "}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlan;