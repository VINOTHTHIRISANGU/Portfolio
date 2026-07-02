import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import ScrollProgressBar from "./components/ScrollProgressBar";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Timeline from "./sections/Timeline";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Timeline />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink-900 font-body text-mist-200">
      <LoadingScreen visible={loading} />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
