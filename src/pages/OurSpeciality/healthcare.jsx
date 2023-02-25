import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function Healthcare() {
  return (
    <>
      <Helmet>
        <title>Healthcare</title>
      </Helmet>
      <Hero title="Healthcare" parent="Our Speciality" />
    </>
  )
}