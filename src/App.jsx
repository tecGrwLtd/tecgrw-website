import {
        BrowserRouter as Router,
        Routes,
        Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';

import HomePage from './pages/HomePage';
import About from './pages/about';
import SmartAgriculture from './pages/SmartAgriculture';
import AIEducation from './pages/AIEducation';
import AdultAICourses from './components/AdultAICourses';
import BusinessAI from './pages/BusinessAI';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Newsletter from './pages/Newsletter';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import Team from './pages/Team';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
        <Routes>
        <Route element={<HomeLayout/>}>
        <Route index element={<HomePage />} />
        </Route>
        <Route element={<MainLayout />}> 
        <Route path="/our-story" element={<About/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/solutions/smart-agriculture" element={<SmartAgriculture />} />
        <Route path="/solutions/ai-education" element={<AIEducation />} />
        <Route path="/solutions/ai-education/short-course-for-adults" element={<AdultAICourses />} />
        <Route path="/solutions/business-ai" element={<BusinessAI />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/resources/blog" element={<Blog />} />
        {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}
        <Route path="/resources/newsletter" element={<Newsletter />} />
        <Route path="/resources/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
