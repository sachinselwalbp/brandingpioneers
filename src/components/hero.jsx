import { motion } from "framer-motion"
import AnimatedCharacters from "./AnimeChar"

const Hero = ({ data }) => {
    // Placeholder text data, as if from API
    const placeholderText = [
        {
            type: "heading1",
            text: data.title
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
                            <div className="section-tag mb-8">{'Parent'}</div>
                            {/* <h1 className='display-1'>{data.title}</h1> */}
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

export default Hero