import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hero from "../../components/hero";
import FAQSection from "../../components/faqSection";
import { TbArrowNarrowRight } from "react-icons/tb";
import TestimonialCards from "../../components/testimonialCards";
import Stats from "../../components/stats";
import WhyChooseUsSection from "../../components/whyChooseUsSection";

const counter_data = [
  {
    count: '3k+',
    text: 'SUCCESSFUL CAMPAIGNS'
  },
  {
    count: '50k+',
    text: ' QUALIFIED LEADS GENERATED'
  },
  {
    count: '300k+',
    text: 'B2B CONTACTS WITH EMAIL'
  }
]

const infoData = [
  {
    title: 'Understanding the healthcare industry',
    text: 'Branding pioneers deeply understand the unique challenges and opportunities in the healthcare industry.'
  },
  {
    title: 'Customized marketing strategies',
    text: 'Branding pioneers can create customized marketing strategies that meet healthcare providers’ specific needs and goals.'
  },
  {
    title: 'Data-driven approach',
    text: 'Branding pioneers use data to inform their marketing decisions and track the effectiveness of their campaigns.'
  },
  {
    title: 'Consistent branding efforts',
    text: 'Branding pioneers can help healthcare providers ensure consistency across all marketing channels, including ads and lead generation services.'
  },
  {
    title: 'Collaborative approach',
    text: 'Branding pioneers work closely with healthcare providers to ensure their marketing efforts align with business goals and values.'
  }
]

export default function AdsAndLeadGeneration() {
  return (
    <>
      <Helmet>
        <title>Ads and Lead Generation Services for Healthcare by Branding Pioneers</title>
        <meta name="title" content="Ads and Lead Generation Services for Healthcare by Branding Pioneers" />
        <meta name="description" content=" Boost your healthcare business with our top-notch Ads and Lead Generation Services. Trust Branding Pioneers to help you reach your target audience and grow your revenue." />
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Ads and Lead Generation Services for Healthcare by Branding Pioneers" />
        <WhyChooseUsSection data={infoData} src="services" img="info.png" text="Branding pioneers are digital marketing experts who specialize in healthcare. By partnering with branding pioneers, healthcare providers can benefit from the following:" />
        <Stats data={counter_data} />
        <CaseStudy />
        <Testimonials />
      </div>
    </>
  )
}

