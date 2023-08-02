import './css/contact.css'

function Contact() {
  return (
    <section className="contact">
      <section className="contactblurb">
        <h1>Can I talk to someone real please?</h1>
      </section>

      <section className="contacts-container">
        <section className="socials">
          <p>Socials</p>
          <p>@nourishflourish</p>
        </section>

        <section className="email">
          <p>Email</p>
          <a className="emaillink" href="mailto:heythere@nourishflourish.com">heythere@nourishflourish.com</a>
        </section>

        <section className="location">
          <p>Location</p>
          <p>18th Wolsey Street<br />Hackney, London</p>
        </section>

        <section className="phone">
          <p>Phone</p>
          <p>02-1234-5678</p>
        </section>

      </section>
    </section>

  );
}

export default Contact;