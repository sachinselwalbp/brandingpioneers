import Helmet from 'react-helmet'
import Footer from '../../components/footer'
import './style.scss'
import NavBar from "../../components/navbar"
import { motion } from 'framer-motion'
import AnimatedCharacters from '../../components/AnimeChar'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Stact - Contact</title>
            </Helmet>
            <NavBar />
            <div className="contact-container">
                <Hero />
                <ContactSection />
                <ContactLinks />
                <Footer />
            </div>
        </>
    )
}

const Hero = () => {
    // Placeholder text data, as if from API
    const placeholderText = [
        {
            type: "heading1",
            text: "We are always here to ensure customer satisfaction"
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
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">Contact</div>
                            {/* <h1 className='display-1'>We are always here to ensure customer satisfaction</h1> */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={container}
                                className="heroHeading">
                                {placeholderText.map((item, index) => <AnimatedCharacters {...item} key={index} />)}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const ContactSection = () => {
    const features_data = [
        "Seamless, comprehensive, and cost-effective",
        "Connect with your customers",
        "Streamline your operations"
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container container-2">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <h2 className='mb-16'>Conatct our sales and support team</h2>
                            <p className="txt-1">We cut through the clutter to uncover new opportunities, and always ensure customer satisfaction</p>
                            {features_data.map((e, i) => <div key={i} className="txt-2 color-1 fw-500 mb-8 d-flex align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                                    <rect width="24" height="24" rx="12" fill="#0FA958" />
                                    <path d="M6.66675 12L10.6667 16L17.3334 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                {e}
                            </div>)}
                        </div>
                        <div className="col-lg-6">
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label className="form-label">Name*</label>
                                    <input type="text" className="form-control" placeholder="Jhon Doe" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Email*</label>
                                    <input type="email" className="form-control" placeholder="jhondoe@email.com" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Subject*</label>
                                    <input type="text" className="form-control" placeholder="Enter subject" required />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Message*</label>
                                    <textarea className="form-control" rows="4" placeholder="How can we help you?" required></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const ContactLinks = () => {

    const contactLinkData = [
        {
            title: "Email",
            text: "brandingpioneers@gmail.com",
            icoUrl: "assets/contact_ico1.svg",
            link: "mailto:stact.team@email.com"
        },
        {
            title: "Phone",
            text: "+91 8377009395",
            icoUrl: "assets/contact_ico2.svg",
            link: "tel:+911234567890"
        },
        {
            title: "Headquarters",
            text: "Branding Pioneers 836, 8th floor, B3 Tower, Spaze I-Tech Park, Sector 49 Gurugram",
            icoUrl: "assets/contact_ico3.svg",
            link: "/"
        }
    ]

    return (
        <>
            <section className='section-global bg-shade-blue'>
                <div className="container container-2">
                    <div className="row gy-4">
                        {
                            contactLinkData.map((e, i) =>
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <a href={e.link} className="contact-link">
                                        <div className="contact-link-container d-flex align-items-center">
                                            <img loading='lazy' src={require(`./${e.icoUrl}`)} height="50" alt={e.title} />
                                            <div className='ms-3'>
                                                <div className="txt-2 fw-500 color-1">{e.title}</div>
                                                <div className="txt-3">{e.text}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact