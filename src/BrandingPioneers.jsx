import { useEffect } from 'react';
import Helmet from 'react-helmet';
import IndexPage from './pages/IndexPage';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import NotFound from './pages/404';
import Blog from './pages/blog';
import CaseStudies from './pages/caseStudies';
import Contact from './pages/contact';
import WebServices from './pages/webServices';
import MarketingStrategies from './pages/marketingStrategies';
import MedicalDigitalMarketing from './pages/medicalDigitalMarketing';
import HomePage from './pages/home';
import FAQs from './pages/FAQs';
import Content from './pages/content';
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
import Healthcare from './pages/OurSpeciality/healthcare';
import Chiropractors from './pages/OurSpeciality/Chiropractors';
import InfertilityandIVF from './pages/OurSpeciality/infertility-and-ivf';
import AestheticDermatologist from './pages/OurSpeciality/aesthetic-dermatologist';
import MedicalTourism from './pages/OurSpeciality/medical-tourism';
import Services from './pages/services';
import AdsAndLeadGeneration from './pages/services/ads-and-lead-generation';
import DigitalPatientAcquistion from './pages/services/digital-patient-acquistion';
import SEO from './pages/services/seo';
import LocalSEO from './pages/services/local-seo';
import ORM from './pages/services/orm';
import GoogleReviewManagement from './pages/services/google-review-management';
import QuoraReview from './pages/services/quora-review';
import TestimonialsVideoCreation from './pages/services/testimonials-video-creation';
import PatientEngagement from './pages/services/patient-engagement';
import Marketing from './pages/services/marketing';
import NewsletterDesigningAndPrinting from './pages/services/newsletter-designing-and-printing';
import DigitalSignageSolution from './pages/services/digital-signage-solution';
import BrandBuilding from './pages/services/brand-building';
import SocialMediaMarketing from './pages/services/social-media-marketing';
import VideoMarketing from './pages/services/video-marketing';
import InfluencerAndPR from './pages/services/influencer-and-pr';
import SalesAutomation from './pages/services/sales-automation';
import CRM from './pages/services/crm';
import Leadmate from './pages/services/leadmate';
import IVRAndCallTracking from './pages/services/ivr-and-call-tracking';
import HealthcareSEO from './pages/ourWork/healthcare-seo';
import WebsiteRanking from './pages/ourWork/website-ranking';
import HealthcareSMO from './pages/ourWork/healthcare-smo';
import HealthcareSMM from './pages/ourWork/healthcare-smm';
import ContentMarketingforHealthcare from './pages/ourWork/content-marketing-for-healthcare';
import ReputationManagementforDoctors from './pages/ourWork/reputation-management-for-doctors';
import HealthcareSocialMediaManagement from './pages/ourWork/healthcare-social-media-management';
import EmailMarketingforHealthcare from './pages/ourWork/email-marketing-for-healthcare';
import GuestPostingServicesforHealthcare from './pages/ourWork/guest-posting-services-for-healthcare';
import PageLoadSpeedOptimiation from './pages/ourWork/page-load-speed-optimiation';
import PPCAdvertisingforHealthcare from './pages/ourWork/ppc-advertising-for-healthcare';
import FacebookAdsforHealthcare from './pages/ourWork/facebook-ads-for-healthcare';
import HealthcareVideoMarketing from './pages/ourWork/healthcare-video-marketing';
import BrandingServices from './pages/ourWork/branding-services';
import AnalyticsandReporting from './pages/ourWork/analytics-and-reporting';
import MarketingStrategiesforDoctors from './pages/ourWork/marketing-strategies-for-doctors';
import LeadGenerationsforDoctors from './pages/ourWork/lead-generations-for-doctors';
import MedicalWebDesigning from './pages/ourWork/medical-web-designing';
import MedicalWebDevelopment from './pages/ourWork/medical-web-development';
import MedicalWebsiteMaintenance from './pages/ourWork/medical-website-maintenance';
import MedicalWebsiteRevamps from './pages/ourWork/medical-website-revamps';
import ECommerceDevelopmentforHealthcare from './pages/ourWork/e-commerce-development-for-healthcare';
import HealthcareContentCreation from './pages/ourWork/healthcare-content-creation';
import MedicalGraphicsDesign from './pages/ourWork/medical-graphics-design';
import ApolloHospitalsCaseStudy from './pages/caseStudiesDetails/apollo';
import MaxHospitalCaseStudy from './pages/caseStudiesDetails/max';
import DrAnjaliSharmaCaseStudy from './pages/caseStudiesDetails/drAnjali';
import IVFGangaramCaseStudy from './pages/caseStudiesDetails/ivfGangaram';
import MedmonksCaseStudy from './pages/caseStudiesDetails/medmonks';
import LamidasHospitalsCaseStudy from './pages/caseStudiesDetails/lamidas';
import OVUMHospitalCaseStudy from './pages/caseStudiesDetails/ovum';
import AsterClinicsUAECaseStudy from './pages/caseStudiesDetails/Aster';
import NeelkanthHospitalCaseStudy from './pages/caseStudiesDetails/neelkanth';
import PushpanjaliHospitalCaseStudy from './pages/caseStudiesDetails/pushpanjali';
import CloudNineFertilityCaseStudy from './pages/caseStudiesDetails/cloud-nine-fertility';
import NemaElderCareCaseStudy from './pages/caseStudiesDetails/nema-elder-care';
import AarvyHospitalCaseStudy from './pages/caseStudiesDetails/aarvy';
import RajHospitalsCaseStudy from './pages/caseStudiesDetails/raj';
import SarveshHospitalCaseStudy from './pages/caseStudiesDetails/sarvesh';
import SSKidneyCaseStudy from './pages/caseStudiesDetails/SSKidney';
import CDASHospitalCaseStudy from './pages/caseStudiesDetails/CDAS';
import Collection from './pages/collection';

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
                <Route path='healthcare' element={<Pages />}>
                  <Route index element={<Healthcare />} />
                  <Route path='dentists' element={<DentalClinic />} />
                  <Route path='plastic-surgeons' element={<PlasticSurgeons />} />
                  <Route path='orthopedics' element={<Orthopedician />} />
                  <Route path='chiropractors' element={<Chiropractors />} />
                  <Route path='infertility-and-ivf' element={<InfertilityandIVF />} />
                  <Route path='aesthetic-dermatologist' element={<AestheticDermatologist />} />
                  <Route path='surgeons' element={<Surgeons />} />
                  <Route path='medical-tourism' element={<MedicalTourism />} />
                </Route>
              </Route>
              <Route path='/services' element={<Pages />}>
                <Route index element={<Services />} />
                <Route path='digital-patient-acquistion' element={<Pages />}>
                  <Route index element={<DigitalPatientAcquistion />} />
                  <Route path='seo' element={<SEO />} />
                  <Route path='ads-and-lead-generation' element={<AdsAndLeadGeneration />} />
                  <Route path='local-seo' element={<LocalSEO />} />
                </Route>
                <Route path='orm' element={<Pages />} >
                  <Route index element={<ORM />} />
                  <Route path='google-review-management' element={<GoogleReviewManagement />} />
                  <Route path='quora-review' element={<QuoraReview />} />
                  <Route path='testimonials-video-creation' element={<TestimonialsVideoCreation />} />
                </Route>
                <Route path='patient-engagement' element={<Pages />} >
                  <Route index element={<PatientEngagement />} />
                  <Route path='marketing' element={<Marketing />} />
                  <Route path='newsletter-designing-and-printing' element={<NewsletterDesigningAndPrinting />} />
                  <Route path='digital-signage-solution' element={<DigitalSignageSolution />} />
                </Route>
                <Route path='brand-building' element={<Pages />} >
                  <Route index element={<BrandBuilding />} />
                  <Route path='social-media-marketing' element={<SocialMediaMarketing />} />
                  <Route path='video-marketing' element={<VideoMarketing />} />
                  <Route path='influencer-and-pr' element={<InfluencerAndPR />} />
                </Route>
                <Route path='sales-automation' element={<Pages />} >
                  <Route index element={<SalesAutomation />} />
                  <Route path='crm' element={<CRM />} />
                  <Route path='leadmate' element={<Leadmate />} />
                  <Route path='ivr-and-call-tracking' element={<IVRAndCallTracking />} />
                </Route>
              </Route>
              <Route path='/marketing-services' element={<Pages />}>
                <Route index element={<MedicalDigitalMarketing />} />
                <Route path='healthcare-seo' element={<Pages />}>
                  <Route index element={<HealthcareSEO />} />
                  <Route path='local-seo' element={<LocalSEO />} />
                </Route>
                <Route path='website-ranking' element={<WebsiteRanking />} />
                <Route path='healthcare-smo' element={<HealthcareSMO />} />
                <Route path='healthcare-smm' element={<HealthcareSMM />} />
                <Route path='content-marketing-for-healthcare' element={<ContentMarketingforHealthcare />} />
                <Route path='reputation-management-for-doctors' element={<ReputationManagementforDoctors />} />
                <Route path='healthcare-social-media-management' element={<HealthcareSocialMediaManagement />} />
                <Route path='email-marketing-for-healthcare' element={<EmailMarketingforHealthcare />} />
                <Route path='guest-posting-services-for-healthcare' element={<GuestPostingServicesforHealthcare />} />
                <Route path='page-load-speed-optimiation' element={<PageLoadSpeedOptimiation />} />
              </Route>
              <Route path='/marketing-strategies' element={<Pages />}>
                <Route index element={<MarketingStrategies />} />
                <Route path='ppc-advertising' element={<PPCAdvertisingforHealthcare />} />
                <Route path='facebook-ads' element={<FacebookAdsforHealthcare />} />
                <Route path='video-marketing' element={<HealthcareVideoMarketing />} />
                <Route path='branding-services' element={<BrandingServices />} />
                <Route path='analytics-and-reporting' element={<AnalyticsandReporting />} />
                <Route path='marketing-strategies-for-doctors' element={<MarketingStrategiesforDoctors />} />
                <Route path='lead-generation-for-doctors' element={<LeadGenerationsforDoctors />} />
              </Route>
              <Route path='/web-services' element={<Pages />}>
                <Route index element={<WebServices />} />
                <Route path='medical-web-designing' element={<MedicalWebDesigning />} />
                <Route path='medical-web-development' element={<MedicalWebDevelopment />} />
                <Route path='e-commerce-development-for-healthcare' element={<ECommerceDevelopmentforHealthcare />} />
                <Route path='mediacl-website-revamps' element={<MedicalWebsiteRevamps />} />
                <Route path='medical-website-maintenance' element={<MedicalWebsiteMaintenance />} />
              </Route>
              <Route path='/content' element={<Pages />}>
                <Route index element={<Content />} />
                <Route path='healthcare-content-creation' element={<HealthcareContentCreation />} />
                <Route path='medical-graphics-design' element={<MedicalGraphicsDesign />} />
              </Route>
              <Route path='/case-studies' element={<Pages />}>
                <Route index element={<CaseStudies />} />
                <Route path='apollo-hospitals' element={<ApolloHospitalsCaseStudy />} />
                <Route path="max-hospital" element={<MaxHospitalCaseStudy />} />
                <Route path='dr-anjali-sharma' element={<DrAnjaliSharmaCaseStudy />} />
                <Route path='ivf-gangaram' element={<IVFGangaramCaseStudy />} />
                <Route path='medmonks' element={<MedmonksCaseStudy />} />
                <Route path='lamidas-hospitals' element={<LamidasHospitalsCaseStudy />} />
                <Route path='ovum-hospital' element={<OVUMHospitalCaseStudy />} />
                <Route path='aster-clinic-uae' element={<AsterClinicsUAECaseStudy />} />
                <Route path='neelkanth-hospital' element={<NeelkanthHospitalCaseStudy />} />
                <Route path='pushpanjali-hospital' element={<PushpanjaliHospitalCaseStudy />} />
                <Route path='cloud-nine-fertility' element={<CloudNineFertilityCaseStudy />} />
                <Route path='nema-elder-care' element={<NemaElderCareCaseStudy />} />
                <Route path='aarvy-hospital' element={<AarvyHospitalCaseStudy />} />
                <Route path='raj-hospitals' element={<RajHospitalsCaseStudy />} />
                <Route path='sarvesh-hospital' element={<SarveshHospitalCaseStudy />} />
                <Route path='sskidney' element={<SSKidneyCaseStudy />} />
                <Route path='cdas-hospitals' element={<CDASHospitalCaseStudy />} />
              </Route>
              <Route path='/faqs' element={<FAQs />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/collection' element={<Collection />} />
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
