import { motion } from "framer-motion"
import AnimatedCharacters from "./AnimeChar"

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
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">{parent}</div>
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