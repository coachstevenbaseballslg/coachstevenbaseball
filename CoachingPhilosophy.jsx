
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, TrendingUp, Shield } from 'lucide-react';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const CoachingPhilosophy = () => {
  const principles = [
    {
      icon: Target,
      title: 'GAME-DAY FOCUSED',
      description: 'Every drill, every rep is designed to translate directly to game situations. No wasted time on techniques that don\'t work under pressure.'
    },
    {
      icon: Heart,
      title: 'PLAYER-CENTERED',
      description: 'Each athlete is unique. Training plans are personalized based on individual strengths, weaknesses, goals, and learning styles.'
    },
    {
      icon: TrendingUp,
      title: 'MEASURABLE PROGRESS',
      description: 'Data-driven development with video analysis, performance metrics, and regular progress tracking to ensure continuous improvement.'
    },
    {
      icon: Shield,
      title: 'LONG-TERM SUCCESS',
      description: 'Building fundamentally sound athletes who can adapt and excel at every level, from youth ball to college and beyond.'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-[#0F1F3A] to-[#0A1628]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            <TextRevealAnimation>
              THE COACHING PHILOSOPHY
            </TextRevealAnimation>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#C9A961] to-[#4FC3F7] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A proven approach built on elite experience and real results
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
             <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9A961]/20 shadow-2xl group h-full">
               <img 
                 src="https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/nolan-coach.PNG" 
                 alt="Coach Steve Training Young Athlete" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out min-h-[300px] sm:min-h-[400px]"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-70"></div>
               
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                   <p className="text-[#C9A961] font-black text-xs sm:text-sm mb-1 uppercase tracking-widest">MENTORSHIP</p>
                   <p className="text-white text-base sm:text-lg font-bold leading-tight">
                     "It's not just about the mechanics. It's about building the confidence to trust those mechanics when it matters most."
                   </p>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Right Column: Principles */}
          <div className="w-full lg:w-1/2">
            <div className="grid gap-4 sm:gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#0A1628] to-[#0F1F3A] border border-[#C9A961]/20 rounded-lg p-5 sm:p-6 hover:border-[#C9A961] transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C9A961] to-[#B8965C] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <principle.icon className="text-[#0A1628]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white mb-1 sm:mb-2 tracking-tight group-hover:text-[#C9A961] transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingPhilosophy;
