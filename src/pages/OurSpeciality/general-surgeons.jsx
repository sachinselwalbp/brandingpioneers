import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function GeneralSurgeons() {
  return (
    <>
      <Helmet>
        <title>General Surgeons</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="General Surgeons" parent="Our Speciality" />
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
                <p className="txt-1">At Branding Pioneers, we know that general surgeons play a critical role in healthcare. We help general surgeons increase their online visibility, build their brand, and attract new patients. Our services include:</p>
                <h2 className="display-2">Website Design and Development</h2>
                <p className="txt-1">We create websites that showcase general surgeons&#39; experience and expertise. Our websites are designed to be user-friendly and are optimized for search engines to increase visibility.</p>
                <h2 className="display-2">Social Media Marketing</h2>
                <p className="txt-1">We develop comprehensive social media strategies that help general surgeons connect with patients and build brand awareness. Our team manages social media accounts, creates engaging content, and tracks performance to ensure maximum ROI.</p>
                <h2 className="display-2">Content Marketing</h2>
                <p className="txt-1">We develop content that resonates with patients and positions general surgeons as thought leaders in the healthcare industry. Our content marketing services include blog writing, email marketing, and video production.</p>
                <h2 className="display-2">Online Reputation Management</h2>
                <p className="txt-1">We monitor and manage online reviews to ensure that general surgeons maintain a positive reputation online. Our team works to resolve any negative feedback and improve overall patient satisfaction.</p>
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