import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function AccountsPage() {
  const accounts = [
    { name: "Acme Corporation", status: "Active", tier: "Enterprise", contact: "john@acme.com", since: "2024-03-15" },
    { name: "TechStart Inc", status: "Active", tier: "Business", contact: "sarah@techstart.com", since: "2025-01-10" },
    { name: "Global Systems", status: "Pending", tier: "Enterprise", contact: "mike@globalsys.com", since: "2026-01-25" },
  ];

  return (
    <PageTemplate
      title="Customer Accounts"
      description="Manage customer accounts and their trust portal access."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Add Account</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Since</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {accounts.map((account, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{account.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={account.status === 'Active' ? 'default' : 'secondary'}>{account.status}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{account.tier}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{account.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.since}</td>
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
