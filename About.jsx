
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Trophy, Target, Award, MapPin, Users, Star, Quote, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <>
      <Helmet>
        <title>About Coach Steve | Elite Baseball Coach & Player Development Expert</title>
        <meta name="description" content="Learn about Coach Steve's background, coaching philosophy, and proven track record developing elite baseball players with MLB connections and professional experience." />
        <meta name="keywords" content="baseball coach, coaching philosophy, player development expert, elite training, baseball mentorship" />
      </Helmet>

      <div className="min-h-screen bg-[#0A1628] text-gray-100 overflow-x-hidden">
        
        {/* HERO SECTION - Full Viewport Height */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://assets.zyrosite.com/OjCX9JtYPPwxfpnW/chatgpt-image-jan-3-2026-10_35_31-am-etjh1-34j5wUKerC9yKw6C.png" 
               alt="Steven Goldstein Baseball" 
               className="w-full h-full object-cover"
               loading="eager"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent"></div>
             <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-[#C9A961]/20 border border-[#C9A961] backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 md:mb-8">
                <span className="text-[#C9A961] font-black text-xs md:text-sm tracking-widest uppercase">THE JOURNEY</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 leading-none drop-shadow-2xl">
                <TextRevealAnimation>
                  MORE THAN JUST <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">
                    A COACH
                  </span>
                </TextRevealAnimation>
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                Steven Goldstein didn't just play college baseball—he lived it at the highest level. From the pressure of the College World Series to the grind of the Cape Cod League, his journey is a testament to what dedication, mental toughness, and elite training can achieve.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="animate-bounce">
                <ArrowRight className="rotate-90 text-[#4FC3F7]" size={32} />
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-[#0A1628] relative">
          
          {/* SECTION 1 - LONG ISLAND ROOTS (Image Left) */}
          <section className="py-12 md:py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
              <motion.div 
                {...fadeInUp}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
              >
                {/* Image Wrapper */}
                <div className="w-full md:w-1/2">
                  <motion.div 
                    className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#C9A961]/20 group"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.img 
                      src="https://assets.zyrosite.com/OjCX9JtYPPwxfpnW/chatgpt-image-jan-3-2026-10_35_31-am-etjh1-34j5wUKerC9yKw6C.png" 
                      alt="Steven Goldstein St. Dominic" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                      variants={imageHover}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#C9A961] text-[#0A1628] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">High School</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Wrapper */}
                <div className="w-full md:w-1/2 space-y-6">
                   <div className="flex items-center gap-3 mb-2">
                     <MapPin className="text-[#C9A961]" size={24} />
                     <span className="text-[#4FC3F7] font-bold tracking-widest text-sm uppercase">The Foundation</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                     <TextRevealAnimation>
                       FROM ST. DOMINIC TO <br/>
                       <span className="text-[#C9A961]">#1 PROSPECT</span>
                     </TextRevealAnimation>
                   </h2>
                   <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                     Before the national stage, Steven built his foundation right here on Long Island. As a standout at St. Dominic High School, he dominated the local circuit, earning <strong className="text-white">All-Conference honors three times</strong>. His combination of speed, power, and defensive instinct caught every scout's eye, culminating in his ranking as the <strong className="text-[#4FC3F7]">#1 Prospect on Long Island</strong> by Blue Chip Prospects in 2011.
                   </p>
                   <div className="flex flex-wrap gap-3 pt-2">
                     <span className="px-4 py-2 bg-[#0F1F3A] text-white text-sm font-semibold rounded-lg border border-[#4FC3F7]/30 shadow-lg">
                       3x All-Conference
                     </span>
                     <span className="px-4 py-2 bg-[#0F1F3A] text-white text-sm font-semibold rounded-lg border border-[#4FC3F7]/30 shadow-lg">
                       #1 Ranked Prospect (2011)
                     </span>
                   </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 2 - STONY BROOK (Image Right) */}
          <section className="py-12 md:py-24 px-4 bg-[#0F1F3A]/50 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
              <motion.div 
                {...fadeInUp}
                className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16"
              >
                {/* Image Wrapper - Note: In JSX it's first for mobile stacking, but flex-row-reverse puts it right on desktop */}
                 <div className="w-full md:w-1/2">
                  <motion.div 
                    className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#C9A961]/20"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.img 
                      src="https://assets.zyrosite.com/OjCX9JtYPPwxfpnW/3e38bf3e-0145-4857-b017-0897225cc64f-TJroGgENZRzGsGFM.png" 
                      alt="Steven Goldstein Stony Brook" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                      variants={imageHover}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent opacity-60"></div>
                     <div className="absolute bottom-4 left-4">
                      <span className="bg-[#C9A961] text-[#0A1628] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">NCAA Division I</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Wrapper */}
                <div className="w-full md:w-1/2 space-y-6">
                   <div className="flex items-center gap-3 mb-2">
                     <Award className="text-[#C9A961]" size={24} />
                     <span className="text-[#4FC3F7] font-bold tracking-widest text-sm uppercase">The Breakout</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                     <TextRevealAnimation>
                       FRESHMAN ALL-AMERICAN & <br/>
                       <span className="text-[#C9A961]">COLLEGE WORLD SERIES</span>
                     </TextRevealAnimation>
                   </h2>
                   <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                     Steven's freshman campaign at Stony Brook was historic: a <strong className="text-white">.337 batting average</strong>, <strong className="text-white">4 home runs</strong>, and <strong className="text-white">14 stolen bases</strong> earned him <strong className="text-[#C9A961]">Louisville Slugger Freshman All-American</strong> honors.
                   </p>
                   <div className="bg-[#0A1628] p-6 rounded-xl border-l-4 border-[#C9A961] shadow-lg">
                     <p className="text-gray-300 italic text-base md:text-lg">
                       "In the 2012 Super Regionals against LSU, on national ESPN television, Steven delivered a clutch 10th-inning home run that silenced the crowd and helped propel Stony Brook to the College World Series."
                     </p>
                   </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 3 - BIG 12 (Image Left) */}
          <section className="py-12 md:py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
              <motion.div 
                {...fadeInUp}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
              >
                {/* Image Wrapper */}
                <div className="w-full md:w-1/2">
                  <motion.div 
                    className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#C9A961]/20"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.img 
                      src="https://assets.zyrosite.com/OjCX9JtYPPwxfpnW/img_8178-8sg9VXcGV6tDnh2D.PNG" 
                      alt="Steven Goldstein Big 12" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                      variants={imageHover}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent opacity-60"></div>
                     <div className="absolute bottom-4 left-4">
                      <span className="bg-[#C9A961] text-[#0A1628] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Big 12 Conference</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Wrapper */}
                <div className="w-full md:w-1/2 space-y-6">
                   <div className="flex items-center gap-3 mb-2">
                     <Target className="text-[#C9A961]" size={24} />
                     <span className="text-[#4FC3F7] font-bold tracking-widest text-sm uppercase">Power 5 Baseball</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                     <TextRevealAnimation>
                       COMPETING AT <br/>
                       <span className="text-[#C9A961]">THE UNIVERSITY OF KANSAS</span>
                     </TextRevealAnimation>
                   </h2>
                   <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                     Seeking to test himself against the absolute best, Steven concluded his collegiate career at the <strong className="text-white">University of Kansas</strong>. Competing in the Big 12 Conference meant facing future MLB aces every weekend. This experience refined his approach at the plate and deepened his understanding of the mental game required to succeed in high-pressure environments.
                   </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 4 - SUMMER LEAGUES (Image Right) */}
          <section className="py-12 md:py-24 px-4 bg-[#0F1F3A]/50 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
              <motion.div 
                {...fadeInUp}
                className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16"
              >
                {/* Image Wrapper */}
                 <div className="w-full md:w-1/2">
                  <motion.div 
                    className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#C9A961]/20"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.img 
                      src="https://assets.zyrosite.com/OjCX9JtYPPwxfpnW/chatgpt-image-jan-3-2026-10_40_39-am-8i0zs-Lbu0VW6Qv2vbpehk.png" 
                      alt="Steven Goldstein Summer Leagues" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                      variants={imageHover}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent opacity-60"></div>
                     <div className="absolute bottom-4 left-4">
                      <span className="bg-[#C9A961] text-[#0A1628] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Elite Summer Ball</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Wrapper */}
                <div className="w-full md:w-1/2 space-y-6">
                   <div className="flex items-center gap-3 mb-2">
                     <Star className="text-[#C9A961]" size={24} />
                     <span className="text-[#4FC3F7] font-bold tracking-widest text-sm uppercase">Pro Development</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                     <TextRevealAnimation>
                       118 GAMES IN <br/>
                       <span className="text-[#C9A961]">ELITE SUMMER LEAGUES</span>
                     </TextRevealAnimation>
                   </h2>
                   <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                     Steven played 118 games across the Cape Cod League, Northwoods League, NYCBL, and ACBL, compiling a career line of <strong className="text-white">.303 AVG, .379 OBP, .416 SLG</strong> with <strong className="text-white">65 RBI</strong> and <strong className="text-white">32 SB</strong>.
                   </p>
                   
                   <div className="bg-[#0A1628] rounded-xl p-6 border border-[#4FC3F7]/20 shadow-lg">
                     <h3 className="text-[#4FC3F7] font-bold text-xs tracking-widest mb-4 uppercase">Competed Alongside Future MLB Stars</h3>
                     <div className="flex flex-wrap gap-2">
                        {['Aaron Judge', 'Kyle Schwarber', 'Alex Bregman', 'Aaron Nola', 'Jeff McNeil'].map((star) => (
                          <span key={star} className="px-3 py-1.5 bg-[#4FC3F7]/10 text-gray-200 text-xs sm:text-sm font-semibold rounded-full border border-[#4FC3F7]/20 hover:bg-[#4FC3F7]/20 hover:text-white transition-colors cursor-default">
                            {star}
                          </span>
                        ))}
                     </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 5 - COACHING (Image Left) */}
          <section className="py-12 md:py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
              <motion.div 
                {...fadeInUp}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
              >
                {/* Image Wrapper */}
                <div className="w-full md:w-1/2">
                  <motion.div 
                    className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#C9A961]/20"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.img 
                      src="https://assets.zyrosite.com/OjCX9JtYPPwxfpnW/05891dc8-a661-490f-b464-1565d6a2904c-1tFUw2Y1yjglvwYl.png" 
                      alt="Steven Goldstein Coaching" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="lazy"
                      variants={imageHover}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent opacity-60"></div>
                     <div className="absolute bottom-4 left-4">
                      <span className="bg-[#C9A961] text-[#0A1628] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Next Generation</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Wrapper */}
                <div className="w-full md:w-1/2 space-y-6">
                   <div className="flex items-center gap-3 mb-2">
                     <Users className="text-[#C9A961]" size={24} />
                     <span className="text-[#4FC3F7] font-bold tracking-widest text-sm uppercase">Giving Back</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                     <TextRevealAnimation>
                       BRINGING IT BACK TO <br/>
                       <span className="text-[#C9A961]">LONG ISLAND</span>
                     </TextRevealAnimation>
                   </h2>
                   <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                     Today, Steven is dedicated to developing the next generation of Long Island talent. Coaching at <strong className="text-white">Long Island Elite Baseball</strong> and <strong className="text-white">Common Sense Baseball</strong>, he has trained over <strong className="text-[#C9A961]">100+ athletes</strong> ranging from ages 8 to 18. His programs don't just focus on mechanics; they instill the professional mindset he developed over a decade of elite competition.
                   </p>
                   <a 
                     href="/contact" 
                     className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#B8965C] text-[#0A1628] px-8 py-4 rounded-lg font-black text-lg tracking-wider hover:scale-105 transition-transform duration-300 shadow-xl"
                   >
                     TRAIN WITH STEVEN 
                     <ArrowRight className="ml-2" size={20} />
                   </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CLOSING QUOTE */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative p-8 md:p-16 text-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F1F3A] to-[#0A1628] border border-[#C9A961]/30 shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Quote size={200} />
                </div>
                
                <Quote className="text-[#C9A961] w-12 h-12 md:w-16 md:h-16 mx-auto mb-8" />
                
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-snug mb-8 relative z-10 font-serif italic">
                  "I've walked the path these kids dream about—from local fields to Omaha. My goal isn't just to teach them how to swing or throw, but how to think, compete, and carry themselves like champions."
                </h3>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-[#4FC3F7] to-[#C9A961] mb-6"></div>
                  <p className="text-[#C9A961] font-black tracking-[0.2em] text-lg uppercase">
                    Steven Goldstein
                  </p>
                  <p className="text-gray-400 text-sm mt-2 uppercase tracking-wide">
                    Elite Baseball Coach
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
