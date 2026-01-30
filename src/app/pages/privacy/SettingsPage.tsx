import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";

export function PrivacySettingsPage() {
  return (
    <PageTemplate title="Privacy Settings" description="Configure privacy module settings." actions={<Button>Save Changes</Button>}>
      <div className="space-y-6 max-w-4xl">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-classify">Auto-classify Data</Label>
                <p className="text-sm text-gray-500">Automatically classify new data assets</p>
              </div>
              <Switch id="auto-classify" defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
}
