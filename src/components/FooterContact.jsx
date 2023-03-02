export default function FooterContact() {
  return (
    <>
      <section className='section-global'>
        <div className="container container-2">
          <div className="row gy-5">
            <div className="col-lg-6">
              <h2 className='mb-16'>Conatct our sales and support team</h2>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-5 display-2">Conatct our sales and support team</h2>
              <form className="row g-3" action="https://app.headlessforms.cloud/api/v1/form-submission/VFEVuhdpaR" method="POST" enctype="multipart/form-data">
                <div className="col-md-12">
                  <label className="form-label">Name*</label>
                  <input type="text" name='name' className="form-control" placeholder="Jhon Doe" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Email*</label>
                  <input type="email" name='email' className="form-control" placeholder="jhondoe@email.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Phone*</label>
                  <input type="tel" name='phone' className="form-control" placeholder="Enter Phone Number" required />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Message*</label>
                  <textarea className="form-control" name='message' rows="4" placeholder="How can we help you?" required></textarea>
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