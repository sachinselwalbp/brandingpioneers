import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function MedicalTourism() {
  return (
    <>
      <Helmet>
        <title>Medical Tourism</title>
      </Helmet>
      <Hero title="Medical Tourism" parent="Our Speciality"/>
    </>
  )
}