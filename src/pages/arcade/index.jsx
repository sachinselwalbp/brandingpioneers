import Helmet from "react-helmet"

export default function Arcade() {
  return (
    <>
      <Helmet>
        <title>Arcade</title>
      </Helmet>
      <iframe title="Arcade page title" className="airtable-embed" src="https://airtable.com/embed/shrBzcnsHAqgNqpgR?backgroundColor=yellow&viewControls=on" frameBorder="0" onmousewheel="" width="100%" height="533" style={{ background: "transparent", border: "1px solid #ccc" }}></iframe>
    </>
  )
}
