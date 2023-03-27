import { Link } from "react-router-dom"
import { Navbar, Container, Dropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './css/navbar.scss'
import Logo from '../images/logo.svg'
import { useEffect, useState } from "react"
import { VscChevronDown } from "react-icons/vsc"
import { BsChatSquareQuoteFill, BsQuestionDiamondFill } from "react-icons/bs"
import { BiStats } from "react-icons/bi"
import { MdPermContactCalendar } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { IoIosRocket } from 'react-icons/io'
import { TbReportAnalytics } from "react-icons/tb"
import { RiChatHeartFill } from "react-icons/ri"

export default function NavBar({ data }) {
    const [num, setNum] = useState(0)
    useEffect(() => {
        const date = Math.floor((new Date() - new Date('2023-02-22')) / (1000 * 60))
        setNum(date + 50000)
    }, [num])

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
                { title: 'About', href: '/about' },

            ]
        },
        {
            dropDown: true,
            title: 'Our Speciality',
            links: [
                { title: 'About', href: '/about' },
            ]
        },
        {
            dropDown: true,
            title: 'About',
            links: [
                { title: 'About', href: '/about' },
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
                { title: 'About Us', href: '/about', icon: BsChatSquareQuoteFill },
                { title: 'Why Choose Us', href: 'about/why-choose-us', icon: BsQuestionDiamondFill },
                { title: 'Who We Are', href: 'about/who-we-are', icon: CgProfile },
                { title: 'Testimonials', href: 'about/testimonials', icon: RiChatHeartFill },
                { title: 'Case Study', href: '/case-studies', icon: TbReportAnalytics },
                { title: 'Career', href: '/career', icon: BiStats },
                { title: 'Contact', href: '/contact', icon: MdPermContactCalendar }
            ]
        }
    ]

    const statsNum = window.btoa(`<svg fill='hsl(0, 0%, 88%)' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 30'><style>text{font:900 16px arial;}</style><text x='-18' y='21'>${num}</text><text x='-18' y='21'></text></svg>`)
    const rocket = window.btoa(`<svg fill='hsl(0, 0%, 88%)' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='M461.8 53.6c-.4-1.7-1.6-3-3.3-3.4-54.4-13.3-180.1 34.1-248.2 102.2-13.3 13.3-24.2 26.4-33.1 39.1-21-1.9-42-.3-59.9 7.5-50.5 22.2-65.2 80.2-69.3 105.1-1 5.9 3.9 11 9.8 10.4l81.1-8.9c.1 7.8.6 14 1.1 18.3.4 4.2 2.3 8.1 5.3 11.1l31.4 31.4c3 3 6.9 4.9 11.1 5.3 4.3.5 10.5 1 18.2 1.1l-8.9 81c-.6 5.9 4.5 10.8 10.4 9.8 24.9-4 83-18.7 105.1-69.2 7.8-17.9 9.4-38.8 7.6-59.7 12.7-8.9 25.9-19.8 39.2-33.1 68.4-68 115.5-190.9 102.4-248zM298.6 213.5c-16.7-16.7-16.7-43.7 0-60.4 16.7-16.7 43.7-16.7 60.4 0 16.7 16.7 16.7 43.7 0 60.4-16.7 16.7-43.7 16.7-60.4 0z'></path><path d='M174.5 380.5c-4.2 4.2-11.7 6.6-19.8 8-18.2 3.1-34.1-12.8-31-31 1.4-8.1 3.7-15.6 7.9-19.7l.1-.1c2.3-2.3.4-6.1-2.8-5.7-9.8 1.2-19.4 5.6-26.9 13.1-18 18-19.7 84.8-19.7 84.8s66.9-1.7 84.9-19.7c7.6-7.6 11.9-17.1 13.1-26.9.3-3.2-3.6-5.1-5.8-2.8z'></path></svg>`)

    return (
        <>
            <Navbar variant="light" expand="lg" sticky="top"
                style={{
                    background: `url(data:image/svg+xml;base64,${rocket}) no-repeat 280px center/24px 24px,rgba(255, 255, 255, 0.8) url(data:image/svg+xml;base64,${statsNum}) no-repeat 300px center/100px 50px`
                }}
            >
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
                                                                    {e2.title}
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
                                                                <NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link d-flex align-items-center gap-2'} to={e2.href}>
                                                                    {e2.icon ? <Icon Tag={e2.icon} /> : <span></span>} {e2.title}
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
                    <Link to="/content" className="navbar-cta d-flex gap-3 align-items-center">Write a Query</Link>
                </Container>
            </Navbar>
        </>
    )
}

function Icon({ Tag, Size = 16 }) {
    return <Tag fill="currentColor" fontSize={Size} />
}