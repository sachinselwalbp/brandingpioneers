import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function EmailMarketingforHealthcare() {
  return (
    <>
      <Helmet>
        <title>Email Marketing for Healthcare</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Email Marketing for Healthcare" />
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
                <p className="txt-1">Email marketing is an essential component of any effective patient engagement strategy. By sending targeted and personalized messages to your patients, you can build trust, loyalty, and brand awareness. At Branding Pioneers, we specialize in creating and executing email marketing campaigns that drive results.</p>
                <p className="txt-1">Our team of experts can help you craft engaging and informative emails that keep your patients informed and engaged. We use advanced segmentation and personalization techniques to ensure that your emails are highly relevant and tailored to the individual needs and interests of your patients.</p>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}