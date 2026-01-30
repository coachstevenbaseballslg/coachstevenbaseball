
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';
import { trainingVideos } from '@/data/trainingVideos';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-12 md:py-20 bg-[#0A1628]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Simplified Grid Layout - No Section Headers/Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {trainingVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <VideoCard video={video} onPlay={setSelectedVideo} />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl bg-[#0F1F3A] rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0A1628]">
                <h3 className="text-white font-bold text-lg truncate pr-8">
                  {selectedVideo.title}
                </h3>
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

              {/* Video Details (Only visible in modal) */}
              <div className="p-6 bg-[#0F1F3A]">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/20">
                    {selectedVideo.category}
                  </span>
                  {selectedVideo.duration && (
                    <span className="inline-block bg-white/5 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                      {selectedVideo.duration}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 leading-relaxed">
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

export default VideoGallery;
