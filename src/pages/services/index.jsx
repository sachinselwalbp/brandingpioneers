import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BrandSection from '../../components/brandSection'
import TestimonialCards from '../../components/testimonialCards'
import { TbArrowNarrowRight } from "react-icons/tb"
import { BsPlayCircleFill, BsCheckCircleFill } from "react-icons/bs"
import './style.scss'
import { SmallCards } from '../OurSpeciality'

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className='landing-2'>
                <Hero />
                <About />
                <OurServices />
                <Projects />
                <WhyChooseUs />
                <Testimonials />
            </div>
        </>
    )
}

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
        },
        {
            name: "Cloudnine",
            imgUrl: "aiimsd.png"
        },
        {
            name: "Fortis",
            imgUrl: "fortis.png"
        }
    ]
    return (
        <>
            <section className='section-global no-border bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h1 className='mb-16'>Solutions ready for the future.</h1>
                            <p className='txt-1 mb-16'>
                                Branding Pioneers offers a variety of services for healthcare advertising and lead generation. These services include local SEO, social media marketing, managing Google reviews and Quora reviews, creating video testimonials, marketing through WhatsApp, email, and SMS, designing and printing newsletters, video marketing, influencer and PR services, digital signage solutions, CRM, Leadmate, IVR and call tracking, and web design, and development.
                            </p>
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
        "Healthcare Marketing Specialists: Branding Pioneers team has extensive experience and a deep understanding of the unique challenges and opportunities within the healthcare industry, allowing us to tailor our services to your specific needs and goals.",
        "Comprehensive Services: We offer a wide range of services, including strategy development, content creation, account management, advertising campaigns, and analytics reporting, ensuring a holistic approach to your healthcare organization's social media marketing efforts.",
        "Data-Driven Approach: We rely on data and analytics to track performance, measure success, and optimize our strategies, ensuring continuous improvement and maximum return on investment for your healthcare organization.",
        "Client-Centric Focus: We prioritize your healthcare organization's goals and objectives, working closely with you to develop and implement personalized social media marketing strategies that deliver measurable results.",
        "Ongoing Support and Partnership: Branding Pioneers team is committed to your success, offering continuous support and guidance throughout our partnership. We're always available to answer questions, address concerns, and adjust your social media marketing strategy."
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
                        {
                            projects_data.map((e, i) =>
                                <div className='col-xl-4 col-lg-6 col-md-6 gy-4' key={i}>
                                    <Link to={e.link} className="project-link">
                                        <div className='project-card d-flex flex-column' style={{ background: `${e.color}1a` }}>
                                            <div className='text-capitalize fw-500 h4' style={{ color: `${e.color}` }}>{e.category}</div>
                                            <div className='color-1 mb-3'>{e.text}</div>
                                            <div className='project-thumb mt-auto'>
                                                <img loading='lazy' src={require(`../../images/${e.imgUrl}`)} className="img-fluid image-fix-height" alt={e.category} />
                                                <div className="project-link-overlay">
                                                    View case study
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
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
            text: 'We have been working with Branding Pioneers for our healthcare digital marketing needs, and we couldnt be happier with the results. Their knowledgeable and professional team has helped us increase our online presence and generate more leads. We highly recommend their services to anyone looking to improve their digital marketing strategy',
            userName: 'Mehak',
            position: 'Product director',
            userImgUrl: 'review1.jfif'
        },
        {
            brandImgUrl: 'review_brand2.svg',
            text: 'Branding Pioneers has been an invaluable partner in helping us promote our healthcare services online. They deeply understand the healthcare industry and have created a customized digital marketing plan for our unique needs. Their team is responsive and easy to work with, and we have seen a significant increase in our website traffic and patient inquiries since working with them.',
            userName: 'Vinesh',
            position: 'Head of Product',
            userImgUrl: 'review2.jfif'
        },
        {
            brandImgUrl: 'review_brand3.svg',
            text: 'We are skeptical about outsourcing our healthcare digital marketing needs, but working with Branding Pioneers has been one of our best decisions. Their team is creative, data-driven, and always on top of the latest digital marketing trends. They have helped us increase our online visibility and attract new patients. We highly recommend their services to anyone looking to improve their healthcare digital marketing strategy.',
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

function WhyChooseUs() {
    const wcsData1 = [
        {
            title: "Healthcare-specific expertise:",
            text: "Our team has extensive experience in social media marketing for healthcare providers and understands the unique challenges and regulations of the industry."
        },
        {
            title: "Customized solutions:",
            text: "We offer customized social media marketing solutions tailored to the specific needs and goals of each healthcare provider we work with."
        }
    ]

    const wcsData2 = [
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

    return (
        <>
            <section className="section-global bg-shade-green">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-start">
                            <div className="section-tag mb-8 color-red">Why choose Us?</div>
                            <h2 className='mb-16'>We provide solutions that make our clients' lives simpler</h2>
                            <p className="txt-1">Choosing us for social media marketing for healthcare can bring several benefits to healthcare providers, including:</p>
                            {wcsData1.map((e, i) =>
                                <div className='d-flex gap-2 mb-16' key={i}>
                                    <div>
                                        <BsCheckCircleFill fill="#0FA958" fontSize={24} />
                                    </div>
                                    <div>
                                        <h4 className='mb-0'>{e.title}</h4>
                                        <div className="txt-2">{e.text}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-6 text-center align-self-start">
                            <img loading='lazy' src={require(`../../images/info.png`)} className="img-fluid info-banner-image" alt="Why stact" />
                        </div>
                        <div className='col-lg-12'>
                            {wcsData2.map((e, i) =>
                                <div className='d-flex gap-2 mb-16' key={i}>
                                    <div>
                                        <BsCheckCircleFill fill="#0FA958" fontSize={24} />
                                    </div>
                                    <div>
                                        <h4 className='mb-0'>{e.title}</h4>
                                        <div className="txt-2">{e.text}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function OurServices() {
    const services = [
        {
            imgUrl: 'culture_1.png',
            link: 'digital-patient-acquistion/local-seo',
            title: 'Local SEO',
            text: 'Boost your healthcare business`s online presence with our local SEO services. Improve your visibility on search engines and attract more local customers to your practice.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'brand-building/social-media-marketing',
            title: 'Social Media Marketing',
            text: 'Elevate your healthcare business`s social media presence with our marketing services. Engage with your audience and drive conversions through targeted campaigns on popular platforms.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'orm/google-review-management',
            title: 'Google Review Management',
            text: 'This service involves managing your business`s online reviews on Google, responding to customer feedback, and improving your online reputation.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'orm/quora-review',
            title: 'Quora Review',
            text: 'This service involves managing your business`s online reviews on Quora, responding to customer feedback, and improving your online reputation.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'orm/testimonials-video-creation',
            title: 'Testimonials Video Creation',
            text: 'This service involves creating testimonials from satisfied customers, which can be used to promote your healthcare business on your website, social media, and other marketing channels.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'patient-engagement/marketing',
            title: 'WhatsApp/Email/SMS Marketing',
            text: 'This service involves messaging apps like WhatsApp, email, and SMS to promote your healthcare business to potential customers.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'patient-engagement/newsletter-designing-and-printing',
            title: 'Newsletter Designing/Printing',
            text: 'This service involves designing and printing newsletters to inform customers about your healthcare business, services, and promotions.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'brand-building/video-marketing',
            title: 'Video Marketing',
            text: 'This service involves creating video content to promote your healthcare business on social media, YouTube, and other online platforms.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'brand-building/influencer-and-pr',
            title: 'Influencer And PR',
            text: 'This service involves partnering with influencers and public relations agencies to promote your healthcare business and build your brand`s reputation.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'patient-engagement/digital-signage-solution',
            title: 'Digital Signage Solution',
            text: 'This service uses digital signage to promote your healthcare business in waiting rooms, lobbies, and other high-traffic areas.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'sales-automation/crm',
            title: 'CRM',
            text: 'This service uses customer relationship management software to manage your healthcare business`s customer interactions and improve customer retention.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'sales-automation/leadmate',
            title: 'Leadmate',
            text: 'This service uses lead generation software to identify and capture potential customers for your healthcare business.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'sales-automation/ivr-and-call-tracking',
            title: 'IVR And Call Tracking',
            text: 'This service involves using interactive voice response technology and calls tracking to manage your healthcare business`s phone calls and improve customer service.'
        },
        {
            imgUrl: 'culture_1.png',
            link: '/web-services/medical-web-development',
            title: 'Web Design & Development',
            text: 'This service involves designing and developing a website optimized for your healthcare business for search engines and user experience.'
        },
    ]

    return (
        <>
            <section className="section-global">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 text-center">
                            <div className="section-tag mb-8">Services</div>
                            <h2>We aspire to be one of the most loved companies in the world</h2>
                        </div>
                    </div>
                    <SmallCards data={services} />
                </div>
            </section>
        </>
    )
}
