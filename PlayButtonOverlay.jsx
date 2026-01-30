
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const PlayButtonOverlay = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center pointer-events-none", className)}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0.8 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        className="relative group"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Button Circle */}
        <div className="relative w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg shadow-black/40 z-10 transition-transform duration-300">
          <Play className="w-8 h-8 text-[#0A1628] fill-[#0A1628] ml-1" />
        </div>
      </motion.div>
    </div>
  );
};

export default PlayButtonOverlay;
