export default function HeroBackdrop() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0d0d0d]">
      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #A6E22E 1px, transparent 1px), linear-gradient(to bottom, #A6E22E 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          animation: "gridPan 12s linear infinite",
        }}
      />
      {/* glow orbs */}
      <div
        className="absolute -top-32 -left-20 w-[26rem] h-[26rem] rounded-full bg-lime/25 blur-[110px]"
        style={{ animation: "floatSlow 9s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-24 w-[22rem] h-[22rem] rounded-full bg-lime/15 blur-[100px]"
        style={{ animation: "floatSlow 11s ease-in-out infinite reverse" }}
      />
      {/* vignette so foreground text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 via-transparent to-[#0d0d0d]" />
    </div>
  );
}
