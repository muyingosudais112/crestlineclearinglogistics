import craneLogo from "@/assets/crane-logo.png";

export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src={craneLogo}
      alt="Crestway Crowned Crane logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function LogoLockup() {
  return (
    <div className="flex items-center gap-2.5 text-white">
      <Logo size={42} className="drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]" />
      <div className="leading-tight">
        <div className="font-display font-bold text-base">Crestway</div>
        <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Clearing & Logistics</div>
      </div>
    </div>
  );
}
