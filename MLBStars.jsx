
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const MLBStars = () => {
  const stars = [
    {
      name: 'AARON JUDGE',
      team: 'New York Yankees',
      achievement: 'AL MVP, Home Run Champion',
      type: 'image',
      image: 'https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/Aaron%20Judge.jpeg'
    },
    {
      name: 'KYLE SCHWARBER',
      team: 'Philadelphia Phillies',
      achievement: 'All-Star, Power Hitter',
      type: 'image',
      image: 'https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/MLB%20All-Star%20Kyle%20Schwarber.jpeg'
    },
    {
      name: 'ALEX BREGMAN',
      team: 'Houston Astros',
      achievement: 'World Series Champion',
      type: 'image',
      image: 'https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/Alex%20Bregman.jpeg'
    },
    {
      name: 'AARON NOLA',
      team: 'Philadelphia Phillies',
      achievement: 'All-Star Pitcher',
      type: 'image',
      image: 'https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/Aaron%20Nola.jpeg'
    },
    {
      name: 'JEFF MCNEIL',
      team: 'New York Mets',
      achievement: 'Batting Champion',
      type: 'image', // Changed to image type
      image: 'https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/Jeff%20McNeil%20.webp' // Added image URL
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-[#0F1F3A] to-[#0A1628] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q10 15 20 20 T40 20 T60 20' stroke='%23C9A961' stroke-width='2' fill='none'/%3E%3Cpath d='M0 40 Q10 35 20 40 T40 40 T60 40' stroke='%23C9A961' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#C9A961]/20 border border-[#C9A961] rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <Star className="text-[#C9A961]" size={16} />
            <span className="text-[#C9A961] font-black text-xs sm:text-sm tracking-widest">MLB CONNECTIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            <TextRevealAnimation>
              COMPETED ALONGSIDE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">
                MLB STARS
              </span>
            </TextRevealAnimation>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#C9A961] to-[#4FC3F7] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Competed with and against future MLB All-Stars in the Cape Cod League, Northwoods League, Big 12 Conference, and College World Series—including Aaron Judge, Kyle Schwarber, Alex Bregman, Aaron Nola, and Jeff McNeil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {stars.map((star, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                star.type === 'image'
                ? 'relative overflow-hidden rounded-xl border border-[#C9A961] shadow-xl group min-h-[200px] sm:min-h-[250px] hover:scale-105 transition-transform duration-300'
                : 'bg-gradient-to-br from-[#0A1628] to-[#0F1F3A] border-2 border-[#C9A961]/30 rounded-lg p-6 text-center hover:border-[#C9A961] hover:scale-105 transition-all duration-300 shadow-xl flex flex-col items-center justify-center h-full'
              }`}
            >
              {star.type === 'image' ? (
                <>
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("${star.image}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60 z-10" />
                  <div className="relative z-20 h-full flex flex-col justify-end p-4 sm:p-5 text-left w-full">
                     <h3 className="text-base sm:text-lg font-black text-white mb-1 tracking-tight leading-none drop-shadow-md uppercase">
                       {star.name}
                     </h3>
                     <p className="text-[#4FC3F7] font-bold text-xs sm:text-sm mb-1 drop-shadow-sm">
                        {star.team}
                      </p>
                     <p className="text-gray-300 text-[10px] sm:text-xs font-medium tracking-wide">
                       {star.achievement}
                     </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#C9A961] to-[#B8965C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-[#0A1628]" size={24} fill="#0A1628" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 tracking-tight">
                    {star.name}
                  </h3>
                  <p className="text-[#4FC3F7] font-bold text-sm mb-2">
                    {star.team}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {star.achievement}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MLBStars;
