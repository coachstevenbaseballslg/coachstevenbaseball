
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import useLenis from '@/hooks/useLenis';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Training from '@/pages/Training';
import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import TrainingGallery from '@/pages/TrainingGallery';
import Drills from '@/pages/Drills';

function AppContent() {
  // Initialize Lenis smooth scrolling globally
  useLenis();

  return (
    <div className="min-h-screen bg-[#0A1628] flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training-gallery" element={<TrainingGallery />} />
          <Route path="/drills" element={<Drills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
        <Link
          to="/contact"
          className="block text-center bg-[#4FC3F7] text-[#0A1628] font-bold py-3 px-4 rounded-xl shadow-lg uppercase tracking-wide text-sm hover:bg-[#34b6eb] transition"
        >
          Book Assessment
        </Link>
      </div>
      <Toaster />

      <Toaster />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        <title>Private Hitting Coach in Westbury NY | Coach Steve Baseball</title>
        <meta name="description" content="Train with the best. Coach Steve, Westbury's top private hitting coach, develops confident, powerful hitters of all ages at Common Sense Baseball. Start today" />
      </Helmet>
      <AppContent />
    </Router>
  );
}

export default App;
