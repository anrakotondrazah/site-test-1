import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import TrustBanner from './components/TrustBanner';
import Services from './components/Services';
import Process from './components/Process';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import AISection from './components/AISection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import PartnersBand from './components/PartnersBand';

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <PartnersBand />
        <TrustBanner />
        <Services />
        <Process />
        <Advantages />
        <Testimonials />
        <AISection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
