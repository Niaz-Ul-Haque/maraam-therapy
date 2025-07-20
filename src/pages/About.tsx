import React from 'react';
import { ExternalLink, Heart, BookOpen, Users } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Maraam Haque"
        description="Learn about Maraam Haque, RP (Qualifying), a registered psychotherapist specializing in 2SLGBTQIA+ and neurodivergent affirming therapy in Ontario."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-stone-100 py-20" aria-label="About Maraam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Hello, I'm{' '}
                <span className="text-sage-700">Maraam</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                I'm a person-first therapist who continues to be amazed by the human condition: 
                the range of emotions, thoughts, perceptions, and narratives that we carry and share.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://healingpaththerapy.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                  aria-label="Book a free consultation (opens in new tab)"
                >
                  Book Free Consultation
                  <ExternalLink size={20} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-sage-200 to-teal-200 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-sage-300 to-teal-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 mx-auto bg-white/20 rounded-full mb-4 flex items-center justify-center">
                        <Heart size={48} />
                      </div>
                      <p className="text-lg font-medium">Professional Photo</p>
                      <p className="text-sm opacity-90">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-white" aria-label="Personal story">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            My Journey to Affirming Therapy
          </h2>
          
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              We are mosaics of the people around us, the ideas we touch, and the events that we experience. 
              Which brings us to become a part of the mosaic of the human race. Everything you feel is valid. 
              It can be beautiful, but it can also become a difficult sentence when caught in patterns of difficulty.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Pride month has always been something of awe for me. To be celebrating and calling people in 
              from various walks of life, to just be simply human. I remember when I was younger, my first 
              personal call in to my own sexuality was my 8th grade teacher asking me if I had ever thought 
              about my sexuality. She asked me very open-ended-ly and said that whatever it is, it's okay. 
              I don't even remember what I said or did to elicit the conversation, but it was probably just me being myself.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              I never took her up on it, but I returned to that question in university, when more friends 
              started to ask me again: had I thought about my sexuality and gender? I finally asked myself 
              and found answers, with the help of learning about history, connecting with media and authors 
              who wrote under pen names to share their stories.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Since I crossed that gap, I, myself, see so many more people connecting to themselves and others. 
              We can only meet each other as far as we meet ourselves, and I am so grateful to the people 
              who called me in to who I truly am.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Now, 8 years after asking myself some open-ended, open-minded, and open-hearted questions, 
              I am grateful for the connections I can have with people and my communities that are so 
              fulfilling and aligned with our truth. I am eternally grateful for the awareness and curiosity 
              of my loved ones, chosen family, and community, who just saw certain parts of my personal 
              mosaic and called me in to realize more about myself.
            </p>

            <div className="bg-sage-50 p-8 rounded-xl border-l-4 border-sage-500">
              <p className="text-lg font-medium text-sage-800 italic">
                "You are always enough. Whether your lived experience makes it hard to find community, 
                to celebrate with ease, or feel in contact with your full potential—you are enough."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-stone-50" aria-label="Professional background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Professional Background
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              My credentials, training, and approach to therapy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Credentials */}
            <div className="card">
              <div className="text-sage-600 mb-4">
                <BookOpen size={48} aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                Education & Credentials
              </h3>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Registered Psychotherapist (Qualifying)</strong> - Ontario</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Master of Arts in Counselling Psychology</strong> (In Progress)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Crisis Responder</strong> - Kids Help Phone (Volunteer)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Private Practice Experience</strong></span>
                </li>
              </ul>
            </div>

            {/* Approach */}
            <div className="card">
              <div className="text-teal-600 mb-4">
                <Heart size={48} aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                My Therapeutic Approach
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                I approach therapy with respect for the richness that diversity brings, understanding 
                that cultural nuances play a vital role in mental health and well-being. I'm deeply 
                committed to creating a therapeutic space that embraces diversity, fosters cultural 
                sensitivity, and prioritizes your well-being.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Together, we'll create a safe and inclusive space where you can explore your thoughts, 
                emotions, and challenges without fear of judgment. My goal is to facilitate a sense of 
                relief and resilience as we work towards identifying strengths, coping strategies, and 
                solutions that align with your unique values and cultural context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Focus */}
      <section className="py-20 bg-white" aria-label="Specialization focus">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              My Clinical Focus
            </h2>
          </div>

          <div className="card">
            <div className="text-terracotta-600 mb-6">
              <Users size={48} aria-hidden="true" />
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My clinical focus is on those who experience <strong>anxiety, self-esteem challenges</strong> and 
              struggle to embody a lot of their emotional experience. These experiences are deeply personal 
              to people, and I see a wide spectrum of unique folks who face a few core issues: chronic 
              challenges and neglect that have led them to prioritize others first.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As someone who faces these challenges personally, I can be confident, outspoken, and very involved. 
              But there are also times when I struggle to uphold meaningful relationships, roles, and day-to-day 
              tasks that are expected of me, and I can imagine the relief of crawling into a shell. There is a 
              large range in how such personal and deep challenges may present.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              It may be challenging to hold experiences that carry vulnerability in a meaningful or safe way. 
              Understanding ourselves without judgement, with an open-minded curiosity, can get us much closer 
              to ourselves and meeting our needs in an informed, direct, meaningful and sustainable way. By 
              learning to appreciate past methods of coping, we can also develop new skills to live in a more 
              integrated and holistic way.
            </p>
          </div>
        </div>
      </section>

      {/* Their Collective */}
      <section className="py-20 bg-sage-50" aria-label="Their collective affiliation">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Part of Their Collective
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I'm proud to be part of <strong>Their Collective</strong>, a network of practitioners in Canada who are 
            licensed mental health professionals, ADHD/Autism coaches, or speech and language pathologists who 
            are queer, transgender, ADHD, and/or autistic, focusing our work on affirming, affordable, and 
            accessible services for our community.
          </p>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
            <p className="text-gray-700 leading-relaxed mb-6">
              We're inclusive, compassionate, and share in lived experience. Our members help you seek clarity, 
              connection, and the tools you truly need to thrive. Ready to stop feeling overwhelmed?
            </p>
            
            <p className="text-sage-700 font-medium">
              Support available through phone, texting, web-based chat, video chat, or in-person sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-teal-600 text-white" aria-label="Book consultation">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Connect?
          </h2>
          
          <p className="text-xl mb-8 text-sage-100">
            Let's explore your personal mosaic together. Book a free 30-minute consultation 
            to see if we're a good fit for your healing journey.
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

export default About;