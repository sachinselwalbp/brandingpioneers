const navBarLinks = [
  {
    title: 'Home',
    dropdown: false,
    link: '/'
  },
  {
    title: 'About',
    dropdown: true,
    children: [
      {
        title: 'About',
        link: '/about',
        subLink: true,
        grandChild: [
          { title: 'Who we are', href: '/about/who-we-are' },
          { title: 'Why choose us', href: '/about/why-choose-us' },
          { title: 'Testimonials', href: '/about/testimonials' }
        ]
      },
      {
        title: 'Our Work',
        link: '/our-work',
        subLink: true,
        grandChild: [

          { title: 'Websites', href: '/our-work/websites' },
          { title: 'Case Studies', href: '/our-work/case-studies' },
          { title: 'Projects', href: '/projects' }
        ]
      },
      {
        title: 'Our Speciality',
        link: 'our-speciality',
        subLink: true,
        grandChild: [
          { title: 'Hospitals', href: '/our-speciality/healthcare/hospitals' },
          { title: 'Dentists', href: '/our-speciality/healthcare/dentists' },
          { title: 'Plastic Surgeons', href: '/our-speciality/healthcare/plastic-surgeons' },
          { title: 'Orthopedics', href: '/our-speciality/healthcare/orthopedics' },
          { title: 'Chiropractors', href: '/our-speciality/healthcare/chiropractors' },
          { title: 'Infertility and IVF', href: '/our-speciality/healthcare/infertility-and-ivf' },
          { title: 'Aesthetic/Dermatologist', href: '/our-speciality/healthcare/aesthetic-dermatologist' },
          { title: 'Surgeons', href: '/our-speciality/healthcare/surgeons' },
          { title: 'Medical tourism', href: '/our-speciality/healthcare/medical-tourism' },
          { title: 'Healthcare startups', href: '/our-speciality/healthcare/healthcare-startups' }
        ]
      }
    ]
  },
  {
    title: 'Services',
    dropdown: true,
    children: [

    ]
  },
  {
    title: 'Blog',
    dropdown: false,
    link: '/blog'
  },
  {
    title: 'Pages',
    dropdown: true,
    children: [
      { title: 'SEO Agency for Doctors', href: '/seo-agency-for-doctors' },
      { title: 'Digital Marketing Agency for Hospital', href: '/digital-marketing-agency-for-hospital' },
      { title: 'SEO Company for Clinic/Centres', href: '/seo-company-for-clinic-centres' },
      { title: 'Digital Marketing for Dental', href: '/digital-marketing-for-dental' },
      { title: 'Why SEO is important for Healthcare', href: '/why-seo-is-important-for-healthcare' },
      { title: 'Dynamic Website Design for Healthcare', href: '/dynamic-website-design-for-healthcare' },
      { title: 'Responsive Website Design for Healthcare', href: '/responsive-website-design-for-healthcare' },
      { title: 'Responsive Website Design for Medical', href: '/responsive-website-design-for-medical' },
      { title: 'SEO Agency in India', href: '/seo-agency-in-india' },
      { title: 'Medical Digital Marketing in India', href: '/medical-digital-marketing-in-india' },
      { title: 'Orthopedic Marketing', href: '/orthopedic-marketing' },
      { title: 'Dental Marketing', href: '/dental-marketing' },
      { title: 'Chiropractor Marketing', href: '/chiropractor-marketing' },
      { title: 'Video Marketing for Healthcare Practice', href: '/video-marketing-for-healthcare-practice' },
      { title: 'Startup Website for Healthcare', href: '/startup-website-for-healthcare' },
      { title: 'E-Commerce Development for Medical', href: '/e-commerce-development-for-medical' },
      { title: 'Digital Marketing Agency for Medical', href: '/digital-marketing-agency-for-medical' },
      { title: 'Social Media Marketing for Hospital', href: '/social-media-marketing-for-hospital' },
      { title: 'Social Media Marketing for Dental', href: '/social-media-marketing-for-dental' },
      { title: 'Video Marketing for Healthcare', href: '/video-marketing-for-healthcare' },
      { title: 'Video Content Creation for Healthcare', href: '/video-content-creation-for-healthcare' },
      { title: 'Mobile Website Design', href: '/mobile-website-design' },
      { title: 'Website Revamps for Healthcare', href: '/website-revamps-for-healthcare' },
      { title: 'Redesign Medical Website', href: '/redesign-medical-website' },
      { title: 'Physicians Digital Marketing Services', href: '/physicians-digital-marketing-services' },
      { title: 'Pharma Digital Marketing Company', href: '/pharma-digital-marketing-company' },
      { title: 'Healthcare Logo', href: '/healthcare-logo' },
      { title: 'Local SEO Marketing for Hospital', href: '/local-seo-marketing-for-hospital' },
      { title: 'Local SEO Marketing for Clinic', href: '/local-seo-marketing-for-clinic' },
      { title: 'Hospital Marketing', href: '/hospital-marketing' },
      { title: 'Paid Advertising for Healthcare', href: '/paid-advertising-for-healthcare' },
    ]
  }
]

export default navBarLinks;