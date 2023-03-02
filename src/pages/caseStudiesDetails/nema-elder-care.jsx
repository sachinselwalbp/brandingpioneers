import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Nema Elder Care",
    service: "Assisted Living Centre in Gurgaon",
    img: "case_study_cover.png",
    challenge: "Living Centre in Gurgaon",
    solution: "Nema Elder Care is a premium assisted living centre for senior citizens in Gurgaon. The brand approached Branding Pioneers for complete branding and online reputation management. Our team designed a brand identity and created a responsive website for the brand. We also helped the brand in managing its online reputation and review management.",
    result: ["As a result, the brand witnessed a 40% increase in inquiries and a 25% increase in patient footfall."]
}

export default function NemaElderCareCaseStudy() {
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