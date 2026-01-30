
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const ServicesPreview = () => {
  const services = [
    {
      icon: '⚾',
      title: 'HITTING',
      description: 'Develop power, consistency, and elite bat-to-ball skills with proven swing mechanics.',
      features: ['Bat Speed', 'Launch Angle', 'Plate Discipline']
    },
    {
      icon: '🧤',
      title: 'DEFENSE',
      description: 'Master footwork, hands, and positioning to become a reliable defensive player.',
      features: ['Footwork', 'Glove Work', 'Quick Release']
    },
    {
      icon: '🧠',
      title: 'BASEBALL IQ',
      description: 'Learn to think the game like a pro with situational awareness training.',
      features: ['Game Situations', 'Strategy', 'Anticipation']
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#0A1628] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            <TextRevealAnimation>
              COMPLETE PLAYER DEVELOPMENT
            </TextRevealAnimation>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#C9A961] to-[#4FC3F7] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Every aspect of your game, elevated through personalized training programs
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 max-w-7xl mx-auto mb-12">
          
          {/* Right Column (Desktop): Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
             <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9A961]/20 shadow-2xl group">
              <img 
                src="https://assets.zyrosite.com/OjCX9JtYPPwxfpnW/summer-league-zd1oc-5AUVqhZtxCDNUi3V.png" 
                alt="Northwoods League At-Bat" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out aspect-[4/5] lg:aspect-auto lg:h-[600px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="bg-[#4FC3F7]/10 backdrop-blur-sm border border-[#4FC3F7]/30 rounded-xl p-4">
                   <p className="text-[#4FC3F7] font-black text-xs tracking-widest uppercase mb-1">THE EXPERIENCE</p>
                   <p className="text-white text-sm font-medium leading-relaxed">
                     "Playing in front of thousands of fans in the Northwoods League taught me how to slow the game down. That's what I teach my players—composure under pressure."
                   </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Column (Desktop): Service Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#0F1F3A] to-[#0A1628] border border-[#4FC3F7]/30 rounded-lg p-5 sm:p-6 hover:border-[#C9A961] hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-3xl sm:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-black text-[#C9A961] mb-2 sm:mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[3.5rem] sm:h-10">
                    {service.description}
                  </p>
                  <div className="space-y-2 pt-2 border-t border-[#4FC3F7]/10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-[#4FC3F7] text-xs font-bold uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 sm:mt-10 text-center lg:text-left"
            >
              <MagneticButton asChild className="h-auto p-0 border-none bg-transparent hover:bg-transparent w-full sm:w-auto">
                <a
                  href="/training"
                  className="inline-flex items-center bg-gradient-to-r from-[#C9A961] to-[#B8965C] text-[#0A1628] px-6 py-4 sm:px-8 rounded-lg font-black text-base sm:text-lg tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg w-full sm:w-auto justify-center text-center"
                >
                  PRIVATE 1-on-1 HITTING LESSONS
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
