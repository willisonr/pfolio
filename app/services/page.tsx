import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Palette, Camera, Video, Play } from "lucide-react";

/* ==========================================================================
   IMAGE CONFIGURATION
   ========================================================================== */

const IMAGES = {
  // Page header background
  headerBg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=400&fit=crop",
};

/* ========================================================================== */

const services = [
  {
    title: "Graphic Design",
    description:
      "Professional branding, typography, and visual assets crafted with a designer's eye for detail.",
    icon: Palette,
    gradient: "from-purple-500/20 to-blue-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Photography",
    description:
      "Capturing high-quality imagery that tells a story, from street photography to professional portraits.",
    icon: Camera,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Videography",
    description:
      "Professional video editing and shooting that brings motion and emotion to your projects.",
    icon: Video,
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
  },
  {
    title: "Motion Graphics",
    description:
      "Dynamic animations and visual effects that bring static designs to life. Perfect for social media.",
    icon: Play,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
];

const basePath = "/pfolio";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <PageHeader
        title="Services"
        breadcrumb="Services"
        backgroundImage={IMAGES.headerBg}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-12 rounded-lg border border-zinc-800 bg-[#0d0d0d] p-4 md:p-8">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                What I Do
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">My Services</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 text-center transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60"
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/5 shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-100">
                    {service.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <section className="mt-8 border-t border-zinc-800 pt-12">
              <div className="mx-auto max-w-xl">
                <div className="mb-10 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Get In Touch
                  </span>
                  <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
                    Let&apos;s Work Together
                  </h2>
                  <p className="mt-3 text-sm text-zinc-400">
                    Send me a message about your next creative project.
                  </p>
                </div>

                <form
                  action="https://formspree.io/f/your-formspree-id"
                  method="POST"
                  className="space-y-3"
                >
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full rounded border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-xs text-foreground placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                    />
                    <input
                      type="email"
                      name="_replyto"
                      placeholder="Your Email"
                      required
                      className="w-full rounded border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-xs text-foreground placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me what you are looking for..."
                    required
                    className="w-full resize-none rounded border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-xs text-foreground placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                  />
                  <button
                    type="submit"
                    className="w-full rounded bg-zinc-100 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-zinc-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
