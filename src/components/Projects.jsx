import { Code2, ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "AI Notes Summarizer",
    description:
      "Summarize long notes into crisp bullet points with OpenAI. Drag & drop files, get instant insights.",
    tech: ["React", "FastAPI", "Tailwind"],
    links: {
      live: "#",
      repo: "#",
    },
  },
  {
    title: "E-commerce Starter",
    description:
      "Full-stack template with products, cart, and checkout. Clean architecture ready to scale.",
    tech: ["Vite", "MongoDB", "Stripe"],
    links: {
      live: "#",
      repo: "#",
    },
  },
  {
    title: "Realtime Chat",
    description:
      "Minimal chat app using websockets with typing indicators and message persistence.",
    tech: ["React", "Socket.io", "Express"],
    links: {
      live: "#",
      repo: "#",
    },
  },
];

function ProjectCard({ title, description, tech, links }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
          <Code2 className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <a href={links.live} className="inline-flex items-center gap-1 text-sm font-medium text-indigo-700 hover:underline">
          <ExternalLink className="h-4 w-4" /> Live
        </a>
        <a href={links.repo} className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:underline">
          <Github className="h-4 w-4" /> Code
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 mt-1">Handpicked builds that highlight craft and range.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-semibold text-indigo-700 hover:underline">Let's collaborate</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
