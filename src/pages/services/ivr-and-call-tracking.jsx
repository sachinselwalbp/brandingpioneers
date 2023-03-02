import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function IVRAndCallTracking() {
  return (
    <>
      <Helmet>
        <title>IVR And Call Tracking</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="IVR And Call Tracking" parent="Services" />
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
              <h2 className="display-2">IVF</h2>
                <p className="txt-1">Our IVR (interactive voice response) system is a powerful tool that can help you automate your customer interactions and improve the overall customer experience. With IVR, you can route calls more effectively, provide personalized customer service, and even automate certain sales and marketing processes to save time and increase efficiency.At Branding Pioneers, we know that the customer experience is critical to success in the healthcare industry. That's why we offer two powerful tools designed to help you improve the overall customer experience: IVR (interactive voice response) and call tracking.</p>
                <p className="txt-1">Our IVR system is designed to help you automate your customer interactions and provide personalized customer service. With IVR, you can route calls more effectively, automate certain sales and marketing processes.</p>
                <h2 className="display-2">Call Tracking</h2>
                <p className="txt-1">Finally, our call tracking platform is designed to help you monitor and analyze your phone-based sales and marketing efforts. With call tracking, you can easily track phone calls, identify key trends, and make data-driven decisions that can help you improve your overall sales and marketing performance.</p>
                <p className="txt-1">At Branding Pioneers, we're committed to helping healthcare providers achieve greater success through sales and automation. Contact us today to learn more about our suite of powerful tools and strategies, and how they can help you take your healthcare digital marketing to the next level.</p>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}