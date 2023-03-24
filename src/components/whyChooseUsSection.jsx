import { BsCheckCircleFill } from "react-icons/bs"

export default function WhyChooseUsSection({ data, text, img, bggreen = false }) {
  return (
    <>
      <section className={`section-global ${bggreen ? "bg-shade-green" : ""}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6 align-self-start">
              <div className="section-tag mb-8 color-red">Why choose Us?</div>
              <h2 className='mb-16'>We provide solutions that make our clients' lives simpler</h2>
              {
                text ? <p className="txt-1">{text}</p> : <span></span>
              }
              {data.map((e, i) =>
                <div className='d-flex gap-2 mb-16' key={i}>
                  <div>
                    <BsCheckCircleFill fill="#0FA958" fontSize={24} />
                  </div>
                  <div>
                    <h4 className='mb-0'>{e.title}</h4>
                    <div className="txt-2">{e.text}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-6 text-center align-self-start">
              <img loading='lazy' src={require(`../images/${img}`)} className="img-fluid info-banner-image" alt="Why stact" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}