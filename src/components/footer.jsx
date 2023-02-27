import { Link } from 'react-router-dom'
import Logo from '../logo_dark.svg'
import './css/footer.scss'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    const links = [
        {
            title: 'Links',
            nav_links: [
                { name: 'Home', linkUrl: '/' },
                { name: 'FAQs', linkUrl: '/faqs' },
                { name: 'Services', linkUrl: '/services' },
                { name: 'Contact', linkUrl: '/contact' },
            ]
        },
        {
            title: 'Company',
            nav_links: [
                { name: 'About Us', linkUrl: '/about' },
                { name: 'Case Studies', linkUrl: '/case-studies' },
                { name: 'Blog', linkUrl: '/blog' },
                { name: 'Contact', linkUrl: '/contact' }
            ]
        },
        {
            title: 'Legal',
            nav_links: [
                { name: 'Privacy', linkUrl: '/' },
                { name: 'Terms of use', linkUrl: '/' }
            ]
        }
    ]

    return (
        <>
            <footer className="dark">
                <div className="container">
                    <div className="row gy-4 footer-section">
                        <div className="col-lg-3">
                            <img loading='lazy' src={Logo} alt="Branding Pioneers" height="32" />
                        </div>
                        <div className="col-lg-5">
                            <div className="link-section">
                                {links.map((e, i) =>
                                    <div className='me-5 me-lg-0 mt-4 mt-lg-0' key={i}>
                                        <div className="mb-8 txt-2 color-1 fw-500">{e.title}</div>
                                        <div className="links">
                                            {e.nav_links.map((el, j) => <Link key={j} to={el.linkUrl} className='link'>{el.name}</Link>)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex">
                            <div className='ms-lg-auto'>
                                <div className='txt-3'>Email:&nbsp;<a href='mailto:brandingpioneers@gmail.com' className='contact-link'>brandingpioneers@gmail.com</a></div>
                                <div className='txt-3'>Email:&nbsp;<a href='mailto:official@brandingpioneers.com' className='contact-link'>official@brandingpioneers.com</a></div>
                                <div className='txt-3 mb-20'>Inquiries:&nbsp;<a href='tel:+918377009395' className='contact-link'>+91 8377009395</a></div>
                                <div className="mb-8 txt-2 color-1 fw-600">Follow us on</div>
                                <div className="social-link">
                                    <a target="_b" href='https://www.instagram.com/brandingpioneers_/'>
                                        <FaInstagram fontSize={20} fill="white" />
                                    </a>
                                    <a target="_b" href='https://www.facebook.com/Officialbrandingpioneers'>
                                        <FaFacebook fontSize={20} fill="white" />
                                    </a>
                                    <a target="_b" href='https://twitter.com/brandingpio'>
                                        <FaTwitter fontSize={20} fill="white" />
                                    </a>
                                    <a target="_b" href='https://www.linkedin.com/company/branding-pioneers/'>
                                        <FaLinkedin fontSize={20} fill="white" />
                                    </a>
                                    <a target="_b" href='https://www.youtube.com/@brandingpioneers'>
                                        <FaYoutube fontSize={20} fill="white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className='txt-3 text-center footer-bottom'>Copyright © {new Date().getFullYear()} Branding Pioneers.</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer