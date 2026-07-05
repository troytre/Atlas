export function HeroBackground() {
  return (
    <>
      {/* Gradient Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 -z-20 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(120,120,120,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(120,120,120,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}