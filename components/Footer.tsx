import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] py-7" id="contact">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-slate-200 m-0">Ahmad Abul Fotouh</p>
          <p className="text-[11px] text-slate-600 mt-0.5 m-0">
            © 2026 · Built with Next.js & Tailwind CSS
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1.5">
          <a href="mailto:ahmad.abulfotouh.dev@gmail.com"
             className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs
                        bg-indigo-400/[0.14] border border-indigo-400/35 text-indigo-300
                        hover:bg-indigo-400/[0.22] hover:text-indigo-200 transition-colors">
            <IconMail size={13} stroke={1.5} />
            Contact me
          </a>

          <div className="w-px h-4 bg-white/[0.07] mx-1" />

          <a href="https://www.linkedin.com/in/ahmad-abulfotouh-714250173/"
             target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="w-8 h-8 rounded-lg flex items-center justify-center
                        bg-white/[0.04] border border-white/[0.08] text-slate-500
                        hover:bg-white/[0.08] hover:text-slate-300 transition-colors">
            <IconBrandLinkedin size={15} stroke={1.5} />
          </a>

          <a href="https://github.com/Ahmad-Abulfotouh"
             target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="w-8 h-8 rounded-lg flex items-center justify-center
                        bg-white/[0.04] border border-white/[0.08] text-slate-500
                        hover:bg-white/[0.08] hover:text-slate-300 transition-colors">
            <IconBrandGithub size={15} stroke={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}