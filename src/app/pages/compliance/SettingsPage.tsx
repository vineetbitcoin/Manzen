import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";

export function ComplianceSettingsPage() {
  return (
    <PageTemplate
      title="Compliance Settings"
      description="Configure compliance module settings and preferences."
      actions={<Button>Save Changes</Button>}
    >
      <div className="space-y-6 max-w-4xl">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="control-updates">Control Updates</Label>
                <p className="text-sm text-gray-500">Receive notifications when controls are updated</p>
              </div>
              <Switch id="control-updates" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="audit-reminders">Audit Reminders</Label>
                <p className="text-sm text-gray-500">Get reminders before scheduled audits</p>
              </div>
              <Switch id="audit-reminders" defaultChecked />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Framework Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-mapping">Auto-map controls</Label>
                <p className="text-sm text-gray-500">Automatically map controls to frameworks</p>
              </div>
              <Switch id="auto-mapping" defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
}
