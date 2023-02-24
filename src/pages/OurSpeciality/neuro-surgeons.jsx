import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function NeuroSurgeons() {
  return (
    <>
      <Helmet>
        <title>Neuro Surgeons</title>
      </Helmet>
      <Hero title="Neuro Surgeons" parent="Our Speciality" />
    </>
  )
}