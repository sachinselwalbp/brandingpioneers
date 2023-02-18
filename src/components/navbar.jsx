import { Navbar, Container, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/navbar.scss'
import { Link } from "react-router-dom"
import { about, internalpages } from "./navbarLinks"

function NavBar() {
  return (
    <>
      <Navbar variant="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/">
              <img loading="lazy" src={Logo} height="32" alt="Branding Pioneers" />
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
                              <Row>
                                <div className="col-lg-4 mb-4">
                                  <h6 className="font-weight-bold text-uppercase">
                                    <Link to="/about" className="nav-link text-small pb-0">About</Link>
                                  </h6>
                                  <ul className="list-unstyled">
                                    {
                                      about.map(e => (
                                        <li className="nav-item">
                                          <Link to={e.href} className="nav-link text-small pb-0">{e.title}</Link>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                                <div className="col-lg-6 mb-4">
                                  <h6 className="font-weight-bold text-uppercase">Description Heading</h6>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, perspiciatis, provident aliquid dicta ullam dolore magni repudiandae voluptatem alias animi exercitationem at quod reprehenderit dignissimos ratione error amet sunt delectus?</p>
                                </div>
                              </Row>
                            </div>
                          </div>
                          <div className="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga">
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown megamenu"><a href="/" id="dropdownMenuButton1 megamneu" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Our Speciality</a>
                    <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                      <div className="container mega-shadow">
                        <div className="row bg-white rounded-3 m-0">
                          <div className="p-4">
                            <div className="row">
                              <div className="col-lg-3 mb-4">
                                <h6 className="font-weight-bold text-uppercase">
                                  <Link to="/our-speciality" className="nav-link text-small pb-0">Our Speciality</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <h6 className="font-weight-bold">
                                    <Link to="/our-speciality/hospitals" className="nav-link text-small pb-0">Hospitals</Link>
                                  </h6>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/hospitals/corporate-hospitals" className="nav-link text-small pb-0">Corporate Hospitals</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/hospitals/100plus-bed-hospital" className="nav-link text-small pb-0">100+ Bed Hospitals</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/hospitals/nursing-homes" className="nav-link text-small pb-0">Nursing Homes</Link>
                                  </li>
                                </ul>
                                <br />
                                <ul className="list-unstyled">
                                  <h6 className="font-weight-bold">
                                    <Link to="/our-speciality/startups" className="nav-link text-small pb-0">Startups</Link>
                                  </h6>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/startups/diagnostic-centres" className="nav-link text-small pb-0">Diagnostic Centres</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 mb-4">
                                <h6 className="font-weight-bold">
                                  <Link to="/our-speciality/surgeons" className="nav-link text-small pb-0">Surgeons</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/our-speciality/surgeons/neuro-surgeons" className="nav-link text-small pb-0">Neuro Surgeons</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/surgeons/gynae-surgeons" className="nav-link text-small pb-0">Gynae Surgeons</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/surgeons/general-surgeons" className="nav-link text-small pb-0">General Surgeons</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/surgeons/cardiac-surgeons" className="nav-link text-small pb-0">Cardiac Surgeons</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/surgeons/orthopedician" className="nav-link text-small pb-0">Orthopedician</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/surgeons/plastic-surgeons" className="nav-link text-small pb-0">Plastic Surgeons</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 mb-4">
                                <h6 className="font-weight-bold">
                                  <Link to="/our-speciality/clinic" className="nav-link text-small pb-0">Clinic</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/our-speciality/clinic/dental-clinic" className="nav-link text-small pb-0">Dental Clinic</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/clinic/aesthetic-clinics" className="nav-link text-small pb-0">Aesthetic Clinics</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/clinic/poly-clinics" className="nav-link text-small pb-0">Poly Clinics</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/clinic/ivf-clinics" className="nav-link text-small pb-0">IVF Clinics</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 mb-4">
                                <ul className="list-unstyled">
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
                                    <Link to="/our-speciality/healthcare/aesthetic-dermatologist" className="nav-link text-small pb-0">Aesthetic/Dermatologist</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/surgeons" className="nav-link text-small pb-0">Surgeons</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/medical-tourism" className="nav-link text-small pb-0">Medical Tourism</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/our-speciality/healthcare/healthcare-startup" className="nav-link text-small pb-0">Healthcare Startup</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
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
                                <ul className="list-unstyled">
                                  <li className="nav-item font-weight-bold">
                                    <h6 className="font-weight-bold">
                                      <Link to="/services/digital-patient-acquistion" className="nav-link text-small pb-0">Digital Patient Acquistion</Link>
                                    </h6>
                                    <ul className="list-unstyled px-2">
                                      <li className="nav-item">
                                        <Link className="nav-link text-small pb-0" to="/services/digital-patient-acquistion/seo">Search Engine Optimization</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link to="/services/digital-patient-acquistion/ads-and-lead-generation" className="nav-link text-small pb-0">Performance Ads & Lead Generation</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link to="/services/digital-patient-acquistion/local-seo" className="nav-link text-small pb-0">Local SEO</Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 mb-4">
                                <ul className="list-unstyled">
                                  <li className="nav-item font-weight-bold">
                                    <h6 className="font-weight-bold">
                                      <Link to="/services/orm" className="nav-link text-small pb-0">Online Reputation Management</Link>
                                    </h6>
                                    <ul className="list-unstyled px-2">
                                      <li className="nav-item">
                                        <Link to="/services/orm/google-review-management" className="nav-link text-small pb-0">Google Review Management</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link to="/services/orm/ouora-review" className="nav-link text-small pb-0">Quora Review</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link to="/services/orm/testimonials-video-creation" className="nav-link text-small pb-0">Testimonials Video Creation</Link>
                                      </li>
                                    </ul>
                                    <br />
                                    <ul className="list-unstyled">
                                      <li className="nav-item font-weight-bold">
                                        <h6 className="font-weight-bold">
                                          <Link to="/services/patient-engagement" className="nav-link text-small pb-0">Patient Engagement</Link>
                                        </h6>
                                        <ul className="list-unstyled px-2">
                                          <li className="nav-item">
                                            <Link className="nav-link text-small pb-0" to="/services/patient-engagement/marketing">Whatsapp/Email/SMS Marketing</Link>
                                          </li>
                                          <li className="nav-item">
                                            <Link to="/services/patient-engagement/newsletter-designing-and-printing" className="nav-link text-small pb-0">Newsletter Designing/Printing</Link>
                                          </li>
                                          <li className="nav-item">
                                            <Link to="/services/patient-engagement/digital-signage-solution" className="nav-link text-small pb-0">Digital Signage Solution</Link>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 mb-4">
                                <ul className="list-unstyled">
                                  <li className="nav-item font-weight-bold">
                                    <h6 className="font-weight-bold">
                                      <Link to="/services/brand-building" className="nav-link text-small pb-0">Brand Building</Link>
                                    </h6>
                                    <ul className="list-unstyled px-2">
                                      <li className="nav-item">
                                        <Link to="/services/brand-building/social-media-marketing" className="nav-link text-small pb-0">Social Media Marketing</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link to="/services/brand-building/video-marketing" className="nav-link text-small pb-0">Video Marketing</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link to="/services/brand-building/influencer-and-pr" className="nav-link text-small pb-0">Influencer & PR</Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                                <br />
                                <ul className="list-unstyled">
                                  <li className="nav-item font-weight-bold">
                                    <h6 className="font-weight-bold">
                                      <Link to="/services/sales-automation" className="nav-link text-small pb-0">Sales Automation</Link>
                                    </h6>
                                    <ul className="list-unstyled px-2">
                                      <li className="nav-item">
                                        <Link className="nav-link text-small pb-0" to="/services/sales-automation/crm">CRM</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link to="/services/sales-automation/leadmate" className="nav-link text-small pb-0">Leadmate</Link>
                                      </li>
                                      <li className="nav-item">
                                        <Link to="/services/sales-automation/ivr-and-call-tracking" className="nav-link text-small pb-0">IVR & Call Tracking</Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown megamenu"><a href="/" id="dropdownMenuButton2 megamneu" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Our Work</a>
                    <div aria-labelledby="dropdownMenuButton2" className="dropdown-menu border-0 p-0 m-0">
                      <div className="container mega-shadow">
                        <div className="row bg-white rounded-3 m-0">
                          <div className="p-4">
                            <div className="row">
                              <div className="col-lg-4 mb-4">
                                <h6 className="font-weight-bold text-uppercase">
                                  <Link to="/medical-digital-marketing" className="nav-link text-small pb-0">Medical Digital Marketing</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><Link to="/marketing-services/healthcare-seo" className="nav-link text-small pb-0">Healthcare SEO</Link>
                                    <ul className="list-unstyled px-2">
                                      <li><Link to="/marketing-services/healthcare-seo/local-seo" className="nav-link text-small pb-0">Local SEO</Link></li>
                                    </ul>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-services/healthcare-seo/website-ranking" className="nav-link text-small pb-0">Website Ranking</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-services/healthcare-smo" className="nav-link text-small pb-0">Healthcare SMO</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-services/healthcare-smm" className="nav-link text-small pb-0">Healthcare SMM</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="" className="nav-link text-small pb-0">Content Marketing for Healthcare</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-services/reputation-management-for-doctors" className="nav-link text-small pb-0">Reputation Management for Doctors</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-services/healthcare-hocial-media-management" className="nav-link text-small pb-0">Healthcare Social Media Management</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-services/email-marketing-for-healthcare" className="nav-link text-small pb-0">Email Marketing for Healthcare</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-services/guest-posting-gervices-for-healthcare" className="nav-link text-small pb-0">Guest Posting Services for Healthcare</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-services/page-load-speed-optimiation" className="nav-link text-small pb-0">Page Load Speed Optimiation</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 mb-4">
                                <h6 className="font-weight-bold text-uppercase">
                                  <Link to="/marketing-strategies" className="nav-link text-small pb-0">Marketing Strategies</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/marketing-strategies/ppc-advertising" className="nav-link text-small pb-0">PPC Advertising for Healthcare</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-strategies/facebook-ads" className="nav-link text-small pb-0">Facebook Ads for Healthcare</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-strategies/video-marketing" className="nav-link text-small pb-0">Healthcare Video Marketing</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-strategies/branding-services" className="nav-link text-small pb-0">Branding Services</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-strategies/analytics-and-reporting" className="nav-link text-small pb-0">Analytics and Reporting</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-strategies/marketing-strategies-for-doctors" className="nav-link text-small pb-0">Marketing Strategies for Doctors</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/marketing-strategies/lead-generation-for-doctors" className="nav-link text-small pb-0">Lead Generations for Doctors</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 mb-4">
                                <h6 className="font-weight-bold text-uppercase">
                                  <Link to="/web-services" className="nav-link text-small pb-0">Website Services</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/web-services/medical-web-designing" className="nav-link text-small pb-0">Medical Web Designing</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/web-services/medical-web-development" className="nav-link text-small pb-0">Medical Web Development</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/web-services/e-commerce-development-for-healthcare" className="nav-link text-small pb-0">E-Commerce Development for Healthcare</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/web-services/mediacl-website-revamps" className="nav-link text-small pb-0">Medical Website Revamps</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/web-services/medical-website-maintenance" className="nav-link text-small pb-0">Medical Website Maintenance</Link>
                                  </li>
                                </ul>
                                <br />
                                <h6 className="font-weight-bold text-uppercase">
                                  <Link to="/content" className="nav-link text-small pb-0">Content</Link>
                                </h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item">
                                    <Link to="/content/healthcare-content-creation" className="nav-link text-small pb-0">Healthcare Content Creation</Link>
                                  </li>
                                  <li className="nav-item">
                                    <Link to="/content/medical-graphics-design" className="nav-link text-small pb-0">Medical Graphics Design</Link>
                                  </li>
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
                                    <li>
                                      <Link to={e.href} key={i} className="nav-link text-small pb-0">{e.title}</Link>
                                    </li>
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
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar