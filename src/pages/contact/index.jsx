import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'
import { BsCheckCircleFill } from "react-icons/bs"

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="contact-container">
                <Hero title="We are always here to ensure customer satisfaction" />
                <ContactSection />
                <ContactLinks />
            </div>
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
                            {features_data.map((e, i) => <div key={i} className="txt-2 color-1 fw-500 mb-8 gap-2 d-flex align-items-center">
                                <BsCheckCircleFill fill='#0FA958' fontSize={24} />
                                {e}
                            </div>)}
                        </div>
                        <div className="col-lg-6">
                            <form className="row g-3" action="https://app.headlessforms.cloud/api/v1/form-submission/VFEVuhdpaR" method="POST" enctype="multipart/form-data">
                                <div className="col-md-12">
                                    <label className="form-label">Name*</label>
                                    <input type="text" name='name' className="form-control" placeholder="Jhon Doe" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Email*</label>
                                    <input type="email" name='email' className="form-control" placeholder="jhondoe@email.com" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Phone*</label>
                                    <input type="tel" name='phone' className="form-control" placeholder="Enter Phone Number" required />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Message*</label>
                                    <textarea className="form-control" name='message' rows="4" placeholder="How can we help you?" required></textarea>
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
                            )}
                    </div>
                </div>
            </section>
        </>
    )
}
