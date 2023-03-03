import Helmet from "react-helmet"
import FeatureCards from '../../components/featureCards'
import ServiceCards from '../../components/serviceCards'
import Hero from "../../components/hero"

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className="services-container">
                <Hero title="We help transform your business from top to bottom" parent="Services" />
                <ServicesSection />
                <Features />
            </div>
        </>
    )
}

const ServicesSection = () => {
    const services = [
        {
            name: 'Digital Patient Acquisition',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            icoUrl: 'assets/service_ico1.svg'
        },
        {
            name: 'Reputation Management',
            info: ['Google Review Management', 'Quora Review', 'Testimonials Video Creation'],
            icoUrl: 'assets/service_ico2.svg'
        },
        {
            name: 'Brand Building',
            info: ['Social Media Marketing', 'Video Marketing', 'Influencer & PR'],
            icoUrl: 'assets/service_ico3.svg'
        },
        {
            name: 'Sales Automation',
            info: ['CRM', 'Leadmade', 'IVM & Call Tracking'],
            icoUrl: 'assets/service_ico4.svg'
        },
        {
            name: 'Digital Patient Acquisition',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            icoUrl: 'assets/service_ico5.svg'
        },
        {
            name: 'Reputation Management',
            info: ['Google Review Management', 'Quora Review', 'Testimonials Video Creation'],
            icoUrl: 'assets/service_ico6.svg'
        },
        {
            name: 'Brand Building',
            info: ['Social Media Marketing', 'Video Marketing', 'Influencer & PR'],
            icoUrl: 'assets/service_ico7.svg'
        },
        {
            name: 'Sales Automation',
            info: ['CRM', 'Leadmade', 'IVM & Call Tracking'],
            icoUrl: 'assets/service_ico8.svg'
        }
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row gx-md-5 gy-5">
                        {services.map((service, i) =>
                            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6" key={i}>
                                <ServiceCards data={service} src="services" />
                            </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}

const Features = () => {
    const featurs_data = [
        {
            title: 'Research',
            text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
        },
        {
            title: 'Build',
            text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
        },
        {
            title: 'Scale',
            text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
        }
    ]

    return (
        <>
            <section className='section-global bg-shade-blue'>
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2 text-center">
                            <div className="section-tag mb-8">How we work</div>
                            <h2>Extremely smooth workflow with cosistancy</h2>
                        </div>
                    </div>
                </div>
                <div className="container container-2">
                    <div className="row gy-4 gx-0 gx-md-5">
                        <FeatureCards data={featurs_data} src='service' />
                    </div>
                </div>
            </section>
        </>
    )
}
