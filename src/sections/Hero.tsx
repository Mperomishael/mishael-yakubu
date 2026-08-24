import { ArrowRight } from "lucide-react";
import BoomerangVideoBg from "../components/BoomerangVideoBg";
import { heroRows, siteConfig } from "../lib/data";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden h-screen">
      <BoomerangVideoBg />

      <div className="relative z-10 flex flex-col items-center pt-24 sm:pt-26 md:pt-32 px-4 sm:px-6 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter text-[#191919] font-normal">
          Build lasting
          <br />
          relationships.
        </h1>
        <p className="max-w-sm sm:max-w-md mt-5 sm:mt-6 md:mt-8 text-sm md:text-base text-[#191919]/70 leading-relaxed">
          Web developer, tech coach, and founder of {siteConfig.agency} —
          crafting digital solutions that shape Africa's future, one line of
          code at a time.
        </p>
        <a
          href="#contact"
          className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
        >
          Get In Touch
        </a>
      </div>

      <div className="relative z-10 mt-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-8 sm:pt-12 md:pt-16 px-5 sm:px-8 md:px-12 pb-0 shadow-sm">
          <div className="grid gap-6 sm:gap-8 md:gap-16 md:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
                Who Is He?
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-normal leading-tight tracking-tight">
                A visionary <br className="hidden sm:block" />
                developer &amp; educator
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
                Based in {siteConfig.location}, Mishael combines creativity,
                code, and cutting-edge technology — mentoring the next
                generation of African developers while building for clients
                across the continent.
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gray-200 w-full" />

          <div className="grid sm:grid-cols-3 gap-2 sm:gap-3 py-2 sm:py-3">
            {heroRows.map((row) => (
              <a
                key={row.num}
                href="#career"
                className="group bg-[#F4F3F3] hover:bg-[#eaeaea] transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between"
              >
                <span>
                  <span className="text-[#191919]/40">{row.num}</span>
                  <span className="mx-2 text-[#191919]/30">/</span>
                  <span className="font-medium">{row.label}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
