
function Contact() {
  return (
    <section className="page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <textarea placeholder="Your Message"></textarea>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
