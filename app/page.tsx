import Image from "next/image";
import { IconCode, IconLayersLinked, IconDatabase } from "@tabler/icons-react";

// components
import { Footer } from "../components/Footer"
import { Header } from "@/components/Header";
import { SectionWrapper } from "@/components/Section";
import { TechCard } from "@/components/TechCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TimelineItem } from "@/components/ExperianceCard";

export default function Home() {
  return (
    <div className="">
      {/* Header */}  
      <Header />

      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 text-slate-100 min-h-screen">

        {/* Technologies Section */}
        <SectionWrapper 
          id="technologies" 
          title="Tech Stack & Tools" 
          description="The languages, frameworks, and databases I use to build scalable backend systems."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <TechCard icon={IconCode}         category="Languages"   skills={["TypeScript", "JavaScript ES6+"]} />
            <TechCard icon={IconLayersLinked} category="Frameworks"  skills={["NestJS", "Express.js", "Next.js"]} />
            <TechCard icon={IconDatabase}     category="Databases"   skills={["PostgreSQL", "Prisma ORM"]} />
          </div>
        </SectionWrapper>

        {/* Experiences Section */}
        <SectionWrapper 
          id="experience" 
          title="Education & Journey" 
          description="A brief timeline of my academic background and professional journey."
        >
          {/* Time line */}
          <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-10 py-2">
            <TimelineItem 
              dateRange="2024 - 2026"
              title="Military Service — Reserve Officer"
              subtitle="Armed Forces"
              description="Fulfilled national service requirements with dedication. Developed strong leadership, crisis management, and team collaboration skills under high-pressure environments."
              isActive={true}
            />
            <TimelineItem 
              dateRange="2018 - 2023"
              title="Bachelor’s Degree in Engineering"
              subtitle="BUC - Faculty of Engineering"
              description="Gained a solid mathematical and analytical foundation, specializing in problem-solving methodologies and core software engineering concepts that directly translate into scalable backend architecture."
            />

          </div>
        </SectionWrapper>
        {/* Projects Section */}        
        <SectionWrapper 
          id="projects" 
          title="Featured Projects" 
          description="A showcase of my recent backend and full-stack development work."
        >
          <ProjectCard
            title="Task Orchestrator — To-Do App"
            stackType="PERN Stack"
            description="Full-stack task management app with JWT-based authentication. Users can register, log in, manage their tasks, and update their own password — all backed by a RESTful API deployed on Vercel."
            decisions={[
              { label: "Auth strategy",  value: "JWT — stateless, no session store needed" },
              { label: "Data layer",     value: "Prisma ORM over raw SQL — type-safe queries" },
              { label: "API design",     value: "RESTful with Express.js, scoped per user" },
              { label: "Deployment",     value: "Vercel — serverless, zero-config CI/CD" },
            ]}
            technologies={["Next.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Vercel"]}
            githubUrl="https://github.com/Ahmad-Abulfotouh/pern-todo-api"
            liveUrl="https://pern-todo-web-kappa.vercel.app/auth" // اختياري — شيله لو مفيش ديمو
          />
        </SectionWrapper>
      </main>

      {/* Footer */}  
      <Footer />
    </div>
  );
}
