
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Calendar, ChevronLeft, Share2, ArrowRight, AlertTriangle } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Article link copied to clipboard.",
    });
  };

  // Helper function to strip HTML tags for description fallback
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, '');
  };

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found - Coach Steve Baseball</title>
        </Helmet>
        <div className="bg-[#0A1628] min-h-screen font-sans text-slate-100 pt-32 pb-12 flex flex-col">
          <div className="container mx-auto px-4 sm:px-6 flex-grow flex flex-col items-center justify-center text-center">
            <div className="bg-[#0F1F3A] p-8 rounded-3xl border border-blue-900/30 max-w-lg w-full">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
              <p className="text-gray-400 mb-8">
                Sorry, the article you are looking for doesn't exist or has been moved.
              </p>
              <Link 
                to="/blog"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A1628] font-bold py-3 px-6 rounded-full hover:bg-[#B8965C] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Return to Blog
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  // Author information fallback if not present in post data
  const authorName = post.author || "Coach Steve Goldstein | Coach Steve Baseball";
  const authorBio = post.authorBio || "Former D1 All-American and professional player dedicated to developing the next generation of baseball talent. Specializing in advanced hitting mechanics and mental performance.";

  // Determine which image to show as the hero/featured image
  const displayImage = post.featured_image_url || post.coverImage || post.image;

  // SEO Helpers
  const baseUrl = "https://coachstevenbaseball.com";
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  
  // Logic for absolute image URL
  // If displayImage starts with http or https, use it directly. Otherwise append to baseUrl
  const absoluteImageUrl = displayImage 
    ? (displayImage.startsWith('http') ? displayImage : `${baseUrl}${displayImage}`)
    : `${baseUrl}/default-og-image.jpg`; // Fallback if no image exists

  // Logic for description
  // 1. metaDescription
  // 2. excerpt
  // 3. first 155 chars of content stripped of HTML
  const descriptionText = post.metaDescription 
    ? post.metaDescription 
    : (post.excerpt 
        ? post.excerpt 
        : stripHtml(post.content).substring(0, 155) + "...");

  return (
    <>
      <Helmet>
        <title>{post.metaTitle || post.title + " - Coach Steve Baseball"}</title>
        <meta name="description" content={descriptionText} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={descriptionText} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Coach Steven Baseball" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={descriptionText} />
        <meta name="twitter:image" content={absoluteImageUrl} />
      </Helmet>

      <div className="bg-[#0A1628] min-h-screen font-sans text-slate-100 pt-24 pb-12">
        <article>
          {/* Header */}
          <div className="container mx-auto px-4 sm:px-6 mb-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gray-400 hover:text-[#D4AF37] transition-colors mb-8 group"
            >
              <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Featured/Cover Image - Rendered ABOVE title if present */}
            {displayImage && (
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="mb-8 w-full group"
               >
                 <img 
                   src={displayImage} 
                   alt={post.title}
                   loading="lazy"
                   className="w-full max-h-[500px] object-cover rounded-xl shadow-lg border border-[#D4AF37]/20 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                 />
               </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4FC3F7]/10 text-[#4FC3F7] text-sm font-bold border border-[#4FC3F7]/20 mb-6">
                {post.category}
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
                {post.title}
              </h1>

              {/* Subtitle Rendering - NEW */}
              {post.subtitle && (
                <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light leading-relaxed max-w-3xl mx-auto">
                  {post.subtitle}
                </p>
              )}

              <div className="flex items-center justify-center gap-6 text-gray-400 text-sm md:text-base font-medium mt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{post.readTime}</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[#D4AF37]">By:</span>
                  <span>{authorName.split('|')[0].trim()}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Standard Featured Image (Displayed below title ONLY if coverImage/featured_image_url is missing) */}
          {!displayImage && post.image && (
            <div className="container mx-auto px-4 sm:px-6 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-[#0A1628]/50 border border-blue-900/30 group"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-auto max-h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </div>
          )}

          {/* Content Body */}
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed mb-16
                  prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
                  prose-a:text-[#4FC3F7] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-bold
                  prose-ul:list-disc prose-ul:pl-6
                  prose-li:marker:text-[#D4AF37]
                  prose-img:rounded-lg prose-img:shadow-lg prose-img:border prose-img:border-[#D4AF37]/30"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share & Tags Section */}
              <div className="border-t border-gray-800 pt-8 pb-12 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Share this article:</span>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0F1F3A] hover:bg-[#1a3a52] text-white rounded-full transition-colors border border-blue-900/30 group"
                >
                  <Share2 className="w-4 h-4 text-[#4FC3F7] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold">Copy Link</span>
                </button>
              </div>

              {/* Author Bio */}
              <div className="bg-[#0F1F3A] rounded-2xl p-6 md:p-8 border border-blue-900/30 flex flex-col md:flex-row gap-6 items-center md:items-start mb-16">
                <img 
                  src="https://tqczkvytkkrfomyosbjp.supabase.co/storage/v1/object/public/website-assets/headshot-elite.png" 
                  alt="Coach Steve Goldstein" 
                  className="w-20 h-20 rounded-full flex-shrink-0 shadow-lg object-cover"
                  loading="lazy"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Written by {authorName}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {authorBio}
                  </p>
                  <Link 
                    to="/about"
                    className="text-[#4FC3F7] font-bold text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    Read Full Bio <ChevronLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-[#0A1628] to-[#0F1F3A] py-16 border-t border-blue-900/30">
          <div className="container mx-auto px-4 sm:px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to apply these concepts?</h2>
             <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
               Reading is a great start, but nothing beats personalized instruction. Let's get to work in the cage.
             </p>
             <Link 
               to="/training"
               className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#0A1628] font-black text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all duration-300 group"
             >
               TRAIN WITH COACH STEVE
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
