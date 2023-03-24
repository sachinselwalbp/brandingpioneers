import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { BsPlayCircleFill, BsCheckCircleFill, BsArrowRight } from "react-icons/bs"
import Hero from "../../components/hero"

export default function WhoWeAre() {
  return (
    <>
      <Helmet>
        <title>Who We Are</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Who We Are" />
        <About />
        <CaseStudy />
      </div>
    </>
  )
}

const About = () => {
  const features_data = [
    "Seamless, comprehensive, and cost-effective",
    "Connect with your customers",
    "Streamline your operations"
  ]

  return (
    <>
      <section className="section-global">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 align-self-center d-flex justify-content-center">
              <div className='video-thumb'>
                <a href='/'>
                  <img src={require('../../images/video_thumb.jpg')} className="img-fluid" alt="stact" />
                  <BsPlayCircleFill fill="white" fontSize={77} />
                </a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-tag mb-8">Who we are</div>
              <h2 className='mb-16'>We provide digital solutions for your business</h2>
              <p className='txt-1'>We craft digital experiences that resonate with your audience and grow your business. If you have a vision for the next big thing, we can help you make it happen. </p>
              {features_data.map((e, i) => <div key={i} className="txt-2 color-1 fw-500 mb-8 d-flex gap-3 align-items-center">
                <BsCheckCircleFill fill="#0FA958" fontSize={24} />
                {e}
              </div>)}
              <div className='mt-16'>
                <Link to="/about" className='arrow-link'>
                  Learn more
                  <BsArrowRight fontSize={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <img loading='lazy' src={require('../../images/video_thumb.jpg')} className="img-fluid" alt="Who We Are" />
            </div>
            <div className="col-12">
              <div className="case-study-section">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
