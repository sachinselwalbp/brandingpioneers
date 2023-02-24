import { Link } from 'react-router-dom'
import './css/blogCards.scss'

export default function BlogCards({ data }) {
    return (
        <>
            {data.map((e, i) =>
                <div className="col-lg-4 col-md-6 gy-4" key={i}>
                    <Link to={data.slug} className="blog_link">
                        <div className="blog-card">
                            <div className="thumb">
                                <img loading='lazy' src={data.imgURL} className="img-fluid" alt={data.alt} />
                            </div>
                            <div className="body">
                                <div className='mb-8'>
                                    <span className='text-uppercase txt-4 fw-500 color-primary'>{data.categoty}</span>&nbsp;•&nbsp;<span className='txt-4'>{data.date}</span>
                                </div>
                                <h4 className="title">{data.title}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}
