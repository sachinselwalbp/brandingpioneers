import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function IVFClinics() {
  return (
    <>
      <Helmet>
        <title>IVF Clinics</title>
      </Helmet>
      <Hero title="IVF Clinics" parent="Our Speciality" />
    </>
  )
}