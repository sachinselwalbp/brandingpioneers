export default function Stats({ data }) {
  return (
    <>
      <section className='counter-section dark'>
        <div className="container">
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-5">
            {data.map((e, i) =>
              <div className="flex-grow-1 text-center" key={i}>
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