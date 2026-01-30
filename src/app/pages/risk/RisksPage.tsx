import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function RisksPage() {
  const risks = [
    { id: "R-001", title: "Unpatched Critical Vulnerabilities", severity: "Critical", status: "Open", owner: "Security Team" },
    { id: "R-002", title: "Insufficient Access Controls", severity: "High", status: "In Progress", owner: "IT Admin" },
    { id: "R-003", title: "Lack of Data Encryption", severity: "High", status: "Mitigated", owner: "Data Team" },
    { id: "R-004", title: "Employee Security Training Gap", severity: "Medium", status: "Open", owner: "HR" },
  ];

  return (
    <PageTemplate
      title="Risks"
      description="Manage and track identified security risks."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Add Risk</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {risks.map((risk) => (
                <tr key={risk.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{risk.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{risk.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={risk.severity === 'Critical' || risk.severity === 'High' ? 'destructive' : 'secondary'}>
                      {risk.severity}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"><Badge variant="outline">{risk.status}</Badge></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{risk.owner}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 space-x-3">
                    <button className="hover:underline">View</button>
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
