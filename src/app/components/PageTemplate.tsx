import { ReactNode } from "react";

interface PageTemplateProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function PageTemplate({ title, description, actions, children }: PageTemplateProps) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
        {description && (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
