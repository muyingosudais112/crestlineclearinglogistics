import { Ship, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Ship className="w-5 h-5 text-navy-deep" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold">Crestline</div>
                <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Clearing & Logistics</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Crestline Clearing & Logistics (U) Ltd is a Kampala-based customs clearing and freight
              forwarding company helping importers, exporters and corporates move cargo efficiently
              across Uganda and the world.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy-deep transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
                ["Why Us", "#why"], ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-gold transition-smooth">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-gold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Kampala, Uganda</li>
              <li><a href="tel:+256778370959" className="hover:text-gold transition-smooth">+256 778 370959</a></li>
              <li><a href="mailto:info@crestlinelogistics.co.ug" className="hover:text-gold transition-smooth">info@crestlinelogistics.co.ug</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Crestline Clearing & Logistics (U) Ltd. All rights reserved.</div>
          <div>Built for businesses that move the world.</div>
        </div>
      </div>
    </footer>
  );
}
