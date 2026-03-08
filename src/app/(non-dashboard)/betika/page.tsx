"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useGetJackpotByNameQuery } from "@/state/api";
import { InfoIcon } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { PromptFormData, PromptFormSchema } from "@/lib/validations/auth";

const BetikaJackpot 
= () => {
  const { data: jackpotData, isLoading, error } = useGetJackpotByNameQuery("betika");

  const form = useForm<PromptFormData>({
    resolver: zodResolver(PromptFormSchema),
    defaultValues: { phoneNumber: "" },
  });

  const onSubmit = (values: PromptFormData) => {
    console.log("Form submitted:", values);
    // TODO: Trigger M-Pesa payment API here
  };

  const jackpot = jackpotData?.data?.[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="mb-8 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Jackpot Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-xl font-bold text-green-400">Buy Tips</h1>
                    <p className="text-muted-foreground text-xs">Active Tips</p>
                  </div>
                  <div className="bg-green-100 px-2 py-2 rounded-lg">
                    <p className="text-xs text-[#057857] font-bold">SportPesa Jackpot</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground font-semibold">Loading jackpot...</p>
                  </div>
                )}
                {error && !isLoading && (
                  <div className="text-center py-4">
                    <p className="text-sm text-red-600 font-semibold">SportPesa Jackpot is not active</p>
                  </div>
                )}
                {!isLoading && !error && jackpot?.fixtures?.length ? (
                  <div>
                    <p className="text-sm text-gray-600 mb-4 font-semibold">
                      {jackpot.fixtures.length} {jackpot.fixtures.length === 1 ? "fixture" : "fixtures"} available
                    </p>
                    <div className="mb-3">
                      <div className="grid grid-cols-4 gap-2 text-black p-3 font-medium text-sm bg-gray-100 rounded">
                        <div className="text-left">Time</div>
                        <div className="text-center">League</div>
                        <div className="text-center">Fixture</div>
                        <div className="text-center">Date</div>
                      </div>
                      {jackpot.fixtures.map((fixture: any, index: number) => (
                        <div key={index} className="grid grid-cols-4 gap-2 text-sm p-3 border-b">
                          <div className="text-left">
                            {new Date(fixture.matchDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                          <div className="text-center">{fixture.competition}</div>
                          <div className="text-center">{fixture.homeTeam} vs {fixture.awayTeam}</div>
                          <div className="text-center">
                            {new Date(fixture.matchDate).toLocaleDateString([], { day: '2-digit', month: 'short' })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : !isLoading && !error ? (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground font-semibold mb-4">
                      SportPesa Jackpot Tips not available. Check back later!
                    </p>
                  </div>
                ) : null}
                <div className="h-8 w-full border-2 rounded-2xl mt-4">
                  <p className="text-sm font-bold text-center mt-1">2.5+ Odds</p>
                </div>
              </CardContent>
            </Card>

            {/* Info Section */}
            {jackpot?.fixtures?.length && (
              <div className="bg-green-100 rounded-2xl mt-6 p-4">
                <div className="flex items-center px-2 py-2 gap-2">
                  <InfoIcon className="text-[#057857]" />
                  <p className="text-sm text-[#057857]">
                    Enter your M-pesa number below then click "BUY".
                    You will be prompted to enter your M-pesa PIN. Kindly enter your
                    M-pesa PIN to authorize the transaction. Tips are sent instantly via SMS.
                  </p>
                </div>
              </div>
            )}

            {/* Payment Form */}
            {jackpot?.fixtures?.length && (
              <Card>
                <CardHeader>
                  <CardTitle>M-pesa Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>M-pesa Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="0700000000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-[#057857] hover:bg-[#057857]/80 text-white font-bold">
                        Buy Tip
                      </Button>
                    </form>
                  </FormProvider>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BetikaJackpot;
