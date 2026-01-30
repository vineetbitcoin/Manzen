import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { TrendingUp, Users, Shield, Activity } from "lucide-react";

export function CustomerTrustOverviewPage() {
  const stats = [
    { label: "Active Customers", value: "247", icon: Users, color: "text-blue-600" },
    { label: "Trust Score", value: "96%", icon: Shield, color: "text-green-600" },
    { label: "Portal Visits", value: "1,240", icon: Activity, color: "text-purple-600" },
    { label: "Shared Documents", value: "342", icon: TrendingUp, color: "text-orange-600" },
  ];

  return (
    <PageTemplate
      title="Customer Trust Overview"
      description="Monitor customer trust metrics and engagement."
    >
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
