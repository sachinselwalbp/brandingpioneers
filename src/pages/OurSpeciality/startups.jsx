import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

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