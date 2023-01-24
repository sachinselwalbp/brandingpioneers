import './css/mainpageArticleSection.scss'
import Skeleton from "react-loading-skeleton";
import Strapi from '../Strapi';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const MainpageArticleSection = ({ pagename }) => {

  const { slug } = useParams()
  const { loading, data, error } = Strapi('http://localhost:1337/api/articles?populate=*')
  if (loading) return console.log('loading');
  if (error) return console.log('error');
  const blog_data = data.data;  

  let article = {}
  if (article) {
      let arr = blog_data.filter(e => e.attributes.Slug === slug)
      article = arr[0]
  } else {
      article = {}
  }
  const post = article.attributes;
  
  return (
    <>
      {loading ?
        <section className='section-global blog-article'>
          <div className="container container-2">
            <div className="row">
              <div className="col-12 mb-20">
                <Skeleton height={300} />
              </div>
              <div className="col-12">
                <div className="blog-article-section">
                  <Skeleton count={10} />
                </div>
              </div>
            </div>
          </div>
        </section>
        :
        <section className='section-global blog-article'>
          <div className="container container-2">
            <div className="row">
              <div className="col-12 mb-20">
                <img src={post.mainImage.asset.url} className="img-fluid mb-20 mainPageArticleImage" alt={post.mainImage.asset.alt == null ? post.title : post.mainImage.asset.alt} />
              </div>
              <div className="col-12 px-md-5 px-3">
                <div className="blog-article-section">
                  <ReactMarkdown value={post.body} ></ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </section>}
    </>
  )
}

export default MainpageArticleSection