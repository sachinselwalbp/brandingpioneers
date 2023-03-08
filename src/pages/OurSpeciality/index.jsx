import Helmet from 'react-helmet'
import Hero from '../../components/hero'

export default function OurSpeciality() {
    return (
        <>
            <Helmet>
                <title>Our Speciality</title>
            </Helmet>
            <div className="about-container">
                <Hero title="Top-notch solutions provider in the industry" />
                <Speciality />
                <About />
            </div>
        </>
    )
}

const Speciality = () => {
    const capabilities = [
        {
            title: 'Responsive Design',
            text: 'Top-notch solutions provider in the industry'
        },
        {
            title: 'Content Development',
            text: 'Top-notch solutions provider in the industry'
        },
        {
            title: 'SEO Optimized Website',
            text: 'Top-notch solutions provider in the industry'
        },
        {
            title: 'Data and Analytics',
            text: 'Top-notch solutions provider in the industry'
        }
    ]
    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div className='video-thumb'>
                                <a href='/'>
                                    <img loading='lazy' src='https://dummyimage.com/446x304/ccc/fff.jpg' className="img-fluid" alt="stact" />
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
                            <h2 className='mb-16'>Best in class innovative tech solutions</h2>
                            <p className='txt-1 mb-20'>We craft digital experiences that resonate with your audience and grow your business. If you have a vision for the next big thing, we can help you make it happen. </p>
                            <h3 className='mb-16'>Our Key Services</h3>
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
                                        </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const About = () => {
    const timeline = [
        {
            title: 'Research',
            text: 'We mine data, uncover insights and identify opportunities'
        },
        {
            title: 'Build',
            text: 'We architect websites and apps to solve user problems'
        },
        {
            title: 'Scale',
            text: 'Continuous Delivery pipelines to ensure fast iteration'
        }
    ]
    return (
        <>
            <section className='section-global bg-shade-1'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 text-center align-self-center">
                            <img loading='lazy' src={require('./assets/about.png')} className="img-fluid about-banner-image" alt="how we work" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-tag mb-8">How we work</div>
                            <h2 className='mb-16'>Manage your business effortlessly with Stact</h2>
                            <p className='txt-1 mb-16'>We empower digital brands to grow faster by providing services in growth marketing + operations and venture capital.</p>
                            <div className="time-line">
                                {timeline.map((e, i) =>
                                    <div className="content" key={i}>
                                        <div className="index">{i + 1}</div>
                                        <h3 className='mb-8 mb-0'>{e.title}</h3>
                                        <p className='txt-2 mb-0'>{e.text}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}