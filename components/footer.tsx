import Link from "next/link";
import { Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  pages: [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "My Works", href: "/gallery" },
  ],
  contact: [
    { icon: "location", text: "Based in the Philippines" },
    { icon: "phone", text: "+63 XXX XXX XXXX" },
    { icon: "email", text: "willisonroces@gmail.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg border border-zinc-800 bg-[#0d0d0d] p-6 md:p-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-foreground">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-background"
                >
                  <polygon points="5,3 19,12 5,21" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight">
                  WILLISON
                </span>
                <span className="text-[10px] tracking-[0.2em] text-zinc-500">
                  STUDIO
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-sm text-zinc-400">
              Visual storyteller crafting motion graphics, video content, and
              graphic design that brings stories to life.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-foreground hover:text-background"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-foreground hover:text-background"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-foreground hover:text-background"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold">Pages</h3>
            <ul className="space-y-4">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-sm font-semibold">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <svg
                  className="h-5 w-5 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Based in the Philippines
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:willisonroces@gmail.com"
                  className="transition-colors hover:text-foreground"
                >
                  willisonroces@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <a
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Behance Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            Copyright &copy; {new Date().getFullYear()} Willison Roces | Visual
            Storyteller
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
