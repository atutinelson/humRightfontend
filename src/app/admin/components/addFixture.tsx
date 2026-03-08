
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
import { Button } from "@/components/ui/button";
import { createFixtureSchema } from "@/lib/validations/auth";
import { usePostCreateFixtureMutation } from "@/state/api";
import { toast } from "sonner";

const AddFixture = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const [createFixture, { isLoading }] = usePostCreateFixtureMutation();
  

  const form = useForm<z.infer<typeof createFixtureSchema>>({
    resolver: zodResolver(createFixtureSchema),
    defaultValues: {
      matchDate: new Date(), // Current date/time in YYYY-MM-DDTHH:MM format
      homeTeam: "",
      awayTeam: "",
      competition: "",
      fixtureTip: "",
      result: "",
      status: "SCHEDULED",
    },
  });

  const onSubmit = async (values: z.infer<typeof createFixtureSchema>) => {
    try {
      // Convert matchDate to ISO string for the API
      const dataToSend = {
        ...values,
        matchDate: new Date(values.matchDate).toISOString(),
      };

      await createFixture(dataToSend).unwrap();
      toast.success("Fixture created successfully!", 
        { position: "bottom-right" , className:"bg-green-500 text-white" });
      form.reset();
    //   setOpen(false);
    //   // Optionally redirect or refresh
    //   window.location.reload(); // Simple refresh for now
    } catch (err: any) {
      console.error("Failed to create fixture:", err);
      const message = err?.data?.error || err?.message || "Failed to create fixture";
      toast.error(message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Fixture</DialogTitle>
          <DialogDescription>
            Create a new match fixture.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Match Date */}
            <FormField
              control={form.control}
              name="matchDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Match Date</FormLabel>
                  <FormControl>
                    <Input
                      type="datetime-local"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Home Team */}
            <FormField
              control={form.control}
              name="homeTeam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Team</FormLabel>
                  <FormControl>
                    <Input placeholder="Manchester United" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Away Team */}
            <FormField
              control={form.control}
              name="awayTeam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Away Team</FormLabel>
                  <FormControl>
                    <Input placeholder="Chelsea" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Competition */}
            <FormField
              control={form.control}
              name="competition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Competition</FormLabel>
                  <FormControl>
                    <Input placeholder="Premier League" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           {/* fixture tips */}
            <FormField
              control={form.control}
              name="fixtureTip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fixture Tip</FormLabel>
                  <FormControl>
                    <Input placeholder="over 1.5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Result (Optional) */}
            <FormField
              control={form.control}
              name="result"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Result (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="2-1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full bg-[#057857]" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Fixture"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFixture;


// "use client"

// import { Button } from "@/components/ui/button"
// import { toast } from "sonner"

// export function SonnerPosition() {
//   return (
//     <div className="flex flex-wrap justify-center gap-2">
//       <Button
//         variant="outline"
//         onClick={() =>
//           toast("Event has been created", { position: "top-left" })
//         }
//       >
//         Top Left
//       </Button>
//       <Button
//         variant="outline"
//         onClick={() =>
//           toast("Event has been created", { position: "top-center" })
//         }
//       >
//         Top Center
//       </Button>
//       <Button
//         variant="outline"
//         onClick={() =>
//           toast("Event has been created", { position: "top-right" })
//         }
//       >
//         Top Right
//       </Button>
//       <Button
//         variant="outline"
//         onClick={() =>
//           toast("Event has been created", { position: "bottom-left" })
//         }
//       >
//         Bottom Left
//       </Button>
//       <Button
//         variant="outline"
//         onClick={() =>
//           toast("Event has been created", { position: "bottom-center" })
//         }
//       >
//         Bottom Center
//       </Button>
//       <Button
//         variant="outline"
//         onClick={() =>
//           toast("Event has been created", { position: "bottom-right" })
//         }
//       >
//         Bottom Right
//       </Button>
//     </div>
//   )
// }
