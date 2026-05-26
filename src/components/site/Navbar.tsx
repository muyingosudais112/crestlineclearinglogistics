import { useState } from "react";
import { Menu, X, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Why Choose Us", to: "/why-us" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/90 backdrop-blur-lg border-b border-white/10 shadow-elegant">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-white">
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
            <Ship className="w-5 h-5 text-navy-deep" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base">Crestline</div>
            <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Clearing & Logistics</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-white after:w-full" }}
              className="text-sm text-white/80 hover:text-white font-medium transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg" variant="gold" className="hover:-translate-y-0.5 transition-smooth font-semibold">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10 animate-fade-up">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-gold" }}
                className="text-white/90 hover:text-gold font-medium transition-smooth"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="lg" variant="gold" className="mt-2 font-semibold">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
