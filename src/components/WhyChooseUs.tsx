"use client";

import { Check, TrendingUp, MessageSquare, BookOpen, Zap } from "lucide-react";
import { motion } from "motion/react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const reasons: Reason[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Premium Football Tips",
      description:
        "Get daily 3+ odds, 5+ odds, and 15+ odds betting tips with guaranteed odds ranging from 3-15x returns on your investment.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Jackpot Predictions",
      description:
        "Expert SportPesa Mega Jackpot and Betika Midweek Jackpot predictions with detailed analysis to maximize your chances of winning millions.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Betting Strategies & Education",
      description:
        "Learn winning betting strategies, bankroll management, and market analysis through our comprehensive betting blog and educational resources.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Instant SMS Delivery",
      description:
        "Get your purchased tips delivered instantly via SMS to your phone. Never miss a winning opportunity with our fast and reliable tip delivery system.",
    },
  ];

  const highlights = [
    { label: "90%+", value: "Accuracy Rate" },
    { label: "40+", value: "Leagues Covered" },
    { label: "Seasoned", value: "Expert Team" },
    { label: "Data-Driven", value: "Analysis" },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#057857] mb-4">
            Why Choose Us
          </h1>
          <p className="text-lg text-gray-600">
            Your ultimate destination for accurate football betting predictions
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-[#057857]/10 rounded-lg p-4 text-center border border-[#057857]/20"
            >
              <p className="text-2xl font-bold text-[#057857]">{highlight.label}</p>
              <p className="text-sm text-gray-600 mt-1">{highlight.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-[#057857]/10 rounded-lg text-[#057857]">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center bg-gradient-to-r from-[#057857]/10 to-[#f49e0b]/10 rounded-xl p-8 border border-[#057857]/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands of successful bettors who trust our proven track record
            and expertise. Experience the difference that data-driven analysis and
            consistent accuracy can bring to your betting strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
