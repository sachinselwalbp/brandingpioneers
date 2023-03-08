import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Medmonks",
    service: "Search Engine Marketing",
    img: "case_study_cover.png",
    challenge: "Medmonks - SEM, Advertising, Email Marketing",
    solution: "Medmonks is a medical tourism company that offers healthcare services to patients from African, Middle Eastern, and CIS countries. They approached Branding Pioneers for lead generation services. Branding Pioneers created a customized lead generation campaign for Medmonks, targeting patients looking for specific treatments. They used search engine marketing (SEM), social media advertising, and email marketing to reach their target audience.",
    result: ["Within three months of the campaign, Medmonks received over 2,500 leads.",
        "The cost per lead decreased by 30%.",
        "The conversion rate of leads to customers was 8%."
    ]
}

export default function MedmonksCaseStudy() {
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