import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Max Hospital",
    service: "Website Design and Development",
    img: "case_study_cover.png",
    challenge: "Max Hospital needed a new website that was user-friendly, informative, and visually appealing.",
    solution: "Branding Pioneers developed a new website for Max Hospital, which included easy-to-use navigation, high-quality visuals, and clear calls-to-action.",
    result: ["After launching the new website, Max Hospital saw a 25% increase in website traffic, a 15% decrease in bounce rate, and a 10% increase in appointment bookings through the website."]
}

export default function MaxHospitalCaseStudy() {
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
