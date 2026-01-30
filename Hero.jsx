
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '@/components/MagneticButton';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover object-top"
          alt="Coach Steve batting for Stony Brook"
          src="https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/stonybrook-swing.png" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent"></div>
      </div>

      {/* Baseball Stitching Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q10 15 20 20 T40 20 T60 20' stroke='%23C9A961' stroke-width='2' fill='none'/%3E%3Cpath d='M0 40 Q10 35 20 40 T40 40 T60 40' stroke='%23C9A961' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#C9A961]/20 border border-[#C9A961] rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-4 sm:mb-6">
              <span className="text-[#C9A961] font-black text-xs sm:text-sm tracking-widest">FRESHMAN ALL-AMERICAN</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
              <TextRevealAnimation>
                TRAINING THAT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">
                  TRANSLATES
                </span>
                TO GAME DAY
              </TextRevealAnimation>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-xl md:max-w-3xl">
              Louisville Slugger Freshman All-American and College World Series outfielder from Stony Brook. Long Island's former #1 prospect (2011) now training the next generation of elite youth baseball players.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <MagneticButton asChild className="h-auto p-0 border-none bg-transparent hover:bg-transparent w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#B8965C] text-[#0A1628] px-8 py-4 rounded-lg font-black text-lg tracking-wider hover:scale-105 transition-transform duration-300 shadow-2xl w-full sm:w-auto text-center"
                >
                  BOOK YOUR SESSION
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </MagneticButton>
              
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center bg-transparent border-2 border-[#4FC3F7] text-[#4FC3F7] px-8 py-4 rounded-lg font-black text-lg tracking-wider hover:bg-[#4FC3F7]/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Real People, Real Results
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
