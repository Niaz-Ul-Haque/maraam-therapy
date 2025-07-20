import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems: FAQItem[] = [
    {
      question: "What does 'Registered Psychotherapist (Qualifying)' mean?",
      answer: (
        <div className="space-y-3">
          <p>
            As a Registered Psychotherapist (Qualifying), I am currently completing my Master of Arts in 
            Counselling Psychology while practicing under supervision. This designation means I have completed 
            extensive training and am working toward full registration with the College of Registered 
            Psychotherapists of Ontario (CRPO).
          </p>
          <p>
            I bring valuable experience from my work at Kids Help Phone as a Crisis Responder and my 
            private practice experience, all while maintaining the highest professional and ethical standards.
          </p>
        </div>
      )
    },
    {
      question: "How does the free consultation work?",
      answer: (
        <div className="space-y-3">
          <p>
            The free 30-minute consultation is an opportunity for us to get to know each other and determine 
            if we're a good fit. During this call, we'll discuss:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>What brings you to therapy and your goals</li>
            <li>My approach and how I might be able to help</li>
            <li>Practical details like scheduling and session format</li>
            <li>Any questions you have about working together</li>
          </ul>
          <p>
            There's no pressure or commitment—it's simply a chance to see if we feel like a good match 
            for your therapeutic journey.
          </p>
        </div>
      )
    },
    {
      question: "Do you offer in-person or virtual sessions?",
      answer: "I currently offer virtual sessions via a secure video platform, serving clients throughout Ontario. Virtual therapy has proven to be highly effective and offers greater accessibility and flexibility for many clients. All sessions are conducted through HIPAA-compliant platforms to ensure your privacy and confidentiality."
    },
    {
      question: "What are your rates and do you accept insurance?",
      answer: (
        <div className="space-y-3">
          <p>
            Please contact me during your free consultation to discuss current rates and payment options. 
            Many extended health insurance plans cover psychotherapy services.
          </p>
          <p>
            I believe that financial barriers shouldn't prevent access to mental health support. If cost 
            is a concern, please don't hesitate to discuss this with me—we may be able to explore options 
            that work for your situation.
          </p>
        </div>
      )
    },
    {
      question: "How long are sessions and how often do we meet?",
      answer: "Sessions are typically 50 minutes long. The frequency of sessions depends on your individual needs and goals, but many clients find weekly sessions helpful initially. As we progress, we can adjust the frequency based on what feels most supportive for your healing journey. Flexibility is key—we'll work together to find a schedule that supports your growth and fits your life."
    },
    {
      question: "What should I expect in our first session?",
      answer: (
        <div className="space-y-3">
          <p>
            Our first session will focus on getting to know you and understanding what brings you to therapy. 
            We'll discuss:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your current concerns and what you hope to achieve</li>
            <li>Relevant background and history</li>
            <li>Your strengths and previous coping strategies</li>
            <li>How your identity and experiences shape your perspective</li>
            <li>Questions about the therapeutic process</li>
          </ul>
          <p>
            My goal is to create a safe, welcoming space where you feel heard and understood from the very beginning.
          </p>
        </div>
      )
    },
    {
      question: "Do you have experience with 2SLGBTQIA+ and neurodivergent clients?",
      answer: (
        <div className="space-y-3">
          <p>
            Yes, absolutely. As someone who shares lived experience within these communities, I bring both 
            personal understanding and professional training to support 2SLGBTQIA+ and neurodivergent individuals.
          </p>
          <p>
            I'm part of Their Collective, a network of practitioners who are queer, transgender, ADHD, 
            and/or autistic, focusing on affirming, accessible services for our communities. This combination 
            of lived experience and specialized training allows me to create truly affirming therapeutic spaces.
          </p>
        </div>
      )
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: (
        <div className="space-y-3">
          <p>
            Therapy can be beneficial for anyone looking to better understand themselves, develop coping 
            strategies, or work through challenges. You don't need to be in crisis to benefit from therapy.
          </p>
          <p>
            Consider therapy if you're experiencing:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Persistent feelings of anxiety, sadness, or overwhelm</li>
            <li>Difficulty managing stress or life transitions</li>
            <li>Challenges with self-esteem or identity</li>
            <li>Relationship difficulties or communication issues</li>
            <li>A desire for personal growth and self-understanding</li>
          </ul>
          <p>
            The free consultation is a perfect opportunity to explore whether therapy feels right for you 
            at this time in your life.
          </p>
        </div>
      )
    },
    {
      question: "What if I'm not sure about my gender or sexuality?",
      answer: "Questioning and exploring your identity is a completely normal and valid experience. I provide a non-judgmental space where you can explore questions about gender, sexuality, and identity at your own pace. There's no pressure to label yourself or come to any particular conclusions—my role is to support you in this exploration with curiosity and self-compassion."
    },
    {
      question: "How do you support neurodivergent clients?",
      answer: (
        <div className="space-y-3">
          <p>
            I work from a neurodiversity-affirming perspective, which means celebrating neurological 
            differences rather than trying to 'fix' them. My approach includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understanding your unique sensory and communication needs</li>
            <li>Developing personalized strategies that work with your brain, not against it</li>
            <li>Addressing challenges like executive functioning, social communication, and sensory processing</li>
            <li>Building self-advocacy skills and self-acceptance</li>
            <li>Exploring how masking and burnout may be affecting you</li>
          </ul>
        </div>
      )
    },
    {
      question: "What should I do in a mental health emergency?",
      answer: (
        <div className="space-y-3">
          <p className="font-semibold text-red-700">
            If you are experiencing a mental health emergency or having thoughts of self-harm, please:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Call 911 or go to your nearest emergency room</li>
            <li>Contact Talk Suicide Canada at 1-833-456-4566 (24/7)</li>
            <li>Text 45645 for Kids Help Phone (if you're under 20)</li>
            <li>Call your local crisis helpline</li>
          </ul>
          <p>
            Email and online contact forms are not monitored 24/7 and should not be used for emergencies. 
            Your safety is the top priority—please reach out for immediate help when needed.
          </p>
        </div>
      )
    },
    {
      question: "How do I book a session or consultation?",
      answer: (
        <div className="space-y-3">
          <p>
            You can book your free 30-minute consultation or ongoing sessions through my online booking 
            platform at healingpaththerapy.janeapp.com. The system allows you to see available times 
            and choose what works best for your schedule.
          </p>
          <p>
            If you have any questions before booking or need assistance with the booking process, 
            feel free to reach out via the contact information on my website.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Common questions about therapy with Maraam Haque, including information about qualifications, sessions, rates, and specialized support for 2SLGBTQIA+ and neurodivergent clients."
        keywords="therapy FAQ, psychotherapy questions, RP qualifying, virtual therapy, 2SLGBTQ+ therapy, neurodivergent support"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-stone-100 py-20" aria-label="FAQ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
            Frequently Asked{' '}
            <span className="text-sage-700">Questions</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Everything you need to know about starting therapy and working together. 
            Can't find what you're looking for? Feel free to ask during your free consultation.
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

      {/* FAQ Content */}
      <section className="py-20 bg-white" aria-label="FAQ content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="card border border-stone-200 hover:border-sage-300 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-center justify-between p-6 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-inset rounded-lg"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-serif font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 text-sage-600">
                    {openItems.includes(index) ? (
                      <ChevronUp size={24} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={24} aria-hidden="true" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 text-gray-700 leading-relaxed"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    {typeof item.answer === 'string' ? (
                      <p>{item.answer}</p>
                    ) : (
                      item.answer
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-stone-50" aria-label="Additional resources">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-700">
              I'm here to help you understand how therapy can support your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Book a Free Consultation
              </h3>
              <p className="text-gray-700 mb-6">
                The best way to get your questions answered is during our 30-minute consultation call. 
                It's completely free and there's no commitment.
              </p>
              <a
                href="https://healingpaththerapy.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
                aria-label="Book consultation (opens in new tab)"
              >
                Schedule Now
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Learn More About My Approach
              </h3>
              <p className="text-gray-700 mb-6">
                Explore my therapeutic approach and specialized services to better understand 
                how I can support your unique needs.
              </p>
              <a
                href="/services"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Crisis Support Resources
            </h3>
            <p className="text-yellow-700 text-sm">
              <strong>Emergency:</strong> 911 | <strong>Talk Suicide Canada:</strong> 1-833-456-4566 (24/7) | 
              <strong>Kids Help Phone:</strong> Text 45645 | <strong>Ontario Mental Health Helpline:</strong> 1-866-531-2600
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;