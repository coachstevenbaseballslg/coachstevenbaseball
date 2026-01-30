
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoCard = ({ video, onPlay }) => {
  // Determine which image to use (prioritize coverImage, then thumbnail, then fallback)
  const placeholderImage = "https://images.unsplash.com/photo-1595210329266-9d3278678236?q=80&w=800&auto=format&fit=crop";
  const displayImage = video.coverImage || video.thumbnail || placeholderImage;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/20 border border-white/10 cursor-pointer transition-all duration-500"
      onClick={() => onPlay(video)}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={displayImage}
          alt={video.title || "Video thumbnail"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 backdrop-blur-[1px] transition-all duration-300"></div>

      {/* Centered Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0A1628] shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
        >
          <Play fill="currentColor" className="ml-1 w-8 h-8 md:w-10 md:h-10" />
        </motion.div>
      </div>

      {/* Optional: Subtle Border Highlight on Hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#D4AF37]/30 transition-colors duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default VideoCard;
