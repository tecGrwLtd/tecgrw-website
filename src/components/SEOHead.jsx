import React from 'react';
import { Helmet } from 'react-helmet-async';

const defaultTitle = 'Tecgrw | Growth, Revolutionized';
const defaultDescription = 'Tecgrw is an Agritech & AI company in Kigali, Rwanda, empowering agriculture and business with AI-driven solutions.';
const defaultUrl = 'https://tecgrw.com/';
const defaultImage = 'https://tecgrw.com/logo-og.png'; // Replace with your actual OG image URL

export default function SEOHead({
  title = defaultTitle,
  description = defaultDescription,
  url = defaultUrl,
  image = defaultImage,
  type = 'website',
  children,
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tecgrw',
    url: defaultUrl,
    logo: defaultImage,
    sameAs: [
      'https://www.linkedin.com/company/tecgrw.com/posts/?feedView=all',
      'https://x.com/tecgrw',
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      email: 'info@tecgrw.com',
      telephone: '+250798975878',
      contactType: 'customer support',
      areaServed: 'RW',
    }],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 KG 9 Ave',
      addressLocality: 'Kigali',
      addressCountry: 'RW',
    },
    description: defaultDescription,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#b2c935" />
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@tecgrw" />
      {/* JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {children}
    </Helmet>
  );
} 