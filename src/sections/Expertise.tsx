import { ArrowRight } from "lucide-react";
import { expertiseList } from "../lib/data";
import FlipCard from "../components/FlipCard";

export default function Expertise() {
  return (
    <section id="expertise" className="px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
          Deep Skills
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]">
          What I master
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {expertiseList.map((e, i) => (
            <FlipCard
              key={e.num}
              delay={(i % 2) * 0.1}
              className="h-32"
              front={
                <div className="h-32 border border-gray-200 bg-white p-6 flex items-center justify-between">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs text-[#191919]/40">{e.num}</span>
                    <div className="font-medium text-[#191919]">{e.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              }
              back={
                <div className="h-32 border border-lime bg-lime-soft p-6 flex items-center">
                  <p className="text-sm text-[#191919]/80 leading-relaxed">{e.desc}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
