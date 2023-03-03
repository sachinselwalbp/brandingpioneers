import "./style.scss"
import Helmet from 'react-helmet'
import FeatureCards from '../../components/featureCards'
import { Accordion } from 'react-bootstrap'

export default function Collection() {
  return (
    <>
      <Helmet>
        <title>Collections</title>
      </Helmet>
      <div className="collection">
        <Showcase />
        <Stats />
        <EndCTA />
        <Features />
        <Features2 />
        <FAQs />
        <About />
        <PersonalDetails />
        <PortfolioFooter />
      </div>
    </>
  )
}

const Features = () => {
  const featurs_data = [
    {
      title: 'Live Collaborations',
      text: 'Create unlimited workspaces and invite others to collaborate on projects from our secured data centers.',
      icoUrl: 'assets/feature_ico1.svg'
    },
    {
      title: 'Real-time Monitoring',
      text: ' Share work with your team in real time and keep track of progress without being physically present.',
      icoUrl: 'assets/feature_ico2.svg'
    },
    {
      title: 'Integrated issue tracking',
      text: 'Powerful, yet simple to use remote presence workspace built with the enterprise user in mind.',
      icoUrl: 'assets/feature_ico3.svg'
    }
  ]

  return (
    <>
      <section className='section-global bg-shade-blue'>
        <div className="container">
          <div className="row mb-40">
            <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2 text-center">
              <div className="section-tag mb-8">Features</div>
              <h2>Extremely smooth workflow with cosistancy </h2>
            </div>
          </div>
          <div className="row gy-4 gx-0 gx-lg-5">
            <FeatureCards data={featurs_data} src='collection' center />
          </div>
        </div>
      </section>
    </>
  )
}


