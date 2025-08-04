import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import SmartAgriculture from './pages/SmartAgriculture';
import AIEducation from './pages/AIEducation';
import BusinessAI from './pages/BusinessAI';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import ContactPage from './pages/ContactPage';
import Careers from './pages/Team';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}> 

        <Route index element={<HomePage />} />
        {/* Solutions */}
        <Route path="/about" element={< AboutUs/>}/>
        <Route path="/solutions/smart-agriculture" element={<SmartAgriculture />} />
        <Route path="/solutions/ai-education" element={<AIEducation />} />
        <Route path="/solutions/business-ai" element={<BusinessAI />} />
        <Route path="/solutions/case-studies" element={<CaseStudies />} />
        {/* Resources */}
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/newsletter" element={<Newsletter />} />
        <Route path="/resources/gallery" element={<Gallery />} />
        {/* Careers */}
        <Route path="/team" element={<Careers />} />
        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
