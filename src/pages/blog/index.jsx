import Helmet from 'react-helmet'
import BlogCards from '../../components/blogCards'
import Hero from '../../components/hero'

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="blog-container">
        <Hero title="Get updated with our internal affairs" parent="Blog" />
        <BlogSection />
      </div>
    </>
  )
}

const BlogSection = () => {
  const blogPosts = [
    {
      title: "First test Post",
      slug: "/first-test-post",
      date: "22 Jan 2023",
      imgURL: "https://images.unsplash.com/photo-1677187315979-4a4be967000e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "First Post",
      category: "Test"
    },
  ]
  return (
    <>
      <section className='section-global bg-shade-blue'>
        <div className="container">
          <div className="row">
            <BlogCards data={blogPosts} />
          </div>
        </div>
      </section>
    </>
  )
}
