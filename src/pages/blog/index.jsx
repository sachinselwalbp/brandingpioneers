import Helmet from 'react-helmet'
import Hero from '../../components/hero'
import "./style.scss"

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog- Healthcare Digital Marketing Agency</title>
        {/* <link rel="stylesheet" href="https://cdn.bloghunch.com/assets/embed/app.css" /> */}
        <script>
          var bh_limit = 3;
          var bh_tag = "Blog-  Healthcare digital marketing Agency";
          var bh_author = "Branding Pioneers";
          var bh_subdomain = "branding-pioneers.mybloghunch.com";
          var bh_embed_title = "Latest Blogs";
          var bh_embed_description = "Looking for a healthcare digital marketing agency to help you reach your target audience and grow your business? Our blog is your go-to source for expert insights and advice on all things related to healthcare digital marketing.";
          var bh_id = "MjQ2MQ.PV_CVSuS3GMSQk8SmDKPurU_WGza_FW8jFkd0YILxgdiCRDqHe6LArqaY_m3";
        </script>
        <script src="https://cdn.bloghunch.com/assets/embed/app.js" defer></script>
      </Helmet>
      <div className="blog-container">
        <Hero title="Get updated with our internal affairs" />
        <BlogSection />
      </div>
    </>
  )
}

const BlogSection = () => {
  return (
    <>
      <section className='section-global'>
        <div className="row blog_Section">
          <div id='bh-app'></div>
        </div>
      </section>
    </>
  )
}
