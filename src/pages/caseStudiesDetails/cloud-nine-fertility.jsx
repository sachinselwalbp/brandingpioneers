import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Cloud Nine Fertility",
    service: "Lead Generation",
    img: "case_study_cover.png",
    challenge: "Fertility Camp Lead Generation all over North India",
    solution: "Cloud Nine Fertility is a leading fertility clinic chain in India. The brand was looking to increase patient footfall and generate leads for their fertility camps in North India. Branding Pioneers designed a targeted digital marketing campaign, including social media marketing, search engine optimization, and email marketing.",
    result: ["Within 3 months, the campaign generated over 2000 leads and increased patient footfall by 60%."]
}

export default function CloudNineFertilityCaseStudy() {
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