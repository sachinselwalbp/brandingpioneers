export default function CaseStudyDetail({ data }) {
  return (
    <>
      <section className='section-global case-study'>
        <div className="container container-2">
          <div className="row">
            <div className="col-12 text-center mb-20">
              <img loading='lazy' src={require(`../images/${data.img}`)} className="img-fluid mb-20" alt={data.title} />
            </div>
            <div className="col-12">
              <div className="case-study-section">
                <h2 className='display-2 col-r'>Challenge:</h2>
                <p className='txt-1'>{data.challenge}</p>
                <h2 className='display-2 col-r'>Solution:</h2>
                <p className='txt-1'>{data.solution}</p>
                <h2 className='display-2 col-r'>Results:</h2>
                <ul className='txt-1'>
                  {
                    data.result.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}