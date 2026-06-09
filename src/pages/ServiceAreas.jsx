import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import WaveDivider from "../components/WaveDivider.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";

const AQUA = "#0a8fa6";
const AQUA_HOVER = "#0a7285";
const AQUA_LIGHT = "#e8f4f7";
const AQUA_ACCENT = "#7dd8e8";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

// ─── Suburb data ─────────────────────────────────────────────────────────────

const AREAS = [
  {
    region: "Bayside",
    color: AQUA,
    suburbs: [
      { name: "Sandringham",   note: "Balcony rectification & bathroom waterproofing" },
      { name: "Brighton",      note: "Bathroom renovations & tiling" },
      { name: "Beaumaris",     note: "Rectification works & balcony drainage" },
      { name: "Mentone",       note: "One-stop waterproofing & renovation" },
      { name: "Cheltenham",    note: "Wet area waterproofing & tiling" },
      { name: "Hampton",       note: "Bathroom & balcony waterproofing" },
    ],
  },
  {
    region: "Mornington Peninsula",
    color: "#0a7285",
    suburbs: [
      { name: "Frankston",     note: "Rectification works & full bathroom renovations" },
      { name: "Mornington",    note: "Waterproofing & tiling specialists" },
      { name: "Mount Eliza",   note: "Balcony waterproofing & Versipave system" },
      { name: "Seaford",       note: "Bathroom waterproofing & tiling" },
      { name: "Langwarrin",    note: "Wet area waterproofing & rectification" },
      { name: "Somerville",    note: "Bathroom renovations & waterproofing" },
    ],
  },
  {
    region: "Eastern Suburbs",
    color: "#075868",
    suburbs: [
      { name: "Glen Waverley", note: "Bathroom & wet area waterproofing" },
      { name: "Knox",          note: "Rectification works & tiling" },
      { name: "Ringwood",      note: "Full waterproofing & renovation service" },
      { name: "Doncaster",     note: "Balcony & bathroom waterproofing" },
      { name: "Berwick",       note: "AS3740 waterproofing & tiling" },
      { name: "Dandenong",     note: "Wet area waterproofing & rectification" },
    ],
  },
];

const SERVICES_SHORTLIST = [
  "Bathroom Waterproofing",
  "Balcony Rectification",
  "Rectification Works",
  "Tiling — All Formats",
  "Versipave Pod System",
  "Full Bathroom Renovations",
  "Over Existing Hard Surfaces",
  "One Stop Service",
];

