import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function FrameworksPage() {
  const frameworks = [
    { id: 1, name: "SOC 2 Type II", status: "Active", progress: 94, controls: 156, lastReview: "2026-01-25" },
    { id: 2, name: "ISO 27001:2022", status: "Certified", progress: 100, controls: 114, lastReview: "2026-01-20" },
    { id: 3, name: "GDPR", status: "Active", progress: 88, controls: 67, lastReview: "2026-01-28" },
    { id: 4, name: "HIPAA", status: "In Progress", progress: 72, controls: 89, lastReview: "2026-01-15" },
  ];

  return (
    <PageTemplate
      title="Compliance Frameworks"
      description="Manage and track compliance with various security and regulatory frameworks."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Add Framework</Button>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {frameworks.map((framework) => (
          <Card key={framework.id} className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge variant={framework.status === 'Certified' ? 'default' : 'outline'}>
                {framework.status}
              </Badge>
              <span className="text-xs text-gray-500">{framework.progress}%</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{framework.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${framework.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">{framework.controls} Controls</p>
            <p className="text-xs text-gray-500 mt-1">Last review: {framework.lastReview}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Framework Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Framework</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Controls</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Review</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {frameworks.map((framework) => (
                <tr key={framework.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{framework.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={framework.status === 'Certified' ? 'default' : 'outline'}>
                      {framework.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{framework.progress}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{framework.controls}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{framework.lastReview}</td>
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
