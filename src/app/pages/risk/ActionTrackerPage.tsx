import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function ActionTrackerPage() {
  const actions = [
    { action: "Patch critical vulnerabilities", owner: "Security Team", dueDate: "2026-02-02", status: "In Progress" },
    { action: "Implement MFA for all users", owner: "IT Admin", dueDate: "2026-02-10", status: "Pending" },
    { action: "Conduct security training", owner: "HR", dueDate: "2026-02-15", status: "Not Started" },
  ];

  return (
    <PageTemplate title="Action Tracker" description="Track risk mitigation actions and their progress.">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {actions.map((action, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{action.action}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{action.owner}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{action.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><Badge variant="outline">{action.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageTemplate>
  );
}
