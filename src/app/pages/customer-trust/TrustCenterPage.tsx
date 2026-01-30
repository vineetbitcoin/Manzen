import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ExternalLink } from "lucide-react";

export function TrustCenterPage() {
  return (
    <PageTemplate
      title="Trust Center"
      description="Manage your public-facing trust center portal."
      actions={<Button><ExternalLink className="w-4 h-4 mr-2" />View Live Portal</Button>}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Trust Center Configuration</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Portal Status</span>
              <span className="text-sm font-medium text-green-600">Published</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Custom Domain</span>
              <span className="text-sm font-medium text-gray-900">trust.yourcompany.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Total Visits (30d)</span>
              <span className="text-sm font-medium text-gray-900">1,240</span>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Published Content</h2>
          <div className="space-y-2">
            <div className="text-sm text-gray-700">✓ Security Certifications</div>
            <div className="text-sm text-gray-700">✓ Privacy Policy</div>
            <div className="text-sm text-gray-700">✓ Compliance Framework</div>
            <div className="text-sm text-gray-700">✓ Audit Reports</div>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
}
