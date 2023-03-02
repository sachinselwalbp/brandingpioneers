import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Neelkanth hospital",
    service: "Improve Brand Beputation",
    img: "case_study_cover.png",
    challenge: "Neelkanth Hospital wanted to increase its patient base and improve its brand reputation in the competitive Gurgaon market",
    solution: "We developed a comprehensive digital marketing strategy for Neelkanth Hospital that included search engine optimization (SEO), pay-per-click (PPC) advertising, and social media marketing. We created a new website and optimized it for search engines, and ran targeted PPC campaigns on Google and Facebook. We also created a strong social media presence for Neelkanth Hospital and focused on reputation management.",
    result: ["Within 3 months of launching the new digital marketing strategy, Neelkanth Hospital saw a 150% increase in website traffic, and a 100% increase in leads generated. Their online reputation improved significantly, with more positive reviews on Google and social media platforms."]
}

export default function NeelkanthHospitalCaseStudy() {
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