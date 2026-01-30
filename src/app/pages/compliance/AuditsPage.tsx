import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function AuditsPage() {
  const audits = [
    { id: 1, name: "SOC 2 Type II Annual Audit", auditor: "Deloitte", startDate: "2026-01-15", status: "In Progress" },
    { id: 2, name: "ISO 27001 Surveillance Audit", auditor: "BSI", startDate: "2026-01-10", status: "Completed" },
    { id: 3, name: "Internal Security Audit Q4", auditor: "Internal", startDate: "2026-01-20", status: "Scheduled" },
  ];

  return (
    <PageTemplate
      title="Audits"
      description="Track and manage security and compliance audits."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Schedule Audit</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audit Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auditor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {audits.map((audit) => (
                <tr key={audit.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{audit.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{audit.auditor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{audit.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={audit.status === 'Completed' ? 'default' : 'outline'}>
                      {audit.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 space-x-3">
                    <button className="hover:underline">View</button>
                    <button className="hover:underline">Report</button>
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
