import { careerTracks } from "../lib/data";
import FlipCard from "../components/FlipCard";

export default function Career() {
  return (
    <section id="career" className="px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-lime font-medium">
          What He Does
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white">
          Career tracks
        </h2>
        <p className="mt-4 max-w-lg text-sm md:text-[15px] text-white/60 leading-relaxed">
          From production-ready code to shaping the next generation of
          African developers — Mishael wears many hats, and wears them all
          exceptionally well. Scroll to flip each card.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {careerTracks.map((c, i) => (
            <FlipCard
              key={c.num}
              delay={(i % 3) * 0.08}
              className="h-48 sm:h-52"
              front={
                <div className="h-48 sm:h-52 border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between">
                  <span className="text-lime/70 text-xs">{c.num}</span>
                  <h3 className="font-serif text-xl text-white">{c.name}</h3>
                </div>
              }
              back={
                <div className="h-48 sm:h-52 border border-lime/40 bg-lime/10 p-6 flex flex-col justify-center">
                  <p className="text-sm text-white/80 leading-relaxed">{c.desc}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
