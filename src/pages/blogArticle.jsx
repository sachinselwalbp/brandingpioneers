import Helmet from 'react-helmet'
import Footer from '../components/footer'
import './css/blog.scss'
import NavBar from "../components/navbar"
import { useParams } from 'react-router-dom'
import Contact from '../components/contact'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { gql, useQuery } from "@apollo/react-hooks"
import NotFound from '../components/errorComp'

const blogGQL = gql`
query {
    blogs {
      data {
        id
        attributes {
          title
          slug
          datetime
          content
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

const BlogArticle = () => {
    const { slug } = useParams()
    const { loading, data, error } = useQuery(blogGQL)
    if (loading) return console.log('loading');
    if (error) return console.log('error');
    const blog_data = data.blogs.data;

    let article = {}
    if (article) {
        let arr = blog_data.filter(e => e.attributes.slug === slug)
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
                <div className='blog-article-container'>
                    <div className="loadedData">
                        <Hero data={post} />
                        <BlogArticleSection data={post} />
                    </div>
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
                <div className='blog-article-container'>
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

const Hero = ({ data }) => {
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
                                <ReactMarkdown>{data.content}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogArticle