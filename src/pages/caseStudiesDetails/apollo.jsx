import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Apollo Hospitals",
    service: "Social Media Management",
    img: "case_study_cover.png",
    challenge: "Apollo Hospitals wanted to increase its social media presence and engagement with its target audience.",
    solution: "Branding Pioneers developed a social media strategy for Apollo Hospitals, which included regular posting, engaging with followers, and running targeted ad campaigns.",
    result: ["After implementing the social media strategy, Apollo Hospitals saw a 30% increase in social media engagement, a 20% increase in website traffic from social media, and a 15% increase in appointments booked through social media."]
}

export default function ApolloHospitalsCaseStudy() {
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