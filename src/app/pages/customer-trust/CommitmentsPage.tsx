import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Plus } from "lucide-react";

export function CommitmentsPage() {
  const commitments = [
    { title: "Data Encryption at Rest", category: "Security", status: "Active" },
    { title: "GDPR Compliance", category: "Privacy", status: "Active" },
    { title: "99.9% Uptime SLA", category: "Availability", status: "Active" },
    { title: "24/7 Security Monitoring", category: "Security", status: "Active" },
  ];

  return (
    <PageTemplate
      title="Commitments"
      description="Manage security and compliance commitments to customers."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Add Commitment</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commitment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {commitments.map((commitment, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{commitment.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{commitment.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{commitment.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
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
