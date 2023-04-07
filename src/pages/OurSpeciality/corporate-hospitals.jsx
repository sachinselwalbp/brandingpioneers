import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BrandSection from '../../components/brandSection'
import BlogCards from '../../components/blogCards'
import ServiceCards from '../../components/serviceCards'
import CaseStudiesCard from '../../components/caseStudiesCards'
import "./style.scss"
import { BsPlayCircleFill, BsCheckCircleFill, BsArrowRight } from "react-icons/bs"

export default function OurSpeciality() {
    return (
        <>
            <Helmet>
                <title>Corporate Hospitals</title>
            </Helmet>
            <div className='landing-3'>
                <Hero />
                <About />
                <Services />
                <Projects />
                <InfoSection />
                <Blog />
            </div>
        </>
    )
}

const Hero = () => {
    const brands = [
        {
            name: "brand1",
            imgUrl: "brand1.svg"
        },
        {
            name: "brand2",
            imgUrl: "brand2.svg"
        },
        {
            name: "brand3",
            imgUrl: "brand3.svg"
        },
        {
            name: "brand4",
            imgUrl: "brand4.svg"
        },
        {
            name: "brand5",
            imgUrl: "brand5.svg"
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
            <section className='section-global no-border bg-shade-green hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Enterprise solutions for next future</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className='txt-1 mb-20'>We cut through the clutter to uncover new opportunities, and then develop and implement winning strategies using the latest technologies.</p>
                            <Link to='/' className='btn btn-primary btn-lg'>Get in touch</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to='/' className='btn btn-outline-primary btn-lg'>Learn more</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-image-container">
                                <img loading='lazy' src={require('../../images/hero_image.jpg')} className="img-fluid" alt="Stact" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} bg="bg-shade-green" light src={'OurSpeciality'} />
        </>
    )
}

const About = () => {
    const capabilities = [
        {
            title: 'Enterprise solutions',
            text: 'Top-notch solutions provider in the industry'
        },
        {
            title: 'Technology services',
            text: 'Top-notch solutions provider in the industry'
        }
    ]
    const counter_data = [
        {
            count: '5K+',
            text: 'Projects'
        },
        {
            count: '75',
            text: 'Awards'
        },
        {
            count: '3m+',
            text: 'Users'
        }
    ]
    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div className="about-img-container">
                                <a href='/'>
                                    <img loading='lazy' src={require(`../../images/about.jpg`)} className="img-fluid" alt='about' />
                                    <BsPlayCircleFill fill='white' fontSize={77} />
                                </a>
                                <div className="counter-section d-flex justify-content-between bg-shade-blue">
                                    {counter_data.map((e, i) =>
                                        <div className="count text-center" key={i}>
                                            <h2 className='mb-0'>{e.count}</h2>
                                            <div className="txt-2">{e.text}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Who we are</div>
                            <h2 className='mb-16'>Best in class innovative tech solutions</h2>
                            <p className='txt-1 mb-20'>We craft digital experiences that resonate with your audience and grow your business. If you have a vision for the next big thing, we can help you make it happen. </p>
                            <h3 className='mb-16'>Our core capabilities</h3>
                            <div>
                                <div className="row gy-4">
                                    {capabilities.map((e, i) =>
                                        <div className="col-xl-6 col-lg-12 col-md-6" key={i}>
                                            <div className="d-flex capability-card" key={i}>
                                                <div className="count">{i + 1}</div>
                                                <div className="ms-2">
                                                    <div className="txt-2 fw-700 color-1">{e.title}</div>
                                                    <div className="txt-3">{e.text}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Services = () => {
    const services = [
        {
            name: 'Applied AI',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'service_ico1.svg'
        },
        {
            name: 'Cyber Security',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'service_ico2.svg'
        },
        {
            name: 'Internet of Things',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'service_ico3.svg'
        },
        {
            name: 'Digital Marketing',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'service_ico4.svg'
        }
    ]

    return (
        <>
            <section className='section-global bg-shade-1'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4">
                            <div className="section-tag mb-8">Solutions</div>
                            <h2 className='mb-16'>Best services to deliver digital outcomes</h2>
                            <Link to='/services' className='btn btn-outline btn-arrow'>
                                See all services
                                <BsArrowRight />
                            </Link>
                        </div>
                        <div className="col-lg-8">
                            <div className="row gx-md-5 gy-5">
                                {services.map((service, i) =>
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6" key={i}>
                                        <ServiceCards data={service} src="OurSpeciality" />
                                    </div>
                                )}
                            </div>
                        </div>
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
            imgUrl: 'project1.png',
            color: "#F97316",
            link: '/project-detail'
        },
        {
            category: 'design',
            text: 'How Deko manages to scale using Stact',
            imgUrl: 'project2.png',
            color: "#2D7EF8",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'project3.png',
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
                            <Link to='/projects' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all case studies
                                <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <CaseStudiesCard data={projects_data} src="OurSpeciality" />
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
                                    <BsCheckCircleFill fontSize={24} />
                                    <div>
                                        <h4 className='mb-0'>{e.title}</h4>
                                        <div className="txt-2">{e.text}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-6 text-center align-self-center">
                            <img loading='lazy' src={require('../../images/info.png')} className="img-fluid info-banner-image" alt="Why stact" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Blog = () => {
    const blog_data = [
        {
            category: 'leadership',
            title: 'How Stact helps you make values visible in your business.',
            date: '09 Sept, 2021',
            imgUrl: 'blog_thumb1.jpg',
            link: '/blog-article'
        },
        {
            category: 'announcement',
            title: "Values (What They Are, Why They're Important)",
            date: '09 Sept, 2021',
            imgUrl: 'blog_thumb2.jpg',
            link: '/blog-article'
        },
        {
            category: 'culture',
            title: 'How Our Tools Will Change The Way You Create Content',
            date: '09 Sept, 2021',
            imgUrl: 'blog_thumb3.jpg',
            link: '/blog-article'
        }
    ]
    return (
        <>
            <section className='section-global bg-shade-blue'>
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Blog</div>
                            <h2>Stay updated with our insider affairs</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='/blog' className='btn btn-outline btn-arrow ms-lg-auto'>
                                Go to blog
                                <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <BlogCards data={blog_data} src='OurSpeciality' />
                    </div>
                </div>
            </section>
        </>
    )
}
