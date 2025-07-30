import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import OurStory from './pages/OurStory';
import Team from './pages/Team';
import SmartAgriculture from './pages/SmartAgriculture';
import AIEducation from './pages/AIEducation';
import BusinessAI from './pages/BusinessAI';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import ContactPage from './pages/ContactPage';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
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
        {/* Careers */}
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
            {/* Contact */}
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            {/* 404 */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
    </Router>
  );
}

export default App;