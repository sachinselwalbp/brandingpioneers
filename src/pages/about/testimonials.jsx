import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function Testimonilas() {
  return (
    <>
      <Helmet>
        <title>Testimonials</title>
      </Helmet>
      <Hero title="Adopted by the most creative individuals" parent="Customer reviews" />
      <Testimonials />
    </>
  )
}

const Testimonials = () => {
  const testimonialData = [
    {
      text: "Branding Pioneers has been a game-changer for our fertility clinic. They brought in leads that we couldn't even have imagined. Highly recommend them!",
      userName: 'Dr Anita Sharma',
      position: 'OVUM Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Aster Clinics has been associated with Branding Pioneers for a few years now, and the results have been remarkable. The team is very efficient, and we are impressed with their dedication and hard work.',
      userName: 'Dr Aziz Rehman',
      position: 'Aster Clinics UAE',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Neelkanth Hospital has been working with Branding Pioneers for the past year, and the experience has been wonderful. They were able to give our IVF centre the boost it needed, and the results speak for themselves.',
      userName: 'Dr Ruchi Gupta',
      position: 'Neelkanth Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'The team at Branding Pioneers is very professional and dedicated. They helped us create a strong online presence for our hospital, and the results have been outstanding.',
      userName: 'Dr Manoj Jain',
      position: 'Pushpanjali Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: "Cloud Nine Fertility partnered with Branding Pioneers for our lead generation campaign, and the team delivered beyond our expectations. They generated leads from all over North India, and we couldn't be happier.",
      userName: 'Dr Nalini Sharma',
      position: 'Cloud Nine Fertility',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Nema Elder Care is extremely satisfied with the services provided by Branding Pioneers. The team understood our requirements perfectly, and we were impressed with their creativity and attention to detail.',
      userName: 'Mr Prashant Sharma',
      position: 'Nema Elder Care',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Aarvy Hospital has been working with Branding Pioneers for over a year now, and we are extremely happy with the results. They helped us increase our online presence and generate leads for our hospital.',
      userName: 'Dr Raghav Sharma',
      position: 'Aarvy Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'The team at Branding Pioneers is very professional and knowledgeable. They helped us improve our brand image and reach a wider audience. Highly recommended!',
      userName: 'Dr Rahul Singh',
      position: 'Raj Hospitals',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Sarvesh Hospital has been associated with Branding Pioneers for a few months, and we are delighted with their services. The team is very efficient and responsive, and they delivered the results as promised.',
      userName: 'Dr Ashok Kumar',
      position: 'Sarvesh Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'SSKidney has been working with Branding Pioneers for a year now, and we are extremely satisfied with the results. They helped us increase our online presence and generated a lot of leads for our hospital.',
      userName: 'Dr Gaurav Verma',
      position: 'SSKidney',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: "CDAS Hospitals partnered with Branding Pioneers for our diabetes hospital, and we were very impressed with the team's knowledge and expertise. They helped us generate a lot of leads, and the results were beyond our expectations.",
      userName: 'Dr. Alok Agarwal',
      position: 'CDAS Hospitals',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'The team at Branding Pioneers is very creative and professional. They helped us improve our brand image and generate leads for our clinic. Highly recommended!',
      userName: 'Dr Anjali Mathur',
      position: 'Skinfinity Clinic',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: "BrandPioneers is the perfect solution for healthcare marketing. They provided us with customized marketing solutions and helped us reach our target audience with ease. Our business has seen tremendous growth in the past few months, and we couldn't have done it without them.",
      userName: 'OVUM Hospital',
      position: 'OVUM Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'We have been working with BrandPioneers for over a year, and we are extremely satisfied with their services. They helped us establish our brand and attract a larger audience. They are professional, reliable, and always deliver results.',
      userName: 'Aster Clinics UAE',
      position: 'Aster Clinics',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'BrandPioneers helped us increase our online presence and generate leads for our hospital. They are incredibly knowledgeable and always come up with innovative solutions that have benefited us immensely.',
      userName: 'Neelkanth Hospital',
      position: 'Neelkanth Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Pushpanjali Hospital has been working with BrandPioneers for a year, and we are very impressed with their work. They have helped us reach our target audience and generate more leads than we ever thought possible.',
      userName: 'Pushpanjali Hospital',
      position: 'Pushpanjali Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Working with BrandPioneers has been a game-changer for our fertility camp lead generation. They helped us reach a wider audience and generated more leads than we ever thought possible. Their team is incredibly professional and knowledgeable.',
      userName: 'Cloud Nine Fertility',
      position: 'Cloud Nine Fertility',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Nema Elder Care has been working with BrandPioneers for a few months now, and we are extremely happy with the results. They helped us reach our target audience and increase our online presence. They are a reliable and professional agency.',
      userName: 'Nema Elder Care',
      position: 'Nema Elder Care',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Aarvy Hospital has been working with BrandPioneers for over a year, and we are very satisfied with their services. They have helped us reach our target audience and generate more leads than we ever thought possible. They are a professional and innovative team.',
      userName: 'Aarvy Hospital',
      position: 'Aarvy Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Working with BrandPioneers has been a fantastic experience. They helped us establish our brand and increase our online presence. Their team is incredibly knowledgeable and always delivers results.',
      userName: 'Raj Hospitals',
      position: 'Raj Hospitals',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: 'Sarvesh Hospital has been working with BrandPioneers for a few months now, and we are very impressed with their work. They helped us reach our target audience and generated more leads than we ever thought possible. Their team is professional and reliable.',
      userName: 'Sarvesh Hospital',
      position: 'Sarvesh Hospital',
      userImgUrl: 'assets/user1.svg'
    },
    {
      text: '"CDAS Hospitals has been working with BrandPioneers for over a year, and we are very satisfied with their services. They helped us increase our online presence and reach our target audience. Their team is professional and knowledgeable, and we highly recommend them.',
      userName: 'CDAS Hospitals',
      position: 'CDAS Hospitals',
      userImgUrl: 'assets/user1.svg'
    }
  ]

  return (
    <>
      <div className="section-global bg-shade-blue">
        <div className="container">
          <div className="row">
            {
              testimonialData.map((e, i) =>
                <div className="col-xl-4 col-lg-6 col-md-6 gy-4" key={i}>
                  <div className="testimonial-page-card d-flex flex-column">
                    <div className='txt-1 color-1 fw-700 mb-20'>“{e.text}”</div>
                    <div className='testimonial-user d-flex align-items-center mt-auto'>
                      {/* <div>
                        <div className='img' style={{ background: `url(${require(`../pages/${src}/${e.userImgUrl}`)}) no-repeat center/cover` }}></div>
                      </div> */}
                      <div className='ms-3'>
                        <div className='txt-3 color-1 fw-500'>{e.userName}</div>
                        <div className="txt-3">{e.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  )
}
