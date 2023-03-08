import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import AnimatedCharacters from "./animatedCharacters"

export default function Hero({ parent, title }) {
    const placeholderText = [
        {
            type: "heading1",
            text: title
        }
    ]
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    }
    return (
        <section className='section-global bg-hero bg-shade-1 hero'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <Breadcrumb />
                        {/* <div className="section-tag mb-8">{parent}</div> */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={container}
                            className="heroHeading">
                            {placeholderText.map((item, index) => <AnimatedCharacters {...item} key={index} />)}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Breadcrumb() {
    const location = useLocation()
    let curretLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            curretLink += `/${crumb}`

            return <Link key={crumb} className="crumb" to={curretLink}>{crumb.replaceAll('-', ' ')}</Link>
        })

    return <div className="breadcrumbs">{crumbs}</div>
}