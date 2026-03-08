"use client";

import { useState } from "react";
import Header from "./components/Header";
import { useGetFreeBetsQuery,
    useGetplansQuery, 
    useGetPredictionsQuery, 
    usePostCreatePlanMutation } from "@/state/api";
import StatCard from "./components/statCard";
import { ListChecks, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddPlan from "./components/AddPlan";
import AddFixture from "./components/addFixture";
import AddPrediction from "./components/addPrediction";
import AddJackpot from "./components/AddJackpot";

const AdminDashboard = () => {
  const [selectedDay, setSelectedDay] = useState<string>("today");
  const { data: freeTips, isLoading, isError } = useGetPredictionsQuery();
  const { data: plans, isLoading: planLoading, isError: planErrors } = useGetplansQuery();
  

  return (
    <div className="flex min-h-screen">
      {/* Sidebar is fixed in Shadcn, so we just leave space for it */}
      <div className="flex-1  p-8"> 
        {/* ml-64 assumes your sidebar is 16rem / 64 width */}
        <div className="mb-8 w-full flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-display font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Overview of Tips management</p>
          </div>
          <div className="flex gap-4">
            <AddFixture>
            <Button className="bg-[#057857]">
                <div className="flex gap-2 items-center">
                    <Plus className="w-4 h-4"/>
                    <p>Add Fixture</p>
                </div>
            </Button>
            </AddFixture>
             <AddPrediction  plans={plans?.data}>
             <Button className="bg-[#057857]">
                <div className="flex gap-2 items-center">
                    <Plus className="w-4 h-4"/>
                    <p>Add Prediction</p>
                </div>
              </Button>
            </AddPrediction>
            <AddPlan>
                <Button className="bg-[#057857]">
                <div className="flex gap-2 items-center">
                    <Plus className="w-4 h-4"/>
                    <p>Add Premium</p>
                </div>
               </Button>
            </AddPlan>
            <AddJackpot>
                <Button className="bg-[#057857]">
                <div className="flex gap-2 items-center">
                    <Plus className="w-4 h-4"/>
                    <p>Add Jackpot</p>
                </div>
               </Button>
            </AddJackpot>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Free Tips" value={freeTips?.data?.length ?? 0} icon={ListChecks} /> 
          <StatCard title="Premium Tips" value={plans?.data?.length ?? 0} icon={Star} variant="warning" />
          <StatCard title="Total Users" value={0} icon={Star} variant="warning" />
        </div>

        {/* Recent Free Tips Table */}
        <div className="mt-10 glass-card rounded-xl p-6 z-10 border-2 w-full">
          <h2 className="text-xl font-display font-semibold mb-4">Recent Free Tips</h2>
          {!freeTips || Object.keys(freeTips.data).length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No free tips added yet. Go to Free Tips to add some.
            </p>
          ) : (
            <div className="space-y-8">
              {Object.entries(freeTips.data as Record<string, any[]>).map(([date, tips]) => (
                <div key={date}>
                  <h3 className="text-lg font-semibold mb-3">
                    {new Date(date).toDateString()}
                  </h3>

                  <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                          <th className="text-left py-3 px-4">Time</th>
                          <th className="text-left py-3 px-4">League</th>
                          <th className="text-left py-3 px-4">Fixture</th>
                          <th className="text-left py-3 px-4">Tip</th>
                          <th className="text-left py-3 px-4">Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(tips as any[]).slice(0, 5).map((tip: any) => (
                          <tr key={tip.id} className="border-b border-border/50 hover:bg-secondary/30 transition">
                            <td className="py-3 px-4">
                              {new Date(tip.tipDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </td>
                            <td className="py-3 px-4">{tip.fixture?.competition}</td>
                            <td className="py-3 px-4">{tip.fixture?.homeTeam} vs {tip.fixture?.awayTeam}</td>
                            <td className="py-3 px-4 font-medium text-primary">{tip.tipText}</td>
                            <td className="py-3 px-4">{tip.result ?? "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;