import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Clock } from 'lucide-react';

const ServiceDetail = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-br from-[#0F1F3A] to-[#0A1628] border-2 border-[#C9A961]/30 rounded-lg overflow-hidden hover:border-[#C9A961] transition-all duration-300"
    >
      <div className="bg-gradient-to-r from-[#C9A961] to-[#B8965C] p-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl">{service.icon}</div>
          <h2 className="text-4xl font-black text-[#0A1628] tracking-tighter">{service.title}</h2>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Who It's For */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="text-[#4FC3F7]" size={24} />
            <h3 className="text-2xl font-black text-white tracking-tight">WHO IT'S FOR</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">{service.whoItsFor}</p>
        </div>

        {/* What's Worked On */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="text-[#4FC3F7]" size={24} />
            <h3 className="text-2xl font-black text-white tracking-tight">WHAT WE WORK ON</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {service.whatWorkedOn.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <span className="text-[#C9A961] mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What Parents Notice */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Eye className="text-[#4FC3F7]" size={24} />
            <h3 className="text-2xl font-black text-white tracking-tight">WHAT PARENTS NOTICE</h3>
          </div>
          <p className="text-gray-300 leading-relaxed bg-[#0A1628] border-l-4 border-[#C9A961] p-4 rounded-r">
            {service.parentsNotice}
          </p>
        </div>

        {/* Sample Session Flow */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="text-[#4FC3F7]" size={24} />
            <h3 className="text-2xl font-black text-white tracking-tight">SAMPLE SESSION (70 MIN)</h3>
          </div>
          <div className="space-y-3">
            {service.sampleFlow.map((step, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-[#C9A961] to-[#B8965C] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A1628] font-black text-sm">{idx + 1}</span>
                </div>
                <p className="text-gray-300 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;