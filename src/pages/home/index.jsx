import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import BrandSection from "../../components/brandSection"
import ServiceCards from "../../components/serviceCards"
import TestimonialCards from "../../components/testimonialCards"
import './style.scss'
import { Accordion } from 'react-bootstrap'
import { motion } from "framer-motion"
// import AnimatedCharacters from "../components/AnimeChar"
import { TbBrandMeta } from "react-icons/tb"
import { FaInstagram, FaGoogle } from "react-icons/fa"
import { SiMicrosoftbing } from "react-icons/si"
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs"
import FooterContact from "../../components/FooterContact"
import Typewriter from 'typewriter-effect';

export default function HomePage() {
    return (
        <motion.div>
            <Helmet>
                <title>Branding Pioneers</title>
            </Helmet>
            <div className="consulting">
                <Hero />
                <Services />
                <About />
                <Culture />
                <Testimonials />
                <OurPartners />
                <FAQSection />
                <FooterContact />
            </div>
        </motion.div>
    )
}

const brands = [
    {
        name: "Apollo",
        imgUrl: "assets/apollo.svg"
    },
    {
        name: "asterclinic",
        imgUrl: "assets/asterclinic.png"
    },
    {
        name: "HCAH",
        imgUrl: "assets/hcah.png"
    },
    {
        name: "Medanta",
        imgUrl: "assets/medanta.png"
    },
    {
        name: "Cloudnine",
        imgUrl: "assets/cloudnine.svg"
    }
]

