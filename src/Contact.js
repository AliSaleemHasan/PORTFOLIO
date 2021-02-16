import React from "react";
import "./Contact.css";
import PlaceIcon from "@material-ui/icons/Place";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_uw0ovyf",
      "template_rb24nfl",
      e.target,
      "user_mogZTEMxqtXMZ8IFVXYVe"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};
function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <h1>Contact with ME</h1>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="text" placeholder="Your Email" name="email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            required
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            name="message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact__getInTouch">
          <h2>Get In Touch</h2>
          <div className="info">
            <div className="info__contain">
              <PlaceIcon />
              <p>Damascus Syria</p>
            </div>
            <div className="info__contain">
              <PhoneIcon />
              <a href="tel: +963 934404992">+963 934404992</a>
            </div>
            <div className="info__contain">
              <EmailIcon />
              <p>ali1saleem1hasan@gmail.com</p>
            </div>
          </div>
          <div className="social"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
