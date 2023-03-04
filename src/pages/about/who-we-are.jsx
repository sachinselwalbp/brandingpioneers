import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import Hero from "../../components/hero"

export default function WhoWeAre() {
  return (
    <>
      <Helmet>
        <title>Who We Are</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero parent="About" title="Who We Are" />
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
                  <img src={require('./assets/video_thumb.jpg')} className="img-fluid" alt="stact" />
                  <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="39.5" cy="39.5" r="37.5" fill="black" />
                    <circle cx="37.5" cy="37.5" r="37" fill="#FFFB9E" stroke="black" />
                    <path d="M49.5 37.7021C49.5 38.2851 48.9052 38.7044 48.9052 38.7044L32.2113 49.0452C30.9945 49.8428 30 49.2519 30 47.7407V27.6615C30 26.1464 30.9945 25.5594 32.2133 26.355L48.9072 36.6998C48.9053 36.6998 49.5 37.119 49.5 37.7021Z" fill="black" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-tag mb-8">Who we are</div>
              <h2 className='mb-16'>We provide digital solutions for your business</h2>
              <p className='txt-1'>We craft digital experiences that resonate with your audience and grow your business. If you have a vision for the next big thing, we can help you make it happen. </p>
              {features_data.map((e, i) => <div key={i} className="txt-2 color-1 fw-500 mb-8 d-flex align-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                  <rect width="24" height="24" rx="12" fill="#0FA958" />
                  <path d="M6.66675 12L10.6667 16L17.3334 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {e}
              </div>)}
              <div className='mt-16'>
                <Link to="/about" className='arrow-link'>
                  Learn more
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-1'>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="currentColor" />
                  </svg>
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
              <img loading='lazy' src={require('./assets/video_thumb.jpg')} className="img-fluid" alt="Who We Are" />
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
