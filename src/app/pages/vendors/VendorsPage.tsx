import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function VendorsPage() {
  const vendors = [
    { name: "AWS", category: "Cloud Provider", riskLevel: "Low", lastReview: "2026-01-15", status: "Approved" },
    { name: "Salesforce", category: "CRM", riskLevel: "Low", lastReview: "2026-01-20", status: "Approved" },
    { name: "DataCorp", category: "Analytics", riskLevel: "Medium", lastReview: "2026-01-10", status: "Review" },
  ];

  return (
    <PageTemplate
      title="Vendors"
      description="Manage third-party vendors and their security assessments."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Add Vendor</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Review</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vendors.map((vendor, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{vendor.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vendor.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={vendor.riskLevel === 'Low' ? 'default' : 'secondary'}>{vendor.riskLevel}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vendor.lastReview}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={vendor.status === 'Approved' ? 'default' : 'outline'}>{vendor.status}</Badge>
                  </td>
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
