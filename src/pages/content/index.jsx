import Helmet from 'react-helmet'
import '../css/our-work.scss'
import Hero from '../../components/hero'

export default function Content() {
    return (
        <>
            <Helmet><title>Web Services</title></Helmet>
            <div className="about-container">
                <Hero title="Content" />
            </div>
        </>
    )
}
