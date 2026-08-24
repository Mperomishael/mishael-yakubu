import { ArrowRight } from "lucide-react";
import { siteConfig } from "../lib/data";
import SocialLinks from "../components/SocialLinks";

const waText = encodeURIComponent(
  "Hi Mishael! I visited your portfolio and I'd love to discuss a project with Empire Digitals Worldwide."
);

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
            Reach Out
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]">
            Let's build
            <br />
            something
          </h2>
          <p className="mt-5 text-sm md:text-[15px] text-[#191919]/70 leading-relaxed max-w-md">
            Ready to turn your bold idea into a digital reality? Whether you
            need web development, tech coaching, AI automation, graphic
            design, or video production — Mishael and {siteConfig.agency}{" "}
            are ready for your project.
          </p>

          <div className="mt-8 space-y-px bg-gray-200">
            <a href={`tel:${siteConfig.phones[0]}`} className="flex items-center justify-between bg-white px-4 py-4 hover:bg-[#F4F3F3] transition-colors duration-200">
              <div>
                <div className="text-xs text-[#191919]/50">Phone · Primary</div>
                <div className="text-sm font-medium">+234 814 265 6848</div>
              </div>
            </a>
            <a href={`tel:${siteConfig.phones[1]}`} className="flex items-center justify-between bg-white px-4 py-4 hover:bg-[#F4F3F3] transition-colors duration-200">
              <div>
                <div className="text-xs text-[#191919]/50">Phone · Secondary</div>
                <div className="text-sm font-medium">+234 708 675 7575</div>
              </div>
            </a>
            <div className="flex items-center justify-between bg-white px-4 py-4">
              <div>
                <div className="text-xs text-[#191919]/50">Location</div>
                <div className="text-sm font-medium">{siteConfig.location}</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.15em] text-[#191919]/50 mb-3">Follow</p>
            <SocialLinks />
          </div>
        </div>

        <div className="bg-[#191919] text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl">Message on WhatsApp</h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              The fastest way to reach Mishael. Tap below to open a
              conversation directly — available for project inquiries,
              coaching questions, and collaborations.
            </p>
          </div>
          <div className="mt-8 space-y-3">
            <a
              href={`${siteConfig.social.whatsapp1}?text=${waText}`}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between px-5 py-4 bg-white/10 hover:bg-lime/10 hover:border-lime/40 border border-transparent transition-colors duration-200"
            >
              <div>
                <div className="text-sm font-medium">WhatsApp — Primary Line</div>
                <div className="text-xs text-white/60">+234 814 265 6848</div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-lime group-hover:translate-x-0.5 transition-all duration-200" />
            </a>
            <a
              href={`${siteConfig.social.whatsapp2}?text=${waText}`}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between px-5 py-4 bg-white/10 hover:bg-lime/10 hover:border-lime/40 border border-transparent transition-colors duration-200"
            >
              <div>
                <div className="text-sm font-medium">WhatsApp — Secondary Line</div>
                <div className="text-xs text-white/60">+234 708 675 7575</div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-lime group-hover:translate-x-0.5 transition-all duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
