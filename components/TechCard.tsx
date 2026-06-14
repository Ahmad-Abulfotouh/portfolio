import {
  IconCode,
  IconDatabase,
  IconLayersLinked,
  type Icon,
} from "@tabler/icons-react";

interface TechCardProps {
  category: string;
  skills: string[];
  icon: React.ComponentType<{ size?: number; stroke?: number }>;
}

export function TechCard({ category, skills, icon: CardIcon }: TechCardProps) {
  return (
    <div className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] space-y-3.5">
      <div className="flex items-center gap-2">
        <CardIcon size={15} stroke={1.75} className="text-indigo-400" />
        <h3 className="text-[11px] font-medium tracking-[0.8px] text-indigo-400 uppercase m-0">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2.5 py-0.5 text-xs rounded-full
                       bg-white/[0.05] border border-white/10 text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}