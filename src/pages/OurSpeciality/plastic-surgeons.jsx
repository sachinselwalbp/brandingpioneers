import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function PlasticSurgeons() {
  return (
    <>
      <Helmet>
        <title>Plastic Surgeons</title>
      </Helmet>
      <Hero title="Plastic Surgeons" parent="Our Speciality" />
    </>
  )
}