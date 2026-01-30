
import React from 'react';
import { motion } from 'framer-motion';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const EliteLeagues = () => {
  const leagues = [
    {
      name: 'CAPE COD LEAGUE',
      description: 'Premier collegiate summer baseball league',
      highlight: 'Top Prospect Showcase',
      type: 'image',
      image: "https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/Coach%20Steve%20sliding%20into%20home%20plate%20for%20the%20Born%20Braves%20in%20the%20Cape%20Cod%20League..png"
    },
    {
      name: 'NORTHWOODS LEAGUE',
      description: 'Elite summer collegiate baseball',
      highlight: 'Professional Development',
      type: 'image',
      image: "https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/Coach%20Steve%20playing%20in%20the%20Northwoods%20League..png"
    },
    {
      name: 'NYCBL',
      description: 'New York Collegiate Baseball League',
      highlight: 'Competitive Excellence'
    },
    {
      name: 'ACBL',
      description: 'Atlantic Collegiate Baseball League',
      highlight: 'Advanced Competition'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#0A1628] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            <TextRevealAnimation>
              ELITE EXPERIENCE
            </TextRevealAnimation>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#C9A961] to-[#4FC3F7] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            From the College World Series to the premier summer leagues in the country.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Column: Image (Celebration) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9A961]/20 shadow-2xl">
              <img 
                src="https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/F25546AB-63AE-44C6-AF28-9D3038003419.png" 
                alt="Stony Brook College World Series Celebration Dogpile" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#C9A961] text-[#0A1628] text-xs font-black px-3 py-1 rounded inline-block mb-2 uppercase tracking-wider">
                  College World Series
                </div>
                <p className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                  Beating LSU to reach Omaha
                </p>
              </div>
            </div>
            
            {/* Decoration Element */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#4FC3F7]/10 rounded-full -z-10 blur-xl"></div>
          </motion.div>

          {/* Right Column: League Stats/Cards */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {leagues.map((league, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${
                    league.type === 'image' 
                      ? 'relative overflow-hidden rounded-xl border border-[#C9A961] shadow-xl group min-h-[160px] sm:min-h-[180px] hover:scale-105 transition-transform duration-300' 
                      : 'bg-gradient-to-br from-[#0F1F3A] to-[#0A1628] border border-[#4FC3F7]/30 rounded-xl p-5 hover:border-[#C9A961] transition-all duration-300 group hover:-translate-y-1'
                  }`}
                >
                  {league.type === 'image' ? (
                    <>
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url("${league.image}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center top'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60 z-10" />
                      <div className="relative z-20 h-full flex flex-col justify-end p-5">
                         <h3 className="text-lg font-black text-white mb-1 tracking-tight leading-none drop-shadow-md">
                           {league.name}
                         </h3>
                         <p className="text-[#C9A961] text-xs font-bold tracking-wide mt-1">
                           {league.description}
                         </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-[#4FC3F7]/10 rounded-lg flex items-center justify-center group-hover:bg-[#C9A961]/20 transition-colors">
                          <span className="text-xl">⚾</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-black text-[#C9A961] mb-1 tracking-tight leading-none">
                        {league.name}
                      </h3>
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                        {league.description}
                      </p>
                      <div className="inline-block bg-[#4FC3F7]/5 border border-[#4FC3F7]/20 rounded px-2 py-0.5">
                        <span className="text-[#4FC3F7] text-[10px] font-bold tracking-wide uppercase">
                          {league.highlight}
                        </span>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#0F1F3A]/50 rounded-xl border-l-4 border-[#C9A961]"
            >
              <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-300 font-mono">
                <span className="flex items-center"><span className="text-[#C9A961] mr-2">●</span> 118 Summer League Games</span>
                <span className="flex items-center"><span className="text-[#C9A961] mr-2">●</span> .303 Career AVG</span>
                <span className="flex items-center"><span className="text-[#C9A961] mr-2">●</span> 65 RBI</span>
                <span className="flex items-center"><span className="text-[#C9A961] mr-2">●</span> 32 Stolen Bases</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EliteLeagues;
