import './css/testimonialCards.scss'

export default function TestimonialCards({ data, src }) {
    return (
        <>
            {data.map((e, i) =>
                <div className="col-xl-4 col-lg-6 col-md-6 gy-4" key={i}>
                    <a href={e.youtube} className="testimonial-card d-flex flex-column">
                        <div className='txt-1 color-1 fw-700 mb-20'>“{e.text}”</div>
                        <div className='testimonial-user d-flex align-items-center mt-auto'>
                            <div>
                                <div className='img' style={{ background: `url(${require(`../pages/${src}/${e.userImgUrl}`)}) no-repeat center/cover` }}></div>
                            </div>
                            <div className='ms-3'>
                                <div className='txt-3 color-1 fw-500'>{e.userName}</div>
                                <div className="txt-3">{e.position}</div>
                            </div>
                        </div>
                    </a>
                </div>
            )}
        </>
    )
}
