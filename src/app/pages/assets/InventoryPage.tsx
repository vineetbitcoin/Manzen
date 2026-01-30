import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function InventoryPage() {
  const assets = [
    { name: "Web Application Server", type: "Server", owner: "IT Ops", status: "Active", lastScan: "2026-01-28" },
    { name: "Customer Database", type: "Database", owner: "Data Team", status: "Active", lastScan: "2026-01-29" },
    { name: "API Gateway", type: "Application", owner: "Dev Team", status: "Active", lastScan: "2026-01-27" },
  ];

  return (
    <PageTemplate
      title="Asset Inventory"
      description="Track all IT assets and their security status."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Add Asset</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Scan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assets.map((asset, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{asset.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{asset.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{asset.owner}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><Badge>{asset.status}</Badge></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.lastScan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
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
