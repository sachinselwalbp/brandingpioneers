export default function Stats({ data }) {
  return (
    <>
      <section className='counter-section dark'>
        <div className="container">
          <div className="row mx-1">
            {data.map((e, i) =>
              <div className="col-6 col-md-3" key={i}>
                <h2 className="display-1">
                  {e.count}
                </h2>
                <p className='txt-1'>{e.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}