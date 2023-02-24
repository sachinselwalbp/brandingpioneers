import { Helmet } from "react-helmet"
import Hero from "../../components/Hero"

export default function WhoWeAre() {
  return (
    <>
      <Helmet>
        <title>Who We Are</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero parent="About" title="Who We Are" />
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
              {/* <img loading='lazy' src={require('./assets/case_study_cover.png')} className="img-fluid mb-20" alt="CaseStudy" /> */}
            </div>
            <div className="col-12">
              <div className="case-study-section">
                <h2 className='display-2'>1. What is Deko?</h2>
                <p className='txt-1'>Why risk it all with cheap outsourcing? Most businesses either go for high end agencies that are a bit boring or low end agencies that don't deliver. We offer a new way, called Stack.</p>
                <h2 className="display-2">2. What were the majore challnges?</h2>
                <p className="txt-1">We work at the intersection of media, marketing and creativity. We help big brands navigate digital disruption and harness new technologies to evolve their businesses. What sets Stack apart are our end-to-end capabilities, team-based approach and deep expertise in strategy, creative production, data science and app development.</p>
                <h2 className="display-2">3. The solution we provided</h2>
                <p className="txt-1">Our team of strategists, creatives and technologists are passionate about helping brands succeed. We work with customers to develop their unique approach to digital communications, defining the objectives and how to achieve them through the delivery of high impact digital campaigns.<br /><br />
                We've crafted Stack so that you can easily stand out with digital brand experiences. Whether it's ecommerce, content marketing or digital strategy services, our team at Stack will help you grow your brand, your way.</p>
                <br />
                {/* <img loading='lazy' src={require('./assets/img1.jpg')} alt="case-study" className='img-fluid' /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
