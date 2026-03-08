import { TrendingUp, Target, Trophy } from "lucide-react";

interface MetricCard {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

const TrackRecord = () => {
  const metrics: MetricCard[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "78%",
      label: "Win Rate",
      description: "Consistent accuracy across all predictions",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "+245%",
      label: "Average ROI",
      description: "Return on investment for members",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "12.5K+",
      label: "Wins This Month",
      description: "Verified successful predictions",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#057857]/5">
      <div className="container mx-auto px-4 z-10 max-w-4xl text-center flex flex-col items-center gap-8 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#057857]">Our Performance</h1>
        <p className="text-lg text-gray-600">Track record that speaks for itself</p>
      </div>

      <div className="container mx-auto px-4 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-[#057857]/10 flex flex-col items-center text-center space-y-4"
          >
            <div className="p-3 bg-[#057857]/10 rounded-lg text-[#057857]">
              {metric.icon}
            </div>
            <h2 className="text-4xl font-bold text-[#057857]">{metric.value}</h2>
            <p className="font-semibold text-gray-800">{metric.label}</p>
            <p className="text-sm text-gray-600">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackRecord;