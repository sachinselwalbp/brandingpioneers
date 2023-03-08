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
                <Hero title="Get answers of all your questions here" />
                <FAQSection />
            </div>
        </>
    )
}

const FAQSection = () => {
    const FAQ_data = [
        {
            title: 'What sets your healthcare marketing agency apart from others?',
            text: `At Branding Pioneers, we differentiate ourselves by providing customized solutions tailored to the unique needs and goals of each of our clients. Our team of healthcare marketing experts has extensive experience working in the industry, which allows us to develop innovative and effective strategies that drive results. We prioritize customer satisfaction, building long-lasting relationships based on trust, transparency, and results. Additionally, we stay on top of the latest trends and technologies.
            
            latest trends and technologies in the industry, which enables us to deliver cutting-edge solutions to our clients.`
        },
        {
            title: 'How long does it take to see results from your healthcare marketing campaigns?',
            text: 'The timeline for seeing results from our healthcare marketing campaigns varies depending on several factors, including your business goals, the type of services you require, and the size of your healthcare business. However, we typically see measurable results within three to six months of launching a campaign. We will work with you to set realistic expectations and develop a timeline that aligns with your business objectives.'
        },
        {
            title: 'How do you measure the success of your healthcare marketing campaigns?',
            text: 'We measure the success of our healthcare marketing campaigns using a range of metrics, including website traffic, conversion rates, engagement rates, social media reach, and return on investment (ROI). We use sophisticated tools and technologies to monitor and track these metrics, which enables us to make data-driven decisions and continuously optimize your campaigns to achieve the best possible results.'
        },
        {
            title: 'Can you guarantee specific results for my healthcare business?',
            text: 'While we cannot guarantee specific results, we can promise that we will work tirelessly to deliver the best possible outcomes for your healthcare business. Our team of healthcare marketing experts will collaborate with you to develop a customized strategy that aligns with your business goals and objectives. We will regularly measure and analyze the performance of your campaigns to make data-driven decisions and adjust our approach as necessary to optimize your results.'
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