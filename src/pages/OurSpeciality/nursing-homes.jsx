import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function NursingHomes() {
  return (
    <>
      <Helmet>
        <title>Nursing Homes</title>
      </Helmet>
      <Hero title="Nursing Homes" parent="Our Speciality" />
    </>
  )
}