import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  staggerDelay?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  className = "",
  staggerDelay = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Flatten all segments into individual words, keeping their segment className
  const words: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      words.push({ word: w, className: seg.className ?? "" });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((w, i) => (
        <span key={i} className={`overflow-hidden inline-block mr-[0.25em] last:mr-0 ${w.className}`}>
          <motion.span
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {w.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
