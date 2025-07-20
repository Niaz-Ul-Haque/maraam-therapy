import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase, BlogPost } from '../lib/supabase';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching posts:', error);
          setError('Failed to load blog posts. Please try again later.');
        } else {
          setPosts(data || []);
        }
      } catch (error) {
        console.error('Error in fetchPosts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getExcerpt = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  return (
    <>
      <SEO
        title="Insights & Resources"
        description="Educational content and insights on mental health, 2SLGBTQIA+ issues, neurodivergent experiences, and personal growth from Maraam Haque, RP (Qualifying)."
        keywords="mental health blog, 2SLGBTQ+ resources, neurodivergent insights, therapy education, personal growth, anxiety resources, self-esteem"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-stone-100 py-20" aria-label="Blog overview">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
            Insights &{' '}
            <span className="text-sage-700">Resources</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Educational content to help you understand patterns, connect with yourself, 
            and navigate your healing journey—no matter what stage you're on.
          </p>

          <a
            href="https://healingpaththerapy.janeapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            aria-label="Book a free consultation (opens in new tab)"
          >
            Book Free Consultation
            <ExternalLink size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white" aria-label="Blog posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            // Loading state
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="card animate-pulse">
                  <div className="h-48 bg-stone-200 rounded-lg mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-6 bg-stone-200 rounded"></div>
                    <div className="h-4 bg-stone-200 rounded w-3/4"></div>
                    <div className="h-4 bg-stone-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            // Error state
            <div className="text-center py-12">
              <div className="card max-w-md mx-auto bg-red-50 border-red-200">
                <p className="text-red-700 mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="btn-secondary"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : posts.length === 0 ? (
            // Empty state
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  No Posts Yet
                </h2>
                <p className="text-gray-600 mb-8">
                  I'm working on creating valuable content for you. Check back soon for insights 
                  on mental health, personal growth, and navigating life's challenges.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://healingpaththerapy.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                    aria-label="Book consultation (opens in new tab)"
                  >
                    Book a Consultation
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                  <p className="text-sm text-gray-500">
                    Or learn more <Link to="/about" className="text-sage-600 hover:text-sage-700 underline">about my approach</Link>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Posts grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="card hover:shadow-lg transition-shadow duration-300 group"
                >
                  {/* Featured Image */}
                  {post.image_url ? (
                    <img
                      src={post.image_url}
                      alt=""
                      className="w-full h-48 object-contain rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-sage-200 to-teal-200 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-sage-600">
                        <Calendar size={48} aria-hidden="true" />
                      </div>
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="space-y-3">
                    {/* Publication Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} aria-hidden="true" />
                      <time dateTime={post.created_at}>
                        {formatDate(post.created_at)}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-serif font-semibold text-gray-900 group-hover:text-sage-700 transition-colors duration-200">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 rounded"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-700 leading-relaxed">
                      {getExcerpt(post.content)}
                    </p>

                    {/* Read More Link */}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200 group-hover:gap-3"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                      <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter/Updates Section */}
      <section className="py-20 bg-stone-50" aria-label="Stay updated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Stay Connected
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            Want to be notified when I publish new insights and resources? 
            The best way to stay updated is to follow my practice updates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://healingpaththerapy.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors">
                Book a Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Connect directly and learn about my latest insights during our conversation
              </p>
            </a>

            <Link
              to="/contact"
              className="card hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-sm">
                Have questions about a specific topic you'd like me to address?
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-teal-600 text-white" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          
          <p className="text-xl mb-8 text-sage-100">
            Reading about mental health is a great start—taking action is even better. 
            Book your free consultation to see how I can support your growth.
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
    </>
  );
};

export default Blog;