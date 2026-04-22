"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { X } from "lucide-react";

/* ==========================================================================
   IMAGE CONFIGURATION - Replace these URLs with your own images
   
   TIP: Images are organized by section. Replace each URL with your own.
   Keep the same aspect ratios for best results:
   - Published Works: 4:3 ratio (800x600)
   - Static Ads: 4:3 ratio (800x600)
   - Photography: 1:1 ratio (square, 400x400)
   ========================================================================== */

const IMAGES = {
  headerBg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",

  // Published Works - Videos/posts with external links
  publishedWorks: [
    {
      image: "/pfolio/image/sendcash-receive.png",
      link: "https://www.facebook.com/watch/?v=278087179945100",
      title: "Send Cash & Receive",
    },
    {
      image: "/pfolio/image/gallery/PaSurprise.png",
      link: "https://www.facebook.com/watch/?v=587946178810137",
      title: "PNB PaSurprise",
    },
    {
      image: "/pfolio/image/PhishingVid-2.png",
      link: "https://www.facebook.com/watch/?v=521594662444779",
      title: "Phishing Awareness",
    },
  ],
  staticAds: [
    "/pfolio/image/gallery/PNBSG-Ad1.jpg",
    "/pfolio/image/gallery/PNBDigital-Ad1.jpg",
    "/pfolio/image/gallery/LIV-Beauty.jpg",
    "/pfolio/image/gallery/LIV-Home.jpg",
    "/pfolio/image/gallery/LIV-Home2.jpg",
    "/pfolio/image/gallery/LIV-Paper.jpg",
    "/pfolio/image/gallery/LIV-Med.jpg",
    "/pfolio/image/gallery/LIV-Vet.jpg",
  ],

  // Photography Archive - Square images
  photography: [
    "/pfolio/image/gallery/shot4.jpg",
    "/pfolio/image/gallery/shot2.JPG",
    "/pfolio/image/gallery/shot3.JPG",
    "/pfolio/image/gallery/shot7.JPG",
    "/pfolio/image/gallery/shot8.JPG",
    "/pfolio/image/gallery/shot9.JPG",
    "/pfolio/image/gallery/shot12.JPG",
    "/pfolio/image/gallery/shot15.JPG",
    "/pfolio/image/gallery/shot16.JPG",
    "/pfolio/image/gallery/shot20.JPG",
    "/pfolio/image/gallery/shot23.JPEG",
    "/pfolio/image/gallery/shot25.JPEG",
    "/pfolio/image/gallery/shot26.JPG",
    "/pfolio/image/gallery/shot33.JPG",
    "/pfolio/image/gallery/shot35.JPG",
    "/pfolio/image/gallery/shot38.JPG",
    "/pfolio/image/gallery/shot39.JPG",
    "/pfolio/image/gallery/shote44.JPG",
    "/pfolio/image/gallery/shot45.JPG",
    "/pfolio/image/gallery/shot47.JPEG",
    "/pfolio/image/gallery/shot51.JPG",
    "/pfolio/image/gallery/shot54.JPG",
    "/pfolio/image/gallery/shot59.JPG",
    "/pfolio/image/gallery/shot60.JPG",
    "/pfolio/image/gallery/shot62.JPG",
    "/pfolio/image/pinats1.JPG",
    "/pfolio/image/marduq1.JPG",
  ],

  videography: [
    {
      src: "/pfolio/videos/60-magnolia.mp4",
      title: "60 Magnolia",
    },
    {
      src: "/pfolio/videos/cabangan-2026.mp4",
      title: "Cabangan 2026",
    },
  ],
};

/* ========================================================================== */

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <PageHeader
        title="My Works"
        breadcrumb="My Works"
        backgroundImage={IMAGES.headerBg}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-8 rounded-lg border border-zinc-800 bg-[#0d0d0d] p-4 md:p-6">
            <section>
              <div className="mb-12">
                <h2 className="mb-2 font-serif text-3xl font-bold">Published Works</h2>
                <p className="text-sm uppercase tracking-wider text-zinc-400">
                  Click to view live on Facebook
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {IMAGES.publishedWorks.map((work, index) => (
                  <a
                    key={index}
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-[4/3] overflow-hidden rounded border border-zinc-800"
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/40" />
                    <div className="absolute bottom-4 right-4 bg-zinc-100/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View Post ↗
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 font-serif text-3xl font-bold">Static Ads & Key Visuals</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {IMAGES.staticAds.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded border border-zinc-800"
                  >
                    <Image
                      src={image}
                      alt={`Static Ad ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 font-serif text-3xl font-bold">Videography</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {IMAGES.videography.map((video) => (
                  <article
                    key={video.title}
                    className="overflow-hidden rounded border border-zinc-800 bg-zinc-900/70"
                  >
                    <video
                      src={video.src}
                      controls
                      preload="metadata"
                      className="aspect-video w-full bg-black"
                    />
                    <p className="px-4 py-3 text-sm text-zinc-300">{video.title}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 font-serif text-3xl font-bold">Photography Archive</h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {IMAGES.photography.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded border border-zinc-800"
                  >
                    <Image
                      src={image}
                      alt={`Photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative h-[85vh] w-[90vw] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
