import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function SocialMediaMarketing() {
  return (
    <>
      <Helmet>
        <title>Social Media Marketing</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Social Media Marketing" />
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
                <p className="txt-1">Social media is a powerful tool for healthcare companies to engage with their audience, promote their services, and build brand awareness. At Branding Pioneers, we offer comprehensive social media marketing services tailored to your business needs.</p>
                <p className="txt-1">Our social media experts will help you develop a social media strategy that aligns with your business goals and target audience. We will create compelling content, manage your social media accounts, and run targeted ad campaigns to reach your audience and drive engagement.</p>
                <p className="txt-1">We leverage the latest social media trends and technologies to ensure your brand stays ahead of the curve. From Facebook and Twitter to LinkedIn and Instagram, we can help you make the most of your social media presence and drive business results.</p>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}