import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function DentalClinic() {
  return (
    <>
      <Helmet>
        <title>Dental Clinic</title>
      </Helmet>
      <Hero title="Dental Clinic" parent="Our Speciality" />
    </>
  )
}