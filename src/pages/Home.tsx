import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Brain, Shield, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase, BlogPost } from '../lib/supabase';

const Home: React.FC = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching posts:', error);
        } else {
          setRecentPosts(data || []);
        }
      } catch (error) {
        console.error('Error in fetchRecentPosts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  const specializations = [
    {
      icon: Heart,
      title: '2SLGBTQIA+ Affirming Therapy',
      description: 'A safe space for queer and trans individuals to explore identity, relationships, and personal growth with someone who understands your journey.',
      color: 'text-terracotta-600'
    },
    {
      icon: Brain,
      title: 'Neurodivergent Support',
      description: 'Specialized support for ADHD, autism, and other neurodivergent experiences, celebrating your unique perspective while building coping strategies.',
      color: 'text-teal-600'
    },
    {
      icon: Shield,
      title: 'Anxiety & Self-Esteem',
      description: 'Compassionate guidance for managing anxiety and building authentic self-worth through understanding your personal patterns and strengths.',
      color: 'text-sage-600'
    }
  ];

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-stone-100 py-20 lg:py-32" aria-label="Hero section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Affirming Therapy for Your{' '}
                <span className="text-sage-700">Unique Path</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Welcome to a safe, affirming space where 2SLGBTQIA+ and neurodivergent individuals can explore their personal mosaic with a therapist who shares their lived experience and truly gets it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://healingpaththerapy.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
                  aria-label="Book a free 30-minute consultation (opens in new tab)"
                >
                  Book Free Consultation
                  <ExternalLink size={20} aria-hidden="true" />
                </a>
                
                <Link
                  to="/about"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  Learn About Maraam
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Free 30-minute consultation</strong> • Virtual sessions across Ontario • RP (Qualifying)
              </p>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-sage-200 to-teal-200 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Placeholder for Maraam's photo */}
                  <div className="w-full h-full bg-gradient-to-br from-sage-300 to-teal-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 mx-auto bg-white/20 rounded-full mb-4 flex items-center justify-center">
                        <Heart size={48} />
                      </div>
                      <p className="text-lg font-medium">Maraam Haque</p>
                      <p className="text-sm opacity-90">RP (Qualifying)</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta-300 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-300 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white" aria-label="Introduction">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Exploring Your Personal Mosaic
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are mosaics of the people around us, the ideas we touch, and the events we experience. 
            Everything you feel is valid—it can be beautiful, but it can also become difficult when caught 
            in patterns of struggle. I'm here to help you understand and connect with yourself, 
            no matter what stage of your healing journey you're on.
          </p>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-stone-50" aria-label="Specializations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              How I Can Support You
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Specialized, affirming care tailored to your unique experience and identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((specialization, index) => {
              const IconComponent = specialization.icon;
              return (
                <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                  <div className={`${specialization.color} mb-4`}>
                    <IconComponent size={48} aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    {specialization.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {specialization.description}
                  </p>
                  
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200"
                    aria-label={`Learn more about ${specialization.title}`}
                  >
                    Learn More
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-white" aria-label="Recent blog posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Educational content to help you understand patterns, connect with yourself, 
              and navigate your healing journey
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card animate-pulse">
                  <div className="h-48 bg-stone-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-stone-200 rounded mb-2"></div>
                  <div className="h-4 bg-stone-200 rounded mb-4"></div>
                </div>
              ))}
            </div>
          ) : recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="card hover:shadow-lg transition-shadow duration-300">
                  {post.image_url && (
                    <img
                      src={post.image_url}
                      alt=""
                      className="w-full h-48 object-contain rounded-lg mb-4 bg-gray-50"
                    />
                  )}
                  
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.content.substring(0, 150)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts available yet.</p>
            </div>
          )}

          {recentPosts.length > 0 && (
            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View All Insights
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-teal-600 text-white" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          
          <p className="text-xl mb-8 text-sage-100">
            Take the first step towards understanding yourself better. 
            Book a free 30-minute consultation to see if we're a good fit.
          </p>
          
          <a
            href="https://healingpaththerapy.janeapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sage-700 hover:bg-stone-50 font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            aria-label="Book a free 30-minute consultation (opens in new tab)"
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

export default Home;