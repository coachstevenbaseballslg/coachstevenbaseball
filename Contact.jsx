
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CalendarCheck, Send, CheckCircle2, Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    player_name: '',
    player_age: '',
    primary_focus: 'Hitting',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          ...formData,
          subject: 'Session Inquiry from Website',
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Request Received!",
        description: "We'll be in touch shortly to schedule your session.",
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full bg-[#0F1F3A] border border-[#4FC3F7]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4FC3F7] focus:ring-1 focus:ring-[#4FC3F7] transition-all";
  const labelClasses = "block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide";

  return (
    <>
      <Helmet>
        <title>Contact Coach Steve | Baseball Coaching & Training Inquiries</title>
        <meta name="description" content="Get in touch with Coach Steve for baseball coaching, training programs, or player development inquiries. Available for consultations and custom training plans." />
        <meta name="keywords" content="contact baseball coach, coaching inquiries, training programs, player development consultation, baseball coaching near me" />
      </Helmet>

      <div className="pt-24 min-h-screen flex flex-col bg-[#0A1628]">
        <div className="flex-grow container mx-auto px-4 py-12 md:py-20">
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                    <TextRevealAnimation>
                      BOOK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-[#C9A961]">SESSION</span>
                    </TextRevealAnimation>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Ready to take your game to the next level? Fill out the form below or use the direct scheduling link.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                
                {/* Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0F1F3A]/30 border border-[#4FC3F7]/10 rounded-2xl p-8 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-full bg-[#4FC3F7]/10 text-[#4FC3F7]">
                            <Send size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Session Inquiry</h2>
                    </div>

                    {submitted ? (
                        <div className="text-center py-12 bg-[#0F1F3A]/50 rounded-xl border border-[#C9A961]/20">
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="inline-block p-4 rounded-full bg-green-500/10 text-green-500 mb-4"
                            >
                                <CheckCircle2 size={48} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
                            <p className="text-gray-400">Coach Steve will review your info and contact you shortly.</p>
                            <button 
                                onClick={() => { setSubmitted(false); setFormData({name: '', email: '', phone: '', player_name: '', player_age: '', primary_focus: 'Hitting', message: ''})}}
                                className="mt-6 text-[#4FC3F7] hover:text-[#4FC3F7]/80 font-bold"
                            >
                                Send another request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Parent Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Player Name</label>
                                    <input 
                                        type="text" 
                                        name="player_name"
                                        required
                                        value={formData.player_name}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="Future Star"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Phone</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Player Age</label>
                                    <input 
                                        type="text" 
                                        name="player_age"
                                        value={formData.player_age}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="e.g. 14"
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Primary Focus</label>
                                    <select 
                                        name="primary_focus"
                                        value={formData.primary_focus}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    >
                                        <option value="Hitting">Hitting</option>
                                        <option value="Fielding">Fielding</option>
                                        <option value="Pitching">Pitching</option>
                                        <option value="All-Around">All-Around Development</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>Message / Goals</label>
                                <textarea 
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    placeholder="Tell us about the player's current level and goals..."
                                ></textarea>
                            </div>

                            <MagneticButton 
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-[#C9A961] to-[#B8965C] text-[#0A1628] font-black uppercase tracking-wider py-4 h-auto rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border-none"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <>
                                        SUBMIT REQUEST <ArrowRight size={20} />
                                    </>
                                )}
                            </MagneticButton>
                        </form>
                    )}
                </motion.div>

                {/* Direct Scheduling Option */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col gap-8"
                >
                    <div className="bg-[#0A1628] rounded-2xl p-8 border border-[#4FC3F7]/20 relative overflow-hidden group hover:border-[#4FC3F7]/40 transition-colors">
                        <div className="absolute top-0 right-0 p-3 bg-[#4FC3F7]/10 rounded-bl-2xl">
                            <CalendarCheck className="text-[#4FC3F7] w-8 h-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">Initial Assessment</h3>
                        <p className="text-gray-400 mb-6">
                            Prefer to lock in a time right now? Book a 1-hour initial assessment directly through Calendly.
                        </p>
                        
                        <ul className="space-y-3 mb-8">
                            {['Skill Evaluation', 'Video Analysis', 'Development Roadmap'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="text-[#C9A961] w-5 h-5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://calendly.com/coachstevengoldstein/free-inital-1-hour-session"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-transparent border-2 border-[#4FC3F7] text-[#4FC3F7] font-bold py-3 rounded-lg hover:bg-[#4FC3F7] hover:text-[#0A1628] transition-all uppercase tracking-wider"
                        >
                            Open Calendly
                        </a>
                    </div>

                    <div className="bg-gradient-to-br from-[#1E293B] to-[#0F1F3A] rounded-2xl p-8 border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <AlertCircle className="text-[#C9A961]" />
                            Why Book an Assessment?
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            We don't do "cookie cutter" lessons. Every player starts with an assessment so we can build a training plan that actually addresses their specific mechanical inefficiencies and approach.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
