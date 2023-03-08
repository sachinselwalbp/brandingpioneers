import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function Leadmate() {
  return (
    <>
      <Helmet>
        <title>Leadmate</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Leadmate" />
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
                <p className="txt-1">At Branding Pioneers, we know that generating new leads is critical to success in the healthcare industry. That's why we offer a powerful lead generation tool called LEADMATE that can help you identify new sales opportunities and connect with potential customers more effectively.</p>
                <p className="txt-1">With LEADMATE, you can automatically generate new leads, score and prioritize them based on their likelihood to convert, and seamlessly integrate them into your existing sales and marketing processes. Whether you're looking to expand your patient base or reach new markets, our LEADMATE platform can help you achieve your goals and take your healthcare digital marketing to the next level.</p>
                <p className="txt-1">Our LEADMATE platform is a powerful lead generation tool that can help you identify new sales opportunities and connect with potential customers. With LEADMATE, you can automatically generate new leads, score and prioritize them based on their likelihood to convert, and seamlessly integrate them into your existing sales and marketing processes.</p>
                <p className="txt-1">Contact us today to learn more about how LEADMATE can help you grow your healthcare practice or organization.</p>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}