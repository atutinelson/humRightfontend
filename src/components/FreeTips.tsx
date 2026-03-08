"use client";

import { use, useState } from "react";
import { Button } from "./ui/button";
import { useGetFreeBetsQuery } from "@/state/api";
import { Prediction } from "@/types/prismaTypes";

const FreeTips=()=>{
    const [selectedDay, setSelectedDay] = useState<string>("yesterday");
    const {data: freeTips, isLoading, isError} = useGetFreeBetsQuery(selectedDay);

    return (
    <section className="py-12 md:py-15 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#057857] text-center mb-6">Free Guaranteed Tips</h2>
                <div className="flex gap-4 justify-center mb-6">
                     <Button className={`${selectedDay === "yesterday" ? "bg-[#057857] text-white" : "hover:bg-black hover:text-white text-black"}`} variant={"outline"} onClick={()=>setSelectedDay("yesterday")}>Yesterday</Button>
                     <Button className={`${selectedDay === "today" ? "bg-[#057857] text-white" : "hover:bg-black hover:text-white text-black"}`} variant={"outline"} onClick={()=>setSelectedDay("today")}>Today</Button>
                     <Button className={`${selectedDay === "tomorrow" ? "bg-[#057857] text-white" : "hover:bg-black hover:text-white text-black"}`} variant={"outline"} onClick={()=>setSelectedDay("tomorrow")}>Tomorrow</Button>
                </div>
                {/* Custom Table Implementation */}
                <div className="w-full">
                    {/* Table Header */}
                    <div className="grid grid-cols-4 gap-2 bg-[#057857] text-white p-3 font-medium text-sm">
                        <div className="text-left">Time</div>
                        <div className="text-center">League</div>
                        <div className="text-center">Fixture</div>
                        <div className="text-left">Tip</div>
                    </div>

                    {/* Table Body */}
                    <div className="overflow-hidden">
                        {freeTips?.data.length === 0 || isError || isLoading ? (
                            <div className="p-8 text-center text-gray-500">
                                {isLoading ? "Loading tips..." : "No tips available for this day."}
                            </div>
                        ) : (
                            freeTips?.data.map((tip: Prediction, index: number) => (
                                <div
                                    key={tip.id}
                                    className={`grid grid-cols-4 gap-2 p-3 text-sm border-b border-gray-100 last:border-b-0 ${
                                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                    }`}
                                >
                                    <div className="text-left text-xs">
                                        {new Date(tip.tipDate).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </div>
                                    <div className="text-center text-xs">
                                        {tip.fixture.competition}
                                    </div>
                                    <div className="text-center text-xs">
                                        {tip.fixture.homeTeam} vs {tip.fixture.awayTeam}
                                    </div>
                                    <div className="text-left text-xs">
                                        {tip.fixture.fixtureTip ?? "0"}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default FreeTips;


{/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-400">Free Guaranteed Tips</h2>
            <div className="flex gap-4 justify-center">
                <Button className="hover:bg-black hover:text-white text-black" variant={"outline"}>Yesterday</Button>
                <Button className="hover:bg-black hover:text-white text-black" variant={"outline"}>Today</Button>
                <Button className="hover:bg-black hover:text-white text-black" variant={"outline"}>Tommorrow</Button>
            </div> */}