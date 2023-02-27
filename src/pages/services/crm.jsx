import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function CRM() {
  return (
    <>
      <Helmet>
        <title>CRM</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="CRM" parent="Services" />
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
              <p className="txt-1">Our CRM (customer relationship management) platform is designed to help healthcare providers manage their customer relationships more effectively. With our CRM, you can easily track customer interactions, monitor leads, and identify key trends that can help you improve your marketing and sales strategies.</p>
              <p className="txt-1">At Branding Pioneers, we understand that managing customer relationships is critical to success in the healthcare industry. That's why we offer a powerful CRM (customer relationship management) platform that can help you track customer interactions, monitor leads, and improve your overall sales and marketing performance.</p>
              <p className="txt-1">Our CRM is designed to be easy to use, with an intuitive interface that makes it easy to manage your customer data and track your progress. Whether you're a small practice or a large healthcare organization, our CRM can help you streamline your sales processes, improve customer satisfaction, and achieve greater success in your marketing efforts.</p>
              <p className="txt-1">Contact us today to learn more about how our CRM can help you take your healthcare digital marketing to the next level.</p>
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