import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function Startups() {
  return (
    <>
      <Helmet>
        <title>Startups</title>
      </Helmet>
      <Hero title="Startups" parent="Our Speciality" />
    </>
  )
}