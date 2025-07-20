import React from 'react';
import { ExternalLink, Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact & Booking"
        description="Get in touch with Maraam Haque, RP (Qualifying) to book your free consultation or ask questions about therapy services in Ontario."
        keywords="contact therapist, book therapy consultation, psychotherapy Ontario, virtual therapy booking"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-stone-100 py-20" aria-label="Contact information">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
            Contact &{' '}
            <span className="text-sage-700">Booking</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Ready to begin your healing journey? I'm here to answer your questions 
            and help you take the first step toward growth and self-understanding.
          </p>
        </div>
      </section>

      {/* Main Booking Section */}
      <section className="py-20 bg-white" aria-label="Booking information">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-lg text-gray-700">
              The easiest way to get started is through my online booking platform
            </p>
          </div>

          <div className="card bg-gradient-to-br from-sage-50 to-teal-50 border-sage-200 text-center py-12">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-sage-600 rounded-full flex items-center justify-center mb-6">
                <Phone size={32} className="text-white" aria-hidden="true" />
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                30-Minute Free Consultation
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's get to know each other and see if we're a good fit. During this call, 
                we'll discuss your goals, my approach, and answer any questions you have—with 
                no pressure or commitment.
              </p>
            </div>

            <a
              href="https://healingpaththerapy.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-sage-600 hover:bg-sage-700 text-white font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Book consultation on JaneApp (opens in new tab)"
            >
              <ExternalLink size={24} aria-hidden="true" />
              Book on JaneApp
            </a>
            
            <p className="text-sm text-gray-600 mt-4">
              Secure online booking • Available times shown in real-time
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-stone-50" aria-label="Contact methods">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-lg text-gray-700">
              Have questions before booking? Here's how you can reach me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professional Email */}
            <div className="card text-center">
              <div className="text-teal-600 mb-4">
                <Mail size={48} className="mx-auto" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Email
              </h3>
              
              <p className="text-gray-700 mb-4">
                For non-urgent questions about therapy, booking, or general inquiries.
              </p>
              
              <p className="text-sm text-gray-600 mb-4">
                <strong>Response time:</strong> Within 24-48 hours
              </p>
              
              <a
                href="mailto:hello@maaraamhaque.com"
                className="text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
              >
                hello@maaraamhaque.com
              </a>
            </div>

            {/* Location */}
            <div className="card text-center">
              <div className="text-sage-600 mb-4">
                <MapPin size={48} className="mx-auto" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Service Area
              </h3>
              
              <p className="text-gray-700 mb-4">
                Virtual sessions available throughout Ontario, Canada.
              </p>
              
              <p className="text-sage-700 font-medium">
                Ontario, Canada
              </p>
              
              <p className="text-sm text-gray-600 mt-2">
                Secure video platform
              </p>
            </div>

            {/* Hours */}
            <div className="card text-center">
              <div className="text-terracotta-600 mb-4">
                <Clock size={48} className="mx-auto" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Availability
              </h3>
              
              <p className="text-gray-700 mb-4">
                Flexible scheduling to accommodate your needs, including evening and weekend options.
              </p>
              
              <p className="text-terracotta-700 font-medium">
                Flexible Hours
              </p>
              
              <p className="text-sm text-gray-600 mt-2">
                See real-time availability online
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-white" aria-label="Important information">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Before You Reach Out
            </h2>
            <p className="text-lg text-gray-700">
              A few important things to keep in mind
            </p>
          </div>

          <div className="space-y-8">
            {/* Crisis Information */}
            <div className="card bg-red-50 border-red-200">
              <div className="flex items-start gap-4">
                <div className="text-red-600 flex-shrink-0">
                  <AlertTriangle size={32} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-red-900 mb-4">
                    Crisis Support
                  </h3>
                  
                  <p className="text-red-800 mb-4">
                    <strong>This contact form and email are not monitored 24/7 and should not be used for emergencies.</strong>
                  </p>
                  
                  <div className="text-red-700">
                    <p className="mb-2"><strong>If you are in crisis or having thoughts of self-harm:</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Call <strong>911</strong> or go to your nearest emergency room</li>
                      <li>Contact <strong>Talk Suicide Canada</strong> at <strong>1-833-456-4566</strong> (24/7)</li>
                      <li>Text <strong>45645</strong> for Kids Help Phone (if under 20)</li>
                      <li>Call <strong>Ontario Mental Health Helpline</strong> at <strong>1-866-531-2600</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Times */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">
                  Email Response
                </h3>
                <p className="text-gray-700">
                  I aim to respond to all emails within 24-48 hours during business days. 
                  For urgent (but non-crisis) matters, please indicate this in your subject line.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">
                  Booking Platform
                </h3>
                <p className="text-gray-700">
                  The JaneApp booking platform provides instant confirmation and is the 
                  fastest way to schedule your consultation or ongoing sessions.
                </p>
              </div>
            </div>

            {/* What to Expect */}
            <div className="card bg-sage-50 border-sage-200">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                What to Expect After Booking
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="bg-sage-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</span>
                  <div>
                    <p><strong>Confirmation:</strong> You'll receive an email confirmation with session details and a secure video link</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="bg-sage-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</span>
                  <div>
                    <p><strong>Preparation:</strong> Think about what brings you to therapy and any questions you have</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="bg-sage-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</span>
                  <div>
                    <p><strong>Our Call:</strong> We'll have an open conversation about your needs and how I might support you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-teal-600 text-white" aria-label="Take action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Take the First Step Today
          </h2>
          
          <p className="text-xl mb-8 text-sage-100">
            Your healing journey starts with a single step. I'm here to walk alongside you 
            as you explore your personal mosaic and develop the tools you need to thrive.
          </p>
          
          <a
            href="https://healingpaththerapy.janeapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-sage-700 hover:bg-stone-50 font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            aria-label="Book consultation (opens in new tab)"
          >
            <ExternalLink size={24} aria-hidden="true" />
            Book Your Free Consultation
          </a>
          
          <p className="text-sm text-sage-200 mt-6">
            No commitment required • 30 minutes free • Virtual sessions across Ontario
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;