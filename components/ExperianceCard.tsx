"use client";
import { useEffect, useRef } from "react";

interface TimelineItemProps {
  dateRange: string;
  title: string;
  subtitle: string;
  description: string;
  isActive?: boolean;
}

export function TimelineItem({
  dateRange, title, subtitle, description, isActive = false,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative pl-8"
      style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.45s ease, transform 0.45s ease" }}
    >
      {/* Dot */}
      <span className={`
        absolute left-0 top-[5px] -translate-x-1/2
        w-2.5 h-2.5 rounded-full border-2 border-slate-950
        transition-transform duration-200 group-hover:scale-125
        ${isActive ? "bg-violet-400 ring-[3px] ring-violet-400/20" : "bg-slate-700"}
      `} />

      {/* Date badge */}
      <div className={`
        inline-flex items-center gap-1.5 mb-2.5
        text-[10px] font-medium tracking-[0.5px] px-2.5 py-0.5 rounded-full
        ${isActive
          ? "bg-violet-400/[0.12] border border-violet-400/30 text-violet-300"
          : "bg-white/[0.04] border border-white/10 text-slate-500"}
      `}>
        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />}
        {dateRange}
      </div>

      <h3 className="text-base font-medium text-slate-100 tracking-tight m-0 mb-0.5">
        {title}
      </h3>
      <p className="text-xs text-slate-500 mb-2">{subtitle}</p>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xl m-0">{description}</p>
    </div>
  );
}