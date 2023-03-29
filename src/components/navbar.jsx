import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Logo from '../images/logo.svg'
import './css/navbar.scss'
import { Link } from "react-router-dom"
import { BsChatRightQuote } from "react-icons/bs"
import { MdMarkEmailRead, MdOutlineMedicalServices } from "react-icons/md"
import { HiStar } from "react-icons/hi"
import { BiBookContent } from "react-icons/bi"
import { FaHandHoldingMedical, FaLaptopMedical, FaTelegramPlane } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"
import { RiSurgicalMaskLine, RiHeartPulseFill, RiHospitalFill } from "react-icons/ri"
import { FaBriefcaseMedical, FaHandHoldingHeart, FaStore } from "react-icons/fa"
import { IoMdMedical } from "react-icons/io"
import { GiPolarStar } from "react-icons/gi"
import { GrInfo } from "react-icons/gr"
import { TbSettingsAutomation } from "react-icons/tb"

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect variant="light" expand="lg">
        <Container className="py-2 py-md-0">
          <Navbar.Brand>
            <NavLink to="/">
              <img loading='lazy' src={Logo} height="32" alt="Branding Pioneers" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto py-1 my-3 me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown className="megamenu" title="About">
                <Container fluid className="mega-shadow">
                  <div className="megamenu-box">
                    <div className="py-4 col_bg1">
                      <h6>
                        <NavDropdown.Item as={Link} to="/about" className="nav-link text-uppercase text-small pb-0 font-weight-bold nav-heading">
                          <BsChatRightQuote />
                          <span>About</span>
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/about/why-choose-us" className="nav-link text-small pb-0">Why Choose Us</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="about/who-we-are" className="nav-link text-small pb-0">Who We Are</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="about/testimonials" className="nav-link text-small pb-0">Tesimonials</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="case-studies" className="nav-link text-small pb-0">Case Studies</NavDropdown.Item>
                    </div>
                    <div className="py-4 col_bg5">
                      <h6 className="font-weight-bold nav-heading text-uppercase nav-heading">
                        <GrInfo />
                        <span>Description</span>
                      </h6>
                      <p>Revolutionizing healthcare marketing through cutting-edge technology and expertise" - that's our motto at Branding Pioneers, where we help healthcare businesses reach their fullest potential with our unique approach to marketing.</p>
                    </div>
                    <div className="justify-content-center align-items-center nav_career_bg">
                      <Link className="text-uppercase py-5 h-100 w-100 d-flex justify-content-center align-items-center text-decoration-none text-black nav-heading" to="/career">
                        <FaTelegramPlane />
                        Career
                      </Link>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
              <NavDropdown className="megamenu" title="Our Speciality">
                <Container fluid className="mega-shadow">
                  <div className="megamenu-box">
                    <div className="col_bg1">
                      <h6>
                        <NavDropdown.Item as={Link} to="/our-speciality" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading nav-heading">
                          <HiStar />
                          <span>Our Speciality</span>
                        </NavDropdown.Item>
                      </h6>
                      <h6>
                        <NavDropdown.Item as={Link} to="/our-speciality/hospitals" className="nav-link text-uppercase text-small pb-0 font-weight-bold nav-heading">
                          <RiHospitalFill />
                          Hospitals
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/our-speciality/hospitals/corporate-hospitals" className="nav-link text-small pb-0">Corporate Hospitals</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/hospitals/100plus-bed-hospital" className="nav-link text-small pb-0">100+ Bed Hospitals</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/hospitals/nursing-homes" className="nav-link text-small pb-0">Nursing Homes</NavDropdown.Item>
                      <br />
                      <br />
                      <h6>
                        <NavDropdown.Item as={Link} to="/our-speciality/startups" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading">
                          <IoMdMedical />
                          Startups
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/our-speciality/startups/diagnostic-centres" className="nav-link text-small pb-0">Diagnostic Centres</NavDropdown.Item>
                    </div>
                    <div className="col_bg2">
                      <h6>
                        <NavDropdown.Item as={Link} to="/our-speciality/surgeons" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading">
                          <RiSurgicalMaskLine />
                          Surgeons
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/our-speciality/surgeons/neuro-surgeons" className="nav-link text-small pb-0">Neuro Surgeons</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/surgeons/gynae-surgeons" className="nav-link text-small pb-0">Gynae Surgeons</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/surgeons/general-surgeons" className="nav-link text-small pb-0">General Surgeons</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/surgeons/cardiac-surgeons" className="nav-link text-small pb-0">Cardiac Surgeons</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/surgeons/orthopedician" className="nav-link text-small pb-0">Orthopedician</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/surgeons/plastic-surgeons" className="nav-link text-small pb-0">Plastic Surgeons</NavDropdown.Item>
                    </div>
                    <div className="col_bg3">
                      <h6>
                        <NavDropdown.Item as={Link} to="/our-speciality/clinic" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading nav-heading">
                          <FaHandHoldingMedical />
                          <span>Clinic</span>
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/our-speciality/clinic/dental-clinic" className="nav-link text-small pb-0">Dental Clinic</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/clinic/aesthetic-clinics" className="nav-link text-small pb-0">Aesthetic Clinics</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/clinic/poly-clinics" className="nav-link text-small pb-0">Poly Clinics</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/clinic/ivf-clinics" className="nav-link text-small pb-0">IVF Clinics</NavDropdown.Item>
                    </div>
                    <div className="col_bg4">
                      <h6>
                        <span className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading">
                          <RiHeartPulseFill />
                          Healthcare Specialties</span>
                      </h6>
                      <NavDropdown.Item as={Link} to="/our-speciality/healthcare/dentists" className="nav-link text-small pb-0">Dentists</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/healthcare/orthopedics" className="nav-link text-small pb-0">Orthopedics</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/healthcare/chiropractors" className="nav-link text-small pb-0">Chiropractors</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/healthcare/infertility-and-ivf" className="nav-link text-small pb-0">Infertility and IVF</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/healthcare/aesthetic-dermatologist" className="nav-link text-small pb-0">Aesthetic/Dermatologist</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/healthcare/surgeons" className="nav-link text-small pb-0">Surgeons</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/our-speciality/healthcare/medical-tourism" className="nav-link text-small pb-0">Medical Tourism</NavDropdown.Item>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
              <NavDropdown className="megamenu" title="Services">
                <Container fluid className="mega-shadow">
                  <div className="megamenu-box">
                    <div className="col_bg1">
                      <h6>
                        <NavDropdown.Item as={Link} to="/services" className="nav-link text-small pb-0 font-weight-bold nav-heading text-uppercase">
                          <MdOutlineMedicalServices />
                          Services</NavDropdown.Item>
                      </h6>
                      <h6>
                        <NavDropdown.Item as={Link} to="/services/digital-patient-acquistion" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading">
                          <FaLaptopMedical />
                          Digital Patient Acquistion</NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} className="nav-link text-small pb-0" to="/services/digital-patient-acquistion/seo">Search Engine Optimization</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/digital-patient-acquistion/ads-and-lead-generation" className="nav-link text-small pb-0">Performance Ads & Lead Generation</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/digital-patient-acquistion/local-seo" className="nav-link text-small pb-0">Local SEO</NavDropdown.Item>
                      <br />
                      <br />
                      <h6>
                        <NavDropdown.Item as={Link} to="/web-services" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading nav-heading">
                          <CgWebsite />
                          <span>Website Services</span>
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/web-services/medical-web-designing" className="nav-link text-small pb-0">Medical Web Designing</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/web-services/medical-web-development" className="nav-link text-small pb-0">Medical Web Development</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/web-services/e-commerce-development-for-healthcare" className="nav-link text-small pb-0">E-Commerce Development for Healthcare</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/web-services/mediacl-website-revamps" className="nav-link text-small pb-0">Medical Website Revamps</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/web-services/medical-website-maintenance" className="nav-link text-small pb-0">Medical Website Maintenance</NavDropdown.Item>
                    </div>
                    <div className="col_bg2">
                      <h6>
                        <NavDropdown.Item as={Link} to="/services/orm" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading">
                          <GiPolarStar />
                          Online Reputation Management</NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/services/orm/google-review-management" className="nav-link text-small pb-0">Google Review Management</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/orm/quora-review" className="nav-link text-small pb-0">Quora Review</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/orm/testimonials-video-creation" className="nav-link text-small pb-0">Testimonials Video Creation</NavDropdown.Item>
                      <br />
                      <br />
                      <h6>
                        <NavDropdown.Item as={Link} to="/services/patient-engagement" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading">
                          <FaHandHoldingHeart />
                          Patient Engagement</NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} className="nav-link text-small pb-0" to="/services/patient-engagement/marketing">Whatsapp/Email/SMS Marketing</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/patient-engagement/newsletter-designing-and-printing" className="nav-link text-small pb-0">Newsletter Designing/Printing</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/patient-engagement/digital-signage-solution" className="nav-link text-small pb-0">Digital Signage Solution</NavDropdown.Item>
                    </div>
                    <div className="col_bg3">
                      <h6>
                        <NavDropdown.Item as={Link} to="/services/brand-building" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading">
                          <FaStore />
                          Brand Building</NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/services/brand-building/social-media-marketing" className="nav-link text-small pb-0">Social Media Marketing</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/brand-building/video-marketing" className="nav-link text-small pb-0">Video Marketing</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/brand-building/influencer-and-pr" className="nav-link text-small pb-0">Influencer & PR</NavDropdown.Item>
                      <br />
                      <br />
                      <h6>
                        <NavDropdown.Item as={Link} to="/services/sales-automation" className="nav-link text-small pb-0 text-uppercase font-weight-bold nav-heading">
                          <TbSettingsAutomation />
                          Sales Automation
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} className="nav-link text-small pb-0" to="/services/sales-automation/crm">CRM</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/sales-automation/leadmate" className="nav-link text-small pb-0">Leadmate</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services/sales-automation/ivr-and-call-tracking" className="nav-link text-small pb-0">IVR & Call Tracking</NavDropdown.Item>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
              <NavDropdown className="megamenu" title="Our Work">
                <Container fluid className="mega-shadow">
                  <div className="megamenu-box">
                    <div className="col_bg1">
                      <h6>
                        <NavDropdown.Item as={Link} to="/marketing-services" className="nav-link text-small pb-0 font-weight-bold nav-heading text-uppercase">
                          <FaBriefcaseMedical />
                          Medical Digital Marketing
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/marketing-services/healthcare-seo" className="nav-link text-small pb-0">Healthcare SEO</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/healthcare-seo/local-seo" className="nav-link text-small pb-0">Local SEO</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/healthcare-seo/website-ranking" className="nav-link text-small pb-0">Website Ranking</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/healthcare-smo" className="nav-link text-small pb-0">Healthcare SMO</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/healthcare-smm" className="nav-link text-small pb-0">Healthcare SMM</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/content-marketing-for-healthcare" className="nav-link text-small pb-0">Content Marketing for Healthcare</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/reputation-management-for-doctors" className="nav-link text-small pb-0">Reputation Management for Doctors</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/healthcare-social-media-management" className="nav-link text-small pb-0">Healthcare Social Media Management</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/email-marketing-for-healthcare" className="nav-link text-small pb-0">Email Marketing for Healthcare</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/guest-posting-services-for-healthcare" className="nav-link text-small pb-0">Guest Posting Services for Healthcare</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-services/page-load-speed-optimiation" className="nav-link text-small pb-0">Page Load Speed Optimiation</NavDropdown.Item>
                    </div>
                    <div className="col_bg2">
                      <h6>
                        <NavDropdown.Item as={Link} to="/marketing-strategies" className="nav-link text-small pb-0 font-weight-bold nav-heading text-uppercase">
                          <MdMarkEmailRead />
                          Marketing Strategies
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/marketing-strategies/ppc-advertising" className="nav-link text-small pb-0">PPC Advertising for Healthcare</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-strategies/facebook-ads" className="nav-link text-small pb-0">Facebook Ads for Healthcare</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-strategies/video-marketing" className="nav-link text-small pb-0">Healthcare Video Marketing</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-strategies/branding-services" className="nav-link text-small pb-0">Branding Services</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-strategies/analytics-and-reporting" className="nav-link text-small pb-0">Analytics and Reporting</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-strategies/marketing-strategies-for-doctors" className="nav-link text-small pb-0">Marketing Strategies for Doctors</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/marketing-strategies/lead-generation-for-doctors" className="nav-link text-small pb-0">Lead Generations for Doctors</NavDropdown.Item>
                    </div>
                    <div className="col_bg3">
                      <h6>
                        <NavDropdown.Item as={Link} to="/content" className="nav-link text-small pb-0 font-weight-bold nav-heading text-uppercase">
                          <BiBookContent />
                          Content
                        </NavDropdown.Item>
                      </h6>
                      <NavDropdown.Item as={Link} to="/content/healthcare-content-creation" className="nav-link text-small pb-0">Healthcare Content Creation</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/content/medical-graphics-design" className="nav-link text-small pb-0">Medical Graphics Design</NavDropdown.Item>
                    </div>
                  </div>
                </Container>
              </NavDropdown>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Link as={Link} to="/contact" className="navbar-cta">Write Query</Link>
        </Container>
      </Navbar >
    </>
  )
}