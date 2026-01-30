import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { AlertTriangle, TrendingUp, CheckCircle, Clock } from "lucide-react";

export function RiskOverviewPage() {
  const stats = [
    { label: "Total Risks", value: "51", icon: AlertTriangle, color: "text-red-600" },
    { label: "Critical Risks", value: "2", icon: AlertTriangle, color: "text-red-600" },
    { label: "Mitigated", value: "28", icon: CheckCircle, color: "text-green-600" },
    { label: "In Progress", value: "15", icon: Clock, color: "text-orange-600" },
  ];

  return (
    <PageTemplate title="Risk Overview" description="Monitor your organization's risk posture.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          );
        })}
      </div>
    </PageTemplate>
  );
}
