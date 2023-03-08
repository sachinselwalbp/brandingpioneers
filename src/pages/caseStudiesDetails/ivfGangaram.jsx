import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "IVF Gangaram",
    service: "Search Engine Optimization",
    img: "case_study_cover.png",
    challenge: "search engine optimisation (SEO)",
    solution: "IVF Gangaram is a department in Gangaram Hospital Delhi that provides infertility treatments. They approached Branding Pioneers for search engine optimisation (SEO) and lead generation services. Branding Pioneers conducted an in-depth analysis of their website and identified several technical issues that needed to be addressed. After making the necessary technical changes, they focused on content creation and link building. They created high-quality, informative content on infertility treatments and promoted it on social media platforms and other relevant websites. They also used a mix of paid and organic marketing to generate leads.",
    result: [
        "Within six months of the SEO campaign, IVF Gangaram saw a 73% increase in organic traffic.",
        "The leads generated from the campaign had a conversion rate of 12%.",
        "The cost per lead decreased by 45%."
    ]
}

export default function IVFGangaramCaseStudy() {
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