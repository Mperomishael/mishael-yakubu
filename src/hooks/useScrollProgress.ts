import { useEffect, useRef, useState } from "react";

/**
 * Tracks how far an element has crossed through a "trigger band" of the
 * viewport and returns a progress value from 0 -> 1. Because progress is
 * recomputed on every scroll tick (not just on enter/exit), animations
 * driven by it naturally retrace themselves when the user scrolls back up.
 */
export function useScrollProgress<T extends HTMLElement>(
  startVh = 0.85,
  endVh = 0.35
) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const compute = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * startVh;
      const end = vh * endVh;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [startVh, endVh]);

  return { ref, progress };
}

