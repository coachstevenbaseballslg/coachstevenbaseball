
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, RefreshCw } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import TestimonialGrid from '@/components/testimonials/TestimonialGrid';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const fetchTestimonials = useCallback(async (retryCount = 0) => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: fetchError } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setTestimonials(data || []);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      
      const maxRetries = 3;
      if (retryCount < maxRetries) {
        const delay = Math.pow(2, retryCount) * 1000;
        setTimeout(() => fetchTestimonials(retryCount + 1), delay);
      } else {
        setError(err.message || 'Failed to load testimonials.');
        toast({
          variant: "destructive",
          title: "Error Loading Testimonials",
          description: "Could not fetch testimonials. Please check your connection.",
        });
      }
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  return (
    <>
      <Helmet>
        <title>Baseball Coaching Testimonials | Success Stories from Elite Players</title>
        <meta name="description" content="Read testimonials from players who've trained with Coach Steve. See real results from our elite baseball coaching and player development programs." />
        <meta name="keywords" content="coaching testimonials, player success stories, baseball training results, elite coaching reviews" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover"
              alt="Baseball team celebrating victory"
              src="https://images.unsplash.com/photo-1521220023479-f7417d9a3465"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/85 to-[#0A1628]/95"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#C9A961]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4FC3F7]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 pt-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 bg-[#C9A961]/20 border border-[#C9A961] rounded-full px-6 py-3 mb-8">
                  <Quote className="text-[#C9A961]" size={24} />
                  <span className="text-[#C9A961] font-black text-sm tracking-widest">REAL STORIES, REAL RESULTS</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none">
                  <TextRevealAnimation>
                    WHAT PARENTS &
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">
                      PLAYERS SAY
                    </span>
                  </TextRevealAnimation>
                </h1>

                <div className="w-32 h-1 bg-gradient-to-r from-[#C9A961] to-[#4FC3F7] mx-auto mb-8"></div>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Discover how Coach Steve's elite training programs have transformed athletes' games and built confidence that extends far beyond the baseball field.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#B8965C] text-[#0A1628] px-8 py-4 rounded-lg font-black text-lg tracking-wider hover:scale-105 transition-transform duration-300 shadow-2xl"
                  >
                    START YOUR JOURNEY
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                  <a
                    href="#testimonials"
                    className="inline-flex items-center justify-center bg-transparent border-2 border-[#4FC3F7] text-[#4FC3F7] px-8 py-4 rounded-lg font-black text-lg tracking-wider hover:bg-[#4FC3F7]/10 transition-all duration-300"
                  >
                    READ STORIES
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-[#4FC3F7] rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials Grid Section */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-[#0A1628] to-[#0F1F3A]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                <TextRevealAnimation>
                  SUCCESS STORIES
                </TextRevealAnimation>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C9A961] to-[#4FC3F7] mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From D1 commits to youth players finding their confidence—see how Coach Steve's training transforms athletes
              </p>
            </motion.div>

            {error ? (
              <div className="text-center py-12">
                <p className="text-red-400 mb-4">{error}</p>
                <button 
                  onClick={() => fetchTestimonials()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F1F3A] border border-[#4FC3F7] text-[#4FC3F7] rounded-lg hover:bg-[#4FC3F7]/10 transition-colors"
                >
                  <RefreshCw size={16} /> Retry
                </button>
              </div>
            ) : (
              <TestimonialGrid
                testimonials={testimonials}
                loading={loading}
                error={error}
                onRetry={() => fetchTestimonials()}
              />
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0A1628] relative overflow-hidden">
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
              <div className="bg-gradient-to-br from-[#0F1F3A] to-[#0A1628] border-4 border-[#C9A961] rounded-2xl p-12 shadow-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                  <TextRevealAnimation>
                    READY TO
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">
                      TRANSFORM YOUR GAME?
                    </span>
                  </TextRevealAnimation>
                </h2>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Join the athletes and families who trust Coach Steve to deliver results. Your success story starts with a single session.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#B8965C] text-[#0A1628] px-10 py-5 rounded-lg font-black text-xl tracking-wider hover:scale-105 transition-transform duration-300 shadow-2xl"
                >
                  BOOK A SESSION
                  <ArrowRight className="ml-2" size={24} />
                </a>

                <div className="grid md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-[#C9A961]/30">
                  <div>
                    <div className="text-3xl font-black text-[#C9A961] mb-2">100+</div>
                    <div className="text-sm text-gray-400 font-bold tracking-wide">ATHLETES TRAINED</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#C9A961] mb-2">5★</div>
                    <div className="text-sm text-gray-400 font-bold tracking-wide">AVERAGE RATING</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#C9A961] mb-2">D1</div>
                    <div className="text-sm text-gray-400 font-bold tracking-wide">ALL-AMERICAN COACH</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Testimonials;
