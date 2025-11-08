import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
          <Sparkles className="h-4 w-4 text-indigo-600" />
          Elevate your presence with a protofolic touch
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
          Designer-grade portfolio for developers
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          A sleek, modern one-page site to showcase your work, skills, and personality. Built fast, looks premium, and works beautifully on any device.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
