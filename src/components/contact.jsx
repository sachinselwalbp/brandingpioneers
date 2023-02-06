import ContactSection from "./contactSection"

export default function Contact(props) {
  const contact_data = {
    title: 'Have an idea?',
    title_highlight: "Let's talk",
    text: "One of the best industry service providers with top tier talented individuals.",
    link: '/contact'
  }

  return <ContactSection bg={props.bg} contact_data={contact_data} />
}
