import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function NewsletterDesigningAndPrinting() {
  return (
    <>
      <Helmet>
        <title>Newsletter Designing/Printing</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Newsletter Designing/Printing" parent="Services" />
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
                <p className="txt-1">Creating engaging newsletters can be an effective way to keep patients informed about the latest healthcare news and updates, promote new services or products, and build stronger relationships with your audience. At Branding Pioneers, we understand the importance of creating visually appealing and informative newsletters that resonate with your patients.</p>
                <p className="txt-1">Our team of experienced designers can help you create custom newsletters that reflect your brand's unique identity and voice. From eye-catching graphics and layouts to compelling headlines and content, we'll work closely with you to create newsletters that capture the attention of your patients and keep them engaged.</p>
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