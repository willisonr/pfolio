"use client";

import Link from "next/link";
import { useState } from "react";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  backgroundImage?: string;
  showDownload?: boolean;
}

const basePath = "/pfolio";

export function PageHeader({
  title,
  breadcrumb,
  backgroundImage = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=400&fit=crop&q=80",
  showDownload = false,
}: PageHeaderProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      const response = await fetch(`${basePath}/Willison_Roces_Resume.pdf`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Willison_Roces_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="relative overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-lg border border-zinc-800 bg-[#0d0d0d]/95 px-6 py-10 text-center shadow-2xl shadow-black/40">
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            {breadcrumb}
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">{title}</h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <Link href="/" className="transition-colors hover:text-zinc-100">
              Home
            </Link>
            <span>/</span>
            <span className="text-zinc-200">{breadcrumb}</span>
            {showDownload && (
              <>
                <span>/</span>
                <a
                  href={`${basePath}/Willison_Roces_Resume.pdf`}
                  onClick={handleDownload}
                  className={`font-semibold underline underline-offset-4 transition-colors ${
                    isDownloading 
                      ? "text-zinc-500 decoration-zinc-700" 
                      : "text-zinc-100 decoration-zinc-500 hover:text-white hover:decoration-white"
                  }`}
                >
                  {isDownloading ? "Downloading..." : "Download PDF"}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
