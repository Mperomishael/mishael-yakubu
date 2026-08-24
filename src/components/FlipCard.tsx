import type { ReactNode } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  delay?: number; // 0-1, offsets when the flip starts within the scroll band
}

/**
 * A card that flips from front -> back as it scrolls up through the
 * viewport, and un-flips back -> front if the user scrolls back down.
 * Because rotation is a direct function of scroll progress (not a
 * one-shot triggered class), the motion is always in sync with the
 * scrollbar in both directions.
 */
export default function FlipCard({ front, back, className = "", delay = 0 }: FlipCardProps) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>(0.9, 0.45);

  const adjusted = Math.min(1, Math.max(0, (progress - delay) / (1 - delay || 1)));
  const rotation = adjusted * 180;
  const opacity = 0.4 + adjusted * 0.6;
  const translateY = (1 - adjusted) * 24;

  return (
    <div
      ref={ref}
      className={`relative [perspective:1200px] ${className}`}
      style={{ opacity, transform: `translateY(${translateY}px)` }}
    >
      <div
        className="relative w-full h-full [transform-style:preserve-3d] transition-none"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className="[backface-visibility:hidden]">{front}</div>
        <div
          className="absolute inset-0 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
