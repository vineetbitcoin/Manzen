import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

export function IntegrationsPage() {
  const integrations = [
    { name: "Slack", category: "Communication", status: "Connected", description: "Security alerts and notifications" },
    { name: "Jira", category: "Project Management", status: "Connected", description: "Ticketing and task tracking" },
    { name: "GitHub", category: "Development", status: "Available", description: "Code repository integration" },
    { name: "AWS", category: "Cloud", status: "Connected", description: "Cloud infrastructure monitoring" },
  ];

  return (
    <PageTemplate title="Integrations" description="Connect third-party tools and services to your ISMS.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {integrations.map((integration, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.category}</p>
              </div>
              <Badge variant={integration.status === 'Connected' ? 'default' : 'outline'}>{integration.status}</Badge>
            </div>
            <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
            <Button variant={integration.status === 'Connected' ? 'outline' : 'default'} size="sm">
              {integration.status === 'Connected' ? 'Configure' : 'Connect'}
            </Button>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
}
