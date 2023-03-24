import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import CaseStudiesCard from '../../components/caseStudiesCards'

export default function CaseStudies() {
    return (
        <>
            <Helmet>
                <title>Case Studies</title>
            </Helmet>
            <div className="projects-container">
                <Hero title="Our experts and proprietary technology fuel our work" />
                <CaseStudiesSection />
            </div>
        </>
    )
}

const colors = ["#F97316", "#2D7EF8", "#00AA45", "#F15757", "#7F57F1", "#007AFF", "#17CF97", "#FF7A00", "#25CAAC"]

const CaseStudiesSection = () => {
    const projects_data = [
        {
            category: 'social media',
            text: 'Apollo Hospitals - Social Media Management',
            imgUrl: 'project1.png',
            color: colors[0],
            link: '/case-studies/apollo-hospitals'
        },
        {
            category: 'development',
            text: 'Max Hospitals - Website Design and Development',
            imgUrl: 'project2.png',
            color: colors[1],
            link: '/case-studies/max-hospital'
        },
        {
            category: 'SEO',
            text: 'Dr Anjali Sharma - Search Engine Optimization',
            imgUrl: 'project3.png',
            color: colors[2],
            link: '/case-studies/dr-anjali-sharma'
        },
        {
            category: 'SEO',
            text: 'IVF Gangaram - SEO',
            imgUrl: 'project4.png',
            color: colors[3],
            link: '/case-studies/ivf-gangaram'
        },
        {
            category: 'SEM',
            text: 'Medmonks - SEM, Advertising',
            imgUrl: 'project5.png',
            color: colors[4],
            link: '/case-studies/medmonks'
        },
        {
            category: 'Marketing',
            text: 'OVUM hospital - Local Marketing',
            imgUrl: 'project6.png',
            color: colors[5],
            link: '/case-studies/ovum-hospital'
        },
        {
            category: 'SEM',
            text: 'Lamidas Hospitals - YT Marketing, SEO & Lead Generation',
            imgUrl: 'project7.png',
            color: colors[6],
            link: '/case-studies/lamidas-hospitals'
        },
        {
            category: 'Marketing',
            text: 'Aster Clinics UAE - Improve online visibility and increase patient acquisition',
            imgUrl: 'project8.png',
            color: colors[7],
            link: '/case-studies/aster-clinic-uae'
        },
        {
            category: 'SEO',
            text: 'Neelkanth Hospital',
            imgUrl: 'project9.png',
            color: colors[8],
            link: '/case-studies/neelkanth-hospital'
        },
        {
            category: 'Brand Reputation',
            text: 'Pushpanjali hospital',
            imgUrl: 'project1.png',
            color: colors[0],
            link: '/case-studies/pushpanjali-hospital'
        },
        {
            category: 'Lead Generation',
            text: 'Cloud Nine Fertility',
            imgUrl: 'project2.png',
            color: colors[1],
            link: '/case-studies/cloud-nine-fertility'
        },
        {
            category: 'Living Centre',
            text: 'Nema Elder Care',
            imgUrl: 'project3.png',
            color: colors[2],
            link: '/case-studies/nema-elder-care'
        },
        {
            category: 'Digital Marketing',
            text: 'Aarvy Hospital',
            imgUrl: 'project4.png',
            color: colors[3],
            link: '/case-studies/aarvy-hospital'
        },
        {
            category: 'Marketing',
            text: 'Raj Hospital',
            imgUrl: 'project5.png',
            color: colors[4],
            link: '/case-studies/raj-hospitals'
        },
        {
            category: 'Online Visibility',
            text: 'Sarvesh Hospital',
            imgUrl: 'project6.png',
            color: colors[5],
            link: '/case-studies/sarvesh-hospital'
        },
        {
            category: 'Digital Marketing',
            text: 'SSKidney',
            imgUrl: 'project7.png',
            color: colors[6],
            link: '/case-studies/sskidney'
        },
        {
            category: 'Lead Generation',
            text: 'CDAS Hospitals',
            imgUrl: 'project8.png',
            color: colors[7],
            link: '/case-studies/cdas-hospitals'
        },
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row">
                        <CaseStudiesCard data={projects_data} src="caseStudies" />
                    </div>
                </div>
            </section>
        </>
    )
}
