import Helmet from 'react-helmet'
import '../css/our-work.scss'
import Hero from '../../components/Hero'

export default function Content() {
    return (
        <>
            <Helmet><title>Web Services</title></Helmet>
            <div className="about-container">
                <Hero title="Content" parent="Content" />
            </div>
        </>
    )
}
