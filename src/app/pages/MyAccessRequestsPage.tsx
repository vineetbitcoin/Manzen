import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function MyAccessRequestsPage() {
  const requests = [
    { request: "AWS Production Access", resource: "AWS Console", requestDate: "2026-01-28", status: "Pending", approver: "IT Manager" },
    { request: "Database Read Access", resource: "Customer DB", requestDate: "2026-01-25", status: "Approved", approver: "Data Team Lead" },
    { request: "Security Tools Access", resource: "SIEM Platform", requestDate: "2026-01-20", status: "Denied", approver: "Security Admin" },
  ];

  return (
    <PageTemplate
      title="My Access Requests"
      description="Track your access requests to systems and resources."
      actions={<Button><Plus className="w-4 h-4 mr-2" />New Request</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approver</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{request.request}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{request.resource}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requestDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={
                        request.status === 'Approved' ? 'default' :
                        request.status === 'Denied' ? 'destructive' : 'secondary'
                      }
                    >
                      {request.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{request.approver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageTemplate>
  );
}
