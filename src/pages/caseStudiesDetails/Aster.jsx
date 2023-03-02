import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Aster Clinics UAE",
    service: "Increase Patient Acquisition",
    img: "case_study_cover.png",
    challenge: "Aster Clinics UAE had a strong reputation in the UAE market, but wanted to improve its online visibility and increase patient acquisition.",
    solution: "We worked with Aster Clinics to develop a targeted digital marketing strategy that focused on search engine optimization, pay-per-click advertising, and social media marketing. We created a new website and optimized it for search engines, and ran targeted PPC campaigns on Google and Facebook. We also created a strong social media presence for Aster Clinics and focused on reputation management.",
    result: ["Within 6 months of launching the new digital marketing strategy, Aster Clinics saw a 300% increase in website traffic, and a 200% increase in leads generated. Their online reputation improved significantly, with more positive reviews on Google and social media platforms."]
}

export default function AsterClinicsUAECaseStudy() {
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