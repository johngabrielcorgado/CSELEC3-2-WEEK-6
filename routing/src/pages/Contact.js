import { useLocation } from "react-router-dom";
import './Contact.css'; // Import the CSS file for styling

export default function Contact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div className="contact-container">
      <h2>Hey {name || "there"}, Contact Us</h2>
      <p>
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. 
        Our team is here to assist you and will get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}