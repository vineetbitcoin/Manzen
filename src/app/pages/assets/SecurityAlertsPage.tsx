import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function SecurityAlertsPage() {
  const alerts = [
    { alert: "Suspicious login attempt detected", severity: "High", source: "Auth System", time: "10 min ago" },
    { alert: "Unauthorized API access blocked", severity: "Critical", source: "API Gateway", time: "1 hour ago" },
    { alert: "Potential data exfiltration attempt", severity: "Critical", source: "DLP System", time: "2 hours ago" },
  ];

  return (
    <PageTemplate title="Security Alerts" description="Monitor real-time security alerts and incidents.">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alert</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {alerts.map((alert, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{alert.alert}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="destructive">{alert.severity}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{alert.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    <button className="hover:underline">Investigate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageTemplate>
  );
}
