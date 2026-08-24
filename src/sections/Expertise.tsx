import { ArrowRight } from "lucide-react";
import { expertiseList } from "../lib/data";

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

        <div className="mt-10 border-t border-gray-200">
          {expertiseList.map((e) => (
            <div
              key={e.num}
              className="group flex items-center justify-between gap-6 py-5 sm:py-6 border-b border-gray-200 hover:bg-[#F4F3F3] transition-colors duration-200 px-2 -mx-2 cursor-pointer"
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="text-xs text-[#191919]/40 w-6">{e.num}</span>
                <div>
                  <div className="font-medium text-[#191919]">{e.title}</div>
                  <div className="mt-1 text-sm text-[#191919]/70 leading-relaxed max-w-xl">
                    {e.desc}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
