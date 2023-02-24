import { useEffect } from 'react';
import Helmet from 'react-helmet';
import IndexPage from './pages/IndexPage';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import NotFound from './pages/404';
import Blog from './pages/blog';
import ProjectDetails from './pages/projectDetails';
import Projects from './pages/projects';
import Services from './pages/services';
import Contact from './pages/contact';
import WebServices from './pages/webServices';
import MarketingStrategies from './pages/marketingStrategies';
import MedicalDigitalMarketing from './pages/medicalDigitalMarketing';
import HomePage from './pages/home';
import FAQs from './pages/FAQs';
import Content from './pages/contact';
import Pricing from './pages/pricing';
import Consulting from './pages/consulting';
import AppLanding from './pages/appLanding';
import Landing1 from './pages/landing1';
import Landing2 from './pages/landing2';
import Landing3 from './pages/landing3';
import SaasLanding from './pages/saasLanding';
import PersonalPortfolio from './pages/personalPortfolio';

import Pages from './pages/pages';

import About from './pages/about';
import WhoWeAre from './pages/about/who-we-are';
import WhyChooseUs from './pages/about/why-choose-us';
import Testimonilas from './pages/about/testimonials';

import OurSpeciality from './pages/OurSpeciality';
import Hospitals from './pages/OurSpeciality/hospitals';
import CorporateHospitals from './pages/OurSpeciality/corporate-hospitals';
import HundredPlusBedHospitals from './pages/OurSpeciality/plus-bed-hospitals';
import NursingHomes from './pages/OurSpeciality/nursing-homes';
import Startups from './pages/OurSpeciality/startups';
import DiagnosticCentres from './pages/OurSpeciality/diagnostic-centres';
import Surgeons from './pages/OurSpeciality/surgeons';
import NeuroSurgeons from './pages/OurSpeciality/neuro-surgeons';
import GynaeSurgeons from './pages/OurSpeciality/gynae-surgeons';
import PlasticSurgeons from './pages/OurSpeciality/plastic-surgeons';
import Orthopedician from './pages/OurSpeciality/orthopedician';
import CardiacSurgeons from './pages/OurSpeciality/cardiac-surgeons';
import GeneralSurgeons from './pages/OurSpeciality/general-surgeons';
import Clinic from './pages/OurSpeciality/Clinic';
import DentalClinic from './pages/OurSpeciality/dental-clinic';
import AestheticClinics from './pages/OurSpeciality/aesthetic-clinics';
import PolyClinics from './pages/OurSpeciality/poly-clinics';
import IVFClinics from './pages/OurSpeciality/ivf-clinics';


export default function BrandingPioneers() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Company in Gurgaon | Branding Pioneers</title>
        <meta
          name="description"
          content="Branding Pioneers is a digital Marketing Agency, offer wide range of digital marketing services such as SEO, SMM, website development, Email Marketing and PPC."
        />
      </Helmet>
      <div className="branding-container">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<IndexPage />}>
              <Route index element={<HomePage />} />
              <Route path='/landing-1' element={<Landing1 />} />
              <Route path='/landing-2' element={<Landing2 />} />
              <Route path='/landing-3' element={<Landing3 />} />
              <Route path='/app-landing' element={<AppLanding />} />
              <Route path='/saas-landing' element={<SaasLanding />} />
              <Route path='/personal-portfolio' element={<PersonalPortfolio />} />
              <Route path='/consulting' element={<Consulting />} />
              <Route path='/pricing' element={<Pricing />} />
              <Route path='/about' element={<Pages />}>
                <Route index element={<About />} />
                <Route path='who-we-are' element={<WhoWeAre />} />
                <Route path='why-choose-us' element={<WhyChooseUs />} />
                <Route path='testimonials' element={<Testimonilas />} />
              </Route>
              <Route path='/our-speciality' element={<Pages />}>
                <Route index element={<OurSpeciality />} />
                <Route path='hospitals' element={<Pages />}>
                  <Route index element={<Hospitals />} />
                  <Route path='corporate-hospitals' element={<CorporateHospitals />} />
                  <Route path='100plus-bed-hospital' element={<HundredPlusBedHospitals />} />
                  <Route path='nursing-homes' element={<NursingHomes />} />
                </Route>
                <Route path='startups' element={<Pages />}>
                  <Route index element={<Startups />} />
                  <Route path='diagnostic-centres' element={<DiagnosticCentres />} />
                </Route>
                <Route path='surgeons' element={<Pages />}>
                  <Route index element={<Surgeons />} />
                  <Route path='neuro-surgeons' element={<NeuroSurgeons />} />
                  <Route path='gynae-surgeons' element={<GynaeSurgeons />} />
                  <Route path='general-surgeons' element={<GeneralSurgeons />} />
                  <Route path='cardiac-surgeons' element={<CardiacSurgeons />} />
                  <Route path='orthopedician' element={<Orthopedician />} />
                  <Route path='plastic-surgeons' element={<PlasticSurgeons />} />
                </Route>
                <Route path='clinic' element={<Pages />}>
                  <Route index element={<Clinic />} />
                  <Route path='dental-clinic' element={<DentalClinic />} />
                  <Route path='aesthetic-clinics' element={<AestheticClinics />} />
                  <Route path='poly-clinics' element={<PolyClinics />} />
                  <Route path='ivf-clinics' element={<IVFClinics />} />
                </Route>
                {/* <Route path='/healthcare'>

                </Route> */}
              </Route>

              <Route path='/faqs' element={<FAQs />} />
              <Route path='/medical-digital-marketing' element={<MedicalDigitalMarketing />} />
              <Route path='/marketing-strategies' element={<MarketingStrategies />} />
              <Route path='/web-services' element={<WebServices />} />
              <Route path='/content' element={<Content />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/project-detail' element={<ProjectDetails />} />
              <Route path='/services' element={<Services />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Route>
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
