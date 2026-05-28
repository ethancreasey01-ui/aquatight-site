import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const hoverAqua = (e) => (e.currentTarget.style.color = "#7dd8e8");
  const resetColor = (e) => (e.currentTarget.style.color = "");

  return (
    <footer style={{ backgroundColor: "#1a1a1a" }} className="text-neutral-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/logos/aqua-tight.png"
                alt="Aquatight Waterproofing"
                className="h-16 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-xs leading-relaxed mb-3">
              Melbourne's certified waterproofing specialists — bathrooms, balconies, tiling,
              rectification works, and the Versipave Pod System.
            </p>
            <div className="text-xs space-y-0.5">
              <div>18+ Years Experience</div>
              <div>AS3740 Certified · Fully Insured</div>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-3 text-sm">Services</div>
            <ul className="space-y-1.5 text-xs">
              {[
                "One Stop Service",
                "Waterproofing Bathrooms",
                "Rectification Works",
                "Renovations",
                "Tiling",
                "Versipave Pod System",
                "Over Existing Hard Surfaces",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" onMouseEnter={hoverAqua} onMouseLeave={resetColor} className="transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-3 text-sm">Contact</div>
            <div className="space-y-2 text-xs">
              <a href="tel:0438499146" onMouseEnter={hoverAqua} onMouseLeave={resetColor} className="flex items-center gap-2 transition-colors">
                <Phone className="w-3.5 h-3.5" /> 0438 499 146
              </a>
              <a href="mailto:info@aquatightwaterproofing.au" onMouseEnter={hoverAqua} onMouseLeave={resetColor} className="flex items-center gap-2 transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@aquatightwaterproofing.au
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>PO BOX 3109, Mentone East VIC 3194</span>
              </div>
              <a
                href="https://cherrybuilds.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={hoverAqua}
                onMouseLeave={resetColor}
                className="flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Cherry Builds
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>© {new Date().getFullYear()} Aquatight Waterproofing. All rights reserved.</div>
          <div className="text-neutral-600">Canteen Australia Sponsor · Master Tradesman Certified</div>
        </div>
      </div>
    </footer>
  );
}
