
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const FinalCTA = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#0A1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4FC3F7] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-[#0F1F3A] to-[#0A1628] border-2 sm:border-4 border-[#C9A961] rounded-2xl p-6 sm:p-12 shadow-2xl">
            <Calendar className="text-[#C9A961] mx-auto mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16" />
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tighter leading-tight">
              <TextRevealAnimation>
                READY TO DOMINATE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">
                  ON GAME DAY?
                </span>
              </TextRevealAnimation>
            </h2>

            <p className="text-base sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Stop leaving performance on the practice field. Let's build a training plan that translates directly to success when it matters most—between the lines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full">
              <MagneticButton asChild className="h-auto p-0 border-none bg-transparent hover:bg-transparent w-full sm:w-auto">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#B8965C] text-[#0A1628] px-6 py-4 sm:px-10 sm:py-5 rounded-lg font-black text-lg sm:text-xl tracking-wider hover:scale-105 transition-transform duration-300 shadow-2xl w-full sm:w-auto whitespace-normal text-center"
                >
                  <span className="break-words">BOOK YOUR FIRST SESSION</span>
                  <ArrowRight className="ml-2 flex-shrink-0" size={24} />
                </a>
              </MagneticButton>
              <a
                href="/training"
                className="inline-flex items-center justify-center bg-transparent border-2 border-[#4FC3F7] text-[#4FC3F7] px-6 py-4 sm:px-10 sm:py-5 rounded-lg font-black text-lg sm:text-xl tracking-wider hover:bg-[#4FC3F7]/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                EXPLORE TRAINING
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#C9A961]/30">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#C9A961] mb-1 sm:mb-2">100+</div>
                <div className="text-xs sm:text-sm text-gray-400 font-bold tracking-wide">ATHLETES TRAINED</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#C9A961] mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-400 font-bold tracking-wide">YEARS EXPERIENCE</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#C9A961] mb-1 sm:mb-2">D1</div>
                <div className="text-xs sm:text-sm text-gray-400 font-bold tracking-wide">ALL-AMERICAN</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
