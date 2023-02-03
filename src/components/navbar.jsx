import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/navbar.scss'
import { Link } from "react-router-dom"
import navBarLinks from "./navLinks.js"

function NavBar() {
  return (
    <>
      <Navbar variant="light" expand="lg" fixed="top">
        <div className="container-fluid">
          <Navbar.Brand>
            <NavLink to="/">
              <img loading="lazy" src={Logo} height="32" alt="Stact" />
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
                  {
                    navBarLinks.map((e, i) => (
                      !e.dropdown ?
                        <li className="nav-item">
                          <Link to={e.link} key={i} className="nav-link font-weight-bold">{e.title}</Link>
                        </li>
                        :
                        <li className="nav-item dropdown megamenu">
                          <Link key={i} href="/" id="dropdownMenuButton1 megamneu" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">{e.title}</Link>
                          {/* children */}
                          <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                            <div className="container mega-shadow">
                              <div className="row bg-white rounded-3 m-0">
                                <div className="col-lg-7 col-xl-8">
                                  <div className="p-4">
                                    <div className="row">
                                      <div className="col-lg-4 mb-4">
                                        {
                                          e.children.map((f, i) => (
                                            <div>
                                              <br />
                                              <h6 className="font-weight-bold text-uppercase">
                                                <Link key={i} to={f.link} className="nav-link text-small pb-0">{f.title}</Link>
                                              </h6>
                                              {
                                                !f.subLink ? null
                                                  :
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
                                              }
                                            </div>
                                          ))
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </Navbar.Collapse>
          <Link to="/contact" className="navbar-cta">Write Query</Link>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar