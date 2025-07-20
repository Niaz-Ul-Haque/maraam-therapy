import React from 'react';
import { Heart, Brain, Shield, ExternalLink, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const approaches = [
    {
      title: 'Person-Centered Therapy',
      description: 'Focusing on your inherent capacity for growth and self-understanding in a non-judgmental environment.'
    },
    {
      title: 'Culturally Responsive Care',
      description: 'Integrating your cultural background, identity, and values into our therapeutic work together.'
    },
    {
      title: 'Strength-Based Approach',
      description: 'Building on your existing strengths and resilience while developing new coping strategies.'
    },
    {
      title: 'Trauma-Informed Practice',
      description: 'Understanding how past experiences shape present challenges with safety and empowerment.'
    }
  ];

  const sessionDetails = [
    'Free 30-minute initial consultation',
    'Virtual sessions via secure video platform',
    'Flexible scheduling to accommodate your needs',
    'Serving all clients across Ontario',
    'Sessions typically 50 minutes in length',
    'Regular check-ins to assess progress'
  ];

  return (
    <>
      <SEO
        title="My Approach & Services"
        description="Learn about Maraam's therapeutic approach and specialized services for 2SLGBTQIA+ individuals, neurodivergent support, anxiety, and self-esteem counselling."
        keywords="2SLGBTQ+ therapy services, neurodivergent counselling, anxiety treatment, self-esteem therapy, virtual therapy Ontario, affirming psychotherapy"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-stone-100 py-20" aria-label="Services overview">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
            My Approach &{' '}
            <span className="text-sage-700">Services</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Compassionate, affirming therapy tailored to your unique experience. Together, we'll explore 
            your personal mosaic and develop strategies that honor your identity and support your growth.
          </p>

          <a
            href="https://healingpaththerapy.janeapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            aria-label="Book a free consultation (opens in new tab)"
          >
            Book Free Consultation
            <ExternalLink size={20} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Therapeutic Approach */}
      <section className="py-20 bg-white" aria-label="Therapeutic approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              My Therapeutic Approach
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              I believe in creating a space where you can explore your thoughts, emotions, and 
              challenges without fear of judgment, building on your strengths while honoring your unique perspective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {approaches.map((approach, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>

          <div className="card bg-sage-50 border-sage-200">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Core Philosophy
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Understanding ourselves without judgment, with open-minded curiosity, can get us much 
                closer to ourselves and meeting our needs in an informed, direct, meaningful, and sustainable way. 
                By learning to appreciate past methods of coping, we can develop new skills to live in a more 
                integrated and holistic way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-stone-50" aria-label="Specializations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Areas of Specialization
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Specialized support for the unique challenges and experiences you face
            </p>
          </div>

          {/* 2SLGBTQIA+ Affirming Therapy */}
          <div className="mb-16" id="lgbtq-therapy">
            <div className="card">
              <div className="flex items-start gap-6">
                <div className="text-terracotta-600 flex-shrink-0">
                  <Heart size={48} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                    2SLGBTQIA+ Affirming Therapy
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    A safe space for queer and trans individuals to explore identity, relationships, and 
                    personal growth with someone who shares lived experience and truly understands your journey.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Challenges I Support:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Identity exploration and acceptance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Coming out and family dynamics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Navigating discrimination and microaggressions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Relationship and dating challenges</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Gender identity and expression</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">My Approach Includes:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Affirming your identity and experiences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Building resilience and coping strategies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Exploring internalized stigma and shame</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Celebrating your authentic self</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-terracotta-500 mt-1 flex-shrink-0" />
                          <span>Connecting with community and resources</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neurodivergent Support */}
          <div className="mb-16" id="neurodivergent-support">
            <div className="card">
              <div className="flex items-start gap-6">
                <div className="text-teal-600 flex-shrink-0">
                  <Brain size={48} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                    Neurodivergent Support
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Specialized support for ADHD, autism, and other neurodivergent experiences, celebrating 
                    your unique perspective while building practical strategies for daily life.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Areas of Focus:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Understanding your neurodivergent traits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Executive functioning challenges</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Sensory processing and regulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Social communication and relationships</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Workplace and academic accommodations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Strategies We'll Develop:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Personalized coping mechanisms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Self-advocacy skills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Strength-based approaches</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Environmental modifications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                          <span>Building supportive routines</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Anxiety & Self-Esteem */}
          <div className="mb-16" id="anxiety-self-esteem">
            <div className="card">
              <div className="flex items-start gap-6">
                <div className="text-sage-600 flex-shrink-0">
                  <Shield size={48} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                    Anxiety & Self-Esteem Support
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Compassionate guidance for managing anxiety and building authentic self-worth through 
                    understanding your personal patterns, triggers, and inherent strengths.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Anxiety Support:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Understanding anxiety triggers and patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Developing grounding and calming techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Managing social and performance anxiety</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Breaking cycles of worry and rumination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Building confidence in challenging situations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Self-Esteem Building:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Challenging negative self-talk</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Developing self-compassion practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Identifying and celebrating strengths</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Setting healthy boundaries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-sage-500 mt-1 flex-shrink-0" />
                          <span>Building authentic self-acceptance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Information */}
      <section className="py-20 bg-white" aria-label="Session information">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              How We'll Work Together
            </h2>
            <p className="text-lg text-gray-700">
              Flexible, accessible therapy designed around your needs and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Session Details
              </h3>
              <ul className="space-y-3">
                {sessionDetails.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-sage-500 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card bg-sage-50 border-sage-200">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Getting Started
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="bg-sage-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</span>
                  <span><strong>Free Consultation:</strong> 30-minute call to discuss your needs and see if we're a good fit</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sage-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</span>
                  <span><strong>Initial Assessment:</strong> Understanding your goals, history, and what you hope to achieve</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sage-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</span>
                  <span><strong>Collaborative Planning:</strong> Together, we'll create a personalized approach for your healing journey</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-teal-600 text-white" aria-label="Book consultation">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          
          <p className="text-xl mb-8 text-sage-100">
            Let's explore how I can support you in understanding and connecting with yourself. 
            Book your free consultation today.
          </p>
          
          <a
            href="https://healingpaththerapy.janeapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sage-700 hover:bg-stone-50 font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            aria-label="Book a free consultation (opens in new tab)"
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

export default Services;