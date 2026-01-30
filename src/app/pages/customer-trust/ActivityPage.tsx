import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";

export function ActivityPage() {
  const activities = [
    { customer: "Acme Corp", action: "Viewed SOC 2 Report", time: "2 hours ago" },
    { customer: "TechStart Inc", action: "Downloaded Security Policy", time: "5 hours ago" },
    { customer: "Global Systems", action: "Accessed Trust Center", time: "1 day ago" },
    { customer: "Acme Corp", action: "Submitted questionnaire response", time: "2 days ago" },
  ];

  return (
    <PageTemplate
      title="Customer Activity"
      description="Monitor customer engagement with your trust portal."
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities.map((activity, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{activity.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{activity.action}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageTemplate>
  );
}
