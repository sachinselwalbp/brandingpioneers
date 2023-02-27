import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function InfluencerAndPR() {
  return (
    <>
      <Helmet>
        <title>Influencer And PR</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Influencer And PR" parent="Services" />
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
                <p className="txt-1">In today's digital age, influence and PR can make or break a healthcare company's reputation. At Branding Pioneers, we help healthcare companies build their influence and reputation through effective PR strategies and influencer marketing.</p>
                <p className="txt-1">Our PR experts will help you craft compelling messages and stories that resonate with your target audience and showcase your expertise. We will leverage our extensive media relationships and industry insights to secure media placements, interviews, and other opportunities to increase your visibility and credibility.</p>
                <p className="txt-1">In addition, we can help you identify and engage with key influencers in your industry to amplify your message and reach a wider audience. Our team will help you develop effective influencer marketing campaigns that drive engagement, increase brand awareness, and generate leads.</p>
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