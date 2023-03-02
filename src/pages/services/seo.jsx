import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function SEO() {
  return (
    <>
      <Helmet>
        <title>SEO</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="SEO" parent="Services" />
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
              <p className="txt-1">Search Engine Optimization (SEO) is a crucial part of any digital marketing strategy. It's a set of techniques used to optimize your website for search engines like Google, Bing, and Yahoo, to improve its ranking and visibility in search engine results pages (SERPs). At Branding Pioneers, we offer a comprehensive range of SEO services to help businesses achieve their online goals. Here's what we can do for you:</p>
                <ol>
                  <li className="txt-1">On-page optimization: We'll optimize your website's structure, content, and HTML code to make it more search engine-friendly. This includes keyword research, meta tag optimization, content optimization, internal linking, and more.</li>
                  <li className="txt-1">Off-page optimization: We'll build high-quality backlinks to your website from other relevant sites to improve its authority and credibility in the eyes of search engines. This includes guest blogging, social media marketing, influencer outreach, and more.</li>
                  <li className="txt-1">Technical optimization: We'll ensure that your website's technical aspects, such as page speed, mobile-friendliness, security, and site structure, are optimized for search engines.</li>
                  <li className="txt-1">Reporting and analysis: We'll provide you with regular reports on your website's performance and use data analytics to refine our SEO strategy and maximize your ROI.</li>
                </ol>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}