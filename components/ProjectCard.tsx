import { IconBrandGithub } from "@tabler/icons-react";

interface TechnicalDecision {
  label: string;
  value: string;
}

interface ProjectCardProps {
  title: string;
  stackType: string;
  description: string;
  decisions: TechnicalDecision[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string; // optional
}
export function ProjectCard({
  title, stackType, description, decisions, technologies, githubUrl, liveUrl,
}: ProjectCardProps) {
  return (
    <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]
                    hover:border-white/[0.14] transition-colors duration-300 space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 mb-2 px-2.5 py-0.5 rounded-full
                          bg-indigo-400/[0.12] border border-indigo-400/30 text-indigo-300
                          text-[10px] font-medium tracking-[0.5px]">
            {stackType}
          </div>
          <h3 className="text-lg font-medium text-slate-100 tracking-tight m-0">{title}</h3>
        </div>
        {/* Buttons */}
        <div className="flex gap-1.5 flex-shrink-0">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                        bg-white/[0.05] border border-white/10 text-slate-400 text-xs
                        hover:bg-white/10 hover:text-slate-200 transition-colors">
            <IconBrandGithub size={14} stroke={1.5} />
            GitHub
          </a>

          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                          bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs
                          hover:bg-teal-400/[0.18] hover:text-teal-200 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-slate-500 leading-relaxed m-0">{description}</p>

      <div className="h-px bg-white/[0.06]" />

      {/* Technical decisions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {decisions.map((d, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/[0.07] rounded-lg px-3 py-2.5 space-y-0.5">
            <p className="text-[10px] font-medium tracking-[0.6px] uppercase text-slate-600 m-0">{d.label}</p>
            <p className="text-xs text-slate-300 m-0">{d.value}</p>
          </div>
        ))}
      </div>

      <div className="h-px bg-white/[0.06]" />

      {/* Stack */}
      <div>
        <p className="text-[10px] font-medium tracking-[0.8px] uppercase text-slate-600 mb-2">Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, i) => (
            <span key={i} className="px-2.5 py-0.5 text-xs rounded-full
                                     bg-white/[0.04] border border-white/[0.09] text-slate-400">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}