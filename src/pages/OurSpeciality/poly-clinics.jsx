import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function PolyClinics() {
  return (
    <>
      <Helmet>
        <title>Poly Clinics</title>
      </Helmet>
      <Hero title="Poly Clinics" parent="Our Speciality" />
    </>
  )
}