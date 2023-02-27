import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function VideoMarketing() {
  return (
    <>
      <Helmet>
        <title>Video Marketing</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Video Marketing" parent="Services" />
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
                <p className="txt-1">Video marketing is a powerful way to connect with your audience and showcase your healthcare services. At Branding Pioneers, we offer comprehensive video marketing services to help healthcare companies tell their story and engage with their audience.</p>
                <p className="txt-1">Our team of video marketing experts will help you develop a video marketing strategy that aligns with your business goals and target audience. We can create a variety of video content, including explainer videos, product demos, customer testimonials, and more.</p>
                <p className="txt-1">We will also help you distribute your video content on the right channels, including your website, social media, and email marketing campaigns, to reach your target audience and drive engagement. With our video marketing services, you can create compelling video content that connects with your audience and drives business results.</p>
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