import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Phone, Droplets, MapPin } from "lucide-react";
import { SERVICES, POD_WORK, POD_GALLERY, workSrc, gridCols } from "../data/index.js";
import ScrollProgress from "../components/ScrollProgress.jsx";
import RevealText from "../components/RevealText.jsx";
import Lightbox from "../components/Lightbox.jsx";

const AQUA = "#0a8fa6";
const SITE = "https://www.aquatightwaterproofing.au";

// Scroll-reveal animations were removed on purpose: content must be visible on first paint.
const fadeUp = () => ({});

// Benefits and explanation reuse wording already on the site (Home Aqua Pods section and
// the Aqua Pods service page); nothing new is claimed here.
const BENEFITS = [
  "No tile removal required in most cases",
  "Full membrane access for inspection and repair",
  "Significantly reduces rectification cost",
  "AS3740 compliant installation",
];

export default function AquaPods() {
  const service = SERVICES.find((s) => s.slug === "versipave-pod-system");
  const [open, setOpen] = useState(null);
  const paras = service.overview.split(/\n\n+/);
  const url = `${SITE}/aqua-pods`;
  const title = "Aqua Pods Melbourne | Aquatight Waterproofing";
  const desc = "Aqua Pods for suspended balconies, built on the Versipave system. Membrane access without removing the tiling. AS3740 certified waterproofers across Melbourne. Free quote.";
  const items = POD_GALLERY.map((p) => ({ src: workSrc(p.id, 1600), alt: p.alt, caption: p.caption, sub: p.place }));
  const hero = POD_GALLERY.find((g) => g.id === "pods-maribyrnong-2") ?? POD_GALLERY[POD_GALLERY.length - 1] ?? POD_WORK[0];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        {hero && <meta property="og:image" content={`${SITE}${workSrc(hero.id, 1600)}`} />}
        <meta property="og:locale" content="en_AU" />
        <link rel="canonical" href={url} />
      </Helmet>
      <ScrollProgress />

      <section className="relative min-h-[60vh] overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1f25 0%, #0a8fa6 100%)" }}>
        {hero && (
          <img src={workSrc(hero.id, 1600)} srcSet={`${workSrc(hero.id, 800)} 800w, ${workSrc(hero.id, 1600)} 1600w`} sizes="100vw" alt="" width={hero.w} height={hero.h} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        )}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16 text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 text-sm font-medium mb-5">
            <Droplets className="w-4 h-4" />
            Specialist System
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold leading-tight mb-5">Aqua Pods</h1>
          <p className="max-w-2xl text-lg text-white/85 leading-relaxed mb-8">{service.desc}</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-lg" style={{ color: AQUA }}>
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:0408827996" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 font-semibold px-6 py-3 rounded-xl transition-colors">
              <Phone className="w-4 h-4" /> 0408 827 996
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-3 gap-12">
        <motion.div {...fadeUp(0.05)} className="lg:col-span-2">
          <RevealText className="font-serif text-3xl font-bold text-neutral-900 mb-5">What are Aqua Pods?</RevealText>
          <div className="space-y-4">
            {paras.map((t, i) => <p key={i} className="text-neutral-600 leading-relaxed text-[1.05rem]">{t}</p>)}
          </div>
          <Link to={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: AQUA }}>
            Full service details <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <motion.div {...fadeUp(0.15)} className="rounded-2xl border border-neutral-200 p-6 shadow-sm self-start" style={{ backgroundColor: "#f0fafb" }}>
          <h2 className="font-serif text-lg font-bold text-neutral-900 mb-4">Why pods</h2>
          <ul className="space-y-2.5">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-neutral-700">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {POD_GALLERY.length > 0 && (
        <section className="pb-20" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeUp(0.05)} className="mb-8">
              <RevealText className="font-serif text-3xl font-bold text-neutral-900">Pod jobs</RevealText>
              <p className="mt-2 text-neutral-600">Real Aquatight pod installations. Tap a photo to enlarge, or open the project.</p>
            </motion.div>
            <div className={`grid grid-cols-1 gap-4 ${gridCols(POD_GALLERY.length)}`}>
              {POD_GALLERY.map((p, i) => (
                <motion.div key={p.id} {...fadeUp(0.05 + (i % 3) * 0.08)} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <button type="button" onClick={() => setOpen(i)} aria-label={`View photo: ${p.alt}`} className="group block w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={workSrc(p.id, 800)}
                      srcSet={`${workSrc(p.id, 800)} 800w, ${workSrc(p.id, 1600)} 1600w`}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      alt={p.alt}
                      width={p.w}
                      height={p.h}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                  <div className="p-4 flex items-center justify-between gap-2 text-sm">
                    <div>
                      <div className="font-semibold text-neutral-900">{p.caption}</div>
                      <div className="flex items-center gap-1 text-neutral-500"><MapPin className="w-3.5 h-3.5" style={{ color: AQUA }} />{p.place}</div>
                    </div>
                    <Link to={`/projects/${p.slug}`} className="font-medium whitespace-nowrap" style={{ color: AQUA }}>View project</Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20" style={{ backgroundColor: AQUA }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Ask about Aqua Pods</h2>
          <p className="text-white/85 mb-8">We assess each balcony individually and will tell you clearly if a conventional approach is more appropriate.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors" style={{ color: AQUA }}>
              Send an enquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:0408827996" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 font-semibold px-6 py-3 rounded-xl transition-colors">
              <Phone className="w-4 h-4" /> 0408 827 996
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
      </AnimatePresence>
    </div>
  );
}
