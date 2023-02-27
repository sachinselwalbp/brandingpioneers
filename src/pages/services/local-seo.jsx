import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function LocalSEO() {
  return (
    <>
      <Helmet>
        <title>Local SEO</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Local SEO" parent="Services" />
        <CaseStudy />
      </div>
    </>
  )
}

const CaseStudy = () => {
  return (
    <>
      <section className='section-global case-study'>
        <div className="container container-2">
          <div className="row">
            <div className="col-12 text-center mb-20">
              {/* <img loading='lazy' src="" className="img-fluid mb-20" alt="CaseStudy" /> */}
            </div>
            <div className="col-12">
              <div className="case-study-section">
                <p className="txt-1">Local SEO is a critical component of any business that wants to attract local customers. It's a set of techniques used to optimize your website and online presence for local searches. Here's how we can help you with local SEO:</p>
                <ol className="txt-1">
                  <li>Local keyword research: We'll identify the best keywords to target for your local market, including city names, landmarks, and other local-specific terms.</li>
                  <li>Google My Business optimization: We'll optimize your Google My Business listing, including verifying your address, phone number, and other business details, adding photos and videos, and encouraging customer reviews.</li>
                  <li>Local citations and directories: We'll build high-quality local citations and directory listings to improve your online visibility and credibility.</li>
                  <li>Reporting and analysis: We'll provide you with regular reports on your local SEO performance and use data analytics to refine our strategy and maximize your ROI.</li>
                </ol>
                <p className="txt-1">In conclusion, at Branding Pioneers, we offer a wide range of digital marketing services, including SEO, performance ads, and lead generation, and local SEO, to help your business achieve its online goals. Contact us today to learn more about our services and how we can help your business grow.</p>
                <br />
                {/* <img loading='lazy' src="" alt="case-study" className='img-fluid' /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}