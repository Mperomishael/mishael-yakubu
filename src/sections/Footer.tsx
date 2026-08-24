import SocialLinks from "../components/SocialLinks";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 md:px-14 py-10 border-t border-gray-200 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <p className="font-serif text-lg text-white">Mishael Yakubu</p>
          <p className="mt-1 text-xs text-white/40">
            © 2026 Empire Digitals Worldwide · Delta State, Nigeria
          </p>
        </div>
        <SocialLinks className="[&>a]:border-white/15 [&>a]:text-white/60 [&>a:hover]:text-lime [&>a:hover]:border-lime/50 [&>a:hover]:bg-lime/10" />
      </div>
    </footer>
  );
}
