import { Helmet } from "react-helmet"
import Hero from "../../components/hero"
import { Link } from "react-router-dom"
import { TbArrowNarrowRight } from "react-icons/tb"
import ProjectCards from '../../components/caseStudiesCards'
import WhyChooseUsSection from "../../components/whyChooseUsSection"

const infoData = [
  {
    title: 'Customer Research',
    text: 'We mine data, uncover insights and identify opportunities'
  },
  {
    title: 'User friendly Build',
    text: 'We architect websites and apps to solve user problems'
  },
  {
    title: 'Scalable models',
    text: 'Continuous Delivery pipelines to ensure fast iteration'
  }
]

export default function WhyChooseUs() {
  return (
    <>
      <Helmet>
        <title>Why Choose Us</title>
      </Helmet>
      <div className="project-detail-container">
        <Hero title="Why Choose Us" />
        <WhyChooseUsSection data={infoData} src="about" img="info.png" />
        <CaseStudy />
        <Projects />
      </div>
    </>
  )
}

const Projects = () => {
  const projects_data = [
    {
      category: 'social media',
      text: 'Apollo Hospitals - Social Media Management',
      imgUrl: 'assets/project1.png',
      color: "#F97316",
      link: '/case-studies/apollo-hospitals'
    },
    {
      category: 'development',
      text: 'Max Hospitals - Website Design and Development',
      imgUrl: 'assets/project2.png',
      color: "#2D7EF8",
      link: '/case-studies/max-hospital'
    },
    {
      category: 'SEO',
      text: 'Dr Anjali Sharma - Search Engine Optimization',
      imgUrl: 'assets/project3.png',
      color: "#00AA45",
      link: '/case-studies/dr-anjali-sharma'
    }
  ]

  return (
    <>
      <section className='section-global'>
        <div className="container">
          <div className="row mb-40 justify-content-between gy-4">
            <div className="col-xl-5 col-lg-5">
              <div className="section-tag mb-8">Case Studies</div>
              <h2>Our recently compeleted projects</h2>
            </div>
            <div className="col d-flex align-self-center">
              <Link to='/case-studies' className='btn btn-outline btn-arrow ms-lg-auto'>
                See all case studies
                <TbArrowNarrowRight fontSize={24} />
              </Link>
            </div>
          </div>
          <div className="row">
            <ProjectCards data={projects_data} src="about" />
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
