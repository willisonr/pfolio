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
      image: "/pfolio/images/gallery/pasurprise.png",
      link: "https://www.facebook.com/watch/?v=587946178810137",
      title: "PNB PaSurprise",
    },
    {
      image: "/pfolio/images/gallery/sendcash-receive.png",
      link: "https://www.facebook.com/watch/?v=278087179945100",
      title: "Send Cash & Receive",
    },
    {
      image: "/pfolio/images/gallery/phishingvid-2.png",
      link: "https://www.facebook.com/watch/?v=521594662444779",
      title: "Phishing Awareness",
    },
  ],
  staticAds: [
    "/pfolio/images/gallery/liv-beauty.jpg",
    "/pfolio/images/gallery/liv-home.jpg",
    "/pfolio/images/gallery/liv-home2.jpg",
    "/pfolio/images/gallery/liv-paper.jpg",
    "/pfolio/images/gallery/liv-med.jpg",
    "/pfolio/images/gallery/liv-vet.jpg",
    "/pfolio/images/gallery/strength-solidarity.jpg",
    "/pfolio/images/gallery/pangarap-home-loan.jpg",
    "/pfolio/images/gallery/proj-planet-logo.png",
  ],

  // Photography Archive - Square images
  photography: [
    "/pfolio/images/gallery/shot4.jpg",
    "/pfolio/images/gallery/shot2.jpg",
    "/pfolio/images/gallery/shot3.jpg",
    "/pfolio/images/gallery/shot7.jpg",
    "/pfolio/images/gallery/shot8.jpg",
    "/pfolio/images/gallery/shot9.jpg",
    "/pfolio/images/gallery/shot12.jpg",
    "/pfolio/images/gallery/shot15.jpg",
    "/pfolio/images/gallery/shot16.jpg",
    "/pfolio/images/gallery/shot20.jpg",
    "/pfolio/images/gallery/shot23.jpeg",
    "/pfolio/images/gallery/shot25.jpeg",
    "/pfolio/images/gallery/shot26.jpg",
    "/pfolio/images/gallery/shot33.jpg",
    "/pfolio/images/gallery/shot35.jpg",
    "/pfolio/images/gallery/shot38.jpg",
    "/pfolio/images/gallery/shot39.jpg",
    "/pfolio/images/gallery/shote44.jpg",
    "/pfolio/images/gallery/shot45.jpg",
    "/pfolio/images/gallery/shot47.jpeg",
    "/pfolio/images/gallery/shot51.jpg",
    "/pfolio/images/gallery/shot54.jpg",
    "/pfolio/images/gallery/shot59.jpg",
    "/pfolio/images/gallery/shot60.jpg",
    "/pfolio/images/gallery/shot62.jpg",
  ],

  videography: [
    {
      src: "/pfolio/videos/Guam-v4_1.mp4",
      title: "Guam",
    },
    {
      src: "/pfolio/videos/60-magnolia.mp4",
      title: "60 Magnolia",
    },
    {
      src: "/pfolio/videos/cabangan-2026.mp4",
      title: "Cabangan 2026",
    },
    {
      src: "/pfolio/videos/cards1.mp4",
      title: "Cards Animation",
    },
    {
      src: "/pfolio/videos/obb-mardigras-intro.mp4",
      title: "Mardi Gras Intro",
    },
    {
      src: "/pfolio/videos/qrph-x-pnb.mp4",
      title: "QR Ph x PNB",
    },
    {
      src: "/pfolio/videos/worlds-ocean-day.mp4",
      title: "World's Ocean Day",
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
        <div className="mx-auto max-w-4xl px-4 xl:max-w-6xl 2xl:max-w-7xl">
          <div className="space-y-8 rounded-lg border border-zinc-800 bg-[#0d0d0d] p-4 md:p-6 xl:p-8">
            <section>
              <div className="mb-12 xl:mb-16">
                <h2 className="mb-2 font-serif text-3xl font-bold xl:text-4xl">Published Works</h2>
                <p className="text-sm uppercase tracking-wider text-zinc-400 xl:text-base">
                  Click to view live on Facebook
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-8">
                {IMAGES.publishedWorks.map((work, index) => (
                  <div key={index} className="space-y-3 xl:space-y-4">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block aspect-[4/3] overflow-hidden rounded border border-zinc-800"
                    >
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-medium backdrop-blur-md xl:px-6 xl:py-3 xl:text-sm">
                          View Post
                        </span>
                      </div>
                    </a>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-100 xl:text-base">{work.title}</h3>
                      <p className="text-[10px] text-zinc-500 xl:text-xs">Published by Philippine National Bank</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 font-serif text-3xl font-bold xl:text-4xl">Static Ads & Key Visuals</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:gap-6">
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
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100 xl:text-xs">
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 font-serif text-3xl font-bold xl:text-4xl">Videography</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-6">
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
                    <p className="px-4 py-3 text-sm text-zinc-300 xl:px-6 xl:py-4 xl:text-base">{video.title}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 font-serif text-3xl font-bold xl:text-4xl">Photography Archive</h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-3">
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
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100 xl:text-xs">
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
              unoptimized
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
