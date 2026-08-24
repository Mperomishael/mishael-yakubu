import Logo from "./Logo";
import { siteConfig } from "../lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-14 py-4 sm:py-5">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-semibold text-base tracking-tight text-[#191919]">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#191919]/70 hover:text-[#191919] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.social.whatsapp1}
          target="_blank"
          rel="noopener"
          className="px-5 py-2.5 bg-[#191919] text-white text-sm font-medium rounded-lg hover:bg-[#191919]/90 transition-colors duration-200"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
}
