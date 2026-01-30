
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Calendar } from 'lucide-react';
import Footer from '@/components/Footer';
import { galleryImages } from '@/data/galleryImages';

const TrainingGallery = () => {
  return (
    <>
      <Helmet>
        <title>Baseball Training Gallery | Coach Steve's Elite Training Programs</title>
        <meta name="description" content="View photos and videos from Coach Steve's elite baseball training sessions. See our coaching methods, facilities, and player development in action." />
        <meta name="keywords" content="training gallery, baseball coaching photos, training videos, coaching methods, player development" />
      </Helmet>

      <div className="min-h-screen bg-[#0A1628] font-sans text-white">
        
        {/* HERO SECTION */}
        <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a3a52] via-[#0A1628] to-[#0A1628] opacity-60"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6">
                <Camera size={16} />
                <span>IN ACTION</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                TRAINING <span className="text-[#4FC3F7]">GALLERY</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                A visual look at the work we put in. From mechanical adjustments in the cage to results on the field.
              </p>
            </motion.div>
          </div>
        </div>

        {/* GALLERY GRID */}
        <section className="py-12 bg-[#0A1628]">
          <div className="container mx-auto px-4 md:px-8">
            
            {galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, idx) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group relative h-[400px] w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-gray-900"
                  >
                    {/* Image - Dominant Visual Feature */}
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />

                    {/* Refined Gradient Overlay - Only appears on hover to support text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Minimal Content - Bottom aligned, fades in */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="inline-block text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-1.5">
                        {image.category}
                      </span>
                      <h3 className="text-sm font-medium text-white leading-snug tracking-wide line-clamp-2">
                        {image.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-[#0F1F3A] rounded-2xl border border-gray-800">
                <Camera className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400">No images available yet</h3>
                <p className="text-gray-500 mt-2">Check back soon for updates!</p>
              </div>
            )}
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#132B45] to-[#0A1628] border border-[#2A4A62] p-10 md:p-20 text-center shadow-2xl"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#4FC3F7] rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-block p-3 bg-[#D4AF37]/10 rounded-full mb-6">
                  <Calendar className="w-8 h-8 text-[#D4AF37]" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Ready to Transform Your Game?
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                  Don't just watch the results—experience them. Book your session with Coach Steve today and start building the foundation for elite performance.
                </p>

                <Link to="/contact">
                  <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A1628] font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <span className="relative z-10">Book a Session</span>
                    <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TrainingGallery;
