import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function ECommerceDevelopmentforHealthcare() {
  return (
    <>
      <Helmet>
        <title>E Commerce Development for Healthcare</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="E Commerce Development for Healthcare" />
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

                <br />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}