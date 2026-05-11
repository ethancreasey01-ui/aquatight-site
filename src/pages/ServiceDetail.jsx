import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Phone, ChevronDown } from "lucide-react";
import { SERVICES, TESTIMONIALS } from "../data/index.js";
import ScrollProgress from "../components/ScrollProgress.jsx";
import RevealText from "../components/RevealText.jsx";
import WaveDivider from "../components/WaveDivider.jsx";
import TestimonialsCarousel from "../components/TestimonialsCarousel.jsx";

const AQUA = "#0a8fa6";
const AQUA_HOVER = "#0a7285";
const AQUA_LIGHT = "#f0fafb";
const AQUA_BORDER = "#d0edf3";
const AQUA_ACCENT = "#7dd8e8";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

// Subtle animated bubbles for the service hero banner
function HeroBubbles() {
  const bubbles = [
    { size: 12, left: "12%", delay: "0s",   duration: "9s",  opacity: 0.4 },
    { size: 20, left: "25%", delay: "1.5s", duration: "12s", opacity: 0.3 },
    { size: 8,  left: "40%", delay: "0.8s", duration: "8s",  opacity: 0.5 },
    { size: 16, left: "60%", delay: "2.2s", duration: "11s", opacity: 0.35 },
    { size: 10, left: "75%", delay: "0.3s", duration: "9.5s",opacity: 0.4 },
    { size: 24, left: "88%", delay: "1.1s", duration: "14s", opacity: 0.25 },
  ];
  return (
    <>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: "-10%",
            border: `1.5px solid rgba(125,216,232,${b.opacity + 0.2})`,
            backgroundColor: `rgba(10,143,166,${b.opacity * 0.4})`,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = React.useState(null);

  if (!service) return <Navigate to="/" replace />;

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const prev = SERVICES[currentIndex - 1] ?? null;
  const next = SERVICES[currentIndex + 1] ?? null;

  const serviceTestimonials = TESTIMONIALS.filter((t) => t.service === service.slug);

  const metaTitle = `${service.title} Melbourne | Aquatight Waterproofing`;
  const metaDesc = service.seoDesc ?? `${service.desc} Servicing Melbourne's Bayside, Mornington Peninsula, and Eastern Suburbs. AS3740 certified. 18+ years experience.`;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={`https://www.aquatightwaterproofing.au/services/${service.slug}`} />
        <link rel="canonical" href={`https://www.aquatightwaterproofing.au/services/${service.slug}`} />
      </Helmet>
      <ScrollProgress />

      {/* ── Hero banner ── */}
      <section
        className="relative h-[52vh] min-h-[360px] overflow-hidden flex items-end"
        style={{ background: "linear-gradient(135deg, #0a1f25 0%, #074955 50%, #0a8fa6 100%)" }}
      >
        <HeroBubbles />

        {/* Large faded icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <service.icon
            className="w-64 h-64 opacity-[0.04]"
            style={{ color: "#ffffff" }}
          />
        </div>

        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,31,37,0.85) 0%, rgba(10,31,37,0.3) 60%, transparent 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pb-12 pt-24">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Link
              to="/#services"
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>

            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 border"
              style={{ backgroundColor: "rgba(10,143,166,0.25)", borderColor: "rgba(10,143,166,0.45)", color: AQUA_ACCENT }}
            >
              <service.icon className="w-3.5 h-3.5" />
              Aquatight Service
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              {service.title}
            </h1>
            <p className="mt-3 text-neutral-300 text-lg max-w-xl">{service.desc}</p>
          </motion.div>
        </div>
      </section>

      <WaveDivider topColor="#074955" bottomColor="#ffffff" height={48} />

      {/* ── Body ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── Main column ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* Overview */}
            <motion.div {...fadeUp(0.1)}>
              <RevealText className="font-serif text-2xl font-bold text-neutral-900 mb-4">{service.overviewHeading ?? "Overview"}</RevealText>
              {service.overview.split("\n\n").map((para, i) => (
                <p key={i} className="text-neutral-600 leading-relaxed text-[1.04rem] mb-4 last:mb-0">{para}</p>
              ))}
            </motion.div>

            {/* What's included */}
            <motion.div {...fadeUp(0.15)}>
              <RevealText className="font-serif text-2xl font-bold text-neutral-900 mb-5">{service.includesHeading ?? "What's Included"}</RevealText>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div {...fadeUp(0.2)}>
              <RevealText className="font-serif text-2xl font-bold text-neutral-900 mb-6">Our Process</RevealText>
              <div className="grid sm:grid-cols-2 gap-5">
                {service.process.map((step) => (
                  <div key={step.step} className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                    <div
                      className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5 -translate-y-6 translate-x-6"
                      style={{ backgroundColor: AQUA }}
                    />
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-3"
                      style={{ backgroundColor: AQUA }}
                    >
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-1.5">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQs */}
            {service.faqs?.length > 0 && (
              <motion.div {...fadeUp(0.25)}>
                <RevealText className="font-serif text-2xl font-bold text-neutral-900 mb-5">Common Questions</RevealText>
                <div className="space-y-3">
                  {service.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-neutral-200 rounded-2xl overflow-hidden"
                      style={{ backgroundColor: "#ededed" }}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                      >
                        <span className="font-medium text-neutral-900 text-sm">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                          style={{ color: AQUA }}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openFaq === i && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-5 text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Testimonials */}
            {serviceTestimonials.length > 0 && (
              <motion.div {...fadeUp(0.28)}>
                <RevealText className="font-serif text-2xl font-bold text-neutral-900 mb-5">What Our Clients Say</RevealText>
                <TestimonialsCarousel testimonials={serviceTestimonials.slice(0, 3)} cardBg="#1a1a1a" />
              </motion.div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-5">
            {/* CTA card */}
            <motion.div
              {...fadeUp(0.15)}
              className="rounded-2xl p-6 text-white overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #074955 0%, #0a8fa6 100%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
              <service.icon className="w-7 h-7 mb-3" style={{ color: AQUA_ACCENT }} />
              <h3 className="font-serif text-xl font-bold mb-2">Get a Quote</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Obligation-free quote for your {service.title.toLowerCase()} project across Melbourne's Bayside, Mornington Peninsula, and Eastern Suburbs.
              </p>
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 bg-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                style={{ color: AQUA }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:0438499146"
                className="mt-2 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                0438 499 146
              </a>
            </motion.div>

            {/* All services list */}
            <motion.div {...fadeUp(0.2)} className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-neutral-900 text-sm mb-3">All Services</h3>
              <ul className="space-y-1">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        s.slug === slug
                          ? "font-semibold"
                          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                      }`}
                      style={s.slug === slug ? { backgroundColor: AQUA_LIGHT, color: AQUA, border: `1px solid ${AQUA_BORDER}` } : {}}
                    >
                      <s.icon className="w-3.5 h-3.5 flex-shrink-0" style={s.slug === slug ? { color: AQUA } : {}} />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              {...fadeUp(0.25)}
              className="rounded-2xl p-5 border border-neutral-200"
              style={{ backgroundColor: AQUA_LIGHT }}
            >
              <h3 className="font-semibold text-neutral-900 text-sm mb-3">Why Aquatight</h3>
              <ul className="space-y-2">
                {[
                  "AS3740 certified on every job",
                  "18+ years experience",
                  "Certificate issued on completion",
                  "Free inspections available",
                  "Partner of Cherry Builds",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-neutral-600">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Prev / Next ── */}
      {(prev || next) && (
        <section className="border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex justify-between gap-4">
              {prev ? (
                <Link
                  to={`/services/${prev.slug}`}
                  className="group flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center group-hover:border-aqua-200 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 mb-0.5">Previous</div>
                    <div className="font-medium text-neutral-900">{prev.title}</div>
                  </div>
                </Link>
              ) : <div />}

              {next && (
                <Link
                  to={`/services/${next.slug}`}
                  className="group flex items-center gap-3 text-sm text-right text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <div>
                    <div className="text-xs text-neutral-400 mb-0.5">Next</div>
                    <div className="font-medium text-neutral-900">{next.title}</div>
                  </div>
                  <div className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center group-hover:border-aqua-200 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
