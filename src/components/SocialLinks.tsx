import { LinkedinIcon, FacebookIcon, YoutubeIcon } from "./BrandIcons";
import TikTokIcon from "./TikTokIcon";
import { siteConfig } from "../lib/data";

const links = [
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: siteConfig.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export default function SocialLinks({ className = "", iconClassName = "w-4 h-4" }: { className?: string; iconClassName?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group w-9 h-9 rounded-full border border-[#191919]/15 flex items-center justify-center text-[#191919]/60 hover:text-[#191919] hover:border-lime hover:bg-lime-soft transition-all duration-200"
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