const RECENT_JOBS = [
  { suburb: "Sandringham", type: "Balcony rectification + Versipave Pod System", year: "2024" },
  { suburb: "Frankston",   type: "Full bathroom waterproofing & tiling",          year: "2025" },
  { suburb: "Brighton",    type: "Rectification works — failed membrane",          year: "2025" },
  { suburb: "Mornington",  type: "New build bathroom waterproofing",               year: "2024" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Service Areas Melbourne | Aquatight Waterproofing</title>
        <meta
          name="description"
          content="Aquatight Waterproofing services Melbourne's Bayside, Mornington Peninsula, and Eastern Suburbs. AS3740-certified waterproofing and tiling specialists covering Sandringham, Brighton, Frankston, Mornington and surrounds."
        />
        <meta property="og:title" content="Service Areas Melbourne | Aquatight Waterproofing" />
        <meta property="og:description" content="Aquatight Waterproofing covers Melbourne's Bayside, Mornington Peninsula, and Eastern Suburbs. AS3740-certified waterproofing specialists." />
        <meta property="og:url" content="https://www.aquatightwaterproofing.au/service-areas" />
        <meta property="og:image" content="https://www.aquatightwaterproofing.au/logos/aqua-tight.png" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.aquatightwaterproofing.au/service-areas" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.aquatightwaterproofing.au/service-areas",
          name: "Aquatight Waterproofing — Melbourne Service Areas",
          provider: { "@id": "https://www.aquatightwaterproofing.au/#business" },
          areaServed: AREAS.flatMap(a => a.suburbs.map(s => ({
            "@type": "City",
            name: `${s.name}, Victoria, Australia`,
          }))),
          serviceType: "Waterproofing",
        })}</script>
      </Helmet>
      <ScrollProgress />

      {/* ── Hero ── */}
      <section
        className="relative h-[44vh] min-h-[320px] overflow-hidden flex items-end"
        style={{ background: "linear-gradient(135deg, #0a1f25 0%, #074955 50%, #0a8fa6 100%)" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(125,216,232,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Large faded map-pin watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none">
          <MapPin className="w-64 h-64 opacity-[0.04] text-white" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,31,37,0.7) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pb-12 pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-col items-start gap-3 mb-5">
              <Link to="/" className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white text-sm transition-colors">
                ← Home
              </Link>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border"
                style={{ backgroundColor: "rgba(10,143,166,0.25)", borderColor: "rgba(10,143,166,0.45)", color: AQUA_ACCENT }}
              >
                <MapPin className="w-3.5 h-3.5" />
                Melbourne, Victoria
              </div>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              Where We Work
            </h1>
            <p className="mt-3 text-neutral-300 max-w-xl">
              Servicing Melbourne's Bayside, Mornington Peninsula, and Eastern Suburbs.
              AS3740-certified waterproofing with a certificate on every job.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider topColor="#074955" bottomColor="#ffffff" height={48} />

      {/* ── Map placeholder + coverage intro ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <motion.div {...fadeUp(0.1)}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA }}>
                Coverage Area
              </span>
              <h2 className="mt-3 font-serif text-4xl font-bold text-neutral-900 leading-tight">
                South-East Melbourne &amp; Peninsula
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Based in Mentone East, Aquatight Waterproofing covers a wide corridor from Melbourne's
                inner Bayside suburbs down through Frankston and the full Mornington Peninsula, plus the
                Eastern Suburbs corridor out to Knox and Ringwood.
              </p>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Every job — regardless of suburb — receives the same AS3740-compliant installation,
                the same licensed waterproofer, and a certificate of compliance on completion.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {SERVICES_SHORTLIST.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: AQUA }} />
                    {s}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all"
                  style={{ backgroundColor: AQUA }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:0438499146"
                  className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-700 hover:border-aqua-300 font-semibold px-6 py-3 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" style={{ color: AQUA }} />
                  0438 499 146
                </a>
              </div>
            </motion.div>

            {/* Right — styled map placeholder */}
            <motion.div {...fadeUp(0.2)}>
              <div
                className="relative rounded-2xl overflow-hidden border border-neutral-200"
                style={{ height: 400, background: "linear-gradient(135deg, #e8f4f7 0%, #d0edf3 100%)" }}
              >
                {/* Decorative suburb dots */}
                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden="true">
                  {/* Rough Melbourne south-east coastline shape */}
                  <path
                    d="M60,80 Q120,60 200,90 Q280,120 340,100 Q360,160 350,220 Q340,280 300,320 Q260,360 200,370 Q140,380 100,340 Q60,300 50,240 Q40,180 60,80Z"
                    fill="rgba(10,143,166,0.08)" stroke="rgba(10,143,166,0.2)" strokeWidth="1.5"
                  />
                  {/* Region labels */}
                  <text x="160" y="140" fontSize="9" fill={AQUA} fontWeight="600" fontFamily="Inter,sans-serif" opacity="0.7">BAYSIDE</text>
                  <text x="130" y="260" fontSize="9" fill={AQUA} fontWeight="600" fontFamily="Inter,sans-serif" opacity="0.7">MORNINGTON</text>
                  <text x="128" y="272" fontSize="9" fill={AQUA} fontWeight="600" fontFamily="Inter,sans-serif" opacity="0.7">PENINSULA</text>
                  <text x="250" y="200" fontSize="9" fill={AQUA} fontWeight="600" fontFamily="Inter,sans-serif" opacity="0.7">EASTERN</text>
                  <text x="250" y="212" fontSize="9" fill={AQUA} fontWeight="600" fontFamily="Inter,sans-serif" opacity="0.7">SUBURBS</text>

                  {/* Suburb dots — Bayside */}
                  {[
                    [190, 130, "Brighton"],
                    [195, 150, "Sandringham"],
                    [195, 168, "Hampton"],
                    [195, 186, "Cheltenham"],
                    [200, 203, "Beaumaris"],
                    [200, 220, "Mentone"],
                  ].map(([cx, cy, label]) => (
                    <g key={label}>
                      <circle cx={cx} cy={cy} r="4" fill={AQUA} opacity="0.7" />
                      <text x={cx + 8} y={cy + 4} fontSize="7.5" fill="#374151" fontFamily="Inter,sans-serif">{label}</text>
                    </g>
                  ))}

                  {/* Suburb dots — Peninsula */}
                  {[
                    [175, 265, "Frankston"],
                    [165, 295, "Seaford"],
                    [155, 320, "Langwarrin"],
                    [145, 345, "Mornington"],
                    [130, 320, "Mt Eliza"],
                  ].map(([cx, cy, label]) => (
                    <g key={label}>
                      <circle cx={cx} cy={cy} r="4" fill="#0a7285" opacity="0.7" />
                      <text x={cx + 8} y={cy + 4} fontSize="7.5" fill="#374151" fontFamily="Inter,sans-serif">{label}</text>
                    </g>
                  ))}

                  {/* Suburb dots — Eastern */}
                  {[
                    [270, 160, "Doncaster"],
                    [285, 190, "Ringwood"],
                    [280, 215, "Knox"],
                    [275, 245, "Berwick"],
                    [265, 270, "Dandenong"],
                    [255, 235, "Glen Waverley"],
                  ].map(([cx, cy, label]) => (
                    <g key={label}>
                      <circle cx={cx} cy={cy} r="4" fill="#075868" opacity="0.7" />
                      <text x={cx + 8} y={cy + 4} fontSize="7.5" fill="#374151" fontFamily="Inter,sans-serif">{label}</text>
                    </g>
                  ))}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-neutral-100 text-xs space-y-1.5">
                  {[
                    { color: AQUA,    label: "Bayside" },
                    { color: "#0a7285", label: "Mornington Peninsula" },
                    { color: "#075868", label: "Eastern Suburbs" },
                  ].map(({ color, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-neutral-600 font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Area cards ── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: AQUA_LIGHT }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(10,143,166,0.1) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <svg className="absolute top-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ height: 48 }} aria-hidden="true">
          <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,0 L0,0 Z" fill="white" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ height: 48 }} aria-hidden="true">
          <path d="M0,24 C240,0 480,48 720,24 C960,0 1200,48 1440,24 L1440,48 L0,48 Z" fill="white" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0.1)} className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA }}>Suburbs We Cover</span>
            <h2 className="mt-3 font-serif text-4xl font-bold text-neutral-900">Service Areas</h2>
            <p className="mt-3 text-neutral-500 max-w-lg mx-auto">
              Not sure if we cover your area? Call us — if you're in Melbourne's south-east we almost certainly do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {AREAS.map((area, ai) => (
              <motion.div
                key={area.region}
                {...fadeUp(0.1 + ai * 0.1)}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
                style={{ borderTop: `3px solid ${area.color}` }}
              >
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: area.color }}>
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900">{area.region}</h3>
                  </div>
                  <div className="space-y-3">
                    {area.suburbs.map((sub) => (
                      <div key={sub.name} className="flex items-start gap-2.5">
                        <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: area.color }} />
                        <div>
                          <div className="text-sm font-medium text-neutral-800">{sub.name}</div>
                          <div className="text-xs text-neutral-400 leading-snug">{sub.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent jobs by location ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0.1)} className="mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA }}>Recent Work</span>
            <h2 className="mt-3 font-serif text-4xl font-bold text-neutral-900">Jobs Near You</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECENT_JOBS.map((job, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.07)}
                className="rounded-xl border border-neutral-200 p-5"
                style={{ borderTop: `3px solid ${AQUA}` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: AQUA }} />
                  <span className="font-semibold text-sm text-neutral-900">{job.suburb}</span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed mb-2">{job.type}</p>
                <span className="text-xs font-medium" style={{ color: AQUA }}>{job.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a1f25 0%, #074955 60%, #0a8fa6 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              In our area? Let's talk.
            </h2>
            <p className="text-neutral-300 mb-8 text-lg">
              Free inspection and written quote. Certificate on every job.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all"
                style={{ backgroundColor: AQUA }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:0438499146"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                0438 499 146
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
