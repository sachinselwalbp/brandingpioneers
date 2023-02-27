import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function DigitalSignageSolution() {
  return (
    <>
      <Helmet>
        <title>Digital Signage Solution</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Digital Signage Solution" parent="Services" />
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
                <p className="txt-1">Digital signage is a powerful tool for engaging patients and promoting your brand. At Branding Pioneers, we offer a range of digital signage solutions that can help you communicate with patients more effectively.</p>
                <p className="txt-1">From informative and educational content to promotional materials and special offers, we can help you create compelling digital signage displays that capture the attention of your patients and drive engagement. Our team of experts can help you design, install, and manage digital signage solutions that are tailored to your specific needs and goals.</p>
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