import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function GeneralSurgeons() {
  return (
    <>
      <Helmet>
        <title>General Surgeons</title>
      </Helmet>
      <Hero title="General Surgeons" parent="Our Speciality" />
    </>
  )
}