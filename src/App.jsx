import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import MetricsSection from './components/MetricsSection';
import SEOHead from './components/SEOHead';
import FadeInSection from './components/FadeInSection';
import LoadingSpinner from './components/LoadingSpinner';

const LazyTestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));
const LazyContactSection = React.lazy(() => import('./components/ContactSection'));

// Lazy route pages
const OurStory = React.lazy(() => import('./pages/OurStory'));
const Team = React.lazy(() => import('./pages/Team'));
const SmartAgriculture = React.lazy(() => import('./pages/SmartAgriculture'));
const AIEducation = React.lazy(() => import('./pages/AIEducation'));
const BusinessAI = React.lazy(() => import('./pages/BusinessAI'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Newsletter = React.lazy(() => import('./pages/Newsletter'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function useNearScreen({ rootMargin = '200px' } = {}) {
  const [show, setShow] = useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);
  return [ref, show];
}

function HomePage() {
  const [testimonialsRef, showTestimonials] = useNearScreen({ rootMargin: '200px' });
  const [contactRef, showContact] = useNearScreen({ rootMargin: '200px' });
  return (
    <>
      <Navbar />
      <HeroSection />
      <Layout>
        <ServicesSection />
        <MetricsSection />
        <div ref={testimonialsRef}>
          {showTestimonials ? (
            <Suspense fallback={<LoadingSpinner />}>
              <LazyTestimonialsSection />
            </Suspense>
          ) : (
            <div style={{ minHeight: 320 }} />
          )}
        </div>
        <div ref={contactRef}>
          {showContact ? (
            <Suspense fallback={<LoadingSpinner />}>
              <LazyContactSection />
            </Suspense>
          ) : (
            <div style={{ minHeight: 320 }} />
          )}
        </div>
      </Layout>
    </>
  );
}

function App() {
  return (
    <Router>
      <SEOHead />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* About Us */}
          <Route path="/about/our-story" element={<Layout><OurStory /></Layout>} />
          <Route path="/about/team" element={<Layout><Team /></Layout>} />
          {/* Solutions */}
          <Route path="/solutions/smart-agriculture" element={<Layout><SmartAgriculture /></Layout>} />
          <Route path="/solutions/ai-education" element={<Layout><AIEducation /></Layout>} />
          <Route path="/solutions/business-ai" element={<Layout><BusinessAI /></Layout>} />
          <Route path="/solutions/case-studies" element={<Layout><CaseStudies /></Layout>} />
          {/* Resources */}
          <Route path="/resources/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/resources/newsletter" element={<Layout><Newsletter /></Layout>} />
          {/* Contact */}
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          {/* 404 */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;