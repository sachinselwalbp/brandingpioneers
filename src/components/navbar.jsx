import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/navbar.scss'
import { Link } from "react-router-dom"

const internalpages = [
  { title: 'SEO Agency for Doctors', href: '/seo-agency-for-doctors' },
  { title: 'Digital Marketing Agency for Hospital', href: '/digital-marketing-agency-for-hospital' },
  { title: 'SEO Company for Clinic/Centres', href: '/seo-company-for-clinic-centres' },
  { title: 'Digital Marketing for Dental', href: '/digital-marketing-for-dental' },
  { title: 'Why SEO is important for Healthcare', href: '/why-seo-is-important-for-healthcare' },
  { title: 'Dynamic Website Design for Healthcare', href: '/dynamic-website-design-for-healthcare' },
  { title: 'Responsive Website Design for Healthcare', href: '/responsive-website-design-for-healthcare' },
  { title: 'Responsive Website Design for Medical', href: '/responsive-website-design-for-medical' },
  { title: 'SEO Agency in India', href: '/seo-agency-in-india' },
  { title: 'Medical Digital Marketing in India', href: '/medical-digital-marketing-in-india' },
  { title: 'Orthopedic Marketing', href: '/orthopedic-marketing' },
  { title: 'Dental Marketing', href: '/dental-marketing' },
  { title: 'Chiropractor Marketing', href: '/chiropractor-marketing' },
  { title: 'Video Marketing for Healthcare Practice', href: '/video-marketing-for-healthcare-practice' },
  { title: 'Startup Website for Healthcare', href: '/startup-website-for-healthcare' },
  { title: 'E-Commerce Development for Medical', href: '/e-commerce-development-for-medical' },
  { title: 'Digital Marketing Agency for Medical', href: '/digital-marketing-agency-for-medical' },
  { title: 'Social Media Marketing for Hospital', href: '/social-media-marketing-for-hospital' },
  { title: 'Social Media Marketing for Dental', href: '/social-media-marketing-for-dental' },
  { title: 'Video Marketing for Healthcare', href: '/video-marketing-for-healthcare' },
  { title: 'Video Content Creation for Healthcare', href: '/video-content-creation-for-healthcare' },
  { title: 'Mobile Website Design', href: '/mobile-website-design' },
  { title: 'Website Revamps for Healthcare', href: '/website-revamps-for-healthcare' },
  { title: 'Redesign Medical Website', href: '/redesign-medical-website' },
  { title: 'Physicians Digital Marketing Services', href: '/physicians-digital-marketing-services' },
  { title: 'Pharma Digital Marketing Company', href: '/pharma-digital-marketing-company' },
  { title: 'Healthcare Logo', href: '/healthcare-logo' },
  { title: 'Local SEO Marketing for Hospital', href: '/local-seo-marketing-for-hospital' },
  { title: 'Local SEO Marketing for Clinic', href: '/local-seo-marketing-for-clinic' },
  { title: 'Hospital Marketing', href: '/hospital-marketing' },
  { title: 'Paid Advertising for Healthcare', href: '/paid-advertising-for-healthcare' },
]

