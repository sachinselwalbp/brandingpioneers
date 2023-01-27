import Helmet from 'react-helmet'
import BlogCards from '../components/blogCards'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import Contact from '../components/contact'
import { gql, useQuery } from "@apollo/react-hooks"
import AnimatedCharacters from '../components/AnimeChar'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <NavBar />
      <div className="blog-container">
        <Hero />
        <BlogSection />
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
      text: "Get updated with our internal affairs"
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
              <div className="section-tag mb-8">Blogs</div>
              {/* <h1 className='display-1'>Get updated with our internal affairs</h1> */}
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

const blogGQL = gql`
query {
    blogs {
      data {
        id
        attributes {
          title
          slug
          datetime
          category {
            data {
              attributes {
                title
                slug
              }
            }
          }
          FeaturedImage {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }`

const BlogSection = () => {
  const { loading, error, data } = useQuery(blogGQL)
  if (loading) return console.log('loading')
  if (error) return console.log('error')
  const posts = data.blogs.data

  return (
    <>
      <section className='section-global bg-shade-blue'>
        <div className="container">
          <div className="row">
            <BlogCards data={posts} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog