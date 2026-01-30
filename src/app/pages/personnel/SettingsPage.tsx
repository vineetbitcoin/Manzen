import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";

export function PersonnelSettingsPage() {
  return (
    <PageTemplate title="Personnel Settings" description="Configure personnel management settings." actions={<Button>Save Changes</Button>}>
      <div className="space-y-6 max-w-4xl">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Access Control</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="mfa-required">Require MFA</Label>
                <p className="text-sm text-gray-500">Require multi-factor authentication for all users</p>
              </div>
              <Switch id="mfa-required" defaultChecked />
            </div>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
}
