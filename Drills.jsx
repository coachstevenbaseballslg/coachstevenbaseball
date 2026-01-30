
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Zap, Circle, ArrowRight, Activity, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const Drills = () => {
  const drills = [
    {
      title: "1-2-3 Drill",
      description: "A fundamental progression drill that develops bat control and swing mechanics through three progressive stages. Stage 1 focuses on short, controlled swings with proper stance. Stage 2 extends the swing length while maintaining mechanics. Stage 3 adds full extension and power development. This drill builds confidence and consistency.",
      icon: Target,
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "90/45 Progression Tee",
      description: "An advanced tee drill that uses two different tee heights to develop swing plane consistency. The 90-degree tee position works on upper-half mechanics and bat path, while the 45-degree angle develops lower-half engagement and hip rotation. Alternating between heights trains the body to maintain consistent mechanics across different pitch locations.",
      icon: Zap,
      color: "from-amber-500/20 to-amber-600/10",
      borderColor: "border-amber-500/30"
    },
    {
      title: "Back Net Constraint Tee",
      description: "A specialized drill using a net positioned behind the hitter to provide immediate feedback on swing path and follow-through. The constraint forces proper extension and prevents casting or early shoulder rotation. Hitters develop feel for the barrel and learn to stay inside the ball, improving contact quality and consistency.",
      icon: Circle,
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Soft Toss Progression",
      description: "A dynamic drill starting with short-distance soft toss (10-15 feet) to develop quick hands and reaction time. Progress to medium distance (20-25 feet) for timing development, then long-distance (35+ feet) for game-speed adjustments. This drill bridges the gap between tee work and live pitching.",
      icon: ArrowRight,
      color: "from-amber-500/20 to-amber-600/10",
      borderColor: "border-amber-500/30"
    },
    {
      title: "Front Toss with Movement",
      description: "Advanced drill using front toss with varied pitch movement (rise balls, drop balls, away pitches). Develops pitch recognition and adjustability. Hitters learn to stay balanced and adjust their swing plane based on pitch location and movement, critical for competitive play.",
      icon: Activity,
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Exit Velo Ladder Drill",
      description: "A progression-based drill focused on increasing exit velocity through proper sequencing and power development. Start with lighter bats to develop bat speed, progress to game bats, then finish with slightly heavier bats for strength building. Track exit velo improvements to measure progress and identify mechanical breakdowns.",
      icon: TrendingUp,
      color: "from-amber-500/20 to-amber-600/10",
      borderColor: "border-amber-500/30"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hitting Drills Library | Coach Steve Baseball</title>
        <meta name="description" content="Comprehensive hitting drills library for baseball players. Master your swing with our curated selection of professional drills for mechanics, power, and consistency." />
        <meta name="keywords" content="baseball drills, hitting drills, batting practice, swing mechanics, baseball training" />
      </Helmet>

      <div className="bg-[#0A1628] min-h-screen font-sans text-slate-100 overflow-x-hidden">
        
        {/* HERO SECTION */}
        <div className="relative pt-32 pb-12 sm:pt-40 sm:pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#4FC3F7]/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#C9A961]/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-[#C9A961]/20 border border-[#C9A961] backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#C9A961] font-black text-xs sm:text-sm tracking-widest uppercase">PLAYER DEVELOPMENT</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-none">
                <TextRevealAnimation>
                  HITTING DRILLS <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">
                    LIBRARY
                  </span>
                </TextRevealAnimation>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Master the mechanics. Build the routine. Dominate the plate.
                A curated collection of professional drills designed to elevate your game.
              </p>
            </motion.div>
          </div>
        </div>

        {/* DRILLS GRID */}
        <section className="py-12 sm:py-16 bg-[#0F1F3A]/30 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {drills.map((drill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`bg-gradient-to-br ${drill.color} border ${drill.borderColor} backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full`}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="p-3 bg-[#0A1628]/50 rounded-lg border border-white/10 group-hover:border-white/30 transition-colors">
                      <drill.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="h-1 flex-grow mx-4 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight group-hover:text-[#4FC3F7] transition-colors">
                    {drill.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-grow">
                    {drill.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center text-sm font-bold text-[#C9A961] uppercase tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Master This Drill <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-4 relative overflow-hidden">
           <div className="container mx-auto max-w-4xl text-center relative z-10">
             <div className="bg-gradient-to-br from-[#1a3a52] to-[#0A1628] rounded-2xl p-8 sm:p-12 border border-[#4FC3F7]/30 shadow-2xl">
               <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Need Personalized Guidance?</h2>
               <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                 These drills are just the beginning. Book a session with Coach Steve to get a customized training plan tailored to your specific swing mechanics.
               </p>
               <a 
                 href="/contact" 
                 className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#B8965C] text-[#0A1628] px-8 py-4 rounded-lg font-black text-lg tracking-wider hover:scale-105 transition-transform duration-300 shadow-xl"
               >
                 BOOK A SESSION
               </a>
             </div>
           </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Drills;
