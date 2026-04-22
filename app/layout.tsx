import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Willison Roces | Visual Storyteller & Designer",
  description:
    "Portfolio of Willison Roces - Motion Graphics, Video Editing, Graphic Design & Photography based in the Philippines.",
};

const basePath = "/pfolio";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
