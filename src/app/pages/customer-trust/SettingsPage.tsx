import { PageTemplate } from "@/app/components/PageTemplate";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Switch } from "@/app/components/ui/switch";
import { Label } from "@/app/components/ui/label";

export function CustomerTrustSettingsPage() {
  return (
    <PageTemplate
      title="Customer Trust Settings"
      description="Configure customer trust portal settings."
      actions={<Button>Save Changes</Button>}
    >
      <div className="space-y-6 max-w-4xl">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Portal Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="public-portal">Public Portal</Label>
                <p className="text-sm text-gray-500">Allow public access to trust center</p>
              </div>
              <Switch id="public-portal" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="customer-auth">Require Authentication</Label>
                <p className="text-sm text-gray-500">Customers must sign in to view content</p>
              </div>
              <Switch id="customer-auth" />
            </div>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
}
