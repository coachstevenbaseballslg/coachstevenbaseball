
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const WhyParentsTrust = () => {
  const reasons = [
    'Proven track record with 100+ athletes developed',
    'D1 All-American and College World Series experience',
    'Personalized attention and customized training plans',
    'Regular progress updates and transparent communication',
    'Focus on long-term development, not quick fixes',
    'Emphasis on both physical skills and mental game',
    'Safe, professional training environment',
    'Flexible scheduling to accommodate busy families',
    'Connections to college and showcase opportunities',
    'Genuine care for each athlete\'s success'
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#0A1628]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tighter">
              <TextRevealAnimation>
                WHY PARENTS
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">
                  TRUST COACH STEVE
                </span>
              </TextRevealAnimation>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#C9A961] to-[#4FC3F7] mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              When you invest in your child's baseball development, you deserve a coach who understands the commitment, values open communication, and delivers real results.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-[#C9A961] flex-shrink-0 mt-1 w-5 h-5" />
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 mt-8 md:mt-0"
          >
            <img 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-2xl"
              alt="Coach working with young baseball player"
             src="https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/Sam%20Training%20with%20Coach%20Steve.png" />
            
            <div className="bg-gradient-to-br from-[#0F1F3A] to-[#0A1628] border-2 border-[#C9A961] rounded-lg p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#C9A961] mb-3 sm:mb-4 tracking-tight">
                PARENT FEEDBACK
              </h3>
              <p className="text-gray-300 italic leading-relaxed mb-4 text-sm sm:text-base">
                "Before working with Coach Steve, Gavin would just step in the box and swing. Over the season, he learned how to actually think through at-bats, adjust pitch to pitch, and trust his preparation. The growth wasn't just physical—it was mental. We couldn't be happier."
              </p>
              <p className="text-[#4FC3F7] font-bold text-sm">— Parent of High School Player</p>
            </div>

            <div className="bg-gradient-to-br from-[#0F1F3A] to-[#0A1628] border-2 border-[#C9A961] rounded-lg p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#C9A961] mb-3 sm:mb-4 tracking-tight">
                PLAYER RESULTS
              </h3>
              <p className="text-gray-300 italic leading-relaxed mb-4 text-sm sm:text-base">
                "After training with Coach Steve, I made varsity as a sophomore and earned a college scholarship. He believed in me when I didn't believe in myself."
              </p>
              <p className="text-[#4FC3F7] font-bold text-sm">— D3 College Commit</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyParentsTrust;
