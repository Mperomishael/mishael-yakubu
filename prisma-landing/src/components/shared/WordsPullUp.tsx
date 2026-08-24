import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  staggerDelay?: number;
}

export default function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  staggerDelay = 0.08,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        const showMark = showAsterisk && isLast;
        const base = showMark ? word.slice(0, -1) : word;
        const finalChar = showMark ? word.slice(-1) : "";

        return (
          <span key={i} className="overflow-hidden inline-block mr-[0.25em] last:mr-0">
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: i * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {base}
              {showMark && (
                <>
                  {finalChar}
                  <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
                </>
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
