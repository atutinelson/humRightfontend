"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

interface WinningTip {
  id: string;
  fixture: string;
  odd: number;
  result: string;
  date: string;
  plan: "Silver" | "Gold" | "Platinum";
}

const MOCK_TIPS: Record<string, WinningTip[]> = {
  Silver: [
    {
      id: "1",
      fixture: "Manchester United vs Liverpool",
      odd: 3.5,
      result: "Won",
      date: "2026-03-05",
      plan: "Silver",
    },
    {
      id: "2",
      fixture: "Chelsea vs Arsenal",
      odd: 2.8,
      result: "Won",
      date: "2026-03-05",
      plan: "Silver",
    },
    {
      id: "3",
      fixture: "Barcelona vs Real Madrid",
      odd: 4.2,
      result: "Won",
      date: "2026-03-04",
      plan: "Silver",
    },
  ],
  Gold: [
    {
      id: "4",
      fixture: "Bayern Munich vs Borussia Dortmund",
      odd: 5.5,
      result: "Won",
      date: "2026-03-05",
      plan: "Gold",
    },
    {
      id: "5",
      fixture: "PSG vs Monaco",
      odd: 6.2,
      result: "Won",
      date: "2026-03-05",
      plan: "Gold",
    },
    {
      id: "6",
      fixture: "Juventus vs AS Roma",
      odd: 5.8,
      result: "Won",
      date: "2026-03-04",
      plan: "Gold",
    },
  ],
  Platinum: [
    {
      id: "7",
      fixture: "Manchester City vs Tottenham",
      odd: 8.5,
      result: "Won",
      date: "2026-03-05",
      plan: "Platinum",
    },
    {
      id: "8",
      fixture: "Napoli vs Inter Milan",
      odd: 9.2,
      result: "Won",
      date: "2026-03-05",
      plan: "Platinum",
    },
    {
      id: "9",
      fixture: "Atletico Madrid vs Sevilla",
      odd: 7.8,
      result: "Won",
      date: "2026-03-04",
      plan: "Platinum",
    },
  ],
};

const PLAN_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Silver: { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-300" },
  Gold: { bg: "bg-yellow-100", text: "text-yellow-800", border: "border-yellow-300" },
  Platinum: {
    bg: "bg-purple-100",
    text: "text-purple-800",
    border: "border-purple-300",
  },
};

const RecentlyWonTips = () => {
  const [selectedPlan, setSelectedPlan] = useState<"Silver" | "Gold" | "Platinum">(
    "Silver"
  );

  const tips = MOCK_TIPS[selectedPlan];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Card */}
        <Card className="mb-8 border-2 border-[#057857]/20">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="w-6 h-6 text-[#f49e0b]" />
              <CardTitle className="text-3xl md:text-4xl text-[#057857]">
                Recently Won Premium Tips
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              Our latest winning predictions across all plans
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Plan Tabs */}
        <motion.div
          className="flex gap-3 justify-center mb-8 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {(Object.keys(MOCK_TIPS) as Array<"Silver" | "Gold" | "Platinum">).map(
            (plan) => (
              <Button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                variant={selectedPlan === plan ? "default" : "outline"}
                className={`rounded-lg font-semibold transition-all duration-300 ${
                  selectedPlan === plan
                    ? `${PLAN_COLORS[plan].bg} ${PLAN_COLORS[plan].text}`
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {plan} Plan
              </Button>
            )
          )}
        </motion.div>

        {/* Tips Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlan}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {tips.map((tip, idx) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card
                  className={`${PLAN_COLORS[tip.plan].bg} border-2 ${PLAN_COLORS[tip.plan].border} hover:shadow-lg transition-shadow duration-300`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-600">
                          {new Date(tip.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <CardTitle className="text-base">{tip.fixture}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-600">Odd</p>
                        <p className="text-2xl font-bold text-[#057857]">{tip.odd}</p>
                      </div>
                      <div className="text-center">
                        <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {tip.result}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 pt-2 border-t border-gray-300">
                      {tip.plan} Plan
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="border-[#057857]/20 text-center">
            <CardHeader>
              <CardTitle className="text-xl text-[#057857]">
                Want to see more winning predictions?
              </CardTitle>
              <CardDescription className="text-base">
                Join our premium plans today and get access to our best tips.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/${selectedPlan.toLowerCase()}`}>
                <Button className="bg-[#057857] hover:bg-[#057857]/90 text-white">
                  View All Plans
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentlyWonTips;
