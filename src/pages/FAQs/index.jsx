import { Accordion } from 'react-bootstrap'
import Helmet from 'react-helmet'
import './style.scss'

const FAQs = () => {
    return (
        <>
            <Helmet>
                <title>Stact - FAQs</title>
            </Helmet>
            <div className="faqs-container">
                <Hero />
                <FAQSection />
            </div>
        </>
    )
}

const Hero = () => {
    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">FAQs</div>
                            <h1 className='display-1'>Get answers of all your questions here</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const FAQSection = () => {

    const FAQ_data = [
        {
            title: 'How to scale performance using stact?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'Which functionalities come with Enterprise plan?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How my basic account is evaluated?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How can I upgrade from basic to team plan?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How user research takes place in Stact?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'In how many days my refund will be given?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'What if I want to add credits flexibly?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How does flexible plan work?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'What additional services is provided in Enterprise plan?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'What is up-ratio of all back-end systems?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How many people can join collaborative space?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'Which kind of after-sales services is provided by Stact?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How to redeem student discounts?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How to report a bug during operational time?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How to manage cross-platform integrations?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How to manage automations?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        }
    ]

    return (
        <>
            <section className='section-global'>
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
            </section>
        </>
    )
}

export default FAQs