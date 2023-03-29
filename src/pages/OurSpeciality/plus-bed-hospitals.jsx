import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import BrandSection from "../../components/brandSection";
import BlogCards from "../../components/blogCards";
import CaseStudiesCard from "../../components/caseStudiesCards";
import FAQSection from "../../components/faqSection";
import TestimonialCards from "../../components/testimonialCards";
import "./style.scss";
import {
  BsPlayCircleFill,
  BsCheckCircleFill,
  BsArrowRight,
} from "react-icons/bs";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function OurSpeciality() {
  return (
    <>
      <Helmet>
        <title>Why 100+ Bed Hospitals Need Digital Marketing </title>
      </Helmet>
      <div className="landing-3">
        <Hero />
        <About />
        <Services />
        <Projects />
        <InfoSection />
        <Testimonials />
        <FAQ />
        <Blog />
      </div>
    </>
  );
}

const FAQ_data = [
  {
    title:
      "What is healthcare branding, and why is it important for hospitals?",
    text: "Healthcare branding is creating a unique identity for a healthcare organization and promoting its services to a targeted audience. It is important for hospitals because it helps them stand out in a competitive market and attract new patients.",
  },
  {
    title:
      "How can digital marketing help healthcare organizations attract new patients?",
    text: "Digital marketing can help healthcare organizations attract new patients by increasing their visibility online, promoting their services through targeted advertising and content marketing, and improving the patient experience through easy access to information and appointment scheduling.",
  },
  {
    title:
      "What types of digital marketing services do Branding Pioneers offer?",
    text: "Branding Pioneers offers various digital marketing services for healthcare organizations, including digital strategy, search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing.",
  },
  {
    title:
      "How do Branding Pioneers develop personalized marketing solutions for healthcare organizations?",
    text: "Branding Pioneers develops personalized marketing solutions for healthcare organizations by working closely with them to understand their unique values and services. Our team of experts then develops a comprehensive brand strategy and marketing plan that accurately reflects our client's needs and meets their specific goals.",
  },
  {
    title:
      "What is the process for working with Branding Pioneers on a healthcare branding or marketing project?",
    text: "Working with Branding Pioneers on a healthcare branding or marketing project involves an initial consultation to understand the client's needs, followed by a detailed proposal outlining our approach and timeline. Once the proposal is accepted, we work closely with our clients to develop and implement a comprehensive marketing plan, with ongoing tracking and reporting to measure success and make adjustments as needed.",
  },
];

const Hero = () => {
  const brands = [
    {
      name: "Apollo",
      imgUrl: "apollo.svg",
    },
    {
      name: "asterclinic",
      imgUrl: "asterclinic.png",
    },
    {
      name: "HCAH",
      imgUrl: "hcah.png",
    },
    {
      name: "Medanta",
      imgUrl: "medanta.png",
    },
    {
      name: "Cloudnine",
      imgUrl: "cloudnine.svg",
    },
  ];
  return (
    <>
      <section className="section-global no-border bg-shade-green hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Enterprise solutions for next future</h1>
            </div>
            <div className="col-lg-6">
              <p className="txt-1 mb-20">
                100+ bed hospitals need digital marketing to increase their
                visibility, provide a competitive advantage, improve the patient
                experience, and cost-effectively promote their services. A
                strong digital marketing strategy can help hospitals reach a
                wider audience, attract new patients, and improve patient
                satisfaction.
              </p>
              <Link to="/" className="btn btn-primary btn-lg">
                Get in touch
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="hero-image-container">
                <img
                  loading="lazy"
                  src={require("../../images/hero_image.jpg")}
                  className="img-fluid"
                  alt="Stact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandSection
        brands={brands}
        bg="bg-shade-green"
        light
        src={"OurSpeciality"}
      />
    </>
  );
};

const About = () => {
  const capabilities1 = [
    {
      title: "Increased Visibility",
      text: "With a strong online presence and digital marketing strategy, 100+ bed hospitals can increase their visibility and reach a wider audience. This can lead to more patients and increased revenue.",
    },
  ];

  const capabilities2 = [
    {
      title: "Competitive Advantage",
      text: "Hospitals that invest in digital marketing have a competitive advantage over those that do not. Hospitals can effectively promote their services and attract new patients by using social media, email marketing, and other digital marketing tactics.",
    },
    {
      title: "Improved Patient Experience",
      text: "Digital marketing can also improve the patient experience by providing easy access to information about hospital services, doctor profiles, and appointment scheduling. This can improve patient satisfaction and increase the likelihood of return visits.",
    },
    {
      title: "Cost-Effective",
      text: "Digital marketing can be a cost-effective way to promote hospital services compared to traditional marketing methods. With the ability to target specific demographics and track results, digital marketing can help hospitals get the most out of their marketing budget.",
    },
  ];

  const counter_data = [
    {
      count: "5K+",
      text: "Projects",
    },
    {
      count: "75",
      text: "Awards",
    },
    {
      count: "3m+",
      text: "Users",
    },
  ];
  return (
    <>
      <section className="section-global">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6 align-self-center d-flex justify-content-center">
              <div className="about-img-container">
                <a href="/">
                  <img
                    loading="lazy"
                    src={require(`../../images/about.jpg`)}
                    className="img-fluid"
                    alt="about"
                  />
                  <BsPlayCircleFill fill="white" fontSize={77} />
                </a>
                <div className="counter-section d-flex justify-content-between bg-shade-blue">
                  {counter_data.map((e, i) => (
                    <div className="count text-center" key={i}>
                      <h2 className="mb-0">{e.count}</h2>
                      <div className="txt-2">{e.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-tag mb-8">Our Core Capabilities</div>
              <h2 className="mb-16">
                Why 100+ Bed Hospitals Need Digital Marketing
              </h2>
              <p className="txt-1 mb-20">
                100+ bed hospitals need digital marketing to increase their
                visibility, provide a competitive advantage, improve the patient
                experience, and cost-effectively promote their services. A
                strong digital marketing strategy can help hospitals reach a
                wider audience, attract new patients, and improve patient
                satisfaction.{" "}
              </p>
              <div>
                <div className="row gy-4">
                  {capabilities1.map((e, i) => (
                    <div className="col-lg-12" key={i}>
                      <div className="d-flex capability-card" key={i}>
                        <div className="count">{i + 1}</div>
                        <div className="ms-2">
                          <div className="txt-2 fw-700 color-1">{e.title}</div>
                          <div className="txt-3">{e.text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-lg-5 mt-0">
            <div className="row gy-4 mt-0 mt-lg-5">
              {capabilities2.map((e, i) => (
                <div className="col-lg-12 col-md-6" key={i}>
                  <div className="d-flex capability-card" key={i}>
                    <div className="count">{i + 2}</div>
                    <div className="ms-2">
                      <div className="txt-2 fw-700 color-1">{e.title}</div>
                      <div className="txt-3">{e.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Services = () => {
  const services = [
    {
      title: "Digital Strategy",
      text: "We work closely with 100+ bed hospitals to develop a comprehensive digital marketing strategy that accurately represents their unique services and values. Our team of experts specializes in developing personalized marketing solutions to help hospitals reach a wider audience and increase their online visibility.",
      imgUrl: "service_ico1.svg",
    },
    {
      title: "Search Engine Optimization (SEO)",
      text: "Our SEO services help 100+ bed hospitals increase their visibility on search engines and attract more organic traffic to their website. We use a combination of keyword research, content optimization, and technical SEO tactics to improve website rankings and increase online traffic.",
      imgUrl: "service_ico2.svg",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      text: "We specialize in developing and managing PPC advertising campaigns that effectively promote hospital services and attract new patients. Our team of experts uses targeted advertising strategies to reach specific demographics and increase conversions.",
      imgUrl: "service_ico3.svg",
    },
    {
      title: "Social Media Marketing",
      text: "We offer services to help 100+ bed hospitals engage with their audience and promote their services on popular social media platforms. Our team of experts uses targeted advertising strategies to increase engagement, build brand awareness, and attract new patients.",
      imgUrl: "service_ico4.svg",
    },
    {
      title: "Content Marketing",
      text: "Our services help 100+ bed hospitals create valuable, informative, and engaging content to attract new patients and improve the patient experience. We use a variety of content formats, including blog posts, videos, and infographics, to promote hospital services and establish thought leadership in the healthcare industry.",
      imgUrl: "service_ico5.svg",
    },
  ];

  return (
    <>
      <section className="section-global bg-shade-1">
        <div className="container">
          <div className="mb-5">
            <div className="text-center">
              <div className="section-tag mb-8">Our Core Capabilities</div>
              <p className="txt-1 mb-5">
                Branding Pioneers offers core capabilities for 100+ bed
                hospitals, including digital strategy, SEO, PPC advertising,
                social media marketing, and content marketing. Our personalized
                marketing solutions can help hospitals increase visibility,
                attract new patients, and improve the patient experience.
              </p>
            </div>
            <div className="col-lg-12">
              <div className="row gx-md-5 gy-5">
                {services.map((e, i) => (
                  <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6" key={i}>
                    <div className="service text-center">
                      <div className="service-icon mb-8">
                        <img
                          loading="lazy"
                          src={require(`../../images/${e.imgUrl}`)}
                          className="mb-8"
                          alt={e.title}
                        />
                      </div>
                      <h3>{e.title}</h3>
                      <ul className="list-unstyled txt-3 mb-8 list-unstyled">
                        <p className="txt-3">{e.text}</p>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Projects = () => {
  const projects_data = [
    {
      category: "development",
      text: "LAPI - Single entry point API management",
      imgUrl: "project1.png",
      color: "#F97316",
      link: "/project-detail",
    },
    {
      category: "design",
      text: "How Deko manages to scale using Stact",
      imgUrl: "project2.png",
      color: "#2D7EF8",
      link: "/project-detail",
    },
    {
      category: "branding",
      text: "Teno's journey from small to giant",
      imgUrl: "project3.png",
      color: "#00AA45",
      link: "/project-detail",
    },
  ];

  return (
    <>
      <section className="section-global">
        <div className="container">
          <div className="row mb-40 justify-content-between gy-4">
            <div className="col-xl-5 col-lg-5">
              <div className="section-tag mb-8">Case Studies</div>
              <h2>Our recently compeleted projects</h2>
            </div>
            <div className="col d-flex align-self-center">
              <Link
                to="/projects"
                className="btn btn-outline btn-arrow ms-lg-auto"
              >
                See all case studies
                <BsArrowRight />
              </Link>
            </div>
          </div>
          <div className="row">
            <CaseStudiesCard data={projects_data} src="OurSpeciality" />
          </div>
        </div>
      </section>
    </>
  );
};

const InfoSection = () => {
  const wcsData1 = [
    {
      title: "Expertise",
      text: "Our team of healthcare branding experts has years of experience developing personalized marketing solutions for various healthcare organizations. We have the expertise and knowledge to help you establish a strong brand identity and attract new patients.",
    },
  ];

  const wcsData2 = [
    {
      title: "Personalized Solutions",
      text: "We understand that every healthcare organization is unique, so we develop personalized marketing solutions that accurately represent your values and services. We work closely with our clients to develop a comprehensive brand strategy and marketing plan that meets their needs.",
    },
    {
      title: "Results-Driven Approach",
      text: "At Branding Pioneers, we are committed to delivering results. We use data-driven tactics and strategies to track and measure the success of our marketing campaigns, and we continually refine our approach to ensure that our clients see a positive return on investment.",
    },
    {
      title: "Comprehensive Services",
      text: "We offer a comprehensive range of branding and marketing services for healthcare organizations, including digital strategy, SEO, PPC advertising, social media marketing, and content marketing. Our services are designed to help you increase your visibility, attract new patients, and improve the patient experience.",
    },
    {
      title: "Client Satisfaction",
      text: "Our clients are our top priority, and we strive to exceed their expectations with every project. We have a proven track record of delivering high-quality branding and marketing solutions that meet our client's needs and exceed their expectations.",
    },
  ];

  return (
    <>
      <section className="section-global bg-shade-green">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6 align-self-center">
              <div className="section-tag mb-8">Why choose Us?</div>
              <h2 className="mb-16">
                We provide solutions that make our clients' lives simpler
              </h2>
              <p className="txt-1">
                Branding Pioneers is ideal for healthcare organizations looking
                for a reliable and effective branding and marketing partner. Our
                team of experts has the experience and expertise to develop
                personalized solutions that accurately represent our client's
                values and services.
              </p>
              {wcsData1.map((e, i) => (
                <div className="d-flex gap-2 mb-16" key={i}>
                  <div>
                    <BsCheckCircleFill fill="#0FA958" fontSize={24} />
                  </div>
                  <div>
                    <h4 className="mb-0">{e.title}</h4>
                    <div className="txt-2">{e.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 text-center align-self-center">
              <img
                loading="lazy"
                src={require("../../images/info.png")}
                className="img-fluid info-banner-image"
                alt="Why stact"
              />
            </div>
            <div className="col-lg-12">
              {wcsData2.map((e, i) => (
                <div className="d-flex gap-2 mb-16" key={i}>
                  <div>
                    <BsCheckCircleFill fill="#0FA958" fontSize={24} />
                  </div>
                  <div>
                    <h4 className="mb-0">{e.title}</h4>
                    <div className="txt-2">{e.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Blog = () => {
  const blog_data = [
    {
      category: "leadership",
      title: "How Stact helps you make values visible in your business.",
      date: "09 Sept, 2021",
      imgUrl: "blog_thumb1.jpg",
      link: "/blog-article",
    },
    {
      category: "announcement",
      title: "Values (What They Are, Why They're Important)",
      date: "09 Sept, 2021",
      imgUrl: "blog_thumb2.jpg",
      link: "/blog-article",
    },
    {
      category: "culture",
      title: "How Our Tools Will Change The Way You Create Content",
      date: "09 Sept, 2021",
      imgUrl: "blog_thumb3.jpg",
      link: "/blog-article",
    },
  ];
  return (
    <>
      <section className="section-global bg-shade-blue">
        <div className="container">
          <div className="row mb-40 justify-content-between gy-4">
            <div className="col-xl-5 col-lg-5">
              <div className="section-tag mb-8">Blog</div>
              <h2>Stay updated with our insider affairs</h2>
            </div>
            <div className="col d-flex align-self-center">
              <Link to="/blog" className="btn btn-outline btn-arrow ms-lg-auto">
                Go to blog
                <BsArrowRight />
              </Link>
            </div>
          </div>
          <div className="row">
            <BlogCards data={blog_data} src="OurSpeciality" />
          </div>
        </div>
      </section>
    </>
  );
};

function FAQ() {
  return (
    <>
      <section className="section-global" id="FAQs">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
              <div className="section-tag mb-8">FAQs</div>
              <h2>Do You Have Questions?</h2>
            </div>
          </div>
          <FAQSection border="false" data={FAQ_data} />
        </div>
      </section>
    </>
  );
}

function Testimonials() {
  const testimonial_data = [
    {
      brandImgUrl: "review_brand1.svg",
      text: "We hired Branding Pioneers to help us establish a strong online presence and attract new patients to our hospital. Their team of healthcare branding experts developed a comprehensive digital marketing strategy that accurately reflected our services and values. Thanks to their personalized solutions, our hospital has seen a significant increase in online traffic and patient inquiries.",
      userName: "Dr. Sarah Lee",
      position: "Hospital Administrator",
      userImgUrl: "review1.jfif",
    },
    {
      brandImgUrl: "review_brand2.svg",
      text: "Branding Pioneers helped us develop a comprehensive content marketing strategy that effectively promoted our dental clinic's unique services. Their team of experts created valuable, informative, and engaging content that attracted new patients and improved the patient experience. We highly recommend their services to any healthcare organization looking to establish a strong online presence.",
      userName: "Dr. John Smith",
      position: "Dentist",
      userImgUrl: "review2.jfif",
    },
    {
      brandImgUrl: "review_brand3.svg",
      text: "We were impressed by Branding Pioneers' expertise in developing personalized marketing solutions for IVF clinics. Their team of healthcare branding experts helped us increase our online visibility and attract new patients with targeted social media advertising and content marketing. Thanks to their services, our clinic has seen a significant increase in new patient inquiries and treatment admissions.",
      userName: "Jane Doe",
      position: "IVF Clinic Director",
      userImgUrl: "review3.jfif",
    },
  ];

  return (
    <>
      <div className="section-global bg-shade-blue">
        <div className="container">
          <div className="row mb-40 justify-content-between gy-4">
            <div className="col-xl-5 col-lg-5">
              <div className="section-tag mb-8">Customer reviews</div>
              <h2>Adopted by the most creative individuals</h2>
            </div>
            <div className="col d-flex align-self-center">
              <Link
                to="/about/testimonials"
                className="btn btn-outline btn-arrow ms-lg-auto"
              >
                <span>See all reviews</span>
                <TbArrowNarrowRight fontSize={20} />
              </Link>
            </div>
          </div>
          <div className="row">
            <TestimonialCards data={testimonial_data} src="services" />
          </div>
        </div>
      </div>
    </>
  );
}