const Features2 = () => {
  const Features_data = [
    {
      title: 'Built with React V18.00',
      text: 'Stact uses latest version of React, which makes it faster and more stable.',
      icon: 'assets/feature_1.svg'
    },
    {
      title: 'Modular Responsive Design',
      text: "Simple, clean and easy to navigate user interface that is mobile friendly",
      icon: 'assets/feature_2.svg'
    },
    {
      title: 'Well Documented',
      text: "You'll always have access to step-by-step instructions about using Stact.",
      icon: 'assets/feature_3.svg'
    },
    {
      title: 'Easy to deploy',
      text: 'Deploy Stact within minutes from your computer (no coding required)',
      icon: 'assets/feature_4.svg'
    },
    {
      title: 'Regular Updates',
      text: 'Stact is constantly being updated to improve usability and features',
      icon: 'assets/feature_5.svg'
    },
    {
      title: 'Faster Customer Support',
      text: "We're committed to responding within 24 hours (or less) for your complaints",
      icon: 'assets/feature_6.svg'
    }
  ]

  return (
    <>
      <section className="section-global bg-shade-blue">
        <div className="container">
          <div className="row mb-40">
            <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
              <div className="section-tag mb-8">Why Stact</div>
              <h2>Great template comes with outstanding features</h2>
            </div>
          </div>
          <div className="row gy-4">
            {Features_data.map((e, i) =>
              <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                <div className="feature d-flex">
                  <div className="feature-ico me-3">
                    <img loading="lazy" src={require(`/${e.icon}`)} height="70" alt={i} />
                  </div>
                  <div className="feature-body">
                    <h4>{e.title}</h4>
                    <p className="txt-3">{e.text}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const FAQs = () => {
  const FAQ_data = [
    {
      title: 'How do I setup and run stact locally?',
      text: "Running Stact on your local machine is easy. You must first install NodeJS and npm on your computer. Second, use the terminal to install node modules using the command 'npm install' in the stact directory. Finally, launch Stact using the 'npm start' command."
    }
  ]

  return (
    <section className="section-global bg-shade-green" id="FAQs">
      <div className="container">
        <div className="row">
          <div className="row mb-40">
            <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
              <div className="section-tag mb-8">FAQs</div>
              <h2>Feel free to contact us with any queries you may have.</h2>
            </div>
          </div>
        </div>
        <div className="container container-2">
          <div className="row">
            <div className="col-12">
              <Accordion alwaysOpen flush>
                {FAQ_data.map((e, i) =>
                  <Accordion.Item eventKey={i} key={i}>
                    <Accordion.Header>{e.title}</Accordion.Header>
                    <Accordion.Body>
                      {e.text}
                    </Accordion.Body>
                  </Accordion.Item>
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Showcase = () => {
  return (
    <>
      <section className='section-global'>
        <div className="container container-2">
          <div className="row gy-4 gx-0 gx-lg-5">
            <div className="col-lg-6">
              <img loading='lazy' src={require('./assets/showcase1.png')} className="img-fluid" alt="feature1" />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-tag mb-8">Communicate</div>
              <h2 className='mb-16 display-2'>Communicate with other people in the same space</h2>
              <p className='txt-1'>Cross-platform messaging allows people from iOS/Android to communicate with one another using a universal library of smiley faces, threads, and file sharing. Everyone wins!</p>
            </div>
          </div>
          <div className="row gy-4 gx-0 gx-lg-5 feature-row-margin">
            <div className="col-lg-6 order-1 order-lg-0 align-self-center">
              <div className="section-tag mb-8">Spaces</div>
              <h2 className='mb-16 display-2'>Create space and share it with your community and friends</h2>
              <p className='txt-1'>Branding is a free gaming workspace app powered by the cloud - no matter on which platform you are playing or chatting with your friends, you will always have your own gaming space. </p>
            </div>
            <div className="col-lg-6">
              <img loading='lazy' src={require('./assets/showcase2.png')} className="img-fluid" alt="feature1" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const Stats = () => {

  const stats_data = [
    {
      head: '4.5 Stars',
      text: 'Overall ratings',
      icoUrl: 'assets/stats_icon1.svg'
    },
    {
      head: '554.5k Ratings',
      text: 'On all the platforms',
      icoUrl: 'assets/stats_icon2.svg'
    },
    {
      head: '5M+ Downloads',
      text: 'Across all platform',
      icoUrl: 'assets/stats_icon3.svg'
    }
  ]

  return (
    <>
      <section className="section-global dark">
        <div className="container container-2">
          <div className="row gy-5">
            <div className="col-lg-3 col-md-12">
              <h4>We want to change the way you are gaming!</h4>
            </div>
            {stats_data.map((e, i) =>
              <div className="col-lg-3 col-md-4 col-sm-6 text-center" key={i}>
                <img loading='lazy' src={require(`./${e.icoUrl}`)} className="mb-8" height="30" alt="stats" />
                <h4 className='mb-0'>{e.head}</h4>
                <div className="txt-4">{e.text}</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const EndCTA = () => {
  return (
    <>
      <section className='section-global end_cta'>
        <div className="container container-2">
          <div className="row gy-4">
            <div className="col-lg-6 align-self-center order-1 order-lg-0">
              <h2 className='mb-16'><span className='txt-highlight'>10 million</span> people all around the world love it</h2>
              <p className='txt-1 mb-20'>Stact is designed with e-sports in mind because that's where we come from.</p>
              <a href='/'>
                <img loading='lazy' src={require('./assets/playstore_badge.svg').default} alt="playstore" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href='/'>
                <img loading='lazy' src={require('./assets/appstore_badge.svg').default} alt="playstore" />
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <img loading='lazy' src={require('./assets/end_banner.png')} className="img-fluid" alt="download" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



const About = () => {
  return (
    <>
      <section className='section-global'>
        <div className="container container-2">
          <div className="row gy-4">
            <div className="col-lg-4">
              <h2>More about me...</h2>
            </div>
            <div className="col-lg-8">
              <p className='txt-1'>
                Let me give you a little introduction to myself. I'm an Canadian developer with a lot of experience. I learnt Digital Marketing through various online courses and through attending events. I'm also a Google certified Digital Marketing Consultant.
                <br /><br />
                I've worked for a couple firms in my marketing career and am presently freelancing. My whole professional life hinges on three words, which you will discover further down. My primary goal is to make money for both the business owner and the client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const PersonalDetails = () => {

  const details = [
    {
      title: 'Skills',
      data: [
        { title: 'UI/UX Designing', text: 'Pro' },
        { title: 'Web Development', text: 'Intermediate' },
        { title: 'Digital Marketing', text: 'Beginner' },
        { title: 'Animation', text: 'Intermediate' }
      ]
    },
    {
      title: 'Experience',
      data: [
        { title: 'Game Developer', text: 'Ubisoft • 2019 - current' },
        { title: 'Full stack developer', text: 'Microsoft • 2018 - 2019' },
        { title: 'Software Engineer', text: 'Amazon • 2016 - 2018' }
      ]
    },
    {
      title: 'Education',
      data: [
        { title: 'Game and VFX development', text: 'Harvard • 2015 - 2017' },
        { title: 'Masters of CSE', text: 'MIT • 2013 - 2015' },
        { title: 'B. Tech in CSE', text: 'UC Berkeley • 2008 - 2012' }
      ]
    }
  ]

  return (
    <>
      <section className='section-global'>
        <div className="container container-2">
          <div className="row gy-5">
            {details.map((e, i) =>
              <div className="col-lg-4 col-md-6 col-sm-5" key={i}>
                <h2 className='display-2 mb-40'>{e.title}</h2>
                {e.data.map((x, j) =>
                  <div key={j} className="mb-16">
                    <h4 className='mb-0'>{x.title}</h4>
                    <div className='txt-3'>{x.text}</div>
                  </div>
                )}
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
      text: "nellie@email.com",
      icoUrl: "assets/contact_ico1.svg",
      link: "mailto:nellie@email.com"
    },
    {
      title: "Phone",
      text: "+91 123 4567 890",
      icoUrl: "assets/contact_ico2.svg",
      link: "tel:+911234567890"
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
                    <a href={e.link} className="contact-link" key={i}>
                      <div className="contact-link-container d-flex align-items-center">
                        <img loading='lazy' src={require(`./${e.icoUrl}`)} height="50" alt={e.title} />
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
