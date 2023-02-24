import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function Surgeons() {
  return (
    <>
      <Helmet>
        <title>Surgeons</title>
      </Helmet>
      <Hero title="Surgeons" parent="Our Speciality" />
    </>
  )
}