function NavBar() {
  return (
    <Navbar variant="light" expand="lg" fixed="top">
      <div className="container-fluid">
        <Navbar.Brand>
          <NavLink to="/">
            <img src={Logo} height="32" alt="Stact" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <div className="navbar-nav mx-auto py-1">
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link font-weight-bold">Home</Link>
                </li>
                <li className="nav-item dropdown megamenu"><a href="/" id="dropdownMenuButton1 megamneu" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">About</a>
                  <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container mega-shadow">
                      <div className="row bg-white rounded-3 m-0">
                        <div className="col-lg-7 col-xl-8">
                          <div className="p-4">
                            <div className="row">
                              <div className="col-lg-4 mb-4">
                                <h6 className="font-weight-bold text-uppercase">
                                  <Link to="/about" className="nav-link text-small pb-0">About</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/about/who-we-are" className="nav-link text-small pb-0">Who we are</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/about/why-choose-us" className="nav-link text-small pb-0">Why choose us</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/about/testimonials" className="nav-link text-small pb-0">Testimonials</Link>
                                  </li>
                                </ul>
                                <br />
                                {/* Our Work */}
                                <h6 className="font-weight-bold text-uppercase">
                                  <Link to="/our-work" className="nav-link text-small pb-0">Our Work</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/our-work/websites" className="nav-link text-small pb-0">Websites</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-work/case-studies" className="nav-link text-small pb-0">Case Studies</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/projects" className="nav-link text-small pb-0">Projects</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 mb-4">
                                {/* Our Speciality */}
                                <h6 className="font-weight-bold text-uppercase">
                                  <Link to="/our-speciality" className="nav-link text-small pb-0">Our Speciality</Link>
                                </h6>
                                <h6>
                                  <Link to="/our-speciality/healthcare" className="nav-link text-small pb-0">Healthcare</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/hospitals" className="nav-link text-small pb-0">Hospitals</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/dentists" className="nav-link text-small pb-0">Dentists</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/plastic-surgeons" className="nav-link text-small pb-0">Plastic Surgeons</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/orthopedics" className="nav-link text-small pb-0">Orthopedics</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/chiropractors" className="nav-link text-small pb-0">Chiropractors</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/infertility-and-ivf" className="nav-link text-small pb-0">Infertility and IVF</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/aesthetic-dermatologist" className="nav-link text-small pb-0">Aesthetic /Dermatologist</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 mb-4">
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/surgeons" className="nav-link text-small pb-0">Surgeons</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/medical-tourism" className="nav-link text-small pb-0">Medical tourism</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/healthcare-startups" className="nav-link text-small pb-0">Healthcare startups</Link>
                                  </li>
                                </ul>
                                <br />
                                <h6>
                                  <Link to="/our-speciality/education" className="nav-link text-small pb-0">Education</Link>
                                </h6>
                                <h6>
                                  <Link to="/our-speciality/fitness" className="nav-link text-small pb-0">Fitness</Link>
                                </h6>
                                <h6>
                                  <Link to="/our-speciality/b2b" className="nav-link text-small pb-0">B2B</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown megamenu"><a href="/" id="dropdownMenuButton2 megamneu" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Services</a>
                  <div aria-labelledby="dropdownMenuButton2" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container mega-shadow">
                      <div className="row bg-white rounded-3 m-0">
                        <div className="p-4">
                          <div className="row">
                            <div className="col-lg-4 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                <Link to="/services" className="nav-link text-small pb-0">Services</Link>
                              </h6>
                              <h6 className="font-weight-bold text-uppercase">
                                <Link to="/medical-digital-marketing" className="nav-link text-small pb-0">Medical Digital Marketing</Link>
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item"><Link to="/medical-digital-marketing/healthcare-seo" className="nav-link text-small pb-0">Healthcare SEO</Link>
                                  <ul className="list-unstyled px-2">
                                    <li><Link to="/medical-digital-marketing/healthcare-seo/local-seo" className="nav-link text-small pb-0">Local SEO</Link></li>
                                    <li className="nav-item"><Link to="/medical-digital-marketing/healthcare-seo/technical-seo" className="nav-link text-small pb-0">Technical SEO</Link></li>
                                    <li className="nav-item"><Link to="/medical-digital-marketing/healthcare-seo/website-ranking" className="nav-link text-small pb-0">Website Ranking</Link></li>
                                  </ul>
                                </li>
                                <li className="nav-item"><Link to="/medical-digital-marketing/healthcare-smo" className="nav-link text-small pb-0">Healthcare SMO</Link></li>
                                <li className="nav-item"><Link to="/medical-digital-marketing/healthcare-smm" className="nav-link text-small pb-0">Healthcare SMM</Link></li>
                                <li className="nav-item"><Link to="/medical-digital-marketing/reputation-management-for-doctors" className="nav-link text-small pb-0">Reputation Management for Doctors</Link></li>
                                <li className="nav-item"><Link to="/medical-digital-marketing/healthcare-hocial-media-management" className="nav-link text-small pb-0">Healthcare Social Media Management</Link></li>
                                <li className="nav-item"><Link to="/medical-digital-marketing/email-marketing-for-healthcare" className="nav-link text-small pb-0">Email Marketing for Healthcare</Link></li>
                                <li className="nav-item"><Link to="/medical-digital-marketing/guest-posting-gervices-for-healthcare" className="nav-link text-small pb-0">Guest Posting Services for Healthcare</Link></li>
                                <li className="nav-item"><Link to="/medical-digital-marketing/page-load-speed-optimiation" className="nav-link text-small pb-0">Page Load Speed Optimiation</Link></li>
                              </ul>
                            </div>
                            <div className="col-lg-4 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                <Link className="nav-link text-small pb-0">Marketing Strategies</Link>
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">PPC Advertising for Healthcare</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Facebook Ads for Healthcare</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Healthcare Video Marketing</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Branding Services</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Analytics and Reporting</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Marketing Strategies for Doctors</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Lead Generations for Doctors</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Content Marketing for Healthcare</Link></li>
                              </ul>
                            </div>
                            <div className="col-lg-4 mb-4">
                              <h6 className="font-weight-bold text-uppercase">
                                <Link className="nav-link text-small pb-0">Website Services</Link>
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Medical Web Designing</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Medical Web Development </Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">E-Commerce Development for Healthcare</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Medical Website Revamps</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Medical Website Maintenance</Link></li>
                              </ul>
                              <br />
                              <h6 className="font-weight-bold text-uppercase">
                                <Link className="nav-link text-small pb-0">Content</Link>
                              </h6>
                              <ul className="list-unstyled">
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Healthcare Content Creation</Link></li>
                                <li className="nav-item"><Link to="" className="nav-link text-small pb-0">Medical Graphics Design</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link font-weight-bold">Blog</Link>
                </li>
                <li className="nav-item dropdown megamenu">
                  <a href="/" id="dropdownMenuButton3 megamneu" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link font-weight-bold dropdown-toggle">Pages</a>
                  <div aria-labelledby="dropdownMenuButton3" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container mega-shadow">
                      <div className="row bg-white rounded-3 m-0">
                        <div >
                          <div className="p-4">
                            <div className="row">
                              <ul className="list-unstyled internal-page">
                                {internalpages.map((e, i) =>
                                  <li><Link to={e.href} key={i} className="nav-link text-small pb-0">{e.title}</Link></li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Navbar.Collapse>
        <Link to="/contact" className="navbar-cta">Write Query</Link>
      </div>
    </Navbar>
  );
}

export default NavBar