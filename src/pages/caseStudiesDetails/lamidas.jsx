import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudyDetail from '../../components/caseStudyDetail'

const hospitalCase = {
    title: "Lamidas Hospitals",
    service: "Local SEO",
    img: "case_study_cover.png",
    challenge: "YouTube marketing, Local SEO and Lead Generation",
    solution: "Lamidas Hospitals is a luxury aesthetics centre that offers a range of services, including cosmetic surgery, non-surgical procedures, and dermatology treatments. They approached Branding Pioneers for YouTube marketing, local SEO, and lead generation services. Branding Pioneers created a series of high-quality, informative videos that showcased the various services offered by Lamidas Hospitals. They also optimized the videos for search engines and promoted them on social media platforms. Additionally, they optimized Lamidas Hospitals' Google My Business listing and created high-quality backlinks to their website.",
    result: ["Within six months of the YouTube marketing campaign, Lamidas Hospitals' YouTube channel gained over 15,000 subscribers.",
        "The videos generated over 1 million views.",
        "Within six months of the local SEO campaign, Lamidas Hospitals' website had a 42% increase in organic traffic.",
        " The leads generated from the campaign had a conversion rate of 15%."
    ]
}

export default function LamidasHospitalsCaseStudy() {
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