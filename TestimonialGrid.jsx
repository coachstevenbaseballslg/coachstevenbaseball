
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { Button } from '@/components/ui/button';

const TestimonialGrid = ({ testimonials, loading, error, onRetry }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#C9A961] border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-300 font-bold tracking-wide">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-red-400" size={40} />
          </div>
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
            Unable to Load Testimonials
          </h3>
          <p className="text-gray-400 mb-6">
            {error}
          </p>
          <Button
            onClick={onRetry}
            className="bg-gradient-to-r from-[#C9A961] to-[#B8965C] hover:from-[#B8965C] hover:to-[#C9A961] text-[#0A1628] font-black tracking-wider"
          >
            <RefreshCw className="mr-2" size={18} />
            Try Again
          </Button>
        </motion.div>
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-[#4FC3F7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-[#4FC3F7]" size={40} />
          </div>
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
            No Testimonials Yet
          </h3>
          <p className="text-gray-400">
            Check back soon for success stories from our athletes and their families.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
        />
      ))}
    </div>
  );
};

export default TestimonialGrid;
