import Helmet from 'react-helmet'
import '../css/our-work.scss'
import Hero from '../../components/Hero'

export default function MedicalDigitalMarketing() {
    return (
        <>
            <Helmet><title>Medical Digital Marketing</title></Helmet>
            <div className="about-container">
                <Hero title="Medical Digital Marketing" parent="Medical Digital Marketing" />
            </div>
        </>
    )
}