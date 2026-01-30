
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Shield } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? 'text-[#C9A961]' : 'text-gray-600'}
        fill={i < rating ? '#C9A961' : 'none'}
      />
    ));
  };

  const getIcon = () => {
    const role = testimonial.role.toLowerCase();
    if (role.includes('parent')) return Shield;
    if (role.includes('player') || role.includes('commit')) return Award;
    return Star;
  };

  const Icon = getIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-br from-[#0A1628] to-[#0F1F3A] border-2 border-[#C9A961]/30 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-opacity-90"
    >
      {/* Icon Badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1">
          {renderStars(testimonial.rating)}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A961] to-[#B8965C] rounded-full flex items-center justify-center shadow-lg">
          <Icon className="text-[#0A1628]" size={24} />
        </div>
      </div>

      {/* Quote */}
      <div className="mb-6">
        <p className="text-gray-300 italic leading-relaxed text-lg">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author Info */}
      <div className="border-t border-[#4FC3F7]/30 pt-4">
        <p className="text-white font-black text-lg tracking-tight">{testimonial.name}</p>
        <p className="text-[#4FC3F7] font-bold text-sm tracking-wide">{testimonial.role}</p>
      </div>

      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-[#C9A961]/5 rounded-full blur-2xl"></div>
    </motion.div>
  );
};

export default TestimonialCard;
