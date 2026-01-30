import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Download, Plus, FileText } from "lucide-react";

export function ReportsPage() {
  const reports = [
    { id: 1, name: "Monthly Security Compliance Report", date: "2026-01-30", type: "Compliance", format: "PDF" },
    { id: 2, name: "Risk Assessment Summary Q1 2026", date: "2026-01-28", type: "Risk", format: "PDF" },
    { id: 3, name: "Vendor Security Scorecard", date: "2026-01-25", type: "Vendor", format: "Excel" },
    { id: 4, name: "Incident Response Report", date: "2026-01-20", type: "Security", format: "PDF" },
    { id: 5, name: "Data Privacy Impact Assessment", date: "2026-01-15", type: "Privacy", format: "Word" },
  ];

  return (
    <PageTemplate
      title="Reports"
      description="Generate and access security and compliance reports."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Generate Report</Button>}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <FileText className="w-8 h-8 text-blue-600 mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">45</div>
          <div className="text-sm text-gray-600">Total Reports</div>
        </Card>
        <Card className="p-6">
          <Download className="w-8 h-8 text-green-600 mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
          <div className="text-sm text-gray-600">Reports This Month</div>
        </Card>
        <Card className="p-6">
          <FileText className="w-8 h-8 text-purple-600 mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
          <div className="text-sm text-gray-600">Scheduled Reports</div>
        </Card>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{report.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{report.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{report.format}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 space-x-3">
                    <button className="hover:underline">View</button>
                    <button className="hover:underline">Download</button>
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
