import Helmet from 'react-helmet'
import Footer from '../components/footer'
import NavBar from "../components/navbar"
import './css/post.scss'
import { useParams } from 'react-router-dom'
import CaseStudy from '../components/casestudy'
import Hero from '../components/hero'
import Contact from '../components/contact'
import { useQuery } from "@apollo/react-hooks"
import GQLData from '../components/GQLData'
// import PostSkeleton from '../components/PostSkeleton'
// import NotFound from '../components/errorComp'

const Pages = () => {
  const { mainPage, slug } = useParams()
  const { loading, error, data } = useQuery(GQLData)
  if (loading) return console.log('loading')
  if (error) return console.log('error')
  const blog_data = data.mainpages.data

  let article = {}
  if (article) {
    let parentpage = blog_data.filter(e => e.attributes.slug === mainPage)
    let mainpage = parentpage[0].attributes.pages.data.filter(e => e.attributes.slug === slug)
    article = mainpage[0]
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

export default Pages