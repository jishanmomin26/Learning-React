import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-header">

        <span className="page-badge">
          CONTACT
        </span>

        <h1>Get in Touch</h1>

        <p>
          This is the Contact route of our React
          single-page application.
        </p>

      </div>

      <div className="contact-card">

        <div className="contact-item">
          <span className="contact-icon">?</span>

          <div>
            <span>Email</span>
            <strong>contact@reactcampus.com</strong>
          </div>
        </div>

        <div className="contact-item">
          <span className="contact-icon">?</span>

          <div>
            <span>Phone</span>
            <strong>+91 98765 43210</strong>
          </div>
        </div>

        <div className="contact-item">
          <span className="contact-icon">¦</span>

          <div>
            <span>Address</span>
            <strong>Navi Mumbai, Maharashtra</strong>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Contact;
