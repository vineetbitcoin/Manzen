import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Download } from "lucide-react";

export function SnapshotPage() {
  return (
    <PageTemplate
      title="Risk Snapshot"
      description="Point-in-time view of organizational risk posture."
      actions={<Button><Download className="w-4 h-4 mr-2" />Export Snapshot</Button>}
    >
      <Card className="p-6">
        <p className="text-gray-600">Risk snapshot for January 2026</p>
        <div className="mt-4 text-gray-500">Snapshot data will be displayed here...</div>
      </Card>
    </PageTemplate>
  );
}
