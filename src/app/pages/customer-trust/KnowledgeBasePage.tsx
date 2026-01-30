import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Plus, FileText } from "lucide-react";

export function KnowledgeBasePage() {
  const articles = [
    { title: "How We Protect Your Data", category: "Security", views: 450, updated: "2026-01-20" },
    { title: "Understanding Our Certifications", category: "Compliance", views: 320, updated: "2026-01-18" },
    { title: "Privacy Best Practices", category: "Privacy", views: 280, updated: "2026-01-25" },
  ];

  return (
    <PageTemplate
      title="Knowledge Base"
      description="Manage customer-facing security documentation and FAQs."
      actions={<Button><Plus className="w-4 h-4 mr-2" />New Article</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.map((article, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    {article.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{article.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{article.views}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{article.updated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 space-x-3">
                    <button className="hover:underline">Edit</button>
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
