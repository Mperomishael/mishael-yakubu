import { stripItems } from "../lib/data";
import TappableImage from "../components/TappableImage";

export default function Strip() {
  return (
    <section className="px-6 sm:px-10 md:px-14 py-16 sm:py-20 bg-[#F4F3F3]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium mb-6">
          More Moments
        </p>
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
          {stripItems.map((s, i) => (
            <div key={i} className="group relative overflow-hidden bg-white" style={{ aspectRatio: "1/1" }}>
              <TappableImage
                src={s.src}
                alt={`${s.title} — Mishael Yakubu`}
                caption={`${s.title} · ${s.sub}`}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-sm font-medium">{s.title}</p>
                <p className="text-white/70 text-xs">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
