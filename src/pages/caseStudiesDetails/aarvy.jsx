import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Aarvy Hospital",
    service: "Digital Marketing",
    img: "case_study_cover.png",
    challenge: "300 Bedded Hospital in New Gurgaon",
    solution: "Aarvy Hospital is a multi-speciality hospital in New Gurgaon. The brand approached Branding Pioneers for complete branding and digital marketing. Our team designed a brand identity and created a responsive website for the brand. We also designed and executed a targeted digital marketing campaign, including social media marketing, search engine optimization, and email marketing.",
    result: ["As a result, the brand witnessed a 50% increase in inquiries and a 30% increase in patient footfall."]
}

export default function AarvyHospitalCaseStudy() {
    return (
        <>
            <Helmet>
                <title>{hospitalCase.title}</title>
            </Helmet>
            <div className="project-detail-container">
                <Hero title={`${hospitalCase.title} - ${hospitalCase.service}`} />
                <CaseStudyDetail data={hospitalCase} />
            </div>
        </>
    )
}