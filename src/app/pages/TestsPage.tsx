import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Play, Plus } from "lucide-react";

export function TestsPage() {
  const tests = [
    { id: 1, name: "Penetration Test - Web Application", type: "Security", lastRun: "2026-01-20", status: "Passed", score: 92 },
    { id: 2, name: "Access Control Verification", type: "Compliance", lastRun: "2026-01-25", status: "Passed", score: 98 },
    { id: 3, name: "Data Encryption Audit", type: "Security", lastRun: "2026-01-28", status: "Failed", score: 65 },
    { id: 4, name: "Employee Security Awareness", type: "Training", lastRun: "2026-01-15", status: "Passed", score: 88 },
  ];

  return (
    <PageTemplate
      title="Tests"
      description="Manage and run security tests, audits, and assessments."
      actions={
        <>
          <Button variant="outline"><Play className="w-4 h-4 mr-2" />Run Test</Button>
          <Button><Plus className="w-4 h-4 mr-2" />New Test</Button>
        </>
      }
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tests.map((test) => (
                <tr key={test.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{test.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="outline">{test.type}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.lastRun}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={test.status === 'Passed' ? 'default' : 'destructive'}>
                      {test.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{test.score}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 space-x-3">
                    <button className="hover:underline">View</button>
                    <button className="hover:underline">Run</button>
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
