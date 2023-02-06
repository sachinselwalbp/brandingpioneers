import Helmet from "react-helmet"
// import Footer from "../components/footer"
// import NavBar from "../components/navbar"
import BGP1 from './assets/bg_1.svg'
import BGP2 from './assets/bg_2.svg'
import './css/errorComp.scss'

const ErrorComponent = () => {
    return(
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            {/* <NavBar /> */}
            <section className="section-global bg-shade-1 hero nf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="section-tag mb-8">Oops...</div>
                            <h1>404</h1>
                            <p className="txt-1">Page not found</p>
                        </div>
                    </div>
                </div>
                <img loading="lazy" src={BGP2} alt="bg_1" className='bg_1' />
                <img loading="lazy" src={BGP1} alt="bg_2" className='bg_2' />
            </section>
            {/* <Footer/> */}
        </>
    )
}

export default ErrorComponent