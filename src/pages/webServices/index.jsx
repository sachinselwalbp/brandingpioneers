import Helmet from 'react-helmet'
import '../css/our-work.scss'
import Hero from '../../components/Hero'

export default function WebServices() {
    return (
        <>
            <Helmet><title>Web Services</title></Helmet>
            <div className="about-container">
                <Hero title="We provide digital solutions for your business" parent="Website Services" />
            </div>
        </>
    )
}
