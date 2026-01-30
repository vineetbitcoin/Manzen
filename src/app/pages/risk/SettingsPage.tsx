import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";

export function RiskSettingsPage() {
  return (
    <PageTemplate title="Risk Settings" description="Configure risk management settings." actions={<Button>Save Changes</Button>}>
      <div className="space-y-6 max-w-4xl">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Risk Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="new-risks">New Risk Alerts</Label>
                <p className="text-sm text-gray-500">Notify when new risks are identified</p>
              </div>
              <Switch id="new-risks" defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
}
