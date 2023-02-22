export default function FooterContact() {
  return (
    <>
      <section className='section-global'>
        <div className="container container-2">
          <div className="row gy-5">
            <div className="col-lg-6">
              <h2 className='mb-16'>Conatct our sales and support team</h2>
              <p className="txt-1">We cut through the clutter to uncover new opportunities, and always ensure customer satisfaction</p>
            </div>
            <div className="col-lg-6">
              <form className="row g-3">
                <div className="col-md-12">
                  <label className="form-label">Name*</label>
                  <input type="text" className="form-control" placeholder="Jhon Doe" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Email*</label>
                  <input type="email" className="form-control" placeholder="jhondoe@email.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Subject*</label>
                  <input type="text" className="form-control" placeholder="Enter subject" required />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Message*</label>
                  <textarea className="form-control" rows="4" placeholder="How can we help you?" required></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}