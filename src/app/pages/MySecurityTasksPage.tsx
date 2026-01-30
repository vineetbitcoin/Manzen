import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function MySecurityTasksPage() {
  const tasks = [
    { task: "Review and approve vendor risk assessment", priority: "High", dueDate: "2026-02-02", assignedBy: "Security Team" },
    { task: "Complete security awareness training", priority: "Medium", dueDate: "2026-02-10", assignedBy: "HR" },
    { task: "Update personal security questionnaire", priority: "Low", dueDate: "2026-02-15", assignedBy: "Compliance Team" },
  ];

  return (
    <PageTemplate title="My Security Tasks" description="Your assigned security tasks and action items.">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{task.task}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'}>{task.priority}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{task.assignedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    <button className="hover:underline">Complete</button>
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
