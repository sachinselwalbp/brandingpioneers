import { Link } from "react-router-dom"
import { Navbar, Container, Dropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './css/navbar.scss'
import Logo from '../images/logo.svg'
import { useEffect } from "react"
import { VscChevronDown } from "react-icons/vsc"
import { BsChatSquareQuoteFill } from "react-icons/bs"

export default function NavBar({ data }) {
    useEffect(() => {
        const NavLink = document.querySelectorAll('.stact-nav-link')
        const NavBarCollapse = document.querySelector('.navbar-collapse')

        NavLink.forEach(e => {
            e.onclick = () => {
                if (NavBarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click()
                }
            }
        })
    }, [])

    const NavBarLinks = [
        {
            dropDown: true,
            title: 'Services',
            links: [
                { title: 'About', href: '/about', icon: "BsChatSquareQuoteFill" },

            ]
        },
        {
            dropDown: true,
            title: 'Our Speciality',
            links: [
                { title: 'About', href: '/about', icon: "BsChatSquareQuoteFill" },
            ]
        },
        {
            dropDown: true,
            title: 'About',
            links: [
                { title: 'About', href: '/about', icon: "BsChatSquareQuoteFill" },
            ]
        },
        {
            title: 'Blog',
            href: '/blog'
        },
        {
            dropDown: true,
            title: 'Company',
            links: [
                { title: 'About Us', href: '/about', icon: "BsChatSquareQuoteFill" },
                { title: 'Why Choose Us', href: 'about/why-choose-us', icon: "BsChatSquareQuoteFill" },
                // { title: 'Who We Are', href: 'about/who-we-are', icon: "" },
                // { title: 'Testimonials', href: 'about/testimonials', icon: "" },
                // { title: 'Case Study', href: '/case-studies', icon: "" },
                // { title: 'Career', href: '/career', icon: "" },
                // { title: 'Contact', href: '/contact', icon: "" }
            ]
        }
    ]

    return (
        <>
            <Navbar variant="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img src={Logo} height="32" alt="Branding Pioneers" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="navbar-nav mx-auto">
                            {
                                data ?
                                    data.map((e, i) => {
                                        if (e.dropDown) {
                                            return (
                                                <Dropdown key={i}>
                                                    <div className="nav-link dropdown-toggle">
                                                        {e.title}
                                                    </div>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        {e.links.map((e2, j) =>
                                                            <li key={j}>
                                                                <NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>
                                                                    {e2.title} <Icon Tag={e2.icon} />
                                                                </NavLink>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </Dropdown>
                                            )
                                        } else if (e.anchor) {
                                            return (
                                                <Link to={e.href} className="nav-link stact-nav-link anchor" key={i}>{e.title}</Link>
                                            )
                                        } else {
                                            return (
                                                <NavLink to={e.href} className="nav-link stact-nav-link" key={i}>{e.title}</NavLink>
                                            )
                                        }
                                    })
                                    :
                                    NavBarLinks.map((e, i) => {
                                        if (e.dropDown) {
                                            return (
                                                <Dropdown key={i}>
                                                    <div className="nav-link dropdown-toggle">
                                                        {e.title}<VscChevronDown />
                                                    </div>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        {e.links.map((e2, j) =>
                                                            <li key={j}>
                                                                <NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>
                                                                    <Icon Tag={e2.icon} /> {e2.title}
                                                                </NavLink>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </Dropdown>
                                            )
                                        } else if (e.anchor) {
                                            return (
                                                <Link to={e.href} className="nav-link stact-nav-link anchor" key={i}>{e.title}</Link>
                                            )
                                        } else {
                                            return (
                                                <NavLink to={e.href} className="nav-link stact-nav-link" key={i}>{e.title}</NavLink>
                                            )
                                        }
                                    })}
                        </div>
                    </Navbar.Collapse>
                    <Link to="/contact" className="navbar-cta">Write Query</Link>
                </Container>
            </Navbar>
        </>
    )
}

function Icon({ Tag }) {
    return <Tag fill="black" />
}