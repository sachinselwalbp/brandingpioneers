import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function Chiropractors() {
  return (
    <>
      <Helmet>
        <title>Chiropractors</title>
      </Helmet>
      <Hero title="Chiropractors" parent="Our Speciality" />
    </>
  )
}
