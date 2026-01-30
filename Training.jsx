
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Zap, Brain, Eye, Check, Trophy, Award, Star, MapPin, Users, CalendarCheck } from 'lucide-react';
import Footer from '@/components/Footer';
import BentoVideoGallery from '@/components/training/BentoVideoGallery';
import MagneticButton from '@/components/MagneticButton';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const Training = () => {
  const calendlyLink = "https://calendly.com/coachstevengoldstein/free-inital-1-hour-session";

  const workOnCards = [
    {
      title: "Mechanical Excellence",
      description: "Refining hitting, throwing, and fielding mechanics for consistent, high-level performance.",
      icon: <Target className="w-8 h-8 md:w-10 md:h-10 text-[#4FC3F7]" />,
      borderColor: "border-[#4FC3F7]/30"
    },
    {
      title: "Game Situational Work",
      description: "Training that replicates real competition pressure and decision-making scenarios.",
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />,
      borderColor: "border-[#D4AF37]/30"
    },
    {
      title: "Mental Approach",
      description: "Building confidence, focus, and the ability to perform under pressure.",
      icon: <Brain className="w-8 h-8 md:w-10 md:h-10 text-[#4FC3F7]" />,
      borderColor: "border-[#4FC3F7]/30"
    },
    {
      title: "Baseball IQ",
      description: "Understanding the why behind every play, developing instincts and game awareness.",
      icon: <Eye className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />,
      borderColor: "border-[#D4AF37]/30"
    }
  ];

  const parentBenefits = [
    {
      title: "Clarity",
      description: "Know exactly what your player is working on and why. No more guessing games.",
    },
    {
      title: "Honest Feedback",
      description: "Clear, direct communication about your player's skill level and performance gaps.",
    },
    {
      title: "A Long-Term Partner",
      description: "We think beyond the next tournament. We're building skills for the next level.",
    }
  ];

  const credentials = [
    { label: "D1 All-American", sub: "Stony Brook", icon: <Trophy className="w-6 h-6 text-[#D4AF37]" /> },
    { label: "College World Series", sub: "2012 Participant", icon: <Star className="w-6 h-6 text-[#D4AF37]" /> },
    { label: "Cape Cod League", sub: "Bourne Braves", icon: <Award className="w-6 h-6 text-[#D4AF37]" /> },
    { label: "70+ Athletes", sub: "Currently Training", icon: <Users className="w-6 h-6 text-[#D4AF37]" /> },
  ];

  return (
    <>
      <Helmet>
        <title>Baseball Training Programs | Elite Coaching Services by Coach Steve</title>
        <meta name="description" content="Comprehensive baseball training programs including hitting, pitching, fielding, and mental performance coaching. Personalized development for serious athletes." />
        <meta name="keywords" content="baseball training, hitting lessons, pitching coaching, fielding drills, baseball development programs, elite coaching" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>

      <div className="bg-[#0A1628] min-h-screen font-sans text-slate-100 overflow-x-hidden">
        
        {/* HERO SECTION */}
        <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1490326149782-dd42fa59bd9f" 
              alt="Baseball training background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/90 to-[#0A1628]/60 md:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 z-10 pt-24 pb-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto md:mx-0"
            >
              <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-lg border border-blue-400/30">
                <Users size={14} className="sm:w-4 sm:h-4" />
                <span>AGES 8-18</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter mb-6">
                <TextRevealAnimation>
                  PRIVATE 1-on-1 <br />
                  <span className="text-[#D4AF37]">HITTING LESSONS</span>
                </TextRevealAnimation>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8">
                Focused, individualized instruction that translates to game day—personalized by Long Island's former #1 prospect, now training the next generation of elite youth baseball players.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10 text-sm md:text-base font-semibold tracking-wide text-[#4FC3F7]">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                  <span>Common Sense Baseball • Westbury, NY</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-700/50 pt-8 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 sm:h-10 bg-[#D4AF37] rounded-full"></div>
                  <span className="font-bold text-gray-200 text-sm sm:text-base">ELITE HITTING<br/>INSTRUCTOR</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="h-8 w-1 sm:h-10 bg-[#4FC3F7] rounded-full"></div>
                  <span className="font-bold text-gray-200 text-sm sm:text-base">PROVEN<br/>RESULTS</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="h-8 w-1 sm:h-10 bg-[#D4AF37] rounded-full"></div>
                  <span className="font-bold text-gray-200 text-sm sm:text-base">100+ ATHLETES<br/>TRAINED</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BENTO VIDEO GALLERY SECTION */}
        <BentoVideoGallery />

        {/* WHAT WE WORK ON SECTION */}
        <section className="py-16 sm:py-20 md:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                <TextRevealAnimation>
                  WHAT WE <span className="text-[#4FC3F7]">WORK ON</span>
                </TextRevealAnimation>
              </h2>
              <div className="w-20 sm:w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {workOnCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-[#0F1F3A] p-6 sm:p-8 rounded-2xl border ${card.borderColor} shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 md:hover:scale-105 transition-all duration-300 group`}
                >
                  <div className="bg-[#0A1628] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner md:group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT PARENTS GET SECTION */}
        <section className="bg-[#1a3a52] py-16 sm:py-20 md:py-24 border-y border-blue-900/30 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
              <div className="lg:col-span-5">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 md:mb-6"
                >
                  <TextRevealAnimation>
                    WHAT <br className="hidden lg:block"/>
                    <span className="text-[#4FC3F7]">PARENTS</span> <br className="hidden lg:block"/>
                    GET
                  </TextRevealAnimation>
                </motion.h2>
                <div className="h-1.5 sm:h-2 w-24 sm:w-32 bg-[#D4AF37] mb-6"></div>
                <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed">
                  We know you invest time and resources into your player's development. Our commitment is to provide a professional, transparent, and results-driven experience.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                {parentBenefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex items-start gap-4 sm:gap-6 bg-[#0F1F3A]/50 p-5 sm:p-6 rounded-xl border border-blue-400/10 backdrop-blur-sm"
                  >
                    <div className="bg-green-500/10 p-1.5 sm:p-2 rounded-lg mt-1 flex-shrink-0">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CREDENTIALS BAR */}
        <section className="py-12 sm:py-16 bg-[#0A1628]">
          <div className="container mx-auto px-4 sm:px-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
               {credentials.map((cred, idx) => (
                 <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center justify-center text-center p-6 border border-[#D4AF37]/20 rounded-xl bg-[#0F1F3A] hover:bg-[#132542] transition-colors"
                 >
                   <div className="mb-3 p-3 bg-[#D4AF37]/10 rounded-full">
                     {cred.icon}
                   </div>
                   <h4 className="text-[#D4AF37] font-black text-lg sm:text-xl tracking-tight mb-1">{cred.label}</h4>
                   <span className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">{cred.sub}</span>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#1a3a52]"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                <TextRevealAnimation>
                  Ready to Get Started?
                </TextRevealAnimation>
              </h2>
              <p className="text-base sm:text-xl text-gray-300 mb-10 leading-relaxed px-2">
                Book a session and see what focused, individualized instruction can do for your player's swing—and confidence.
              </p>
              
              <MagneticButton asChild className="h-auto p-0 border-none bg-transparent hover:bg-transparent">
                <a 
                  href={calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8965C] text-[#0A1628] font-black text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-full shadow-lg hover:shadow-[#D4AF37]/40 sm:hover:scale-105 transition-all duration-300"
                >
                  <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  Book a Lesson
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Training;
