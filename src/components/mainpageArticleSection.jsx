import './css/mainpageArticleSection.scss'
import { useQuery } from "@apollo/react-hooks"
import GQLData from '../components/GQLData'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function MainpageArticleSection({ pagename }) {
  const { loading, error, data } = useQuery(GQLData)
  if (loading) return console.log('loading')
  if (error) return console.log('error')
  const blog_data = data.mainpages.data

  let article = {}
  if (article) {
    let arr = blog_data.filter(e => e.attributes.slug === pagename)
    article = arr[0]
  } else {
    article = undefined
  }

  let post
  if (article !== undefined) {
    post = article.attributes
    return (
      <section className='section-global blog-article'>
        <div className="container container-2">
          <div className="row">
            <div className="col-12 mb-20">
              <img loading='lazy' className="img-fluid mb-20 mainPageArticleImage" src={`https://s012.ba.hostcafe.cc/${post.FeaturedImage.data.attributes.url}`} alt='' />
            </div>
            <div className="col-12 px-md-5 px-3">
              <div className="blog-article-section">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}