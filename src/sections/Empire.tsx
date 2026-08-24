import { images, stats } from "../lib/data";
import TappableImage from "../components/TappableImage";

export default function Empire() {
  return (
    <section id="empire" className="px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36 bg-[#F4F3F3]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
            The Agency
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]">
            Empire Digitals
            <br />
            Worldwide
          </h2>
          <p className="mt-5 text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
            What began as a solo studio in Delta State has grown into a
            dynamic pan-African digital agency. Under Mishael's leadership,
            Empire Digitals Worldwide tackles real-world challenges through
            elegant digital experiences.
          </p>
          <p className="mt-3 text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
            Services span web development, app development, graphic design,
            AI automation, photo &amp; video editing, and technology
            education — all under one roof.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl sm:text-3xl text-lime">{s.num}</div>
                <div className="mt-1 text-xs text-[#191919]/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden bg-white" style={{ aspectRatio: "4/5" }}>
            <TappableImage
              src={images.empireMain}
              alt="Empire Digitals Worldwide — Mishael Yakubu digital agency"
              caption="Empire Digitals Worldwide"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-6 -left-6 w-1/2 overflow-hidden bg-white border-4 border-[#F4F3F3]" style={{ aspectRatio: "4/3" }}>
            <TappableImage
              src={images.empireAccent}
              alt="Mishael Yakubu at Empire Digitals Worldwide studio"
              caption="Mishael Yakubu — studio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
