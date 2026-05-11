import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Phone, Mail, MapPin, ChevronDown, ChevronRight,
  Award, Check, ArrowRight, ExternalLink, Shield,
  Droplets, Eye, ThumbsUp, SlidersHorizontal,
} from "lucide-react";
import { SERVICES, TESTIMONIALS, FAQS, CREDENTIALS } from "../data/index.js";
import RevealText from "../components/RevealText.jsx";
import CountUp from "../components/CountUp.jsx";
import TrustBar from "../components/TrustBar.jsx";
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
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 700], [0, 80]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0a1f25 0%, #074955 45%, #0a8fa6 100%)" }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px)",
          y: gridY,
        }}
      />
      <div
        className="absolute top-20 right-16 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(125,216,232,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-24 left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,143,166,0.15) 0%, transparent 70%)" }}
      />

      {/* Animated rising bubbles */}
      {[
        { size: 10, left: "8%",  delay: "0s",   duration: "11s", opacity: 0.45 },
        { size: 18, left: "20%", delay: "2s",   duration: "14s", opacity: 0.3  },
        { size: 7,  left: "35%", delay: "0.6s", duration: "9s",  opacity: 0.5  },
        { size: 22, left: "52%", delay: "3.5s", duration: "16s", opacity: 0.25 },
        { size: 12, left: "67%", delay: "1.2s", duration: "12s", opacity: 0.4  },
        { size: 8,  left: "80%", delay: "0.3s", duration: "10s", opacity: 0.45 },
        { size: 15, left: "91%", delay: "2.8s", duration: "13s", opacity: 0.3  },
      ].map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: "-5%",
            border: `1.5px solid rgba(125,216,232,${b.opacity + 0.25})`,
            backgroundColor: `rgba(10,143,166,${b.opacity * 0.35})`,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8 tracking-wide border"
          style={{
            backgroundColor: "rgba(10,143,166,0.2)",
            borderColor: "rgba(10,143,166,0.4)",
            color: AQUA_ACCENT,
          }}
        >
          <Award className="w-4 h-4" />
          AS3740 Certified · Master Tradesman · 18+ Years Experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight"
        >
          Melbourne's Trusted
          <span className="block mt-1" style={{ color: AQUA_ACCENT }}>
            Waterproofing Specialists
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Expert waterproofing for bathrooms, balconies, and wet areas across Melbourne's Bayside,
          Mornington Peninsula, and Eastern Suburbs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl"
            style={{ backgroundColor: AQUA }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:0438499146"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
          >
            <Phone className="w-4 h-4" />
            0438 499 146
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto"
        >
          {[
            { val: "18+", label: "Years Experience" },
            { val: "500+", label: "Jobs Completed" },
            { val: "100%", label: "Certified on Completion" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <CountUp value={s.val} className="font-serif text-3xl font-bold" style={{ color: AQUA_ACCENT }} />
              <div className="text-xs text-neutral-400 mt-1.5 leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0.1)}>
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA }}>
              About Us
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
              Certified waterproofing professionals since 2008
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Aquatight Waterproofing has been protecting Melbourne homes and structures from water damage
              for over 18 years. Our licensed waterproofers specialise in AS3740-compliant systems for
              bathrooms, balconies, laundries, and all domestic wet areas.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Every job is completed to the Australian Standard and issued with a certificate on completion.
              Whether you're building new, renovating, or rectifying a failed waterproofing system, Aquatight
              delivers a result you can trust for years to come.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {CREDENTIALS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-neutral-700">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: AQUA_LIGHT, border: `1px solid ${AQUA_BORDER}` }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: AQUA }} />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              style={{ backgroundColor: AQUA }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="grid grid-cols-2 gap-4">
            {[
              { val: "18+", label: "Years in the industry" },
              { val: "2008", label: "Established" },
              { val: "500+", label: "Jobs completed" },
              { val: "100%", label: "Certified on completion" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-neutral-200 rounded-2xl p-8 text-center shadow-sm"
                style={{ backgroundColor: "#ededed" }}
              >
                <CountUp value={s.val} className="font-serif text-4xl font-bold" style={{ color: AQUA }} />
                <div className="text-sm text-neutral-500 mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose ──────────────────────────────────────────────────────────────

const WHY_ITEMS = [
  {
    icon: Shield,
    title: "AS3740 Compliant",
    desc: "All work is completed to AS3740 Australian Standards — the mandatory standard for waterproofing in domestic wet areas. We never cut corners on compliance.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    desc: "Our team holds the necessary licences and certifications for waterproofing and tiling. You get peace of mind that the job is done right, by qualified professionals.",
  },
  {
    icon: SlidersHorizontal,
    title: "Warranty on All Work",
    desc: "Every job we complete is issued with a waterproofing certificate and backed by our workmanship warranty — so you're covered long after we leave.",
  },
  {
    icon: Eye,
    title: "Free Inspections",
    desc: "Concerned about existing waterproofing? We offer free, obligation-free inspections. We'll tell you exactly what we find and what (if anything) needs to be done.",
  },
  {
    icon: ThumbsUp,
    title: "Partner of Cherry Builds",
    desc: "As the dedicated waterproofing arm of Cherry Builds, Aquatight can coordinate seamlessly with full renovation works — a complete, integrated solution under one roof.",
  },
];

function WhyChoose() {
  return (
    <section className="py-24" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp(0.1)} className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA_ACCENT }}>
            Why Aquatight
          </span>
          <RevealText className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-white">
            Why Choose Aquatight?
          </RevealText>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              className={`rounded-2xl p-6 border${i === WHY_ITEMS.length - 1 ? " sm:col-span-2 flex flex-col items-center text-center" : ""}`}
              style={{ backgroundColor: "#2a2a2a", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: "rgba(10,143,166,0.2)",
                  border: "1px solid rgba(10,143,166,0.3)",
                }}
              >
                <item.icon className="w-5 h-5" style={{ color: AQUA_ACCENT }} />
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p
                className={`text-sm text-neutral-400 leading-relaxed${
                  i === WHY_ITEMS.length - 1 ? " max-w-xl" : ""
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#ededed" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp(0.1)} className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA }}>
            What We Do
          </span>
          <RevealText className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-neutral-900">
            Our Services
          </RevealText>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            From a single shower to a full balcony rectification — Aquatight delivers certified waterproofing
            across all wet areas.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {SERVICES.map((svc) => (
            <motion.div
              key={svc.title}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link
                to={`/services/${svc.slug}`}
                className="flex flex-col h-full bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-aqua-100 transition-all"
              >
                <div
                  className="h-28 relative flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${AQUA_LIGHT} 0%, #c0e5ef 100%)` }}
                >
                  <svc.icon className="w-10 h-10 opacity-20" style={{ color: AQUA }} />
                  {/* Mini bubbles inside card header */}
                  {[
                    { s: 6, l: "15%", d: "3s", dur: "7s" },
                    { s: 9, l: "55%", d: "1s", dur: "9s" },
                    { s: 5, l: "80%", d: "2s", dur: "8s" },
                  ].map((b, bi) => (
                    <span
                      key={bi}
                      className="bubble"
                      style={{
                        width: b.s, height: b.s,
                        left: b.l, bottom: "-10%",
                        border: `1px solid rgba(10,143,166,0.35)`,
                        backgroundColor: "rgba(10,143,166,0.12)",
                        animationDelay: b.d,
                        animationDuration: b.dur,
                      }}
                    />
                  ))}
                  <div className="absolute bottom-3 left-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: AQUA }}
                    >
                      <svc.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-semibold text-neutral-900 mb-2 text-sm">{svc.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-4 flex-1">{svc.desc}</p>
                  <div
                    className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-1.5 transition-all"
                    style={{ color: AQUA }}
                  >
                    Learn More
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Versipave ───────────────────────────────────────────────────────────────

function Versipave() {
  return (
    <section id="versipave" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a1f25 0%, #0a8fa6 100%)" }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-3 py-1 text-sm font-medium mb-5">
                <Droplets className="w-4 h-4" />
                Specialist System
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
                Versipave Pod System
              </h2>
              <p className="text-blue-100 leading-relaxed mb-5">
                The Versipave Pod System is a specialist drainage solution for suspended balconies that allows
                full waterproofing membrane access without removing the existing tiling — saving significant
                cost and disruption for rectification projects.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "No tile removal required in most cases",
                  "Full membrane access for inspection and repair",
                  "Suitable for all suspended balcony types",
                  "Significantly reduces rectification cost",
                  "AS3740 compliant installation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                    <Check className="w-4 h-4 text-blue-200 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                style={{ color: AQUA }}
              >
                Ask About Versipave
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield,   title: "No Demolition",    desc: "Waterproof without tile removal" },
                { icon: Award,    title: "Certified System", desc: "Industry-proven product" },
                { icon: Check,    title: "Cost Effective",   desc: "Major savings over full strip-out" },
                { icon: Droplets, title: "Balcony Focused",  desc: "Designed for suspended balconies" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white/10 border border-white/20 rounded-xl p-4">
                  <Icon className="w-5 h-5 text-blue-200 mb-2" />
                  <div className="font-semibold text-white text-sm">{title}</div>
                  <div className="text-xs text-blue-200 mt-0.5">{desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Cherry Builds ───────────────────────────────────────────────────────────

function CherryBuilds() {
  return (
    <section id="cherrybuilds" className="py-24" style={{ backgroundColor: "#ededed" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp(0.1)}>
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA }}>
              Our Partner
            </span>
            <RevealText className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
              Complete renovation solutions with Cherry Builds
            </RevealText>
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-neutral-200">
              <img src="/logos/aqua-tight.png" alt="Aquatight" className="h-14 w-auto" />
              <span className="text-neutral-300 text-lg font-light">×</span>
              <img src="/logos/cherry-builds-navbar.png" alt="Cherry Builds" className="h-14 w-auto" />
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="space-y-5">
            <p className="text-neutral-600 leading-relaxed">
              Aquatight is the dedicated waterproofing division of Cherry Builds — Melbourne's trusted
              renovation specialists. By combining a fully licensed builder with a certified waterproofer,
              we offer a seamless, end-to-end service for renovations and rectification works.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              From identifying the source of water damage through to quoting, project management, and
              completion of all trades — one coordinated team handles everything.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              {[
                { val: "30+", label: "Years building experience" },
                { val: "18+", label: "Years waterproofing expertise" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-5 text-center bg-white border border-neutral-200"
                >
                  <CountUp value={s.val} className="font-serif text-3xl font-bold" style={{ color: AQUA }} />
                  <div className="text-xs text-neutral-500 mt-1.5 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                style={{ backgroundColor: AQUA }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.cherrybuilds.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-neutral-300 text-neutral-700 hover:border-neutral-400 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Visit Cherry Builds
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-24" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp(0.1)} className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA_ACCENT }}>
            Reviews
          </span>
          <RevealText className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-white">
            What Our Clients Say
          </RevealText>
        </motion.div>

        <motion.div {...fadeUp(0.15)}>
          <TestimonialsCarousel testimonials={TESTIMONIALS.slice(0, 4)} cardBg="#2a2a2a" cardWidth="clamp(280px, 70vw, 340px)" />
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = React.useState(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp(0.1)} className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA }}>
            FAQ
          </span>
          <RevealText className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-neutral-900">
            Common Questions
          </RevealText>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.05 + i * 0.04)}
              className="border border-neutral-200 rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#ededed" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-neutral-900">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  style={{ color: AQUA }}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target);
    await fetch(e.target.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-500";

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#ededed" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div {...fadeUp(0.1)}>
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: AQUA }}>
              Get in Touch
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
              Need a waterproofing quote?
            </h2>
            <p className="mt-5 text-neutral-500 leading-relaxed">
              Tell us about your project and we'll get back to you with an obligation-free quote. We service
              Melbourne's Bayside, Mornington Peninsula, and Eastern Suburbs.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Phone",  value: "0438 499 146",                    href: "tel:0438499146" },
                { icon: Mail,  label: "Email",  value: "info@aquatightwaterproofing.au",  href: "mailto:info@aquatightwaterproofing.au" },
                { icon: MapPin, label: "Postal", value: "PO BOX 3109, Mentone East VIC 3194", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: AQUA_LIGHT, border: `1px solid ${AQUA_BORDER}` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: AQUA }} />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-neutral-700 font-medium transition-colors"
                        onMouseEnter={e => (e.currentTarget.style.color = AQUA)}
                        onMouseLeave={e => (e.currentTarget.style.color = "")}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-neutral-700">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: AQUA_LIGHT, border: `1px solid ${AQUA_BORDER}` }}
                >
                  <Check className="w-7 h-7" style={{ color: AQUA }} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Enquiry sent!</h3>
                <p className="text-neutral-500 text-sm">
                  Thanks for reaching out — we'll be in touch shortly with your obligation-free quote.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 text-sm"
              >
                <input type="text" name="_gotcha" className="hidden" />
                <input type="hidden" name="_subject" value="New enquiry from Aquatight Waterproofing website" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="at-first" className="block text-xs font-semibold text-neutral-600 mb-1">
                      First name
                    </label>
                    <input id="at-first" type="text" name="first_name" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="at-last" className="block text-xs font-semibold text-neutral-600 mb-1">
                      Last name
                    </label>
                    <input id="at-last" type="text" name="last_name" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="at-email" className="block text-xs font-semibold text-neutral-600 mb-1">
                    Email
                  </label>
                  <input id="at-email" type="email" name="email" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="at-phone" className="block text-xs font-semibold text-neutral-600 mb-1">
                    Phone
                  </label>
                  <input id="at-phone" type="tel" name="phone" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="at-suburb" className="block text-xs font-semibold text-neutral-600 mb-1">
                    Suburb / location of work
                  </label>
                  <input id="at-suburb" type="text" name="suburb" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="at-service" className="block text-xs font-semibold text-neutral-600 mb-1">
                    Service required
                  </label>
                  <select id="at-service" name="service" className={inputClass}>
                    <option value="">Select a service…</option>
                    <option>Waterproofing Bathrooms</option>
                    <option>Renovations</option>
                    <option>Tiling</option>
                    <option>Rectification Works</option>
                    <option>Waterproofing over Existing Hard Surfaces</option>
                    <option>Versipave Pod System</option>
                    <option>Other / Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="at-message" className="block text-xs font-semibold text-neutral-600 mb-1">
                    Tell us about your project
                  </label>
                  <textarea
                    id="at-message"
                    name="message"
                    rows="4"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-60"
                  style={{ backgroundColor: AQUA }}
                  onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = AQUA_HOVER)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = AQUA)}
                >
                  <Mail className="w-4 h-4" />
                  {submitting ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Floating Call ────────────────────────────────────────────────────────────

function FloatingCall() {
  return (
    <motion.a
      href="tel:0438499146"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-5 z-50 md:hidden flex items-center gap-2 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg"
      style={{ backgroundColor: AQUA }}
    >
      <Phone className="w-4 h-4" />
      Call Now
    </motion.a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aquatight Waterproofing | AS3740 Certified Waterproofers Melbourne</title>
        <meta
          name="description"
          content="AS3740 certified waterproofers in Melbourne — bathroom waterproofing, balcony rectification, tiling, renovations and the Versipave Pod System. Bayside, Mornington Peninsula and Eastern Suburbs. Certificate on every job. Free inspection."
        />
        <meta property="og:title" content="Aquatight Waterproofing | AS3740 Certified Waterproofers Melbourne" />
        <meta
          property="og:description"
          content="AS3740-certified waterproofing across Melbourne. Bathrooms, balconies, tiling, rectification, and the Versipave Pod System. 18+ years experience. Certificate on every job."
        />
        <meta property="og:url" content="https://www.aquatightwaterproofing.au/" />
        <link rel="canonical" href="https://www.aquatightwaterproofing.au/" />
      </Helmet>
      <Hero />
      {/* Hero gradient ends ~#074955 → into white TrustBar */}
      <WaveDivider topColor="#074955" bottomColor="#ffffff" height={56} />
      <TrustBar />
      <About />
      {/* About (white) → WhyChoose (dark) */}
      <WaveDivider topColor="#ffffff" bottomColor="#1a1a1a" height={48} />
      <WhyChoose />
      {/* WhyChoose (dark) → Services (light grey) */}
      <WaveDivider topColor="#1a1a1a" bottomColor="#ededed" height={48} />
      <Services />
      {/* Services (light grey) → Versipave (white) */}
      <WaveDivider topColor="#ededed" bottomColor="#ffffff" height={48} />
      <Versipave />
      {/* Versipave (white) → CherryBuilds (light grey) */}
      <WaveDivider topColor="#ffffff" bottomColor="#ededed" height={48} />
      <CherryBuilds />
      {/* CherryBuilds (light grey) → Testimonials (dark) */}
      <WaveDivider topColor="#ededed" bottomColor="#1a1a1a" height={48} />
      <Testimonials />
      {/* Testimonials (dark) → FAQ (white) */}
      <WaveDivider topColor="#1a1a1a" bottomColor="#ffffff" height={48} />
      <FAQ />
      {/* FAQ (white) → Contact (light grey) */}
      <WaveDivider topColor="#ffffff" bottomColor="#ededed" height={48} />
      <Contact />
      <FloatingCall />
    </>
  );
}
