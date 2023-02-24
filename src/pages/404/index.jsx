import Helmet from "react-helmet"
import BGP1 from './assets/bg_1.svg'
import BGP2 from './assets/bg_2.svg'
import './style.scss'

const NotFound = () => {
    return(
        <>
            <Helmet>
                <title>Stact - Not Found</title>
            </Helmet>
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
                <img loading="lazy" src={BGP1} alt="bg_1" className='bg_1' />
                <img loading="lazy" src={BGP2} alt="bg_2" className='bg_2' />
            </section>
        </>
    )
}

export default NotFound