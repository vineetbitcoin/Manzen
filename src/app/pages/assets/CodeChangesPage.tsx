import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export function CodeChangesPage() {
  const changes = [
    { commit: "a1b2c3d", author: "John Doe", message: "Fix authentication bug", date: "2026-01-30", reviewed: true },
    { commit: "e4f5g6h", author: "Jane Smith", message: "Update dependencies", date: "2026-01-29", reviewed: true },
    { commit: "i7j8k9l", author: "Bob Wilson", message: "Add new API endpoint", date: "2026-01-28", reviewed: false },
  ];

  return (
    <PageTemplate title="Code Changes" description="Monitor code repository changes for security review.">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security Review</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {changes.map((change) => (
                <tr key={change.commit} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{change.commit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{change.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{change.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{change.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={change.reviewed ? 'default' : 'outline'}>{change.reviewed ? 'Reviewed' : 'Pending'}</Badge>
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
