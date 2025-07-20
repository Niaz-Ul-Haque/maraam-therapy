import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase, BlogPost as BlogPostType } from '../lib/supabase';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string>('');

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError('No post specified');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('Error fetching post:', error);
          setError('Post not found');
        } else {
          setPost(data);
        }
      } catch (error) {
        console.error('Error in fetchPost:', error);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    // Simple formatting - split by paragraphs and preserve line breaks
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-6 leading-relaxed">
        {paragraph.trim()}
      </p>
    ));
  };

  const openImageModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setIsImageModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImageSrc('');
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isImageModalOpen) {
        closeImageModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Cleanup: restore body scroll if component unmounts with modal open
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Loading Header */}
        <div className="bg-gradient-to-br from-sage-50 to-stone-100 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-stone-200 rounded w-1/4 mb-6"></div>
              <div className="h-12 bg-stone-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-stone-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>

        {/* Loading Content */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-6">
              <div className="h-64 bg-stone-200 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-4 bg-stone-200 rounded"></div>
                <div className="h-4 bg-stone-200 rounded w-5/6"></div>
                <div className="h-4 bg-stone-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blog" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.created_at,
    "dateModified": post.created_at,
    "author": {
      "@type": "Person",
      "name": "Maraam Haque"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Maraam Haque Therapy"
    },
    "description": post.content.substring(0, 160),
    "image": post.image_url || `${import.meta.env.VITE_SITE_URL}/og-image.jpg`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${import.meta.env.VITE_SITE_URL}/blog/${post.slug}`
    }
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.substring(0, 160)}
        type="article"
        publishedTime={post.created_at}
        image={post.image_url}
        url={`${import.meta.env.VITE_SITE_URL}/blog/${post.slug}`}
        structuredData={structuredData}
      />
      
      {/* Header */}
      <header className="bg-gradient-to-br from-sage-50 to-stone-100 py-20" role="banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium mb-8 transition-colors duration-200"
            aria-label="Back to all insights"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            Back to Insights
          </Link>

          {/* Post Title */}
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Publication Date */}
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={20} aria-hidden="true" />
            <time dateTime={post.created_at} className="text-lg">
              Published {formatDate(post.created_at)}
            </time>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-20 bg-white" role="main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {post.image_url && (
            <div className="mb-12">
              <div 
                className="relative group cursor-pointer"
                onClick={() => openImageModal(post.image_url!)}
              >
                <img
                  src={post.image_url}
                  alt=""
                  className="w-full max-h-96 object-contain rounded-xl shadow-lg bg-gray-50"
                />
                {/* Zoom overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white rounded-full p-3 shadow-lg">
                    <ZoomIn size={24} className="text-gray-700" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Click image to view full size
              </p>
            </div>
          )}

          {/* Post Content */}
          <div className="prose prose-lg prose-stone max-w-none">
            <div className="text-lg text-gray-700">
              {formatContent(post.content)}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-sage-50 rounded-xl border border-sage-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sage-300 to-teal-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-serif font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  About Maraam Haque
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Maraam is a Registered Psychotherapist (Qualifying) specializing in affirming therapy 
                  for 2SLGBTQIA+ and neurodivergent individuals. She creates educational content to help 
                  people understand patterns and connect with themselves, no matter what stage of their 
                  healing journey they're on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200"
                  >
                    Learn More About Maraam
                    <ArrowLeft size={16} className="rotate-180" aria-hidden="true" />
                  </Link>
                  <a
                    href="https://healingpaththerapy.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200"
                    aria-label="Book consultation (opens in new tab)"
                  >
                    Book a Consultation
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related/More Posts */}
      <section className="py-20 bg-stone-50" aria-label="More insights">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Continue Reading
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Explore more insights and resources to support your healing journey
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ArrowLeft size={20} aria-hidden="true" />
              All Insights
            </Link>
            
            <a
              href="https://healingpaththerapy.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              aria-label="Book consultation (opens in new tab)"
            >
              Book Free Consultation
              <ExternalLink size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-teal-600 text-white" aria-label="Get support">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          
          <p className="text-xl mb-8 text-sage-100">
            If this resonated with you, let's explore how therapy can support your personal growth 
            and healing journey. Book a free 30-minute consultation to get started.
          </p>
          
          <a
            href="https://healingpaththerapy.janeapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sage-700 hover:bg-stone-50 font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            aria-label="Book consultation (opens in new tab)"
          >
            Book Your Free Consultation
            <ExternalLink size={20} aria-hidden="true" />
          </a>
          
          <p className="text-sm text-sage-200 mt-4">
            No commitment required • Virtual sessions • Serving all of Ontario
          </p>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            
            {/* Image */}
            <img
              src={modalImageSrc}
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPost;