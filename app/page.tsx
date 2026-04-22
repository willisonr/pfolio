import Link from "next/link";

const MEDIA = {
  background: "/pfolio/images/gallery/shot4.jpg",
  hero: "/pfolio/images/gallery/shot45.jpg",
  portrait: "/pfolio/images/gallery/shot12.jpg",
  featuredVideo: "/pfolio/videos/60-magnolia.mp4",
  advantageRight: "/pfolio/images/gallery/shot45.jpg",
};

const topCards = [
  {
    title: "Branding",
    text: "Structured campaign visuals for corporate consistency.",
  },
  {
    title: "Motion",
    text: "Attention-first motion graphics for digital channels.",
  },
  {
    title: "Editing",
    text: "Clear, polished storytelling through video post-production.",
  },
  {
    title: "Direction",
    text: "Creative leadership across teams and marketing outputs.",
  },
];

const stats = [
  { label: "Years", value: "10+" },
  { label: "Service Scope", value: "Branding • Motion • Video" },
  { label: "Proficient Tools", value: "Ps • Ai • Pr • Ae • Lr" },
  { label: "Focus", value: "Creatives" },
];

const advantages = [
  {
    title: "Art-Driven Videography",
    text: "My videography is guided by composition, rhythm, and emotional pacing so each frame carries intent.",
  },
  {
    title: "Distinct Visual Signature",
    text: "I blend motion, design, and storytelling into output that feels recognizable, refined, and uniquely mine.",
  },
  {
    title: "Craft Across Mediums",
    text: "From static brand visuals to dynamic edits, my artistic process stays consistent across every format.",
  },
  {
    title: "Purposeful Creativity",
    text: "Every creative decision supports clarity, feeling, and message so the final work is both expressive and effective.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background py-8 text-foreground md:py-10">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-30 blur-sm"
        style={{ backgroundImage: `url(${MEDIA.background})` }}
      />
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#0d0d0d] shadow-2xl shadow-black/50">
          <header className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
            <span className="font-serif text-sm tracking-[0.2em] text-zinc-100">WR</span>
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-300">
              <Link href="/" className="rounded bg-zinc-800 px-2 py-1 hover:bg-zinc-700">
                Home
              </Link>
              <Link href="/gallery" className="rounded bg-zinc-900 px-2 py-1 hover:bg-zinc-800">
                My Works
              </Link>
              <Link href="/about" className="rounded bg-zinc-900 px-2 py-1 hover:bg-zinc-800">
                Resume
              </Link>
              <Link
                href="mailto:willisonroces@gmail.com"
                className="rounded bg-rose-500 px-2 py-1 font-semibold text-black hover:bg-rose-400"
              >
                Contact
              </Link>
            </nav>
          </header>

            <section className="p-3">
              <div
                className="relative min-h-[340px] overflow-hidden rounded border border-zinc-800 bg-cover bg-center p-6 md:min-h-[430px] md:p-10"
                style={{ backgroundImage: `url(${MEDIA.hero})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
                <div className="relative z-10 max-w-[24rem]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Portfolio</p>
                  <h1 className="mt-3 font-serif text-5xl leading-[0.95] text-zinc-100 md:text-6xl">
                    DESIGN
                    <br />
                    & FOCUS
                  </h1>
                  <p className="mt-4 max-w-sm text-xs leading-relaxed text-zinc-300">
                    Visual communication built for corporate clarity across branding,
                    motion graphics, and video editing.
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                {topCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded border border-zinc-800 bg-zinc-900/70 p-3"
                  >
                    <h2 className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-[10px] leading-relaxed text-zinc-400">{card.text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-[92px] flex-col justify-between rounded border border-zinc-800 bg-black/50 p-3"
                  >
                    <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-tight text-zinc-100 sm:text-lg">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-2 md:grid-cols-[1fr_1.3fr]">
                <div
                  className="min-h-[420px] rounded border border-zinc-800 bg-cover bg-top"
                  style={{ backgroundImage: `url(${MEDIA.portrait})` }}
                />
                <section className="rounded border border-zinc-800 bg-zinc-900/70 p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    Visual Profile
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-zinc-100">
                    Built For Brand-Critical Work
                  </h2>
                  <p className="mt-4 text-xs leading-relaxed text-zinc-300">
                    A multidisciplinary creative with 10+ years of experience in
                    branding, motion graphics, and video editing. My core work
                    supports high-volume marketing environments where visual
                    quality, consistency, and speed are non-negotiable.
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                    View full resume details in the dedicated Resume page.
                  </p>
                  <Link
                    href="/about"
                    className="mt-6 inline-block rounded bg-zinc-100 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-zinc-300"
                  >
                    View Resume
                  </Link>
                </section>
              </div>

            <section className="mt-3">
              <h2 className="rounded border border-zinc-800 bg-zinc-900/70 px-4 py-3 font-serif text-3xl text-zinc-100">
                Creative Edge
              </h2>
              <p className="mt-3 rounded border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm leading-relaxed text-zinc-300">
                My background in videography and visual arts is the core of how I
                create. I treat each project as a crafted piece - balancing
                technical execution, artistic instinct, and storytelling discipline
                to produce work that feels distinct, intentional, and authentic.
              </p>
              <div className="mt-2 grid gap-2 md:grid-cols-[1.35fr_1fr]">
                <video
                  src={MEDIA.featuredVideo}
                  controls
                  preload="metadata"
                  className="min-h-[220px] w-full rounded border border-zinc-800 bg-black object-cover md:min-h-[260px]"
                />
                <div className="space-y-2">
                  {advantages.slice(0, 2).map((advantage) => (
                    <article
                      key={advantage.title}
                      className="rounded border border-zinc-800 bg-zinc-900/70 p-3"
                    >
                      <h3 className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100">
                        {advantage.title}
                      </h3>
                      <p className="mt-2 text-[10px] leading-relaxed text-zinc-400">
                        {advantage.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="mt-2 grid gap-2 md:grid-cols-[1fr_1.2fr]">
                <div className="space-y-2">
                  {advantages.slice(2).map((advantage) => (
                    <article
                      key={advantage.title}
                      className="rounded border border-zinc-800 bg-zinc-900/70 p-3"
                    >
                      <h3 className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100">
                        {advantage.title}
                      </h3>
                      <p className="mt-2 text-[10px] leading-relaxed text-zinc-400">
                        {advantage.text}
                      </p>
                    </article>
                  ))}
                </div>
                <div
                  className="min-h-[220px] rounded border border-zinc-800 bg-cover bg-center"
                  style={{ backgroundImage: `url(${MEDIA.advantageRight})` }}
                />
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
