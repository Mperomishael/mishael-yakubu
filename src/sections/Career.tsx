import { careerTracks } from "../lib/data";

export default function Career() {
  return (
    <section id="career" className="px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36 bg-[#F4F3F3]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
          What He Does
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]">
          Career tracks
        </h2>
        <p className="mt-4 max-w-lg text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
          From production-ready code to shaping the next generation of
          African developers — Mishael wears many hats, and wears them all
          exceptionally well.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {careerTracks.map((c) => (
            <div key={c.num} className="bg-white p-6 sm:p-7 hover:bg-[#eaeaea] transition-colors duration-200">
              <span className="text-xs text-[#191919]/40">{c.num}</span>
              <h3 className="mt-3 font-medium text-[#191919]">{c.name}</h3>
              <p className="mt-2 text-sm text-[#191919]/70 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
