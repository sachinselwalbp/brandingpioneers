import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BrandSection from '../../components/brandSection'
import "./style.scss"
import BlogCards from '../../components/blogCards'
import { TbArrowNarrowRight } from "react-icons/tb"
import TestimonialCards from '../../components/testimonialCards'

export default function OurSpeciality() {
    return (
        <>
            <Helmet>
                <title>Our Speciality</title>
            </Helmet>
            <div className='landing-3'>
                <Hero />
                <OurSpecialies />
                <Testimonials />
                <Projects />
                <Blog />
            </div>
        </>
    )
}

const Hero = () => {
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
            <section className='section-global no-border bg-shade-green hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Enterprise solutions for next future</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className='txt-1 mb-20'>Branding Pioneers is a healthcare branding agency that provides branding and marketing services to healthcare organizations. We offer a wide range of specialty services to meet the unique needs of our clients.</p>
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
                        {projects_data.map((e, i) =>
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
                        )}
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
            imgUrl: 'assets/blog_thumb1.jpg',
            link: '/blog-article'
        },
        {
            category: 'announcement',
            title: "Values (What They Are, Why They're Important)",
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb2.jpg',
            link: '/blog-article'
        },
        {
            category: 'culture',
            title: 'How Our Tools Will Change The Way You Create Content',
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb3.jpg',
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
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black" />
                                </svg>

                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <BlogCards data={blog_data} src='landing3' />
                    </div>
                </div>
            </section>
        </>
    )
}

function OurSpecialies() {
    const hospitals = [
        {
            imgUrl: 'culture_1.png',
            link: 'hospitals/corporate-hospitals',
            title: 'Corporate Hospitals',
            text: 'Trust our experienced healthcare branding experts to create a strong brand identity for your corporate hospital.'
        },
        {
            imgUrl: 'culture_2.png',
            link: 'hospitals/100plus-bed-hospital',
            title: '100+ Bed Hospitals',
            text: 'Our specialised branding and marketing services can help 100+ bed hospitals establish a strong brand identity and attract new patients.'
        },
        {
            imgUrl: 'culture_3.png',
            link: 'hospitals/nursing-homes',
            title: 'Nursing Homes',
            text: 'We offer branding and marketing services that help nursing homes establish a strong brand identity and attract new residents.'
        },
    ]

    const startups = [
        {
            imgUrl: 'culture_3.png',
            link: 'startups/diagnostic-centres',
            title: 'Diagnostic Centres',
            text: 'Our branding and marketing services help diagnostic centers establish a strong online presence and attract new patients.'
        }
    ]

    const surgeons = [
        {
            imgUrl: 'culture_3.png',
            link: 'surgeons/neuro-surgeons',
            title: 'Neuro Surgeons',
            text: 'Our branding and marketing services help neurosurgeons establish a strong online presence and attract new patients.'
        },
        {
            imgUrl: 'culture_3.png',
            link: 'surgeons/gynae-surgeons',
            title: 'Gynae surgeons',
            text: 'We offer branding and marketing services that help gynae surgeons establish a strong brand identity and attract new patients.'
        },
        {
            imgUrl: 'culture_3.png',
            link: 'surgeons/general-surgeons',
            title: 'General Surgeons',
            text: 'Trust our experienced healthcare branding experts to create a strong brand identity for your general surgery practice.'
        },
        {
            imgUrl: 'culture_3.png',
            link: 'surgeons/cardiac-surgeons',
            title: 'Cardiac Surgeons',
            text: 'Our specialized branding and marketing services can help cardiac surgeons establish a strong brand identity and attract new patients.'
        },
        {
            imgUrl: 'culture_3.png',
            link: 'surgeons/orthopedician',
            title: 'Orthopedicians',
            text: 'We offer branding and marketing services that help orthopedicians establish a strong brand identity and attract new patients.'
        },
        {
            imgUrl: 'culture_3.png',
            link: 'surgeons/plastic-surgeons',
            title: 'Plastic Surgeons:',
            text: 'Our branding and marketing services help plastic surgeons establish a strong online presence and attract new patients.'
        }
    ]

    const clinic = [
        {
            imgUrl: 'culture_1.png',
            link: 'clinic/dental-clinic',
            title: 'Dental Clinic',
            text: 'Trust our experienced healthcare branding experts to create a strong brand identity for your dental clinic.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'clinic/aesthetic-clinics',
            title: 'Aesthetic Clinics',
            text: 'We offer branding and marketing services that help aesthetic clinics establish a strong brand identity and attract new patients.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'clinic/poly-clinics',
            title: 'Poly Clinics',
            text: 'Our specialized branding and marketing services can help poly clinics establish a strong brand identity and attract new patients.'
        },
        {
            imgUrl: 'culture_1.png',
            link: 'clinic/ivf-clinics',
            title: 'IVF Clinics',
            text: 'We offer branding and marketing services that help IVF clinics establish a strong online presence and attract new patients.'
        }
    ]

    const healthcareSpecailities = [
        {
            imgUrl: 'culture_2.png',
            link: 'healthcare/dentists',
            title: 'Dentists',
            text: 'Our branding and marketing services help dentists establish a strong online presence and attract new patients.'
        },
        {
            imgUrl: 'culture_2.png',
            link: 'healthcare/orthopedics',
            title: 'Orthopedicians',
            text: 'We offer branding and marketing services that help orthopedicians establish a strong brand identity and attract new patients.'
        },
        {
            imgUrl: 'culture_2.png',
            link: 'healthcare/chiropractors',
            title: 'Chiropractors',
            text: 'We work closely with chiropractors to develop personalised marketing solutions that accurately represent their values and services.'
        },
        {
            imgUrl: 'culture_2.png',
            link: 'healthcare/infertility-and-ivf',
            title: 'Infertility and IVF',
            text: 'Trust our experienced healthcare branding experts to create a strong brand identity for your infertility and IVF clinic.'
        },
        {
            imgUrl: 'culture_2.png',
            link: 'healthcare/aesthetic-dermatologist',
            title: 'Aesthetic/Dermatologist',
            text: 'Our branding and marketing services help aesthetic clinics and dermatologists establish a strong online presence and attract new patients.'
        },
        {
            imgUrl: 'culture_2.png',
            link: 'healthcare/surgeons',
            title: 'Surgeons',
            text: 'We offer specialised branding and marketing services to help surgeons establish a strong brand identity and attract new patients.'
        },
        {
            imgUrl: 'culture_2.png',
            link: '/healthcare/medical-tourism',
            title: 'Medical Tourism',
            text: 'Trust our experienced healthcare branding experts to create a strong brand identity for your medical tourism business.'
        }
    ]

    return (
        <>
            <section className="section-global">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 text-center">
                            <div className="section-tag mb-8">Our Specailities</div>
                            <h2>We aspire to be one of the most loved companies in the world</h2>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div>
                            <h2 className='text-center section-tag mb-8'>Hospitals</h2>
                            <hr />
                        </div>
                        <SmallCards data={hospitals} />
                    </div>
                    <div className='mt-5'>
                        <div>
                            <h2 className='text-center section-tag my-8'>Startups</h2>
                            <hr />
                        </div>
                        <SmallCards data={startups} />
                    </div>
                    <div className='mt-5'>
                        <div>
                            <h2 className='text-center section-tag my-8'>Surgeons</h2>
                            <hr />
                        </div>
                        <SmallCards data={surgeons} />
                    </div>
                    <div className='mt-5'>
                        <div>
                            <h2 className='text-center section-tag my-8'>Clinic</h2>
                            <hr />
                        </div>
                        <SmallCards data={clinic} />
                    </div>
                    <div className='mt-5'>
                        <div>
                            <h2 className='text-center section-tag my-8'>Healthcare Specialities</h2>
                            <hr />
                        </div>
                        <SmallCards data={healthcareSpecailities} />
                    </div>
                </div>
            </section>
        </>
    )
}

