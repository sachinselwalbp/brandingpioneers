import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './css/navbar.scss'
import Logo from '../images/logo.svg'
import { useEffect } from "react"
import { VscChevronDown } from "react-icons/vsc"

export default function NavBar({ data }) {
    useEffect(() => {
        // const changeBackground = () => {
        //     // console.log(window.scrollY)
        //     if (window.scrollY >= 66) {
        //         document.querySelector('.navbar').classList.add('scroll')
        //     } else {
        //         document.querySelector('.navbar').classList.remove('scroll')
        //     }
        // }
        // window.addEventListener("scroll", changeBackground)

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
            title: 'Home',
            links: '/'
        },
        {
            dropDown: true,
            title: 'Pages',
            links: [
                { title: 'About', href: '/about' },
                { title: 'Contact', href: '/contact' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'FAQs', href: '/faqs' },
                { title: 'Projects', href: '/projects' },
                { title: 'Project detail', href: '/project-detail' },
                { title: 'Blog', href: '/blog' },
                { title: 'Blog article', href: '/blog-article' },
                { title: 'Services', href: '/services' },
                { title: '404', href: '/not-found' },

            ]
        },
        {
            title: 'Services',
            href: '/services'
        },
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Blog',
            href: '/blog'
        },
        {
            title: 'Contact',
            href: '/contact'
        }
    ]

    return (
        <>
            <Navbar variant="light" expand="lg">
                <div className="container-fluid">
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img src={Logo} height="32" alt="Stact" />
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
                                                <div className="dropdown" key={i}>
                                                    <div className="nav-link dropdown-toggle" >
                                                        {e.title}
                                                    </div>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        {e.links.map((e2, j) =>
                                                            <li key={j}><NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>{e2.title}</NavLink></li>
                                                        )}
                                                    </ul>
                                                </div>
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
                                                <div className="dropdown" key={i}>
                                                    <div className="nav-link dropdown-toggle" >
                                                        {e.title}<VscChevronDown />
                                                    </div>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        {e.links.map((e2, j) =>
                                                            <li key={j}><NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>{e2.title}</NavLink></li>
                                                        )}
                                                    </ul>
                                                </div>
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
                            }
                        </div>
                    </Navbar.Collapse>
                    <Link to="/contact" className="navbar-cta">Write Query</Link>
                </div>
            </Navbar>
        </>
    )
}