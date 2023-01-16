import { Link } from 'react-router-dom'
import './css/blogCards.scss'
import React from 'react'

const BlogCards = ({ data }) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            {data.map((e, i) =>
                <div className="col-lg-4 col-md-6 gy-4" key={i}>
                    <Link to={e.attributes.slug} className="blog_link">
                        <div className="blog-card">
                            <div className="thumb">
                                <img src={`https://s012.ba.hostcafe.cc/${e.attributes.FeaturedImage.data.attributes.formats.thumbnail.url}`} className="img-fluid" alt={e.attributes.title} />
                            </div>
                            <div className="body">
                                <div className='mb-8'>
                                    <span className='text-uppercase txt-4 fw-500 color-primary'>{e.attributes.category.data.attributes.title}</span>&nbsp;•&nbsp;<span className='txt-4'>{`${month[new Date(e.attributes.datetime).getMonth()]} ${new Date(e.attributes.datetime).getDate()}, ${new Date(e.attributes.datetime).getFullYear()}`}</span>
                                </div>
                                <h4 className="title">{e.attributes.title}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}

export default BlogCards