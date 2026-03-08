"use client"

import {
  CheckCircle2,
  ChessQueen,
  Flashlight,
  FlashlightIcon,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useGetplansQuery } from "@/state/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Plan {
  id: string | number;
  name: string;
  price: number;
  oddRange: string;
  description?: string;
}

const PRIMARY = "#057857";

const icons = [Zap, Flashlight, FlashlightIcon, Star, ChessQueen];
const iconBg = ["bg-cyan-100", "bg-pink-100", "bg-yellow-100", "bg-green-100", "bg-purple-100"];

// Map plan names to routes
const getPlanRoute = (planName: string): string => {
  const routeMap: Record<string, string> = {
    silver: "/silver",
    gold: "/gold",
    platinum: "/platinum",
    "Silver Plan": "/silver",
    "Gold Plan": "/gold",
    "Platinum Plan": "/platinum",
  };
  return routeMap[planName.toLowerCase()] || "/";
};

interface PlanCardProps {
  plan: Plan;
  index: number;
}

const PlanCard = ({ plan, index }: PlanCardProps) => {
  const Icon = icons[index % icons.length];
  const bgClass = iconBg[index % iconBg.length];
  const slug = plan.name.toLowerCase().replace(/\s+/g, '-');
  const isMostPopular = index === 2; // third card
  const router = useRouter();
  return (
    <motion.div
      key={plan.id}
      className={`relative w-full rounded-xl shadow-lg p-5 mt-5 transition-transform duration-300 bg-white ${
        isMostPopular ? "border-2 border-yellow-300" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isMostPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold mb-1">{plan.oddRange}</h2>
          <p className="text-gray-500 mb-2">Tips with {plan.oddRange} odds</p>
        </div>
        <div className={`${bgClass} p-2.5 rounded-xl`}> 
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="text-3xl font-bold mb-4">
        KES {plan.price}
        <span className="text-base font-normal">/month</span>
      </div>

      <ul className="mb-4 space-y-2">
        <li className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5" style={{ color: PRIMARY }} />
          <p>Daily {plan.oddRange} prediction</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5" style={{ color: PRIMARY }} />
          <p>Priority WhatsApp support</p>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5" style={{ color: PRIMARY }} />
          <p className="text-card-foreground text-[15px]">Early access to tips</p>
        </li>
      </ul>
      
      <Link href={getPlanRoute(plan.name)} className="block w-full" onSelect={()=>router.push(`/${slug}`)}>
        <Button 
         className="w-full bg-[#f49e0b] text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-colors">
          Subscribe for KES {plan.price}
        </Button>
      </Link>
    </motion.div>
  );
};

const OtherTips = () => {
  const { data: plans, isLoading, isError } = useGetplansQuery();

  if (isLoading) {
    return (
      <section className="py-12 md:py-20 bg-[#057857]/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg">Loading plans...</p>
        </div>
      </section>
    );
  }

  if (isError || !plans?.data?.length) {
    return (
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-red-600">Failed to load plans. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 z-10 max-w-4xl text-center flex flex-col items-center gap-5">
        <div className="bg-[#f49e0b] w-fit px-4 py-2 rounded-4xl mx-auto flex gap-3 items-center">
          <ChessQueen />
          <p className="text-smd font-bold text-left">Premium Subscription</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center">Choose Your Winning Tier</h1>
          <p className="text-2xl mt-4">
            Unlock exclusive, high-accuracy betting tips tailored to your preferences
            odds and risk level
          </p>
        </div>

        {plans.data.map((plan: Plan, idx: number) => (
          <PlanCard plan={plan} index={idx} key={plan.id} />
        ))}
      </div>
    </section>
  );
};

export default OtherTips;