const Hero = () => {
    const placeholderText = [
        {
            type: "heading2",
            text: "Transform Your Healthcare Marketing with Branding Pioneers."
        }
    ]

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    }

    return (
        <>
            <section className="section-global no-border home-hero">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            {/* <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={container}>
                                <div>
                                    {placeholderText.map((item, index) => <AnimatedCharacters {...item} key={index} />)}
                                </div>
                            </motion.div> */}

                            <h1 style={{
                                fontSize: "3rem",
                                lineHeight: "normal"
                            }}>Transform Your Healthcare Marketing with Branding Pioneers</h1>
                            <p className="home_hero_subheading">
                                <Typewriter
                                    options={{
                                        strings: ['Innovative Strategies. Personalised Solutions. Healthcare Marketing That Works.', 'From SEO to Social Media - Branding Pioneers: Your One-Stop-Shop for Healthcare Marketing.', 'Grow Your Practice with Digital Marketing That Works - Trust Branding Pioneers for Results.'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                            <form className='mt-40 me-lg-5'>
                                <div className="cta-form d-flex align-items-center justify-content-between">
                                    <div className="cta-input">
                                        <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
                                    </div>
                                    <div className="cta-btn">
                                        <button type="submit" className="btn btn-primary btn-lg">Request A Callback</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <motion.img width={800} src={require('./assets/hero_image.png')} className="img-fluid" alt="hero" animate={{ y: 0 }} initial={{ y: 1000 }} />
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} src={'home'} bordered />
        </>
    )
}

const Services = () => {
    const services = [
        {
            name: 'Digital Patient Acquisition',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'assets/service_ico1.svg'
        },
        {
            name: 'Reputation Management',
            info: ['Google Review Management', 'Quora Review', 'Testimonials Video Creation'],
            link: '/services',
            icoUrl: 'assets/service_ico2.svg'
        },
        {
            name: 'Brand Building',
            info: ['Social Media Marketing', 'Video Marketing', 'Influencer & PR'],
            link: '/services',
            icoUrl: 'assets/service_ico3.svg'
        },
        {
            name: 'Sales Automation',
            info: ['CRM', 'Leadmade', 'IVR & Call Tracking'],
            link: '/services',
            icoUrl: 'assets/service_ico4.svg'
        }
    ]
    return (
        <>
            <section className="section-global">
                <div className="container">
                    <div className="row mb-40">
                        {/* <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center"> */}
                        <div className="text-center">
                            <div className="section-tag mb-8">Our Services</div>
                            <h2>One-Stop Solution for Healthcare Marketing and Patient Acquisition</h2>
                            <p className="mx-4">Unlock the Full Potential of Your Healthcare Business with Our Comprehensive Marketing Services - From Digital Patient Acquisition and SEO to Reputation Management and Sales Automation, We Help You Build Your Brand, Reach More Patients, and Drive Results.</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services.map((service, i) =>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 gx-5 gy-4" key={i}>
                                    <ServiceCards data={service} src="home" />
                                </div>)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const FAQSection = () => {
    const FAQ_data = [
        {
            title: 'What sets your healthcare marketing agency apart from others?',
            text: `At Branding Pioneers, we differentiate ourselves by providing customized solutions tailored to the unique needs and goals of each of our clients. Our team of healthcare marketing experts has extensive experience working in the industry, which allows us to develop innovative and effective strategies that drive results. We prioritize customer satisfaction, building long-lasting relationships based on trust, transparency, and results. Additionally, we stay on top of the latest trends and technologies.
            
            latest trends and technologies in the industry, which enables us to deliver cutting-edge solutions to our clients.`
        },
        {
            title: 'How long does it take to see results from your healthcare marketing campaigns?',
            text: 'The timeline for seeing results from our healthcare marketing campaigns varies depending on several factors, including your business goals, the type of services you require, and the size of your healthcare business. However, we typically see measurable results within three to six months of launching a campaign. We will work with you to set realistic expectations and develop a timeline that aligns with your business objectives.'
        },
        {
            title: 'How do you measure the success of your healthcare marketing campaigns?',
            text: 'We measure the success of our healthcare marketing campaigns using a range of metrics, including website traffic, conversion rates, engagement rates, social media reach, and return on investment (ROI). We use sophisticated tools and technologies to monitor and track these metrics, which enables us to make data-driven decisions and continuously optimize your campaigns to achieve the best possible results.'
        },
        {
            title: 'Can you guarantee specific results for my healthcare business?',
            text: 'While we cannot guarantee specific results, we can promise that we will work tirelessly to deliver the best possible outcomes for your healthcare business. Our team of healthcare marketing experts will collaborate with you to develop a customized strategy that aligns with your business goals and objectives. We will regularly measure and analyze the performance of your campaigns to make data-driven decisions and adjust our approach as necessary to optimize your results.'
        }
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">FAQ's</div>
                            <h2>Do You Have Questions?</h2>
                        </div>
                        <div className="col-12">
                            <Accordion alwaysOpen flush>
                                {FAQ_data.map((e, i) =>
                                    <Accordion.Item eventKey={i} key={i}>
                                        <Accordion.Header>{e.title}</Accordion.Header>
                                        <Accordion.Body>{e.text}</Accordion.Body>
                                    </Accordion.Item>)}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const OurPartners = () => {
    return (
        <>
            <section className="ourParnersSection">
                <div className="container">
                    {/* <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">Our Partners</div>
                            <h2>Our Technology Partners</h2>
                        </div>
                    </div> */}
                    <div className="d-flex gap-5 align-items-center justify-content-center ourParners text-center flex-wrap">
                        <div>
                            <FaGoogle className="google" fontSize={48} />
                            <p>Google Partners</p>
                        </div>
                        <div>
                            <TbBrandMeta className="meta" fontSize={48} />
                            <p>Meta Partners</p>
                        </div>
                        <div>
                            <FaInstagram className="instagram" fontSize={48} />
                            <p>Instagram Partners</p>
                        </div>
                        <div>
                            <SiMicrosoftbing className="bing" fontSize={48} />
                            <p>Bing Partners</p>
                        </div>
                        <div>
                            <BsYoutube className="youtube" fontSize={48} />
                            <p>Youtube Ads</p>
                        </div>
                        <div>
                            <BsFacebook className="facebook" fontSize={48} />
                            <p>Facebook Ads</p>
                        </div>
                        <div>
                            <BsTwitter className="twitter" fontSize={48} />
                            <p>Twitter Ads</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const About = () => {
    return (
        <>
            <section className="section-global bg-shade-1">
                <div className="container">
                    <div className="row mb-40 gy-4">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center align-items-center">
                            <div>
                                <img loading="lazy" src={require('./assets/about1.png')} className="img-fluid" alt="About" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Branding</div>
                            <h2 className='mb-16'>Why Branding Pioneers?</h2>
                            <ul className='txt-1'>
                                <li>Comprehensive healthcare marketing services tailored to your goals.</li>
                                <li>Healthcare expertise, with strategies designed for the unique needs of your business.</li>
                                <li>Proven results, with a track record of success in driving ROI for our clients.</li>
                                <li>Data-driven approach using analytics and other tools to make informed decisions.</li>
                                <li>Client-centric focus, prioritizing your needs and goals above all else.</li>
                                <li>Experienced team of experts in healthcare marketing.</li>
                                <li>Innovative strategies us Innovative strategies using the latest trends and tools to help you stand out in the competitive healthcare market.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row pt-5 gy-4">
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Solutions</div>
                            <h2 className='mb-16'>Stand Out in the Healthcare Industry with Branding Pioneers' Solutions</h2>
                            <p className='txt-1'>Branding Pioneers offers a comprehensive range of healthcare marketing solutions to help you achieve your business goals. Our healthcare experts work with you to develop customized solutions to attract more patients, build your brand, and streamline your sales process. From digital patient acquisition, SEO, and performance marketing to reputation management, brand building, and sales automation, our solutions are designed to help you stand out and drive results.</p>
                            <p className="txt-1">Choose Branding Pioneers for our innovative and client-centric approach to healthcare marketing</p>
                        </div>
                        <div className="col-lg-6 align-self-center d-flex justify-content-center align-items-center">
                            <div>
                                <img loading="lazy" src={require('./assets/about2.png')} className="img-fluid" alt="About" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Culture = () => {

    const culture_data = [
        {
            imgUrl: 'aspiration.gif',
            title: 'Aspiration',
            text: 'We aspire to be one of the most loved healthcare marketing agencies in the world, and we work tirelessly to achieve this goal by delivering outstanding results for our clients.'
        },
        {
            imgUrl: 'industry-experts.gif',
            title: 'Industry Experts',
            text: 'Our team of healthcare marketing experts are highly skilled and knowledgeable in the latest trends and technologies in the industry. We stay on top of the latest developments to ensure that we deliver cutting-edge solutions to our clients.'
        },
        {
            imgUrl: 'growth-oriented.gif',
            title: 'Growth Oriented',
            text: 'We are committed to helping our clients grow their healthcare businesses by providing a range of growth marketing and operations services that enable them to reach more patients and achieve their business goals.'
        },
        {
            imgUrl: 'team-spirit.gif',
            title: 'Team spirit',
            text: 'Our team works together to cut through the clutter and uncover new opportunities for our clients. We prioritize customer satisfaction and work to build long-lasting relationships with our clients based on trust, transparency, and results.'
        },
        {
            imgUrl: 'innovation.gif',
            title: 'Innovation',
            text: 'We approach healthcare marketing with a spirit of innovation, constantly exploring new ideas and techniques to help our clients stand out in a competitive industry. We encourage creativity and experimentation, always striving to find new and better ways to help our clients succeed.'
        },
        {
            imgUrl: 'collaboration.gif',
            title: 'Collaboration',
            text: 'We believe in the power of collaboration, both within our team and with our clients. We work closely with our clients to understand their unique needs and develop tailored solutions that address their specific challenges.'
        }
    ]

    return (
        <>
            <section className="section-global">
                <div className="container container-2">
                    <div className="row mb-40">
                        <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 text-center">
                            <div className="section-tag mb-8">Culture</div>
                            <h2>We aspire to be one of the most loved companies in the world</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            culture_data.map((e, i) =>
                                <div className="col-lg-4 col-md-6 col-sm-6 text-center" key={i}>
                                    <img loading="lazy" src={require(`./assets/${e.imgUrl}`)} className="img-fluid" alt={e.title} />
                                    <h3>{e.title}</h3>
                                    <p className="txt-3">{e.text}</p>
                                </div>
                            )
                        }
                    </div>
                    <p className="txt-1 mt-4">At Branding Pioneers, we believe that our culture is a key driver of our success, and we are committed to nurturing a positive, inclusive, and results-driven work environment that enables our team to thrive and deliver exceptional healthcare marketing solutions to our clients.</p>
                </div>
            </section>
        </>
    )
}

const Testimonials = () => {
    const testimonial_data = [
        {
            text: 'Branding Pioneers has their hands right on the pulse as far as health marketing is concerned.',
            userName: 'Mr. Hari Boolchandani',
            position: 'Co-Founder and President at GHC',
            youtube: 'https://youtu.be/YjXBjttxiNc',
            userImgUrl: 'assets/hari.jpg'
        },
        {
            text: 'Branding Pioneers takes lots of pain and put up questions, they take lots of pains in recording our videos and posting them timely on the social media, and this has created a lot of difference in our social media presence.',
            userName: 'Dr. Manish Kulshrestha',
            position: 'Additional Director - Laparoscopic and Robotic Surgery at Fortis Healthcare',
            youtube: 'https://youtu.be/gPyG-eYRVaM',
            userImgUrl: 'assets/manish.jpg'
        },
        {
            text: 'I have seen a realistic amount of growth on our social media platforms. Very enthusiastic team, they are doing a splendid job. Keep up the good work!',
            userName: 'Jasleen Kaur',
            position: 'Marketing Head at Rosewalk and Rainbow Hospital.',
            youtube: 'https://youtu.be/N2zfXA3CJMA',
            userImgUrl: 'assets/jasleenkaur.jpg'
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
                            <Link to='about/testimonials' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all reviews
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <TestimonialCards data={testimonial_data} src="home" />
                    </div>
                </div>
            </div>
        </>
    )
}
