import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BrandSection from '../../components/brandSection'
import CaseStudiesCard from '../../components/caseStudiesCards'
import ServiceCards from '../../components/serviceCards'
import TestimonialCards from '../../components/testimonialCards'
import WhyChooseUsSection from '../../components/whyChooseUsSection'
import { TbArrowNarrowRight } from "react-icons/tb"
import { BsPlayCircleFill, BsCheckCircleFill } from "react-icons/bs"
import './style.scss'

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className='landing-2'>
                <Hero />
                <About />
                <ServicesComp />
                <Projects />
                <WhyChooseUsSection data={whyChooseUsSectionData} src="services" img="info.png" text="Choosing us for social media marketing for healthcare can bring several benefits to healthcare providers, including:" bggreen={true} />
                <Testimonials />
            </div>
        </>
    )
}

const whyChooseUsSectionData = [
    {
        title: "Healthcare-specific expertise:",
        text: "Our team has extensive experience in social media marketing for healthcare providers and understands the unique challenges and regulations of the industry."
    },
    {
        title: "Customized solutions:",
        text: "We offer customized social media marketing solutions tailored to the specific needs and goals of each healthcare provider we work with."
    },
    {
        title: "Results-driven approach:",
        text: "Our approach to social media marketing is focused on delivering measurable results, such as increased website traffic, improved patient engagement, and higher conversion rates."
    },
    {
        title: "Patient-centered focus:",
        text: "We understand the importance of patient engagement and work to create content and strategies that put the patient at the center of the conversation."
    },
    {
        title: "HIPAA compliance:",
        text: "We are knowledgeable about HIPAA regulations and take the necessary steps to ensure that all social media marketing efforts are compliant with patient privacy laws."
    },
    {
        title: "Competitive pricing:",
        text: "We offer competitive pricing options designed to provide value and a strong return on investment for our clients."
    }
]

