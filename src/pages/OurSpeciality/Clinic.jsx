import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function Clinic() {
  return (
    <>
      <Helmet>
        <title>Clinic</title>
      </Helmet>
      <Hero title="Clinic" parent="Our Speciality"/>
    </>
  )
}