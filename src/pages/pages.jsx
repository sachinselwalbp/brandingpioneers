import Helmet from 'react-helmet'
import Footer from '../components/footer'
import NavBar from "../components/navbar"
import Hero from '../components/hero'
import CaseStudy from '../components/casestudy'
import Contact from '../components/contact'
import NotFound from '../components/errorComp'
import { useParams } from 'react-router-dom'
import { useQuery } from "@apollo/react-hooks"
import GQLData from '../components/GQLData'
import './css/post.scss'

const Pages = () => {
  const { mainPage, slug } = useParams()
  const { loading, error, data } = useQuery(GQLData)
  if (loading) return console.log('loading')
  if (error) return console.log('error')
  const blog_data = data.mainpages.data

  let article = {}
  if (article && blog_data.some(a => a.attributes.slug === mainPage) && blog_data.filter(a => a.attributes.slug === mainPage)[0].attributes.pages.data.some(e => e.attributes.slug === slug)) {
    let parentpage = blog_data.filter(e => e.attributes.slug === mainPage)
    let mainpage = parentpage[0].attributes.pages.data.filter(e => e.attributes.slug === slug)
    article = mainpage[0]
  } else {
    article = undefined
  }

  let post
  if (article !== undefined) {
    post = article.attributes
  }
  return (
    <>
      <Helmet>
        <title>{article !== undefined ? post.title : 'Not Found'}</title>
      </Helmet>
      <NavBar />
      <div className="project-detail-container">
        {article !== undefined ? <section>
          <Hero data={post} />
          <CaseStudy data={post} />
        </section>
          :
          <section>
            <NotFound />
          </section>
        }
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Pages