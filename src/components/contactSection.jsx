import './css/contactSection.scss'
import scribble from './assets/scribble.svg'

export default function ContactSection() {
    return (
        <>
            <section className='section-global contact-section'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 mb-5 text-center col-cont">
                            <h2>Have an idea?<span className='txt-highlight'> Let's talk<img src={scribble} alt="bg_1" className='scribble' /></span></h2>
                            <p className='txt-1 mb-16'>One of the best industry service providers with top tier talented individuals.</p>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-6 ">
                            <iframe className='h-100 w-100 m-auto home_map' title="Branding Pioneers" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.177652286824!2d77.03991471500397!3d28.413895882504505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2286cb252607%3A0x5b5af71fbe24d212!2sBranding%20Pioneers!5e0!3m2!1sen!2sin!4v1677842597333!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            {/* style="filter: ;" */}
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