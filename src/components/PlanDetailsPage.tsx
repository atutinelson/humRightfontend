"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useGetPlanPredictionsTodayQuery, useGetplansQuery, useInitiatePaymentMutation } from "@/state/api";
import { useForm, FormProvider } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon } from "lucide-react";
import { toast } from "sonner";
import { PromptFormData, PromptFormSchema } from "@/lib/validations/auth";

interface PremiumPlanPageProps {
  plan: string;
}

export default function PremiumPlanPage({ plan }: PremiumPlanPageProps) {
  const [activeTab, setActiveTab] = useState<"today" | "previous">("today");

  const { data: plansData, isLoading: plansLoading } = useGetplansQuery();
  const planData = plansData?.data?.find(p => {
    const nameLower = p.name.toLowerCase();
    const slug = nameLower.replace(/\s+/g, "-");
    return nameLower === plan.toLowerCase() || slug === plan.toLowerCase();
  });

  const planId = planData?.id;
  const { data: predictionsData, isLoading } = useGetPlanPredictionsTodayQuery(planId!, { skip: !planId });
  const hasPredictions = predictionsData?.count && predictionsData.count > 0;

  const [initiatePayment, {isLoading: isInitiatingPayment, isError: isInitiationError}] = useInitiatePaymentMutation();

  const form = useForm<PromptFormData>({
    resolver: zodResolver(PromptFormSchema),
    defaultValues: { 
      phoneNumber: "" ,
      predictionId: planId},
  });

 const submitPayment = async (values: PromptFormData) => {
  try {
    await initiatePayment(values).unwrap();
    toast.success("Payment initiated! Check your phone to complete the transaction.");
  } catch (err: any) {
    let message = "M-Pesa Push Failed. Try again.";

    // If using RTK Query, unwrap returns the "originalError" in case of failure
    if (err?.data) {
      message = err.data?.message || err.data?.error || message;
    } 
    // Fallback for Axios error structure
    else if (err?.status === 400 && err?.error) {
      message = err.error;
    } 
    else if (err?.message) {
      message = err.message;
    }

    toast.error(message, {position: "bottom-right"});
    console.log("Payment initiation failed:", err);
  }
};

  if (plansLoading) {
    return <div className="py-20 text-center text-lg">Loading plan details...</div>;
  }

  if (!planData) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600">Plan not found</h1>
        <p className="text-gray-600 mt-4">The plan "{plan}" does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="mb-8 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Plan Card */}
            <Card className="shadow-none border-2">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-xl font-bold text-green-400">Buy Tips</h1>
                    <p className="text-muted-foreground text-xs uppercase">Active Tips</p>
                  </div>
                  <div className="bg-green-100 px-2 py-2 rounded-lg">
                    <p className="text-xs text-[#057857] font-bold">{planData.name}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isLoading && !hasPredictions && (
                  <div className="text-center py-2">
                    <p className="text-xs font-semibold text-muted-foreground mb-4">
                      {planData.name} Plan Tips not available. Check back later!
                    </p>
                  </div>
                )}

                {isLoading && <div className="text-center py-8 text-gray-600">Loading tips...</div>}

                {hasPredictions && predictionsData?.data && (
                  <div>
                    <p className="text-sm text-gray-600 mb-4 font-semibold">
                      {predictionsData.count} {predictionsData.count === 1 ? "tip" : "tips"} available today
                    </p>

                    {/* Fixtures Table Header */}
                    {predictionsData.data.some(p => p.fixtures?.length) && (
                      <div className="mb-3 grid grid-cols-4 gap-2 text-black p-3 font-medium text-sm bg-gray-100 rounded">
                        <div className="text-left">Time</div>
                        <div className="text-center">League</div>
                        <div className="text-center">Fixture</div>
                        <div className="text-center">Date</div>
                      </div>
                    )}

                    {/* Fixture Rows */}
                    {predictionsData.data.map((prediction: any, idx: number) =>
                      prediction.fixtures?.map((fixture: any, index: number) => (
                        <div key={index} className="grid grid-cols-4 gap-2 text-sm p-3 border-b">
                          <div className="text-left">
                            {new Date(fixture.matchDate).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                          <div className="text-center">{fixture.competition}</div>
                          <div className="text-center">
                            {fixture.homeTeam} vs {fixture.awayTeam}
                          </div>
                          <div className="text-center">
                            {new Date(fixture.matchDate).toLocaleDateString([], {
                              day: "2-digit",
                              month: "short",
                            })}
                          </div>
                        </div>
                      ))
                    )}

                    <p className="text-xs text-gray-500">
                      Tip Date: {new Date(predictionsData.tipDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Info Section */}
            {hasPredictions && (
              <div className="bg-green-100 rounded-2xl mt-6 p-4 flex items-start gap-2">
                <InfoIcon className="text-[#057857] mt-1" />
                <p className="text-sm text-[#057857]">
                  Enter your M-pesa number below then click "BUY". You will be prompted to enter your M-pesa PIN. Tips are sent instantly via SMS.
                </p>
              </div>
            )}

            {/* Payment Form */}
            {hasPredictions && (
              <Card>
                <CardHeader>
                  <CardTitle>M-pesa Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitPayment)} className="space-y-4">
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

                      <FormField
                       control={form.control}
                        name="predictionId"
                        render={({ field }) => <input type="hidden" value={planId} {...field} />}
                        />
                      <Button
                        type="submit"
                        className="w-full bg-[#057857] hover:bg-[#057857]/80 text-white font-bold"
                      >
                       {isInitiatingPayment ? "Processing..." : "Buy Tip"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}