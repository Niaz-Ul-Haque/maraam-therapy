import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  structuredData?: object;
}

const defaultTitle = 'Maraam Haque - Registered Psychotherapist (Qualifying) | 2SLGBTQIA+ & Neurodivergent Affirming Therapy';
const defaultDescription = 'Affirming therapy for 2SLGBTQIA+ and neurodivergent individuals in Ontario. Specializing in anxiety, self-esteem, and emotional processing. Book your free 30-minute consultation today.';
const defaultKeywords = '2SLGBTQ+ therapist Toronto, neurodivergent counselling Ontario, anxiety therapy, self-esteem counselling, registered psychotherapist qualifying, affirming therapy, LGBTQ+ mental health';
const siteUrl = import.meta.env.VITE_SITE_URL || 'https://maaraamhaque.com';

const SEO: React.FC<SEOProps> = ({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = `${siteUrl}/og-image.jpg`,
  url = siteUrl,
  type = 'website',
  author = 'Maraam Haque',
  publishedTime,
  structuredData
}) => {
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Maraam Haque",
    "jobTitle": "Registered Psychotherapist (Qualifying)",
    "description": "Affirming therapy for 2SLGBTQIA+ and neurodivergent individuals",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "telephone": "Available through booking platform",
    "url": siteUrl,
    "sameAs": [
      "https://healingpaththerapy.janeapp.com"
    ],
    "specialty": [
      "2SLGBTQIA+ Affirming Therapy",
      "Neurodivergent Support",
      "Anxiety Treatment",
      "Self-Esteem Counselling"
    ],
    "serviceArea": {
      "@type": "State",
      "name": "Ontario"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Maraam Haque Therapy" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific meta tags */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en-CA" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Helmet>
  );
};

export default SEO;