import uraLogo from "@/assets/partners/ura.png";
import maerskLogo from "@/assets/partners/maersk.svg";
import unbsLogo from "@/assets/partners/unbs.png";
import dhlLogo from "@/assets/partners/dhl.svg";
import ursbLogo from "@/assets/partners/ursb.png";

const partners = [
  {
    name: "Uganda Revenue Authority",
    short: "URA",
    href: "https://www.ura.go.ug",
    logo: uraLogo,
  },
  {
    name: "Maersk",
    short: "MAERSK",
    href: "https://www.maersk.com",
    logo: maerskLogo,
  },
  {
    name: "Uganda National Bureau of Standards",
    short: "UNBS",
    href: "https://www.unbs.go.ug",
    logo: unbsLogo,
  },
  {
    name: "DHL",
    short: "DHL",
    href: "https://www.dhl.com",
    logo: dhlLogo,
  },
  {
    name: "Uganda Registration Services Bureau",
    short: "URSB",
    href: "https://ursb.go.ug",
    logo: ursbLogo,
  },
];

function LogoFallback({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full font-display font-bold text-navy text-lg tracking-wider">
      {label}
    </div>
  );
}

export function Partners() {
  // Duplicate for seamless marquee
  const loop = [...partners, ...partners];

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-3">
            Our Network
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy leading-tight mb-4">
            Trusted Partners & Regulatory Authorities
          </h2>
          <p className="text-muted-foreground">
            We work alongside leading global carriers and national authorities to keep your cargo
            compliant and moving.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-5 gap-5">
          {partners.map((p) => (
            <a
              key={p.short}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="group relative aspect-[3/2] flex items-center justify-center rounded-xl bg-white border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 hover:border-gold/40 transition-smooth p-6"
            >
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = "none";
                  const fb = img.nextElementSibling as HTMLElement | null;
                  if (fb) fb.style.display = "flex";
                }}
                className="max-h-14 max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <span style={{ display: "none" }} className="absolute inset-0 items-center justify-center">
                <LogoFallback label={p.short} />
              </span>
            </a>
          ))}
        </div>

        {/* Mobile marquee */}
        <div className="md:hidden relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 animate-marquee w-max">
            {loop.map((p, i) => (
              <a
                key={`${p.short}-${i}`}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                className="relative shrink-0 w-40 h-24 flex items-center justify-center rounded-xl bg-white border border-border shadow-card p-4"
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const fb = img.nextElementSibling as HTMLElement | null;
                    if (fb) fb.style.display = "flex";
                  }}
                  className="max-h-12 max-w-full object-contain"
                />
                <span style={{ display: "none" }} className="absolute inset-0 items-center justify-center">
                  <LogoFallback label={p.short} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
