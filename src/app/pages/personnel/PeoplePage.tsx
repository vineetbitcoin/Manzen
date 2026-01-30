import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Plus } from "lucide-react";

export function PeoplePage() {
  const people = [
    { name: "John Doe", role: "Security Admin", department: "IT", access: "Full", status: "Active" },
    { name: "Jane Smith", role: "Developer", department: "Engineering", access: "Standard", status: "Active" },
    { name: "Bob Wilson", role: "Analyst", department: "Security", access: "Standard", status: "Active" },
  ];

  return (
    <PageTemplate
      title="People"
      description="Manage employees and their security profiles."
      actions={<Button><Plus className="w-4 h-4 mr-2" />Add Person</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {people.map((person, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{person.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{person.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{person.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={person.access === 'Full' ? 'destructive' : 'default'}>{person.access}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap"><Badge>{person.status}</Badge></td>
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
