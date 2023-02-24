export default function CaseStudy({ data }) {
    return (
        <>
            <section className='section-global case-study'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 text-center mb-20">
                            <img loading="lazy" src={data.img} alt={data.alt} />
                        </div>
                        <div className="col-12">
                            <div className="case-study-section">
                                {data.content}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
