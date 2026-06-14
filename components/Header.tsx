import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const socialLinks = [
  { Icon: IconBrandGithub, href: "https://github.com/Ahmad-Abulfotouh", label: "GitHub" },
  { Icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/ahmad-abulfotouh-714250173", label: "LinkedIn" },
  { Icon: IconMail, href: "mailto:ahmad.abulfotouh.dev@gmail.com", label: "Email" },
];

const navLinks = ["Projects", "Experience", "Contact"];

export function Header() {
  return (
    <header className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden bg-slate-950 flex items-end">

      {/* Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Glows */}
      <div className="absolute -top-20 -left-20 w-80 h-80 lg:w-96 lg:h-96 rounded-full"
           style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-16 w-72 h-72 lg:w-80 lg:h-80 rounded-full"
           style={{ background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)" }} />

      {/* Overlay */}
      <div className="absolute inset-0"
           style={{ background: "linear-gradient(to top, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.4) 60%, transparent 100%)" }} />

      {/* Nav — hidden on mobile */}
      <nav className="absolute top-4 right-5 z-10 hidden sm:flex gap-4">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}
             className="text-[11px] text-slate-400/60 hover:text-slate-200 transition-colors tracking-wide">
            {link}
          </a>
        ))}
      </nav>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 pb-6 sm:pb-7">

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 mb-2 sm:mb-2.5 px-2.5 py-0.5 rounded-full
                        bg-teal-400/[0.12] border border-teal-400/35 text-teal-300 text-[10px] sm:text-[11px] font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          Available for work
        </div>

        {/* Name + socials row */}
        <div className="flex items-end justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-medium text-slate-100 tracking-tight capitalize leading-tight m-0">
              Ahmad Abul Fotouh
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Backend Developer{" "}
              <span className="text-slate-500 sm:inline block">· Full Stack Experience</span>
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-1.5 sm:gap-2 self-end shrink-0">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label={label}
                 className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center
                            bg-white/[0.05] border border-white/10 text-slate-400
                            hover:bg-white/10 hover:text-slate-200 transition-colors">
                <Icon size={15} className="sm:hidden" stroke={1.5} />
                <Icon size={17} className="hidden sm:block" stroke={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}