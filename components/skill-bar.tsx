"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}
