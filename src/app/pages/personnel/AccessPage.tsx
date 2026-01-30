import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function AccessPage() {
  const accesses = [
    { user: "John Doe", resource: "Production Database", level: "Admin", granted: "2025-01-15", expires: "2027-01-15" },
    { user: "Jane Smith", resource: "AWS Console", level: "Developer", granted: "2025-06-01", expires: "2026-06-01" },
    { user: "Bob Wilson", resource: "Security Tools", level: "Analyst", granted: "2025-03-10", expires: "2026-03-10" },
  ];

  return (
    <PageTemplate title="Access Management" description="Monitor and manage user access to systems and resources.">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Granted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {accesses.map((access, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{access.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{access.resource}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={access.level === 'Admin' ? 'destructive' : 'default'}>{access.level}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{access.granted}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{access.expires}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 space-x-3">
                    <button className="hover:underline">Revoke</button>
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
