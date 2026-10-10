import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowLeft, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { WORK, getProject, projectSlug, projectTitle, workSrc } from "../data/index.js";
import ScrollProgress from "../components/ScrollProgress.jsx";
import RevealText from "../components/RevealText.jsx";
import Lightbox from "../components/Lightbox.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import NotFound from "./NotFound.jsx";

const AQUA = "#0a8fa6";
const SITE = "https://www.aquatightwaterproofing.au";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  if (!project) return <NotFound />;

  const index = WORK.indexOf(project);
  const prev = WORK[index - 1] ?? null;
  const next = WORK[index + 1] ?? null;

  const title = projectTitle(project);
  const url = `${SITE}/projects/${projectSlug(project)}`;
  const metaTitle = `${title}, ${project.place} | Aquatight Waterproofing`;
  const metaDesc = `${title} in ${project.place}: a real Aquatight Waterproofing job. AS3740 certified waterproofers across Melbourne.`;

  const photos = [project, ...(project.photos ?? [])];
  const lightboxItems = photos.map((ph, i) => ({
    src: workSrc(ph.id, 1600),
    alt: ph.alt ?? `${title}, ${project.place}${i ? ` (photo ${i + 1})` : ""}`,
    caption: title,
    sub: project.place,
  }));
  const scope = project.scope?.length ? project.scope : null;
  const overview = project.overview?.trim() ? project.overview.split(/\n\n+/) : null;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE}${workSrc(project.id, 1600)}`} />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={url} />
      </Helmet>
      <ScrollProgress />

      <section className="relative h-[55vh] min-h-[400px] overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
        <img
          src={workSrc(project.id, 1600)}
          alt=""
          width={project.w}
          height={project.h}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1a1a1a 0%, rgba(26,26,26,0.5) 50%, rgba(26,26,26,0.2) 100%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-12 pt-24">
          <Link to="/#work" className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Our Work
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">{title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" style={{ color: "#7dd8e8" }} />
              {project.place}
            </span>
            {project.duration && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" style={{ color: "#7dd8e8" }} />
                {project.duration}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            {overview && (
              <motion.div {...fadeUp(0.1)}>
                <RevealText className="font-serif text-2xl font-bold text-neutral-900 mb-4">Project Overview</RevealText>
                <div className="space-y-4">
                  {overview.map((para, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed text-[1.05rem]">{para}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {project.before && project.after && (
              <motion.div {...fadeUp(0.12)}>
                <RevealText className="font-serif text-2xl font-bold text-neutral-900 mb-4">Before &amp; After</RevealText>
                <BeforeAfter before={project.before} after={project.after} label={`${title}, ${project.place}`} />
                <p className="mt-2 text-xs text-neutral-500">Drag the handle, or focus it and use the arrow keys.</p>
              </motion.div>
            )}

            <motion.div {...fadeUp(0.15)}>
              <RevealText className="font-serif text-2xl font-bold text-neutral-900 mb-4">{photos.length > 1 ? "Photos" : "Photo"}</RevealText>
              <div className={`grid gap-3 ${photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                {photos.map((ph, i) => (
                  <button
                    key={ph.id}
                    type="button"
                    onClick={() => setLightboxIdx(i)}
                    aria-label={`View larger: ${lightboxItems[i].alt}`}
                    className={`group overflow-hidden rounded-2xl bg-gray-100 ${i === 0 && photos.length > 1 ? "col-span-2" : ""}`}
                  >
                    <img
                      src={workSrc(ph.id, i === 0 ? 1600 : 800)}
                      srcSet={`${workSrc(ph.id, 800)} 800w, ${workSrc(ph.id, 1600)} 1600w`}
                      sizes={i === 0 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 50vw"}
                      alt={lightboxItems[i].alt}
                      width={ph.w}
                      height={ph.h}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            {scope && (
              <motion.div {...fadeUp(0.2)} className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-neutral-900 mb-4">Scope of Work</h3>
                <ul className="space-y-2.5">
                  {scope.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div {...fadeUp(0.25)} className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Location</span>
                  <span className="font-medium text-neutral-800">{project.place}</span>
                </div>
                {project.duration && (
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Duration</span>
                    <span className="font-medium text-neutral-800">{project.duration}</span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="rounded-2xl p-6 text-white" style={{ backgroundColor: AQUA }}>
              <h3 className="font-serif text-lg font-bold mb-2">Like what you see?</h3>
              <p className="text-white/85 text-sm leading-relaxed mb-4">Get in touch for a free inspection and quote on your project.</p>
              <Link to="/#contact" className="flex items-center justify-center gap-2 bg-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors" style={{ color: AQUA }}>
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:0408827996" className="mt-2 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors">
                <Phone className="w-4 h-4" />
                0408 827 996
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox items={lightboxItems} index={lightboxIdx} onClose={() => setLightboxIdx(null)} onIndex={setLightboxIdx} />
        )}
      </AnimatePresence>

      {(prev || next) && (
        <section className="border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex justify-between gap-4">
            {prev ? (
              <Link to={`/projects/${projectSlug(prev)}`} className="group flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center group-hover:bg-[#f0fafb] transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 mb-0.5">Previous</div>
                  <div className="font-medium text-neutral-900">{projectTitle(prev)}</div>
                </div>
              </Link>
            ) : <div />}
            {next && (
              <Link to={`/projects/${projectSlug(next)}`} className="group flex items-center gap-3 text-sm text-right">
                <div>
                  <div className="text-xs text-neutral-400 mb-0.5">Next</div>
                  <div className="font-medium text-neutral-900">{projectTitle(next)}</div>
                </div>
                <div className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center group-hover:bg-[#f0fafb] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
