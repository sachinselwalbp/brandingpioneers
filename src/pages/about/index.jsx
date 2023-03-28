import Helmet from 'react-helmet'
import FeatureCards from '../../components/featureCards'
import './style.scss'
import Hero from '../../components/hero'
import Stats from '../../components/stats'

const counter_data = [
  {
    count: '8+',
    text: 'Years'
  },
  {
    count: '200+',
    text: 'Hospitals/Clinics'
  },
  {
    count: '70+',
    text: 'Members Team'
  },
  {
    count: '200%',
    text: 'AvG ROI'
  }
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Hero title="We provide digital solutions for your business" />
      <AboutSection />
      <Stats data={counter_data} />
      <Content />
      <Features />
      <Team />
      <PortfolioFooter />
    </>
  )
}


const Content = () => {
  return (
    <section className='section-global blog-article'>
      <div className="container container-2">
        <div className="row">
          <div className="col-12 mb-20">
            <img loading='lazy' className="img-fluid mb-20 mainPageArticleImage" src={require('../../images/video_thumb.jpg')} alt='About Us' />
          </div>
          <div className="col-12 px-md-5 px-3">
            <div className="blog-article-section">
              <p className='txt-1'>Welcome to Branding Pioneers, the leading healthcare marketing agency in India. We are a team of highly skilled professionals, including medical experts, software engineers, and marketing gurus. With over 12 years of experience in the healthcare industry, our founders, Arush Thapar and Nishu Sharma, have worked with some of the top hospitals and healthcare brands in the country.</p>
              <p className='txt-1'>At Branding Pioneers, we are proud of our team of medical professionals who work closely with our marketing experts to develop creative and effective marketing solutions for our clients. Our deep understanding of the healthcare industry, combined with our expertise in digital marketing and technology, enables us to provide our clients with cutting-edge solutions that deliver tangible results.</p>
              <p className='txt-1'>Our founders, Arush and Nishu, bring a unique set of skills and experiences to the table. Arush is a software engineer and an entrepreneur with 12 years of experience in developing and scaling technology-based businesses. Nishu, on the other hand, is a branding expert with a wealth of experience in the healthcare industry, having worked with some of the top hospitals and healthcare brands in India.</p>
              <p className='txt-1'>Our focus on technology is what sets us apart from other healthcare marketing agencies. We leverage the latest tools and techniques to deliver targeted and effective marketing campaigns that help our clients reach more patients and grow their businesses. We are proud to be a tech marketing agency, and we believe that our approach is what makes us one of the best healthcare marketing agencies in India.</p>
              <p className='txt-1'>Our clients come from all corners of India and the UAE, and we are proud to have a growing presence in Canada, the UK, and the USA. Our sales offices in these locations enable us to better serve our clients and provide them with a personalized and efficient service.</p>
              <p className='txt-1'>In summary, at Branding Pioneers, we are passionate about healthcare marketing and delivering outstanding results for our clients. We bring together a unique blend of medical expertise, marketing acumen, and technological know-how to develop innovative solutions that help our clients achieve their business goals. So, whether you are a hospital, clinic, or healthcare brand looking to grow your business, we are the healthcare marketing agency that can help you get there.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  const capabilities = [
    {
      title: 'Healthcare Experts',
      text: 'Top-notch solutions provider in the industry'
    },
    {
      title: 'Tech-Enabled Services',
      text: 'Top-notch solutions provider in the industry'
    },
    {
      title: 'Personalized Approach',
      text: ''
    },
    {
      title: 'Results-Oriented Focus',
      text: ''
    }
  ]
  return (
    <>
      <section className='section-global'>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 align-self-start d-flex justify-content-center">
              <div>
                <img loading='lazy' src={require('../../images/about.jpg')} className="img-fluid rounded-3" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-tag mb-8">Who we are</div>
              <h2 className='mb-16'>Best in class innovative tech solutions</h2>
              <p className='txt-1 mb-20'>At Branding Pioneers, we are a healthcare-focused marketing and branding agency based in India, dedicated to providing our clients with high-quality, customized solutions to meet their unique needs. Our team of 70+ professionals is made up of experts in the fields of marketing, branding, technology, and healthcare, allowing us to offer a range of specialized services that cover everything from digital marketing and SEO to event management and influencer collaborations.</p>
              <h3 className='mb-16'>Our core capabilities</h3>
              <div>
                <div className="row gy-4">
                  {capabilities.map((e, i) =>
                    <div className="col-xl-6 col-lg-12 col-md-6" key={i}>
                      <div className="d-flex capability-card" key={i}>
                        <div className="count">{i + 1}</div>
                        <div className="ms-2">
                          <div className="txt-2 fw-700 color-1">{e.title}</div>
                          <div className="txt-3">{e.text}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const Features = () => {
  const featurs_data = [
    {
      title: 'Research',
      text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
    },
    {
      title: 'Build',
      text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
    },
    {
      title: 'Scale',
      text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
    }
  ]

  return (
    <>
      <section className='section-global'>
        <div className="container">
          <div className="row mb-40">
            <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2 text-center">
              <div className="section-tag mb-8">How we work</div>
              <h2>Extremely smooth workflow with cosistancy</h2>
            </div>
          </div>
        </div>
        <div className="container container-2">
          <div className="row gy-4 gx-0 gx-md-5">
            <FeatureCards data={featurs_data} src='about' />
          </div>
        </div>
      </section>

    </>
  )
}

const Team = () => {
  const team_data = [
    {
      name: 'Arush Thapar',
      position: 'Managing Partner',
      imgUrl: 'team.jpg'
    },
    {
      name: 'Nishu Sharma',
      position: 'Managing Partner',
      imgUrl: 'team.jpg'
    },
  ]
  return (
    <>
      <section className='section-global bg-shade-blue'>
        <div className="container container-2">
          <div className="row mb-40">
            <div className="col-lg-8">
              <div className="section-tag mb-8">Team</div>
              <h2 className='mb-16'>A team of skilled idividuals that helps you to grow</h2>
            </div>
          </div>
          <div className="row gy-4">
            {team_data.map((e, i) =>
              <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                <div className="team-member text-center">
                  <img loading='lazy' src={require(`../../images/${e.imgUrl}`)} className="img-fluid mb-16" alt={e.name} />
                  <div className="txt-2 color-1 fw-500">{e.name}</div>
                  <div className="txt-3">{e.position}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}


const PortfolioFooter = () => {
  const contactLinkData = [
    {
      title: "Email",
      text: "brandingpioneers@gmail.com",
      icoUrl: "contact_ico1.svg",
      link: "mailto:brandingpioneers@gmail.com"
    },
    {
      title: "Phone",
      text: "+91 8377009395",
      icoUrl: "contact_ico2.svg",
      link: "tel:+91 8377009395"
    }
  ]

  return (
    <>
      <section className='section-global dark'>
        <div className="container container-2">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6">
              <h2 className='mb-16'>Let’s collab...</h2>
              <p className='txt-2'>You've come to the right spot at the right moment if you're beginning a business or stuck in the middle and need a creative Digital Marketer to help you grow your business or enhance your user engagements.</p>
            </div>
            <div className="col-lg-4 offset-lg-2 col-md-6">
              <div className="contact-link-container">
                {
                  contactLinkData.map((e, i) =>
                    <a href={e.link} className="contact-link text-decoration-none" key={i}>
                      <div className="contact-link-container mb-3 d-flex align-items-center">
                        <img loading='lazy' src={require(`../../images/${e.icoUrl}`)} height="50" alt={e.title} />
                        <div className='ms-3'>
                          <div className="txt-2 fw-500 color-1">{e.title}</div>
                          <div className="txt-3">{e.text}</div>
                        </div>
                      </div>
                    </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