export function SmallCards({ data }) {
    const color = ["#F97316", "#2D7EF8", "#00AA45", "#F15757", "#7F57F1", "#007AFF", "#17CF97", "#FF7A00", "#25CAAC", "#F97316", "#2D7EF8", "#00AA45", "#F15757", "#7F57F1", "#007AFF", "#17CF97", "#FF7A00", "#25CAAC", "#F97316", "#2D7EF8", "#00AA45", "#F15757", "#7F57F1", "#007AFF", "#17CF97", "#FF7A00", "#25CAAC"]
    return (
        <>
            <div className="our-services-section">
                {
                    data.map((e, i) =>
                        <Link key={i} to={e.link} className="project-link">
                            <div className='project-card d-flex flex-column' style={{ background: `${color[i]}1a` }}>
                                <div className='text-capitalize fw-500 h5 text-break' style={{ color: `${color[i]}` }}>{e.title}</div>
                                <div className='color-1 mb-3 text-break'>{e.text}</div>
                                <div className='project-thumb mt-auto'>
                                    <img loading='lazy' src={require(`../../images/${e.imgUrl}`)} className="img-fluid" alt={e.category} />
                                    <div className="project-link-overlay project-link-overlay-small">
                                        Services
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    )
}

function Testimonials() {
    const testimonial_data = [
        {
            text: 'I was struggling to attract new patients to my dental clinic until I hired Branding Pioneers. Their team of experts helped me establish a strong online presence and increase my visibility in the community. Thanks to their personalized marketing solutions, my clinic has seen a significant increase in new patient inquiries and appointments',
            userName: 'Dr. John Smith',
            position: 'Dentist',
            userImgUrl: 'hari.jpg'
        },
        {
            text: 'We were impressed by Branding Pioneers comprehensive approach to healthcare branding and marketing. Their team took the time to understand our unique values and services and developed a brand strategy and marketing plan that accurately reflected our organization. Thanks to their services, our hospital has seen a significant increase in online traffic and patient inquiries.',
            userName: 'Sarah Jones',
            position: 'Marketing Director at ABC Hospital',
            userImgUrl: 'manish.jpg'
        },
        {
            text: 'I highly recommend Branding Pioneers to any healthcare organization looking to increase their visibility and attract new patients. Their team of healthcare branding experts provided us with personalized marketing solutions that accurately represented our values and services. Thanks to their services, our nursing home has seen a significant increase in new resident inquiries and admissions',
            userName: 'Jane Doe',
            position: 'Administrator at RT Nursing Home',
            userImgUrl: 'jasleenkaur.jpg'
        }
    ]

    return (
        <>
            <div className="section-global bg-shade-blue">
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8 ">Customer reviews</div>
                            <h2>Adopted by the most creative individuals</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='about/testimonials' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all reviews
                                <TbArrowNarrowRight fontSize={24} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <TestimonialCards data={testimonial_data} />
                    </div>
                </div>
            </div>
        </>
    )
}