import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './css/navbar.scss'
import Logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/navbar2.scss';
import { Link } from "react-router-dom"


function NavBar2() {
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
                  <a href="/" className="nav-link font-weight-bold">Home</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link font-weight-bold">About</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link font-weight-bold">Our Speciality</a>
                </li>
                <li className="nav-item dropdown megamenu"><a href="/" id="dropdownMenuButton1 megamneu" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Services</a>
                  <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                    <div className="container">
                      <div className="row bg-white rounded-3 m-0" style={{ border: "1px solid" }}>
                        <div className="col-lg-7 col-xl-8">
                          <div className="p-4">
                            <div className="row">
                              <div className="col-lg-6 mb-4">
                                <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0">Unique Features</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-6 mb-4">
                                <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Unique Features</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-6 mb-4">
                                <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Unique Features</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-6 mb-4">
                                <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
                                <ul className="list-unstyled">
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Unique Features</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                                  <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link font-weight-bold">Our work</a>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link font-weight-bold">Blog</Link>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link font-weight-bold">Pages</a>
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

export default NavBar2;