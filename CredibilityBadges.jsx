
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Users, Shield, Target } from 'lucide-react';

const CredibilityBadges = () => {
  const badges = [
    {
      type: 'image',
      image: "https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/IMG_7221.JPG",
      title: 'FRESHMAN ALL-AMERICAN',
      subtitle: 'Louisville Slugger 1st Team' 
    },
    {
      type: 'image',
      image: "https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/stonybrook-swing.png",
      title: "COLLEGE WORLD SERIES '12",
      subtitle: 'Game-Winning HR vs LSU on ESPN'
    },
    {
      type: 'image',
      image: "https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/DFDC0037-5EBB-4DF4-ACDE-E92545E1E9A1.png",
      title: '5-TOOL OUTFIELDER',
      subtitle: 'Long Island\'s #1 Prospect (2011)'
    },
    {
      type: 'image',
      image: 'https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/Photoroom_20260115_165711.jpeg',
      title: 'BIG 12 CONFERENCE',
      subtitle: 'University of Kansas'
    },
    {
      type: 'image',
      image: 'https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/05891DC8-A661-490F-B464-1565D6A2904C.png', 
      title: '100+ ATHLETES TRAINED',
      subtitle: 'Proven Track Record'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0F1F3A] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl ${
                badge.type === 'standard' 
                  ? 'bg-gradient-to-br from-[#0A1628] to-[#0F1F3A] border-2 border-[#C9A961] p-6 text-center' 
                  : 'relative h-48 sm:h-64 min-h-[180px] sm:min-h-[220px] flex flex-col items-center justify-end border-2 border-[#C9A961]'
              }`}
            >
              {/* Image for image-type badges */}
              {badge.type === 'image' && (
                <img 
                  src={badge.image} 
                  alt={badge.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              )}

              {/* Overlay for Image Card to ensure text readability */}
              {badge.type === 'image' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              )}

              {/* Standard Card Content */}
              {badge.type === 'standard' ? (
                <>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#C9A961] to-[#B8965C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <badge.icon className="text-[#0A1628]" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white mb-2 tracking-tight">
                    {badge.title}
                  </h3>
                  <p className="text-[#4FC3F7] font-bold text-xs sm:text-sm tracking-wide">
                    {badge.description}
                  </p>
                </>
              ) : (
                /* Image Card Content */
                <div className="relative z-10 text-center px-2 pb-3 sm:pb-4 w-full">
                  <h3 className="text-sm sm:text-lg font-black text-white mb-1 tracking-tight leading-tight uppercase">
                    {badge.title}
                  </h3>
                  {badge.subtitle && (
                    <p className="text-[#C9A961] font-bold text-[10px] sm:text-xs tracking-wide leading-tight">
                      {badge.subtitle}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBadges;
