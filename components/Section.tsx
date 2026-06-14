import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="py-12 space-y-6 border-b border-white/[0.04] last:border-0">
      <div className="space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-slate-100 capitalize m-0">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-slate-500 m-0">{description}</p>
        )}
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
}