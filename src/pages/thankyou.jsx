import { Helmet } from "react-helmet"
import { HiCheckCircle } from "react-icons/hi"

export default function ThankYouPage() {
    return (
        <>
            <Helmet>
                <title>Thank You</title>
            </Helmet>
            <section className="section-global bg-shade-green">
                <div className="container text-center my-5">
                    <h1 className="d-flex justify-content-center align-items-center gap-3">
                        <HiCheckCircle fill="#0FA958" />
                        <span>Thank You!</span>
                    </h1>
                    <p className="txt-1 fw-500">
                        <span>
                            For reaching out.
                        </span>
                        <span className="color-red">
                            Your Submission just showed up in our inbox.
                        </span>
                    </p>
                </div>
            </section>
        </>
    )
}