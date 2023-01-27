import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const CaseStudy = ({ data }) => {
    return (
        <>
            <section className='section-global case-study'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 text-center mb-20">
                            <img loading="lazy" src={`https://s012.ba.hostcafe.cc/${data.FeaturedImage.data.attributes.url}`} alt='' />
                        </div>
                        <div className="col-12">
                            <div className="case-study-section">
                                <ReactMarkdown>{data.content}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaseStudy