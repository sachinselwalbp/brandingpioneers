import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function GoogleReviewManagement() {
  return (
    <>
      <Helmet>
        <title>Google Review Management</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Google Review Management" />
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
                <p className="txt-1">Google Reviews are one of the most powerful ways to attract new customers and increase your business's online visibility. Positive reviews on Google can make or break your business, which is why it's critical to have a strategy for managing your Google Reviews.</p>
                <p className="txt-1">At Branding Pioneers, we help businesses improve their Google Reviews by providing a range of services. Our team can help you optimize your Google My Business listing, respond to reviews, and even solicit new reviews from happy customers.</p>
                <p className="txt-1">With our Google Review management services, you can be confident that your business is getting the positive attention it deserves.</p>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}