import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "destructive";
}

const variantClasses = {
  default: "text-primary stat-glow",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
};

const StatCard = ({ title, value, icon: Icon, variant = "default" }: StatCardProps) => {
  return (
    <div className={`glass-card rounded-xl p-6 border-2 ${variantClasses[variant]}`}>
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-6 h-6 opacity-70 text-[#057857]" />
      </div>
      <p className="text-3xl font-display font-bold">{value}</p>
      <p className="text-sm  mt-1 text-[#057857]">{title}</p>
    </div>
  );
};

export default StatCard;