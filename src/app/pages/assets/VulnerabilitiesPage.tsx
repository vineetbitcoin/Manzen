import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function VulnerabilitiesPage() {
  const vulns = [
    { id: "CVE-2026-1234", severity: "Critical", asset: "Web Server", status: "Open", discovered: "2026-01-28" },
    { id: "CVE-2026-5678", severity: "High", asset: "API Gateway", status: "In Progress", discovered: "2026-01-25" },
    { id: "CVE-2026-9012", severity: "Medium", asset: "Database", status: "Resolved", discovered: "2026-01-20" },
  ];

  return (
    <PageTemplate title="Vulnerabilities" description="Track and manage security vulnerabilities.">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CVE ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affected Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discovered</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vulns.map((vuln) => (
                <tr key={vuln.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{vuln.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={vuln.severity === 'Critical' || vuln.severity === 'High' ? 'destructive' : 'secondary'}>
                      {vuln.severity}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vuln.asset}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><Badge variant="outline">{vuln.status}</Badge></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vuln.discovered}</td>
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
