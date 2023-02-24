import Helmet from 'react-helmet'
import '../css/our-work.scss'
import Hero from '../../components/Hero'

export default function MarketingStrategies() {
    return (
        <>
            <Helmet><title>Marketing Strategies</title></Helmet>
            <div className="about-container">
                <Hero title="Marketing Strategies" parent="Marketing Strategies" />
            </div>
        </>
    )
}