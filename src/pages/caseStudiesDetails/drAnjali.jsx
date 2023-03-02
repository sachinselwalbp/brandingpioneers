import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Dr Anjali Sharma",
    service: "Search Engine Optimization",
    img: "case_study_cover.png",
    challenge: "Dr Anjali Sharma wanted to improve her visibility in search engine results for her speciality services.",
    solution: "Branding Pioneers implemented a comprehensive search engine optimization strategy for Dr Anjali Sharma, which included optimizing her website for relevant keywords, building high-quality backlinks, and creating informative content.",
    result: ["After implementing the SEO strategy, Dr Anjali Sharma saw a 40% increase in website traffic from search engines, a 30% increase in phone inquiries, and a 20% increase in appointments booked through the website."]
}

export default function DrAnjaliSharmaCaseStudy() {
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