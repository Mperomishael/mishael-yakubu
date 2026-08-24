import { images, siteConfig } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
          Who He Is
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16 items-start">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div
              className="col-span-2 overflow-hidden bg-[#F4F3F3]"
              style={{ aspectRatio: images.about1.aspect }}
            >
              <img
                src={images.about1.src}
                alt="Mishael Yakubu working at Empire Digitals Worldwide studio"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden bg-[#F4F3F3]" style={{ aspectRatio: images.about2.aspect }}>
              <img
                src={images.about2.src}
                alt="Mishael Yakubu coding session"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden bg-[#F4F3F3]" style={{ aspectRatio: images.about3.aspect }}>
              <img
                src={images.about3.src}
                alt="Mishael Yakubu tech coaching"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]">
              The visionary
            </h2>
            <div className="mt-6 space-y-4 text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
              <p>
                Mishael Yakubu is a visionary web developer and entrepreneur
                based in {siteConfig.location}. Born in {siteConfig.birthPlace},
                he carries the spirit of the north and the drive of the
                south. As the founder of {siteConfig.agency}, he combines
                creativity, code, and cutting-edge technology to craft
                digital solutions that truly matter.
              </p>
              <div className="border-l-2 border-[#191919]/15 pl-4 py-1 font-serif text-lg sm:text-xl text-[#191919]">
                "The future belongs to those who code it."
              </div>
              <p>
                Beyond building sleek interfaces and robust backends,
                Mishael is equally committed to education and community
                empowerment — mentoring aspiring programmers and creating
                accessible learning resources.
              </p>
              <p>
                Under his leadership, {siteConfig.agency} has grown from a
                solo studio into a dynamic agency tackling pan-African
                projects that bridge real-world challenges with elegant
                digital experiences.
              </p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#191919]/50">
              <span>🎂</span>
              <span>Born June 18, 2000 · Minna, Niger State</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
