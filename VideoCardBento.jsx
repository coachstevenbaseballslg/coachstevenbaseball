
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import PlayButtonOverlay from './PlayButtonOverlay';

const VideoCardBento = ({ video, className, onPlay }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={() => onPlay(video)}
      className={cn(
        "group relative bg-[#1a2332] rounded-xl overflow-hidden border border-gray-700/50 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 flex flex-col h-full",
        className
      )}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Aspect Ratio preservation wrapper if needed, but flex-grow usually handles filling the bento cell */}
        <div className="absolute inset-0">
          <img
            src={video.thumbnail || video.coverImage}
            alt={video.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
          
          {/* Play Button */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <PlayButtonOverlay />
          </div>

          {/* Category Badge - Absolute positioned on top of image */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block bg-[#D4AF37] text-[#0A1628] text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {video.category}
            </span>
          </div>

          {/* Title - Positioned at bottom of image for a clean look */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-transparent z-20">
            <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#4FC3F7] transition-colors line-clamp-2">
              {video.title}
            </h3>
            {video.duration && (
               <span className="text-gray-400 text-xs mt-1 block font-medium">{video.duration}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCardBento;
