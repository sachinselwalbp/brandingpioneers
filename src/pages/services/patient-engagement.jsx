import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function PatientEngagement() {
  return (
    <>
      <Helmet>
        <title>Patient Engagement</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Patient Engagement" parent="Services" />
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
                <p className="txt-1">At Branding Pioneers, we understand that patient engagement is essential for delivering high-quality healthcare services and building lasting relationships with your patients. That's why we offer a range of patient engagement solutions designed to help you connect with patients in meaningful ways.</p>
                <p className="txt-1">From patient portals and mobile apps to online communities and social media, we can help you leverage the latest digital technologies to engage with your patients and improve the overall patient experience. Our team of experts can help you develop and execute patient engagement strategies that are tailored to your unique needs and goals.</p>
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