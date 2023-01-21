import Helmet from 'react-helmet'
import Footer from '../components/footer'
import NavBar from "../components/navbar"
import './css/post.scss'
import { useParams } from 'react-router-dom'
import Hero from '../components/hero'
import CaseStudy from '../components/casestudy'
import Contact from '../components/contact'
import { useQuery } from "@apollo/react-hooks"
import GQLData from '../components/GQLData'
// import PostSkeleton from '../components/PostSkeleton'
import NotFound from '../components/errorComp'

const SubSubPages = () => {
    const { rootPage, parentPage, mainPage, slug } = useParams()
    const { loading, error, data } = useQuery(GQLData)
    if (loading) return console.log('loading')
    if (error) return console.log('error')
    const blog_data = data.mainpages.data

    let article = {}
    if (article) {
        let rootpage = blog_data.filter(e => e.attributes.slug === rootPage)
        let parentpage = rootpage[0].attributes.pages.data.filter(e => e.attributes.slug === parentPage)
        let mainpage = parentpage[0].attributes.subpages.data.filter(e => e.attributes.slug === mainPage)
        let arr = mainpage[0].attributes.subsubpages.data.filter(e => e.attributes.slug === slug)
        article = arr[0]
    } else {
        article = undefined
    }
    let post

    if (article !== undefined) {
        post = article.attributes


        return (
            <>
                <Helmet>
                    <title>{post.title}</title>
                </Helmet>
                <NavBar />
                <div className="project-detail-container">
                    <section>
                        <Hero data={post} />
                        <CaseStudy data={post} />
                    </section>
                    <Contact />
                    <Footer />
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <Helmet>
                    <title>Not Found</title>
                </Helmet>
                <NavBar />
                <div className="project-detail-container">
                    <section>
                        <NotFound />
                    </section>
                    <Contact />
                    <Footer />
                </div>
            </>
        )
    }
}


export default SubSubPages