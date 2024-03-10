import ContactForm from "./ContactForm";
import Container from "./Container";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-content3">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119625.15612036659!2d-54.69664550019531!3d-20.45343794259285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6726b2b9f27%3A0xf5a8469ebc84d2c1!2sCampo%20Grande%2C%20MS!5e0!3m2!1spt-BR!2sbr!4v1702075033507!5m2!1spt-BR!2sbr"
          loading="lazy"
          style={{ filter: "grayscale(0.7)contrast(1.2)opacity(0.6)" }}
        ></iframe>
      </div>
      <Container>
        <div className="sm:py-16 py-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
