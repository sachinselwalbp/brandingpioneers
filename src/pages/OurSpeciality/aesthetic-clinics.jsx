import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function AestheticClinics() {
  return (
    <>
      <Helmet>
        <title>Aesthetic Clinics</title>
      </Helmet>
      <Hero title="Aesthetic Clinics" parent="Our Spaciality" />
    </>
  )
}