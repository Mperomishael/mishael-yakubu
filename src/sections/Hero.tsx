import { ArrowRight } from "lucide-react";
import HeroBackdrop from "../components/HeroBackdrop";
import SocialLinks from "../components/SocialLinks";
import { heroRows, siteConfig } from "../lib/data";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden min-h-screen">
      <HeroBackdrop />

      <div className="relative z-10 flex flex-col items-center pt-28 sm:pt-32 md:pt-40 px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-lime/40 bg-lime/10 text-lime text-[11px] uppercase tracking-[0.2em] font-medium">
          Web Dev · AI · Automation
        </span>

        <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tighter text-white font-normal">
          Gone Digital.
          <br />
          <span className="text-lime">The future is now.</span>
        </h1>

        <p className="max-w-sm sm:max-w-lg mt-6 sm:mt-8 text-sm md:text-base text-white/60 leading-relaxed">
          {siteConfig.name} — web developer, tech coach, and founder of{" "}
          {siteConfig.agency}. Building modern digital experiences and
          mentoring the next generation of African developers.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-lime text-[#0d0d0d] text-sm font-semibold rounded-full hover:bg-lime/90 transition-colors duration-200"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#career"
            className="px-7 py-3.5 border border-white/20 text-white text-sm font-medium rounded-full hover:border-lime/60 hover:text-lime transition-colors duration-200"
          >
            See What I Do
          </a>
        </div>

        <SocialLinks
          className="mt-8 sm:mt-10 [&>a]:border-white/15 [&>a]:text-white/60 [&>a:hover]:text-lime [&>a:hover]:border-lime/50 [&>a:hover]:bg-lime/10"
        />
      </div>

      {/* bottom stat / quick-nav strip */}
      <div className="relative z-10 mt-auto w-full max-w-5xl px-4 sm:px-6 pb-8 sm:pb-10">
        <div className="grid sm:grid-cols-3 gap-2 sm:gap-3">
          {heroRows.map((row) => (
            <a
              key={row.num}
              href="#career"
              className="group bg-white/5 hover:bg-lime/10 border border-white/10 hover:border-lime/40 backdrop-blur-sm transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between"
            >
              <span>
                <span className="text-lime/70">{row.num}</span>
                <span className="mx-2 text-white/20">/</span>
                <span className="font-medium text-white/90">{row.label}</span>
              </span>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-lime group-hover:translate-x-0.5 transition-all duration-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
