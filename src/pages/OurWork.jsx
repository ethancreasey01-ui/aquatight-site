import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GALLERY, workSrc, gridCols } from "../data/index.js";
import Lightbox from "../components/Lightbox.jsx";

const AQUA = "#0a8fa6";
const SITE = "https://www.aquatightwaterproofing.au";

export default function OurWork() {
  const [open, setOpen] = useState(null);
  const items = GALLERY.map((p) => ({ src: workSrc(p.id, 1600), alt: p.alt, caption: p.caption, sub: p.place }));
  const title = "Our Work | Aquatight Waterproofing Melbourne";
  const desc = "Real Aquatight Waterproofing jobs across Melbourne: Aqua Pods, balcony membranes, courtyards and wet areas. No stock photos.";
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${SITE}/our-work`} />
        <meta property="og:locale" content="en_AU" />
        <link rel="canonical" href={`${SITE}/our-work`} />
      </Helmet>
      <section className="pt-28 pb-10 text-center" style={{ background: "linear-gradient(135deg, #0a1f25 0%, #0a8fa6 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-white">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-3">Our Work</h1>
          <p className="text-white/85">Real balconies, pods and wet areas we&apos;ve waterproofed around Melbourne. Tap a photo to enlarge.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className={`grid grid-cols-1 gap-4 ${gridCols(GALLERY.length)}`}>
          {GALLERY.map((p, i) => (
            <div key={p.id} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <button type="button" onClick={() => setOpen(i)} aria-label={`View photo: ${p.alt}`} className="group block w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={workSrc(p.id, 800)}
                  srcSet={`${workSrc(p.id, 800)} 800w, ${workSrc(p.id, 1600)} 1600w`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading={i < 6 ? "eager" : "lazy"}
                  fetchPriority={i < 4 ? "high" : undefined}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <div className="p-4 text-sm flex flex-col items-start gap-1.5">
                <div>
                  <div className="font-semibold text-neutral-900">{p.caption}</div>
                  <div className="text-neutral-500">{p.place}</div>
                </div>
                <Link to={`/projects/${p.slug}`} className="font-medium" style={{ color: AQUA }}>View project</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/#contact" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl" style={{ backgroundColor: AQUA }}>
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <AnimatePresence>
        {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
      </AnimatePresence>
    </div>
  );
}
