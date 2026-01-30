import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function PoliciesPage() {
  const policies = [
    { id: 1, name: "Information Security Policy", version: "2.1", status: "Published", lastUpdated: "2026-01-20" },
    { id: 2, name: "Data Retention Policy", version: "1.3", status: "Draft", lastUpdated: "2026-01-28" },
    { id: 3, name: "Acceptable Use Policy", version: "3.0", status: "Published", lastUpdated: "2026-01-15" },
    { id: 4, name: "Incident Response Policy", version: "1.8", status: "Review", lastUpdated: "2026-01-25" },
  ];

  return (
    <PageTemplate
      title="Policies"
      description="Manage security policies and documentation."
      actions={<Button><Plus className="w-4 h-4 mr-2" />New Policy</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {policies.map((policy) => (
                <tr key={policy.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{policy.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{policy.version}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={policy.status === 'Published' ? 'default' : 'secondary'}>
                      {policy.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.lastUpdated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 space-x-3">
                    <button className="hover:underline">View</button>
                    <button className="hover:underline">Edit</button>
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
