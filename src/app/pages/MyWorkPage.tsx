import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function MyWorkPage() {
  const tasks = [
    { id: 1, title: "Review access control policy", priority: "High", dueDate: "2026-02-05", status: "In Progress" },
    { id: 2, title: "Complete SOC 2 evidence upload", priority: "Critical", dueDate: "2026-02-02", status: "Pending" },
    { id: 3, title: "Vendor risk assessment - Acme Corp", priority: "Medium", dueDate: "2026-02-10", status: "In Progress" },
    { id: 4, title: "Update incident response plan", priority: "Low", dueDate: "2026-02-15", status: "Not Started" },
  ];

  return (
    <PageTemplate
      title="My Work"
      description="Track and manage your assigned security tasks and responsibilities."
      actions={<Button><Plus className="w-4 h-4 mr-2" />New Task</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={task.priority === 'Critical' || task.priority === 'High' ? 'destructive' : 'secondary'}>
                      {task.priority}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="outline">{task.status}</Badge>
                  </td>
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
