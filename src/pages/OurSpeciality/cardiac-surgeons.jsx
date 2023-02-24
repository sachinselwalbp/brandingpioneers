import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function CardiacSurgeons() {
  return (
    <>
      <Helmet>
        <title>Cardiac Surgeons</title>
      </Helmet>
      <Hero title="Cardiac Surgeons" parent="Our Speciality"/>
    </>
  )
}