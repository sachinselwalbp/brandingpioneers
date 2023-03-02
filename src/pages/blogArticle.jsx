import Helmet from 'react-helmet'
import './css/post.scss'
import AnimatedCharacters from '../components/animatedCharacters'
import { motion } from 'framer-motion'

export default function BlogArticle() {
    return (
        <>
            <Helmet>
                <title>Blog Article</title>
            </Helmet>
            <div className='blog-article-container'>
                <div className="loadedData">
                    {/* <Hero data={post} />
                    <BlogArticleSection data={post} /> */}
                </div>
            </div>
        </>
    )
}

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

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">
                                {data.category.data.attributes.title}
                            </div>
                            <h1 className='display-1'>{data.title}</h1>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={container}
                                className="heroHeading">
                                {placeholderText.map((item, index) => <AnimatedCharacters {...item} key={index} />)}
                            </motion.div>
                            <div className='txt-3'>Published by <span className='fw-500 color-1'>Branding Pioneers</span> on <span className='fw-500 color-1'>
                                {`${month[new Date(data.datetime).getMonth()]} ${new Date(data.datetime).getDate()}, ${new Date(data.datetime).getFullYear()}`}
                            </span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const BlogArticleSection = ({ data }) => {
    return (
        <>
            <section className='section-global blog-article'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 mb-20">
                            <img loading='lazy' src={`https://s012.ba.hostcafe.cc/${data.FeaturedImage.data.attributes.url}`} alt={''} />
                        </div>
                        <div className="col-12">
                            <div className="blog-article-section">
                                {data.content}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}