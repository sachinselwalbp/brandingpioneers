import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function Orthopedician() {
  return (
    <>
      <Helmet>
        <title>Orthopedician</title>
      </Helmet>
      <Hero title="Orthopedician" parent="Our Speciality" />
    </>
  )
}