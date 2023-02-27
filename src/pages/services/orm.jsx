import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function ORM() {
  return (
    <>
      <Helmet>
        <title>Online Reputation Management</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Online Reputation Management" parent="Services" />
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
                <p className="txt-1">In today's digital age, online reputation is everything. It's critical to have a strong online presence, which is why our online reputation management services at Branding Pioneers can help your business stay on top of your online image.</p>
                <p className="txt-1">Our team of experts can help you monitor your brand's online reputation and take corrective action when necessary. From monitoring social media platforms and search engines to addressing negative reviews and comments, we work to ensure that your online reputation is always in top shape.<br />
                  With our online reputation management services, you can trust that your business's reputation is in good hands.</p>
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