import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
  title: "CDAS Hospitals",
  service: "Diabetes Hospital in Gurgaon",
  img: "case_study_cover.png",
  challenge: "Digital Marketing and Lead Generation",
  solution: "CDAS Hospitals is a leading diabetes hospital in Gurgaon. The brand was looking to improve online visibility and generate leads through digital marketing. Branding Pioneers designed a targeted digital marketing campaign, including social media marketing, search engine optimization, and email marketing.",
  result: ["Within 2 months, the campaign generated over 1500 leads and increased patient footfall by 35%."]
}

export default function CDASHospitalCaseStudy() {
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