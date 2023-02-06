import Helmet from 'react-helmet'
import Footer from '../components/footer'
import './css/our-work.scss'
import NavBar from "../components/navbar"
import Contact from '../components/contact'
import AnimatedCharacters from '../components/AnimeChar'
import { motion } from 'framer-motion'

export default function Content() {
    return (
        <>
            <Helmet><title>Web Services</title></Helmet>
            <NavBar />
            <div className="about-container">
                <Hero />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

const Hero = () => {
    // Placeholder text data, as if from API
    const placeholderText = [
        {
            type: "heading1",
            text: "We provide digital solutions for your business"
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
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">Our Work</div>
                            {/* <h1 className='display-1'>We provide digital solutions for your business</h1> */}
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
        </>
    )
}
