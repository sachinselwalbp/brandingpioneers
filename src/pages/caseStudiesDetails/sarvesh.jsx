import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
  title: "Sarvesh Hospital",
  service: "Digital Marketing",
  img: "case_study_cover.png",
  challenge: "Multi-Specialty Hospital in Hisar",
  solution: "Sarvesh Hospital is a multi-speciality hospital in Hisar, catering to patients from different parts of Haryana. The brand was looking to improve its online visibility and generate leads through digital marketing. Branding Pioneers designed a targeted digital marketing campaign, including social media marketing, search engine optimization, and email marketing.",
  result: ["Within 3 months, the campaign generated over 1000 leads and increased patient footfall by 30%."]
}

export default function SarveshHospitalCaseStudy() {
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