import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function LeadGenerationsforDoctors() {
  return (
    <>
      <Helmet>
        <title>Lead Generations for Doctors</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Lead Generations for Doctors" parent="Our Work" />
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
                {/* <img loading='lazy' src="" alt="case-study" className='img-fluid' /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}