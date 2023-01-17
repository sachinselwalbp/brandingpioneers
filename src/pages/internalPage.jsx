import Helmet from 'react-helmet'
import Footer from '../components/footer'
import NavBar from "../components/navbar"
import './css/post.scss'
import CaseStudy from '../components/casestudy'
import Hero from '../components/hero'
import Contact from '../components/contact'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from "@apollo/react-hooks"
// import NotFound from '../components/errorComp'

const InternalPageGQLData = gql`
query {
    internalpages {
      data {
        attributes {
          title
          slug
          content
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

const InternalPage = () => {
    const { slug } = useParams()
    const { loading, error, data } = useQuery(InternalPageGQLData)
    if (loading) return console.log('loading')
    if (error) return console.log('error')
    const blog_data = data.internalpages.data

    let article = {}
    if (article) {
        let arr = blog_data.filter(e => e.attributes.slug === slug)
        article = arr[0]
    } else {
        article = {}
    }
    const post = article.attributes

    return (
        <>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <NavBar />
            <div className="project-detail-container">
                <div className="loaded">
                    <Hero data={post} />
                    <CaseStudy data={post} />
                </div>
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default InternalPage