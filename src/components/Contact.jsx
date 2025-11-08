import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate request for now. Hook to backend later if desired.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in touch</h2>
          <p className="text-slate-600 mt-1">Have a project in mind or just want to say hi?</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">Let's build something great</h3>
            </div>
            <p className="mt-3 text-slate-600">
              I'm open to freelance, full-time opportunities, and collaborations. Reach out and let's discuss your ideas.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>• Available for remote work</li>
              <li>• Fast communication and clear expectations</li>
              <li>• Pixel-perfect UI + solid engineering</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="jane@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Tell me about your project..." />
            </div>
            <div className="mt-6">
              <button disabled={status!=="idle"} type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700 disabled:opacity-60">
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "Sent! I'll reply soon"
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
