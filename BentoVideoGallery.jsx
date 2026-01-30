
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import VideoCardBento from './VideoCardBento';
import { trainingVideos } from '@/data/trainingVideos';

const BentoVideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Helper to determine grid span based on index to create Bento effect
  // This pattern assumes a 4-column grid on desktop
  const getBentoClass = (index) => {
    // Pattern designed for 4 items, but loops if more are added
    const patternIndex = index % 4;
    
    switch (patternIndex) {
      case 0:
        return "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]"; // Large Feature
      case 1:
        return "md:col-span-2 md:row-span-1 min-h-[200px]"; // Wide Short
      case 2:
        return "md:col-span-1 md:row-span-1 min-h-[200px]"; // Standard Square
      case 3:
        return "md:col-span-1 md:row-span-1 min-h-[200px]"; // Standard Square
      default:
        return "md:col-span-1 md:row-span-1 min-h-[200px]";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0A1628]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
              TRAINING <span className="text-[#D4AF37]">GALLERY</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Explore our library of drills, mechanics breakdowns, and mental game insights.
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:flex items-center gap-2 text-[#4FC3F7] font-bold text-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
            <span>New Content Added Weekly</span>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {trainingVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={getBentoClass(index)}
            >
              <VideoCardBento 
                video={video} 
                onPlay={setSelectedVideo} 
                className="h-full w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="relative w-full max-w-6xl bg-[#0F1F3A] rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-[#0A1628]">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                        <Play size={14} className="text-[#0A1628] fill-[#0A1628] ml-0.5" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg md:text-xl truncate max-w-[200px] md:max-w-md">
                        {selectedVideo.title}
                        </h3>
                        <span className="text-[#4FC3F7] text-xs font-bold uppercase tracking-wider">
                            {selectedVideo.category}
                        </span>
                    </div>
                </div>
                
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Video Player Container */}
              <div className="aspect-video bg-black w-full">
                <VideoPlayer video={selectedVideo} />
              </div>

              {/* Video Details */}
              <div className="p-6 md:p-8 bg-[#0F1F3A]">
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoVideoGallery;
