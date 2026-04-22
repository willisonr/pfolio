import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  mediaType?: "image" | "video";
  href?: string;
  isExternal?: boolean;
}

export function ProjectCard({
  title,
  category,
  image,
  mediaType = "image",
  href,
  isExternal = false,
}: ProjectCardProps) {
  const content = (
    <div className="group relative overflow-hidden rounded-lg bg-card aspect-[4/3] cursor-pointer">
      {mediaType === "video" ? (
        <video
          src={image}
          muted
          loop
          autoPlay
          playsInline
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute right-4 top-4 rounded-full border border-foreground/60 bg-background/80 px-3 py-1 text-sm font-serif font-medium tracking-[0.12em] text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        WR
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
    </div>
  );

  if (href) {
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href}>{content}</Link>
    );
  }

  return content;
}
