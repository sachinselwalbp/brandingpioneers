import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import ProjectCards from '../../components/projectCards'
import TestimonialCards from '../../components/testimonialCards'
import './style.scss'
import Hero from '../../components/hero'

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <div className="projects-container">
                <Hero title="Our experts and proprietary technology fuel our work" parent="Case studies" />
                <ProjectsSection />
                <Testimonials />
            </div>
        </>
    )
}

const ProjectsSection = () => {
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
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project4.png',
            color: "#F15757",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project5.png',
            color: "#7F57F1",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project6.png',
            color: "#007AFF",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project7.png',
            color: "#17CF97",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project8.png',
            color: "#FF7A00",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project9.png',
            color: "#25CAAC",
            link: '/project-detail'
        }
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row">
                        <ProjectCards data={projects_data} src="projects" />
                    </div>
                </div>
            </section>
        </>
    )
}

const Testimonials = () => {
    const testimonial_data = [
        {
            text: 'Love the product and the service, and the customer care team is awesome. The features are great, too--everything that you need.',
            userName: 'Mary Edwards',
            position: 'Product director',
            userImgUrl: 'assets/review_user1.svg'
        },
        {
            text: 'I recommend this product because it benefits everyone. You will be able to stay connected with your team and clients from all over the world.',
            userName: 'Felisa Rincon',
            position: 'Head of Product',
            userImgUrl: 'assets/review_user2.svg'
        },
        {
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
                            <Link to='/' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all reviews
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <TestimonialCards data={testimonial_data} src="projects" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects