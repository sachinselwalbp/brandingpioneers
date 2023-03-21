import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BrandSection from '../../components/brandSection'
import ProjectCards from '../../components/projectCards'
import ServiceCards from '../../components/serviceCards'
import TestimonialCards from '../../components/testimonialCards'
import { TbArrowNarrowRight } from "react-icons/tb"
import { BsPlayCircleFill, BsCheckCircleFill, BsArrowRight } from "react-icons/bs"
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
                <InfoSection />
                <Testimonials />
            </div>
        </>
    )
}

const Hero = () => {
    const counters = [
        {
            count: '5K+',
            text: "Projects"
        },
        {
            count: '75',
            text: "Awards"
        },
        {
            count: '3m+',
            text: "Users"
        }
    ]
    const brands = [
        {
            name: "brand1",
            imgUrl: "assets/brand1.svg"
        },
        {
            name: "brand2",
            imgUrl: "assets/brand2.svg"
        },
        {
            name: "brand3",
            imgUrl: "assets/brand3.svg"
        },
        {
            name: "brand4",
            imgUrl: "assets/brand4.svg"
        },
        {
            name: "brand5",
            imgUrl: "assets/brand5.svg"
        }
    ]
    return (
        <>
            <section className='section-global no-border bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h1 className='mb-16'>Solutions ready for the future.</h1>
                            <p className='txt-1 mb-16'>Become a part of this digital revolution today.</p>
                            <Link to='/' className='btn btn-primary btn-lg'>Get a demo</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to='/' className='btn btn-outline-primary btn-lg'>Learn more</Link>
                            <div className="counter mt-20 d-flex flex-wrap">
                                {counters.map((e, i) =>
                                    <div className="count txt-center" key={i}>
                                        <h2 className='mb-0'>{e.count}</h2>
                                        <div className='txt-2'>{e.text}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div style={{ maxWidth: '500px' }}>
                                <img src={require('./assets/hero_image.png')} className="img-fluid mt-5 mt-lg-0" alt='hero' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} src={'services'} bg="bg-shade-1" light bordered />
        </>
    )
}

const About = () => {

    const features_data = [
        "Seamless, comprehensive, and cost-effective",
        "Connect with your customers",
        "Streamline your operations"
    ]

    return (
        <>
            <section className="section-global">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div className='video-thumb'>
                                <a href='/'>
                                    <img src={require('./assets/video_thumb.jpg')} className="img-fluid" alt="stact" />
                                    <BsPlayCircleFill fill='white' fontSize={77} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Who we are</div>
                            <h2 className='mb-16'>We provide digital solutions for your business</h2>
                            <p className='txt-1'>We craft digital experiences that resonate with your audience and grow your business. If you have a vision for the next big thing, we can help you make it happen. </p>
                            {features_data.map((e, i) => <div key={i} className="txt-2 color-1 fw-500 mb-8 gap-2 d-flex align-items-center">
                                <BsCheckCircleFill fill='#0FA958' fontSize={24} />
                                {e}
                            </div>)}
                            <div className='mt-16'>
                                <Link to="/about" className='arrow-link'>
                                    Learn more
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const ServicesComp = () => {

    const services = [
        {
            name: 'Applied AI',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'assets/service_ico1.svg'
        },
        {
            name: 'Cyber Security',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'assets/service_ico2.svg'
        },
        {
            name: 'Internet of Things',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'assets/service_ico3.svg'
        },
        {
            name: 'Digital Marketing',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'assets/service_ico4.svg'
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
                    <div className="row gx-md-5 gy-4">
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

const Projects = () => {

    const projects_data = [
        {
            category: 'development',
            text: 'LAPI - Single entry point API management',
            imgUrl: 'assets/project1.png',
            color: "#F97316",
            link: '/project-detail'
        },
        {
            category: 'design',
            text: 'How Deko manages to scale using Stact',
            imgUrl: 'assets/project2.png',
            color: "#2D7EF8",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project3.png',
            color: "#00AA45",
            link: '/project-detail'
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
                        <ProjectCards data={projects_data} src="services" />
                    </div>
                </div>
            </section>
        </>
    )
}

const InfoSection = () => {
    const infoData = [
        {
            title: 'Customer Research',
            text: 'We mine data, uncover insights and identify opportunities'
        },
        {
            title: 'User friendly Build',
            text: 'We architect websites and apps to solve user problems'
        },
        {
            title: 'Scalable models',
            text: 'Continuous Delivery pipelines to ensure fast iteration'
        }
    ]

    return (
        <>
            <section className="section-global bg-shade-green">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Why choose Stact?</div>
                            <h2 className='mb-16'>We provide solutions that make our clients' lives simpler</h2>
                            {infoData.map((e, i) =>
                                <div className='d-flex mb-16 gap-2' key={i}>
                                    <BsCheckCircleFill fill='#0FA958' fontSize={24} />
                                    <div>
                                        <h4 className='mb-0'>{e.title}</h4>
                                        <div className="txt-2">{e.text}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-6 text-center align-self-center">
                            <img src={require('./assets/info.png')} className="img-fluid info-banner-image" alt="Why stact" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Testimonials = () => {
    const testimonial_data = [
        {
            brandImgUrl: 'assets/review_brand1.svg',
            text: 'Love the product and the service, and the customer care team is awesome. The features are great, too--everything that you need.',
            userName: 'Mary Edwards',
            position: 'Product director',
            userImgUrl: 'assets/review_user1.svg'
        },
        {
            brandImgUrl: 'assets/review_brand2.svg',
            text: 'I recommend this product because it benefits everyone. You will be able to stay connected with your team and clients from all over the world.',
            userName: 'Felisa Rincon',
            position: 'Head of Product',
            userImgUrl: 'assets/review_user2.svg'
        },
        {
            brandImgUrl: 'assets/review_brand3.svg',
            text: 'I was able to get a fully functional online office space that included all the software we needed and it was super cheap!',
            userName: 'Eunice Kennedy',
            position: 'Product director',
            userImgUrl: 'assets/review_user3.svg'
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
                                See all reviews
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