const CaseStudy = () => {
  const FAQ_data = [
    {
      title: "What types of ads do Branding Pioneers use for healthcare lead generation?",
      text: "Branding Pioneers uses various ad types, including social media ads, search engine ads, and display ads, depending on each client’s specific needs and goals."
    },
    {
      title: "How do Branding Pioneers target the right audience for healthcare lead generation?",
      text: "Branding Pioneers uses a data-driven approach to identify and target the most relevant audience for each client, including factors such as demographics, interests, behaviors, and location."
    },
    {
      title: "How do Branding Pioneers measure the success of its lead generation efforts?",
      text: "Branding Pioneers uses a variety of metrics to measure the success of its lead generation efforts, including conversion rates, cost per lead, and return on ad spend, among others."
    },
    {
      title: "What role does content marketing play in healthcare lead generation?",
      text: "Content marketing is important in healthcare lead generation by attracting and engaging potential leads through valuable and informative content such as blog posts, e-books, and videos."
    },
    {
      title: "How do Branding Pioneers optimize landing pages for healthcare lead generation?",
      text: "Branding Pioneers optimizes landing pages by ensuring that they are designed to be visually appealing, user-friendly, and targeted to the specific needs and interests of each client's target audience."
    },
    {
      title: "How do Branding Pioneers stay current on the latest trends and best practices in healthcare lead generation?",
      text: "Branding Pioneers stay up to date on the latest trends and best practices in healthcare lead generation by regularly attending industry conferences, networking with other professionals, and continuously researching and testing new strategies and tactics."
    },
  ]

  return (
    <>
      <section className='section-global case-study'>
        <div className="container container-2">
          <div className="row">
            <div className="col-12 text-center mb-20">
              <img loading='lazy' src={require('./assets/video_thumb.jpg')} className="img-fluid mb-20" alt="CaseStudy" />
            </div>
            <div className="col-12">
              <div className="case-study-section">
                <p className="txt-1">The healthcare industry is becoming increasingly competitive, with patients having more options. To stand out from the competition, healthcare providers must focus on building a strong brand that resonates with patients. Digital marketing has become essential to any branding strategy, and ads and lead generation services are two key components.</p>
                <h2 className="display-2">What are Ads and Lead Generation Services?</h2>
                <p className="txt-1">Ads and lead-generation services are digital marketing tools that help healthcare providers reach their target audience and generate leads. Ads are typically paid placements on search engines, social media platforms, or other websites, while lead-generation services use various tactics to collect contact information from potential patients.</p>
                <h2 className="display-2">Benefits of Ads and Lead Generation</h2>
                <p className="txt-1"><strong>Increased brand awareness: </strong>Ads and lead generation services can help healthcare providers reach a larger audience and increase brand recognition.</p>
                <ol>
                  <li className="txt-1"><strong>Targeted marketing: </strong>With ads and lead generation services, healthcare providers can target specific demographics, interests, and behaviors to reach the right audience.</li>
                  <li className="txt-1"><strong>Improved lead generation: </strong>Lead generation services can help healthcare providers collect contact information from potential patients, allowing them to nurture those leads into loyal patients.</li>
                  <li className="txt-1"><strong>Enhanced customer engagement: </strong>Ads and lead generation services can help healthcare providers connect with patients and engage with them.</li>
                  <li className="txt-1"><strong>Increased patient retention: </strong>Healthcare providers can improve retention and boost their bottom line by staying in touch with current and past patients.</li>
                  <li className="txt-1"><strong>Improved Return on Investment (ROI): </strong>Ads and lead generation services can help healthcare providers get more bang for their buck, as they can target the right audience and track their ROI more accurately.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-global '>
        <div className="container container-2">
          <div className="row">
            <h2 className="text-center color-red">FAQs</h2>
            <FAQSection data={FAQ_data} />
          </div>
        </div>
      </section>
    </>
  )
}


function Testimonials() {
  const testimonial_data = [
    {
      text: 'The team at Branding Pioneers truly understands the healthcare industry and knows how to target our desired audience effectively. Their social media ads and SEO strategies have increased our online visibility and brought in a steady stream of new leads. We highly recommend their services.',
      userName: 'Nema Rawat',
      position: 'Co-Founder and President at GHC',
    },
    {
      text: "We struggled to generate high-quality leads for our healthcare business, but after working with Branding Pioneers, our lead generation efforts have been transformed. Their targeted ads and strategic lead generation tactics have resulted in a significant increase in quality leads, and we couldn't be happier with the results.",
      userName: 'Ansh Thakural',
      position: 'Additional Director - Laparoscopic and Robotic Surgery at Fortis Healthcare',
    },
    {
      text: "Branding Pioneers has been an invaluable partner in our lead-generation efforts. Their landing page design and optimization have increased our conversion rates, and their content marketing tactics have attracted and engaged our target audience. We're so grateful for their expertise and guidance.",
      userName: 'Sangita Kumari',
      position: 'Marketing Head at Rosewalk and Rainbow Hospital.',
    },
    {
      text: "We hesitated to invest in paid advertising for lead generation, but Branding Pioneers made the process easy and effective. Their targeted ads have brought in high-quality leads, and their data-driven approach has ensured we're getting the most out of our ad spend. We highly recommend their services.",
      userName: 'Harshdeep',
      position: 'Marketing Head at Rosewalk and Rainbow Hospital.',
    }
  ]

  return (
    <>
      <div className="section-global bg-shade-blue">
        <div className="container">
          <div className="row mb-40 justify-content-between gy-4">
            <div className="col-xl-5 col-lg-5">
              <div className="section-tag mb-8 ">Customer reviews</div>
              <h2>Adopted by the most creative individuals</h2>
            </div>
            <div className="col d-flex align-self-center">
              <Link to='/about/testimonials' className='btn btn-outline btn-arrow ms-lg-auto'>
                See all reviews
                <TbArrowNarrowRight fontSize={24} />
              </Link>
            </div>
          </div>
          <div className="row">
            <TestimonialCards data={testimonial_data} />
          </div>
        </div>
      </div>
    </>
  )
}