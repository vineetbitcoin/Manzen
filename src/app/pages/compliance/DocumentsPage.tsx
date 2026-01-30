import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Upload, FileText } from "lucide-react";

export function DocumentsPage() {
  const documents = [
    { id: 1, name: "SOC 2 Audit Report 2025.pdf", type: "Audit Report", size: "2.4 MB", uploaded: "2026-01-25" },
    { id: 2, name: "Evidence_AccessControl_Jan2026.zip", type: "Evidence", size: "15.8 MB", uploaded: "2026-01-28" },
    { id: 3, name: "Risk Assessment Template.docx", type: "Template", size: "124 KB", uploaded: "2026-01-20" },
  ];

  return (
    <PageTemplate
      title="Documents"
      description="Store and manage compliance-related documents and evidence."
      actions={<Button><Upload className="w-4 h-4 mr-2" />Upload Document</Button>}
    >
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    {doc.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.uploaded}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 space-x-3">
                    <button className="hover:underline">Download</button>
                    <button className="hover:underline">Delete</button>
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
