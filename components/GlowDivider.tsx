export default function GlowDivider() {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-500/10 to-transparent blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-blue-400/40" />
    </div>
  );
}
