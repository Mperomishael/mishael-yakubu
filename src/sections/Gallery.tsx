import { galleryItems } from "../lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
          Visual Archive
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]">
          Mishael in frame
        </h2>
        <p className="mt-4 max-w-lg text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
          A visual journey through the life and work of Mishael Yakubu —
          developer, educator, entrepreneur.
        </p>

        <div className="mt-10 columns-2 md:columns-3 gap-3 sm:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4">
          {galleryItems.map((g, i) => (
            <div key={i} className="group relative overflow-hidden bg-[#F4F3F3] break-inside-avoid">
              <img
                src={g.src}
                alt={`${g.title} — Mishael Yakubu Empire Digitals`}
                loading="lazy"
                style={{ aspectRatio: g.aspect }}
                className="w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-sm font-medium">{g.title}</p>
                <p className="text-white/70 text-xs">{g.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
