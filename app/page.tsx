import Link from "next/link";

const MEDIA = {
  background: "/pfolio/images/gallery/shot4.jpg",
  hero: "/pfolio/images/gallery/shot6.JPG",
  portrait: "/pfolio/images/gallery/shot12.jpg",
  featuredVideo: "/pfolio/videos/60-magnolia.mp4",
  advantageRight: "/pfolio/images/gallery/shot45.jpg",
};

const topCards = [
  {
    title: "Branding",
    text: "Creating visual identities that feel authentic and unforgettable.",
  },
  {
    title: "Motion",
    text: "Bringing stories to life through dynamic, expressive motion.",
  },
  {
    title: "Video",
    text: "Capturing moments and crafting narratives with cinematic flair.",
  },
  {
    title: "Photography",
    text: "Freezing time with an artistic eye for composition and light.",
  },
];

const stats = [
  { label: "Years", value: "10+" },
  { label: "Art Forms", value: "Design • Film • Photo" },
  { label: "Proficient Tools", value: "Ps • Ai • Pr • Ae • Lr" },
  { label: "Focus", value: "Authentic Creativity" },
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
    <main className="min-h-screen bg-background py-8 text-foreground md:py-10 xl:py-12">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-30 blur-sm"
        style={{ backgroundImage: `url(${MEDIA.background})` }}
      />
      <div className="mx-auto max-w-4xl px-4 xl:max-w-6xl 2xl:max-w-7xl">
        <div className="overflow-hidden rounded-lg border border-zinc-800 bg-[#0d0d0d] shadow-2xl shadow-black/50">
          <header className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 xl:px-6 xl:py-4">
            <span className="font-serif text-sm tracking-[0.2em] text-zinc-100 xl:text-base">WR</span>
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-300 xl:text-xs xl:gap-3">
              <Link href="/" className="rounded bg-zinc-800 px-2 py-1 hover:bg-zinc-700 xl:px-3 xl:py-1.5">
                Home
              </Link>
              <Link href="/gallery" className="rounded bg-zinc-900 px-2 py-1 hover:bg-zinc-800 xl:px-3 xl:py-1.5">
                My Works
              </Link>
              <Link href="/about" className="rounded bg-zinc-900 px-2 py-1 hover:bg-zinc-800 xl:px-3 xl:py-1.5">
                Resume
              </Link>
              <Link
                href="mailto:willisonroces@gmail.com"
                className="rounded bg-rose-500 px-2 py-1 font-semibold text-black hover:bg-rose-400 xl:px-3 xl:py-1.5"
              >
                Contact
              </Link>
            </nav>
          </header>

            <section className="p-3 xl:p-4">
              <div
                className="relative min-h-[340px] overflow-hidden rounded border border-zinc-800 bg-cover bg-center p-6 md:min-h-[430px] md:p-10 xl:min-h-[500px] xl:p-12"
                style={{ backgroundImage: `url(${MEDIA.hero})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
                <div className="relative z-10 max-w-[24rem] xl:max-w-[30rem]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 xl:text-xs">Portfolio</p>
                  <h1 className="mt-3 font-serif text-5xl leading-[0.95] text-zinc-100 md:text-6xl xl:text-7xl">
                    ART
                    <br />
                    & CREATION
                  </h1>
                  <p className="mt-4 max-w-sm text-xs leading-relaxed text-zinc-300 xl:text-sm xl:max-w-md">
                    A multidisciplinary artist exploring visual storytelling through design, video, photography, and motion.
                  </p>
                </div>
              </div>

              <section className="mt-3 rounded border border-zinc-800 bg-zinc-900/70 p-4 xl:p-6">
                <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 xl:text-xs">
                  Recents
                </p>
                <h2 className="mt-1 font-serif text-2xl text-zinc-100 mb-3 xl:text-3xl">Latest Uploads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-4">
                  <article className="overflow-hidden rounded border border-zinc-800 bg-zinc-950/50">
                    <video
                      src="/pfolio/videos/Guam-v4_1.mp4"
                      controls
                      preload="metadata"
                      className="aspect-video w-full bg-black"
                    />
                    <p className="px-4 py-3 text-sm text-zinc-300 xl:px-6 xl:py-4 xl:text-base">Guam</p>
                  </article>
                  <article className="overflow-hidden rounded border border-zinc-800 bg-zinc-950/50">
                    <video
                      src="/pfolio/videos/60-magnolia.mp4"
                      controls
                      preload="metadata"
                      className="aspect-video w-full bg-black"
                    />
                    <p className="px-4 py-3 text-sm text-zinc-300 xl:px-6 xl:py-4 xl:text-base">60 Magnolia</p>
                  </article>
                </div>
              </section>

              <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4 xl:gap-3">
                {topCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded border border-zinc-800 bg-zinc-900/70 p-3 xl:p-4"
                  >
                    <h2 className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100 xl:text-sm">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-[10px] leading-relaxed text-zinc-400 xl:text-xs">{card.text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4 xl:gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-[92px] flex-col justify-between rounded border border-zinc-800 bg-black/50 p-3 xl:min-h-[100px] xl:p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 xl:text-xs">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-tight text-zinc-100 sm:text-lg xl:text-xl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-2 md:grid-cols-[1fr_1.3fr] xl:gap-3">
                <div
                  className="min-h-[420px] rounded border border-zinc-800 bg-cover bg-top xl:min-h-[500px]"
                  style={{ backgroundImage: `url(${MEDIA.portrait})` }}
                />
                <section className="rounded border border-zinc-800 bg-zinc-900/70 p-4 xl:p-6">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 xl:text-xs">
                    Visual Profile
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-zinc-100 xl:text-4xl">
                    Crafting Through Every Medium
                  </h2>
                  <p className="mt-4 text-xs leading-relaxed text-zinc-300 xl:text-sm">
                    A multidisciplinary artist with 10+ years of experience exploring creative expression across design, film, photography, and motion. My work blends technical skill with artistic vision to create something uniquely human.
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-300 xl:text-sm">
                    View full resume details in the dedicated Resume page.
                  </p>
                  <Link
                    href="/about"
                    className="mt-6 inline-block rounded bg-zinc-100 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-zinc-300 xl:px-8 xl:py-3 xl:text-sm"
                  >
                    View Resume
                  </Link>
                </section>
              </div>

            <section className="mt-3">
              <h2 className="rounded border border-zinc-800 bg-zinc-900/70 px-4 py-3 font-serif text-3xl text-zinc-100 xl:px-6 xl:py-4 xl:text-4xl">
                Creative Edge
              </h2>
              <p className="mt-3 rounded border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm leading-relaxed text-zinc-300 xl:px-6 xl:py-4 xl:text-base">
                My background in videography and visual arts is the core of how I
                create. I treat each project as a crafted piece - balancing
                technical execution, artistic instinct, and storytelling discipline
                to produce work that feels distinct, intentional, and authentic.
              </p>
              <div className="mt-2 grid gap-2 md:grid-cols-[1.35fr_1fr] xl:gap-3">
                <video
                  src={MEDIA.featuredVideo}
                  controls
                  preload="metadata"
                  className="min-h-[220px] w-full rounded border border-zinc-800 bg-black object-cover md:min-h-[260px] xl:min-h-[320px]"
                />
                <div className="space-y-2 xl:space-y-3">
                  {advantages.slice(0, 2).map((advantage) => (
                    <article
                      key={advantage.title}
                      className="rounded border border-zinc-800 bg-zinc-900/70 p-3 xl:p-4"
                    >
                      <h3 className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100 xl:text-sm">
                        {advantage.title}
                      </h3>
                      <p className="mt-2 text-[10px] leading-relaxed text-zinc-400 xl:text-xs">
                        {advantage.text}
                      </p>
                    </article>
                  ))}
                  <Link
                    href="/gallery"
                    className="flex items-center justify-between rounded border border-zinc-800 bg-zinc-900/70 p-3 hover:bg-zinc-800/70 transition-colors xl:p-4"
                  >
                    <h3 className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100 xl:text-sm">
                      Explore more videos
                    </h3>
                    <span className="text-xs text-zinc-400 xl:text-sm">→</span>
                  </Link>
                </div>
              </div>
              <div className="mt-2 grid gap-2 md:grid-cols-[1fr_1.2fr] xl:gap-3">
                <div className="space-y-2 xl:space-y-3">
                  {advantages.slice(2).map((advantage) => (
                    <article
                      key={advantage.title}
                      className="rounded border border-zinc-800 bg-zinc-900/70 p-3 xl:p-4"
                    >
                      <h3 className="text-[11px] font-semibold uppercase tracking-wide text-zinc-100 xl:text-sm">
                        {advantage.title}
                      </h3>
                      <p className="mt-2 text-[10px] leading-relaxed text-zinc-400 xl:text-xs">
                        {advantage.text}
                      </p>
                    </article>
                  ))}
                </div>
                <div
                  className="min-h-[220px] rounded border border-zinc-800 bg-cover bg-center xl:min-h-[280px]"
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
