
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ChevronRight, Search } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import TextRevealAnimation from '@/components/TextRevealAnimation';

const Blog = () => {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <Helmet>
        <title>Baseball Coaching Blog | Tips, Training Insights & Player Development</title>
        <meta name="description" content="Expert baseball coaching insights, training tips, and player development strategies. Learn from Coach Steve's professional experience and coaching expertise." />
        <meta name="keywords" content="baseball coaching blog, training tips, player development, baseball insights, coaching strategies" />
      </Helmet>

      <div className="bg-[#0A1628] min-h-screen font-sans text-slate-100 pt-24 pb-12">
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              <TextRevealAnimation>
                BASEBALL <span className="text-[#D4AF37]">INSIGHTS</span>
              </TextRevealAnimation>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Deep dives into hitting mechanics, mental approach, and player development strategies to help you level up your game.
            </p>
            
            {/* Search Bar Placeholder */}
            <div className="relative max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-[#0F1F3A] border border-blue-900/50 rounded-full py-3 px-6 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#4FC3F7] focus:ring-1 focus:ring-[#4FC3F7] transition-all"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#0F1F3A] rounded-2xl overflow-hidden border border-blue-900/30 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#D4AF37]/10 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-[#0A1628]/90 backdrop-blur-sm text-[#4FC3F7] text-xs font-bold px-3 py-1 rounded-full border border-[#4FC3F7]/20">
                    {post.category}
                  </div>
                  <img 
                    src={post.featured_image_url || post.coverImage || post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F3A] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link to={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#4FC3F7] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <Link 
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm hover:gap-3 transition-all duration-300 mt-auto group/btn"
                  >
                    Read Article 
                    <ChevronRight className="w-4 h-4 group-hover/btn:text-[#4FC3F7] transition-colors" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter / CTA Section */}
        <section className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#1a3a52] to-[#0F1F3A] rounded-3xl p-8 md:p-12 border border-blue-500/20 text-center relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#4FC3F7]/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-4">Never Miss a Tip</h2>
              <p className="text-blue-100 mb-8">
                Join our newsletter to get the latest hitting drills, mental game strategies, and exclusive training content delivered straight to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow bg-[#0A1628] border border-blue-900/50 rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                />
                <MagneticButton className="h-auto p-0 border-none bg-transparent hover:bg-transparent">
                  <span className="bg-[#D4AF37] hover:bg-[#B8965C] text-[#0A1628] font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-[#D4AF37]/20 whitespace-nowrap block">
                    Subscribe Now
                  </span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;
