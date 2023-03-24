import './css/testimonialCards.scss'

export default function TestimonialCards({ data }) {
    return (
        <>
            {data.map((e, i) =>
                <div className="col-xl-4 col-lg-6 col-md-6 gy-4" key={i}>
                    {
                        e.youtube ?
                            <a href={e.youtube} className="testimonial-card youtube d-flex flex-column">
                                <div className='txt-1 color-1 fw-700 mb-20'>“{e.text}”</div>
                                <div className='testimonial-user d-flex align-items-center mt-auto'>
                                    {
                                        e.userImgUrl ?
                                            <div>
                                                <div className='img' style={{ background: `url(${require(`../images/${e.userImgUrl}`)}) no-repeat center/cover` }}></div>
                                            </div>
                                            :
                                            <div></div>
                                    }
                                    <div className='ms-3'>
                                        <div className='txt-3 color-1 fw-500'>{e.userName}</div>
                                        <div className="txt-3">{e.position}</div>
                                    </div>
                                </div>
                            </a>
                            :
                            <div className="testimonial-card d-flex flex-column">
                                <div className='txt-1 color-1 fw-700 mb-20'>“{e.text}”</div>
                                <div className='testimonial-user d-flex align-items-center mt-auto'>
                                    {
                                        e.userImgUrl ?
                                            <div>
                                                <div className='img' style={{ background: `url(${require(`../images/${e.userImgUrl}`)}) no-repeat center/cover` }}></div>
                                            </div>
                                            :
                                            <div></div>
                                    }
                                    <div>
                                        <div className='txt-3 color-1 fw-500'>{e.userName}</div>
                                        <div className="txt-3">{e.position}</div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            )}
        </>
    )
}
