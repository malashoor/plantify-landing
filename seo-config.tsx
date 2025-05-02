import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  lang?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  lang = 'en',
  title = 'Plantify – Smart Plant Care from Seed to Harvest',
  description = 'Track growth, detect issues, and get care reminders with AI-powered plant insights.',
  keywords = [
    'plant care',
    'garden app',
    'AI plant detection',
    'plant health',
    'garden management',
    'plant tracking',
    'smart gardening',
    'plant reminders',
    'garden journal',
    'plant analytics',
  ],
  ogImage = '/images/og-image.jpg',
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords.join(', '),
        },
        // Open Graph
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: ogImage,
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: ogImage,
        },
      ]}
    />
  );
};

export default SEO; 