import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import StickyQuoteBar from "./components/StickyQuoteBar.jsx";
import Home from "./pages/Home.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const attempt = (tries = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (tries < 10) {
          setTimeout(() => attempt(tries + 1), 80);
        }
      };
      attempt();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// Track clicks on any tel: link → Google Ads "Phone Call Click" conversion
function PhoneClickTracker() {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="tel:"]');
      if (link && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17961494205/wYTgCN6mmLQcEL3N2vRC',
        });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PhoneClickTracker />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
      <StickyQuoteBar />
    </>
  );
}