function Hero() {
    const counters = [
        {
            count: '50K+',
            text: "Graphics Created"
        },
        {
            count: '2M+',
            text: "Average Reach"
        },
        {
            count: '75K+',
            text: "Leads Generated"
        }
    ]
    const brands = [
        {
            name: "Apollo",
            imgUrl: "apollo.svg"
        },
        {
            name: "asterclinic",
            imgUrl: "asterclinic.png"
        },
        {
            name: "HCAH",
            imgUrl: "hcah.png"
        },
        {
            name: "Medanta",
            imgUrl: "medanta.png"
        },
        {
            name: "Cloudnine",
            imgUrl: "cloudnine.svg"
        }
    ]
    return (
        <>
            <section className='section-global no-border bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h1 className='mb-16'>Solutions ready for the future.</h1>
                            <p className='txt-1 mb-16'>Empowering Healthcare through Innovative Social Media Marketing - Connect, Engage, and Thrive with Branding Pioneers</p>
                            {/* <Link to='/' className='btn btn-primary btn-lg'>Learn More</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                            <div className="counter mt-20 row text-center">
                                {counters.map((e, i) =>
                                    <div className="count col-4" key={i}>
                                        <h2 className='mb-0'>{e.count}</h2>
                                        <div className='txt-2'>{e.text}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div style={{ maxWidth: '500px' }}>
                                <img loading='lazy' src={require('../../images/hero_image.png')} className="img-fluid mt-5 mt-lg-0" alt='hero' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} src={'home'} bg="bg-shade-1" light bordered />
        </>
    )
}

function About() {
    const features_data = [
        "Healthcare Marketing Specialists: Our team has extensive experience and a deep understanding of the unique challenges and opportunities within the healthcare industry, allowing us to tailor our services to your specific needs and goals.",
        "Comprehensive Services: We offer a wide range of services, including strategy development, content creation, account management, advertising campaigns, and analytics reporting, ensuring a holistic approach to your healthcare organization's social media marketing efforts.",
        "Data-Driven Approach: We rely on data and analytics to track performance, measure success, and optimize our strategies, ensuring continuous improvement and maximum return on investment for your healthcare organization.",
        "Client-Centric Focus: We prioritize your healthcare organization's goals and objectives, working closely with you to develop and implement personalized social media marketing strategies that deliver measurable results.",
        "Ongoing Support and Partnership: Our team is committed to your success, offering continuous support and guidance throughout our partnership. We're always available to answer questions, address concerns, and adjust your social media marketing strategy."
    ]

    return (
        <>
            <section className="section-global">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 align-self-start d-flex justify-content-center">
                            <div className='video-thumb'>
                                <a href='/'>
                                    <img loading='lazy' src={require('../../images/video_thumb.jpg')} className="img-fluid" alt="stact" />
                                    <BsPlayCircleFill fill='white' fontSize={77} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Who we are</div>
                            <h2 className='mb-16'>We provide digital solutions for your business</h2>
                            <p className='txt-1'>Branding Pioneers is a dedicated team of marketing professionals specializing in Social Media Marketing (SMM) and Social Media Optimization (SMO) services for the healthcare industry. With our expertise, passion, and commitment to excellence, we help healthcare organizations establish a strong online presence, engage with their target audience, and drive growth.</p>
                        </div>
                        <div className='col-lg-12'>
                            {features_data.map((e, i) => <div key={i} className="txt-2 color-1 fw-500 mb-8 gap-2 d-flex align-items-start">
                                <div>
                                    <BsCheckCircleFill fill='#0FA958' fontSize={24} />
                                </div>
                                <p>{e}</p>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function ServicesComp() {
    const services = [
        {
            name: 'Social Media Strategy Development',
            info: ["Our team will create a customized social media marketing strategy that aligns with your healthcare organization's objectives and goals. We'll identify the most relevant platforms, craft a content plan, and establish key performance indicators (KPIs) to track progress and measure success."],
            icoUrl: 'service_ico1.svg'
        },
        {
            name: 'Content Creation and Curation',
            info: ["We produce engaging, informative, and shareable content that resonates with your target audience. Our content includes articles, infographics, videos, and images that educate, inspire, and inform while highlighting your healthcare organization's unique offerings and expertise."],
            icoUrl: 'service_ico2.svg'
        },
        {
            name: 'Social Media Account Management',
            info: ["Our team will manage your healthcare organization's social media accounts, ensuring consistent branding, prompt responses to comments and messages, and proactive audience engagement. We'll also implement growth strategies to increase your follower base and reach."],
            icoUrl: 'service_ico3.svg'
        },
        {
            name: 'Social Media Advertising',
            info: ["We'll design and manage targeted social media advertising campaigns to boost visibility, drive website traffic, and generate leads. Our team will create compelling ad creatives, select appropriate targeting options, and optimize ad spending for maximum ROI."],
            icoUrl: 'service_ico4.svg'
        },
        {
            name: "Performance Analytics and Reporting",
            info: ["We'll provide comprehensive analytics and reports on your social media marketing performance, identifying trends, tracking KPIs, and measuring the effectiveness of our strategies. This data-driven approach allows us to refine our tactics and continuously optimize your social media presence."],
            icoUrl: "service_ico5.svg"
        },
        {
            name: "Online Reputation Management",
            info: ["We'll help you monitor and manage your healthcare organization's online reputation, addressing negative reviews or comments and promoting positive feedback to showcase your commitment to patient satisfaction and quality care."],
            icoUrl: "service_ico6.svg"
        },
        {
            name: "Influencer Marketing and Partnerships",
            info: ["Our team will identify, engage, and collaborate with relevant influencers and industry partners, leveraging their reach and credibility to amplify your healthcare organization's message and drive engagement with your target audience."],
            icoUrl: "service_ico7.svg"
        },
        {
            name: "Social Media Training and Consulting",
            info: ["We offer social media training and consulting services to empower your healthcare organization's in-house team, providing them with the knowledge and tools necessary to manage and optimize your social media presence effectively."],
            icoUrl: "service_ico8.svg"
        }
    ]

    return (
        <>
            <section className='section-global bg-shade-pink'>
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Services</div>
                            <h2>Best in class innovative tech solutions</h2>
                        </div>
                    </div>
                    <div className="row gx-md-5 align-items-stretch gy-4">
                        {
                            services.map((service, i) =>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6" key={i}>
                                    <ServiceCards data={service} src="services" />
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

function Projects() {
    const projects_data = [
        {
            category: 'Social Media',
            text: ' Social Media Marketing for Medanta Hospital',
            imgUrl: 'project1.png',
            color: "#F97316",
            link: '/case-studies'
        },
        {
            category: 'social media',
            text: 'Apollo Hospitals - Social Media Management',
            imgUrl: 'project1.png',
            color: '#2D7EF8',
            link: '/case-studies/apollo-hospitals'
        },
        {
            category: 'Marketing',
            text: "Social Media Marketing for Cloudnine Hospitals",
            imgUrl: 'project3.png',
            color: "#00AA45",
            link: '/case-studies'
        }
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Case Studies</div>
                            <h2>Our recently compeleted projects</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='/case-studies' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all case studies
                                <TbArrowNarrowRight fontSize={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <CaseStudiesCard data={projects_data} src="services" />
                    </div>
                </div>
            </section>
        </>
    )
}

function Testimonials() {
    const testimonial_data = [
        {
            brandImgUrl: 'review_brand1.svg',
            text: 'I am thrilled with the results of the social media marketing services provided by Branding Pioneers. They increased my online presence and engagement with my target audience, significantly boosting my business revenue. Their team is professional, knowledgeable, and always responsive to my needs. I highly recommend their services to anyone looking to grow their brand on social media.',
            userName: 'Mehak',
            position: 'Product director',
            userImgUrl: 'review1.jfif'
        },
        {
            brandImgUrl: 'review_brand2.svg',
            text: 'Working with Branding Pioneers has been a game-changer for my business. Their social media marketing services have helped me to reach a wider audience and increase my customer base. Their strategies are effective and customized to my specific business needs. Since working with them, I have seen a noticeable improvement in my social media engagement and overall online presence. I highly recommend their services to businesses looking to improve their social media presence.',
            userName: 'Vinesh',
            position: 'Head of Product',
            userImgUrl: 'review2.jfif'
        },
        {
            brandImgUrl: 'review_brand3.svg',
            text: 'I cannot say enough good things about the social media marketing services provided by Branding Pioneers. Their team is highly skilled and knowledgeable in all aspects of social media marketing. They took the time to understand my business needs and created a customized strategy that helped me to achieve my social media goals. Since working with them, I have seen a significant increase in engagement and followers. I highly recommend their services to any business looking to improve its social media presence.',
            userName: 'Aashish',
            position: 'Product director',
            userImgUrl: 'review3.jfif'
        }
    ]

    return (
        <>
            <div className="section-global bg-shade-blue">
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Customer reviews</div>
                            <h2>Adopted by the most creative individuals</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='/about/testimonials' className='btn btn-outline btn-arrow ms-lg-auto'>
                                <span>See all reviews</span>
                                <TbArrowNarrowRight fontSize={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <TestimonialCards data={testimonial_data} src="services" />
                    </div>
                </div>
            </div>
        </>
    )
}
