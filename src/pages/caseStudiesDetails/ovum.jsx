import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "OVUM Hospital",
    service: "Improve Their Brand Reputation",
    img: "case_study_cover.png",
    challenge: "OVUM Hospital was facing intense competition in the Bangalore market, and needed to increase its online presence to attract more patients. They also wanted to improve their brand reputation.",
    solution: "We worked with OVUM Hospital to develop a comprehensive digital marketing strategy that included search engine optimization (SEO), pay-per-click (PPC) advertising, and social media marketing. We created a new website and optimized it for search engines, and ran targeted PPC campaigns on Google and Facebook. We also created a strong social media presence for OVUM Hospital and focused on reputation management.",
    result: [
        "Within 6 months of launching the new digital marketing strategy, OVUM Hospital saw a 200% increase in website traffic, and a 150% increase in leads generated. Their online reputation improved significantly, with more positive reviews on Google and social media platforms."
    ]
}

export default function OVUMHospitalCaseStudy() {
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