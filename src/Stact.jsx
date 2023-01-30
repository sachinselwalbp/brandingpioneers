import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import NotFound from './pages/404';
import About from './pages/about';
import Blog from './pages/blog';
import BlogArticle from './pages/blogArticle';
import Contact from './pages/contact';
import ProjectDetails from './pages/projectDetails';
import Projects from './pages/projects';
import Services from './pages/services';
import InternalPage from './pages/internalPage';
import Pages from './pages/pages';
import SubPages from './pages/subpages';
import SubSubPages from './pages/subsubpages';
import OurSpeciality from './pages/our-speciality';
import OurWork from './pages/our-work';
import HomePage from './pages/consulting';
// import Pricing from './notrender/pricing';
// import FAQs from './notrender/FAQs';
// import Home from './notrender/home';
// import AppLanding from './notrender/appLanding';
// import Landing1 from './notrender/landing1';
// import Landing2 from './notrender/landing2';
// import Landing3 from './notrender/landing3';
// import SaasLanding from './notrender/saasLanding';
// import PersonalPortfolio from './notrender/personalPortfolio';

function Stact() {
  return (
    <>
      <Helmet>
        <title>Branding Pioneers</title>
        <meta
          name="description"
          content="Multipurpose agency and potfolio react template"
        />
      </Helmet>
      <div className="stact-container">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/landing-1' element={<Landing1 />} />
            <Route path='/landing-2' element={<Landing2 />} />
            <Route path='/landing-3' element={<Landing3 />} />
            <Route path='/app-landing' element={<AppLanding />} />
            <Route path='/saas-landing' element={<SaasLanding />} />
            <Route path='/personal-portfolio' element={<PersonalPortfolio />} />
            <Route path='/consulting' element={<Home />} />
            <Route path='/faqs' element={<FAQs />} /> */}
            {/* <Route path='/pricing' element={<Pricing />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/our-speciality' element={<OurSpeciality />} />
            <Route path='/our-work' element={<OurWork />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/project-detail' element={<ProjectDetails />} />
            <Route path='/services' element={<Services />} />
            <Route path='/:mainPage/:slug' element={<Pages />} />
            <Route path='/:parentPage/:mainPage/:slug' element={<SubPages />} />
            <Route path='/:rootPage/:parentPage/:mainPage/:slug' element={<SubSubPages />} />
            <Route path='/:slug' element={<InternalPage />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:slug' element={<BlogArticle />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null
}

export default Stact;
