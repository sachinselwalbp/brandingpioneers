import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function BrandBuilding() {
  return (
    <>
      <Helmet>
        <title>Brand Building</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Brand Building" parent="Services" />
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
                <p className="txt-1">In the crowded healthcare industry, building a strong brand is crucial to stand out from the competition. At Branding Pioneers, we help healthcare companies create and enhance their brand image through various strategies such as brand positioning, brand messaging, and brand identity development.</p>
                <p className="txt-1">Our team of experts will work closely with you to understand your target audience, value proposition, and competitive landscape to develop a brand strategy that resonates with your customers. We will also help you establish a consistent visual identity, including logos, color schemes, and design elements, that reflects your brand values and mission.</p>
                <p className="txt-1">With our brand building services, you can build a strong brand that connects with your audience, builds trust, and drives business growth.</p>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}