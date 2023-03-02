import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
  title: "Raj Hospitals",
  service: "Improve Online Visibility",
  img: "case_study_cover.png",
  challenge: "Multi-Specialty Hospital in Ranchi",
  solution: "Raj Hospitals is a multi-speciality hospital in Ranchi, catering to patients from different parts of Jharkhand. The brand was looking to increase its patient base and improve online visibility. Branding Pioneers designed a targeted digital marketing campaign, including social media marketing, search engine optimization, and email marketing.",
  result: ["Within 4 months, the campaign generated over 500 leads and increased patient footfall by 25%."]
}

export default function RajHospitalsCaseStudy() {
  return (
    <>
      <Helmet>
        <title>{hospitalCase.title}</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title={`${hospitalCase.title} - ${hospitalCase.service}`} parent="Case study" />
        <CaseStudyDetail data={hospitalCase} />
      </div>
    </>
  )
}