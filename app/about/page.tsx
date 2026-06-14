import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { MapPin } from "lucide-react";
const HEADER_BG = "/pfolio/images/gallery/shot16.jpg";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Resume"
        breadcrumb="Resume"
        backgroundImage={HEADER_BG}
        showDownload={true}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 xl:max-w-6xl 2xl:max-w-7xl">
          <div className="space-y-8 rounded-lg border border-zinc-800 bg-[#0d0d0d] p-4 md:p-6 xl:p-8">
            <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-8 xl:p-10">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-3xl font-bold xl:text-4xl">Willison Roces</h2>
                <div className="flex items-center gap-1.5 text-sm text-zinc-400 opacity-70 xl:text-base">
                  <MapPin size={14} className="text-zinc-500 xl:size-[16]" />
                  <span>Makati / Marikina</span>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-zinc-300 xl:text-lg">
                Creative designer with 8+ years in branding, motion graphics, and
                video editing. After leading teams and managing campaigns, I am
                refocusing on hands-on design - creating work that feels honest,
                well-crafted, and true to its story. I value calm, clarity, and
                respect for the creative process.
              </p>
            </section>

            <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-8 xl:p-10">
              <h3 className="text-2xl font-bold xl:text-3xl">Experience</h3>
              <div className="mt-5 space-y-8 text-zinc-300">
                <div>
                  <span className="font-semibold text-foreground text-lg xl:text-xl">
                    Branding and Creative Lead
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic xl:text-base">Philippine National Bank | Nov 2023 – Present</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm xl:text-base">
                    <li>Leads the Creatives & Branding section of the Marketing Division, managing a dedicated team of creative professionals.</li>
                    <li>Directs and standardizes nationwide visual identity requirements across 600+ branches to ensure 100% brand consistency.</li>
                    <li>Oversees end-to-end creative direction, brand strategy, and marketing collateral production for all corporate business units.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg xl:text-xl">
                    Creatives Manager
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic xl:text-base">Philippine National Bank | Sept 2018 – Nov 2023</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm xl:text-base">
                    <li>Directed comprehensive visual branding audits and executed high-impact, multi-channel creative campaigns.</li>
                    <li>Conceptualized and produced high-engagement social media visuals and motion graphics content within an agile operational setup.</li>
                    <li>Developed core brand collaterals, experiential event designs, and digital content utilized across major bank-wide marketing initiatives.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg xl:text-xl">
                    Graphic Designer
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic xl:text-base">Enchanted Kingdom | Oct 2017 – Aug 2018</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm xl:text-base">
                    <li>Designed high-visibility marketing materials and visual assets for major park promotions, seasonal campaigns, and live events.</li>
                    <li>Produced engaging motion graphics and multi-platform promotional videos using Adobe After Effects.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg xl:text-xl">
                    Graphic Designer
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic xl:text-base">E-way Business Inc. (Livingstone) | Jan 2017 – Sept 2017</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm xl:text-base">
                    <li>Created specialized visual assets, brand brochures, and marketing collateral tailored for corporate clients in the Australian market.</li>
                    <li>Delivered scalable, high-quality creative solutions optimized for both digital footprints and traditional print platforms.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg xl:text-xl">
                    Videographer / Video Editor
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic xl:text-base">Project Raw PH | Aug 2016 – Jan 2017</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm xl:text-base">
                    <li>Managed the full post-production and production pipeline for high-end wedding, live event, and corporate promotional videos.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg xl:text-xl">
                    Graphic Designer / Videographer
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic xl:text-base">Goodream Printers Inc. | Jan 2016 – May 2016</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm xl:text-base">
                    <li>Produced creative layouts, print design materials, and targeted video elements for a diverse portfolio of event clients.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-8 xl:p-10">
              <h3 className="text-2xl font-bold xl:text-3xl">Core Skills</h3>
              <ul className="mt-5 space-y-3 text-zinc-300 xl:text-lg">
                <li><strong>Design & Layout:</strong> Adobe Photoshop, Adobe Illustrator, Adobe InDesign</li>
                <li><strong>Video & Motion:</strong> Adobe Premiere Pro, Adobe After Effects, DaVinci Resolve Studio</li>
                <li><strong>Creative Disciplines:</strong> Branding Strategy, Motion Graphics, Video Editing, Photography, Color Grading</li>
                <li><strong>Traditional Arts:</strong> Fine Art Sketching and Painting</li>
              </ul>
            </section>

            <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-8 xl:p-10">
              <h3 className="text-2xl font-bold xl:text-3xl">Education</h3>
              <ul className="mt-5 space-y-3 text-zinc-300 xl:text-lg">
                <li>Far Eastern University | 2010 - 2015</li>
                <li>University of Sto. Tomas | 2008 - 2010</li>
                <li>Our Lady of Perpetual Succor College | 1995 - 2008</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
