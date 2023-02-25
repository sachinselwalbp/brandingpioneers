import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function SEO() {
  return (
    <>
      <Helmet>
        <title>SEO</title>
      </Helmet>
      <Hero title="SEO" parent="Services" />
    </>
  )
}