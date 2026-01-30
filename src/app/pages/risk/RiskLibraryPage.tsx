import { PageTemplate } from "@/app/components/PageTemplate";
import { Card } from "@/app/components/ui/card";

export function RiskLibraryPage() {
  const library = [
    { category: "Cybersecurity", count: 24 },
    { category: "Compliance", count: 18 },
    { category: "Operational", count: 12 },
    { category: "Financial", count: 8 },
  ];

  return (
    <PageTemplate title="Risk Library" description="Browse common risk templates and scenarios.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {library.map((item) => (
          <Card key={item.category} className="p-6">
            <div className="text-2xl font-bold text-gray-900 mb-2">{item.count}</div>
            <div className="text-sm text-gray-600">{item.category} Risks</div>
          </Card>
        ))}
      </div>
    </PageTemplate>
  );
}
