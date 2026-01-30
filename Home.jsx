
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home/Hero';
import CredibilityBadges from '@/components/home/CredibilityBadges';
import EliteLeagues from '@/components/home/EliteLeagues';
import MLBStars from '@/components/home/MLBStars';
import ServicesPreview from '@/components/home/ServicesPreview';
import CoachingPhilosophy from '@/components/home/CoachingPhilosophy';
import WhyParentsTrust from '@/components/home/WhyParentsTrust';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/Footer';

const Home = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Coach Steve Baseball Training",
    "image": "https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/stonybrook-swing.png",
    "description": "Professional baseball coaching for elite player development. MLB-connected training programs for serious athletes. Improve your game with expert coaching.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Common Sense Baseball",
      "addressLocality": "Westbury",
      "addressRegion": "NY",
      "postalCode": "11590",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.755655",
      "longitude": "-73.587624"
    },
    "url": "https://coachstevebaseball.com",
    "telephone": "+15165550123",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Elite Baseball Coaching & Player Development | Coach Steve</title>
        <meta name="description" content="Professional baseball coaching for elite player development. MLB-connected training programs for serious athletes. Improve your game with expert coaching." />
        <meta name="keywords" content="baseball coaching, player development, elite baseball training, MLB coaching, baseball lessons" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Elite Baseball Coaching & Player Development | Coach Steve" />
        <meta property="og:description" content="Professional baseball coaching for elite player development. MLB-connected training programs for serious athletes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/stonybrook-swing.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <CredibilityBadges />
        <EliteLeagues />
        <MLBStars />
        <WhyParentsTrust />
        <ServicesPreview />
        <CoachingPhilosophy />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;
