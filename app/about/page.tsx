import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { MapPin } from "lucide-react";
const HEADER_BG =
  "https://raw.githubusercontent.com/willisonr/pfolio/main/image/Willison_Roces_Resume02.jpg";

const basePath = "/pfolio";

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
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-8 rounded-lg border border-zinc-800 bg-[#0d0d0d] p-4 md:p-6">
            <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-3xl font-bold">Willison Roces</h2>
                <div className="flex items-center gap-1.5 text-sm text-zinc-400 opacity-70">
                  <MapPin size={14} className="text-zinc-500" />
                  <span>Makati / Marikina</span>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-zinc-300">
                Creative designer with 8+ years in branding, motion graphics, and
                video editing. After leading teams and managing campaigns, I am
                refocusing on hands-on design - creating work that feels honest,
                well-crafted, and true to its story. I value calm, clarity, and
                respect for the creative process.
              </p>
            </section>

            <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-8">
              <h3 className="text-2xl font-bold">Experience</h3>
              <div className="mt-5 space-y-8 text-zinc-300">
                <div>
                  <span className="font-semibold text-foreground text-lg">
                    Branding and Creative
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic">Philippine National Bank | Nov 2023 – Present</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Leads the Creatives & Branding section of the Marketing Division.</li>
                    <li>Manages all branding requirements across 600+ branches nationwide.</li>
                    <li>Oversees marketing materials and creative direction for all business units.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg">
                    Creatives Manager
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic">Philippine National Bank | Sept 2018 – Nov 2023</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Directed visual branding audits and handled multi-channel creative campaigns.</li>
                    <li>Developed social media visuals and motion content in an agile setup.</li>
                    <li>Created brand collaterals, event designs, and digital content used across bank-wide initiatives.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg">
                    Graphic Designer
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic">Enchanted Kingdom | Oct 2017 – Aug 2018</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Designed marketing materials for park promotions and events.</li>
                    <li>Produced motion graphics and promotional videos using After Effects.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg">
                    Graphic Designer
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic">E-way Business Inc. (Livingstone) | Jan 2017 – Sept 2017</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Created visual assets and brochures for Australian market clients.</li>
                    <li>Delivered creative solutions for both digital and print platforms.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg">
                    Videographer / Video Editor
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic">Project Raw PH | Aug 2016 – Jan 2017</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Handled full production pipeline for wedding, event, and corporate videos.</li>
                  </ul>
                </div>

                <div>
                  <span className="font-semibold text-foreground text-lg">
                    Graphic Designer / Videographer
                  </span>
                  <br />
                  <span className="text-zinc-400 text-sm italic">Goodream Printers Inc. | Jan 2016 – May 2016</span>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                    <li>Produced design and video materials for various event clients</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-8">
              <h3 className="text-2xl font-bold">Core Skills</h3>
              <ul className="mt-5 space-y-3 text-zinc-300">
                <li>Adobe Photoshop, Illustrator, InDesign</li>
                <li>Adobe Premiere Pro, After Effects, Lightroom</li>
                <li>Branding, Motion Graphics, Video Editing, Photography</li>
                <li>Traditional Media Sketching and Painting</li>
              </ul>
            </section>

            <section className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-8">
              <h3 className="text-2xl font-bold">Education</h3>
              <ul className="mt-5 space-y-3 text-zinc-300">
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
