import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function ComputersPage() {
  const computers = [
    { hostname: "LAPTOP-JD01", user: "John Doe", os: "Windows 11", lastSeen: "Online", compliant: true },
    { hostname: "MACBOOK-JS02", user: "Jane Smith", os: "macOS 14", lastSeen: "Online", compliant: true },
    { hostname: "DESKTOP-BW03", user: "Bob Wilson", os: "Windows 11", lastSeen: "2 hours ago", compliant: false },
  ];

  return (
    <PageTemplate title="Computers" description="Track employee devices and their security status.">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hostname</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operating System</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Seen</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliant</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {computers.map((computer, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{computer.hostname}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{computer.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{computer.os}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{computer.lastSeen}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={computer.compliant ? 'default' : 'destructive'}>{computer.compliant ? 'Yes' : 'No'}</Badge>
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
