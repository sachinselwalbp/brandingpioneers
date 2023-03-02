import { Accordion } from 'react-bootstrap'
import Helmet from 'react-helmet'
import './style.scss'
import Hero from '../../components/hero'

export default function FAQs() {
    return (
        <>
            <Helmet>
                <title>FAQs</title>
            </Helmet>
            <div className="faqs-container">
                <Hero title="Get answers of all your questions here" parent="FAQs" />
                <FAQSection />
            </div>
        </>
    )
}

const FAQSection = () => {
    const FAQ_data = [
        {
            title: 'How to scale performance using stact?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
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