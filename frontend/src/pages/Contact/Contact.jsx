import React, { useRef, useState } from "react";
import "../Contact/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Message sent successfully!");
          setSending(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
          setSending(false);
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="bx bx-headphone"></i> Contact Me
      </h2>

      <div className="container">
        <div className="content">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <div className="form-group">
              <div className="field-row">
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <i className="bx bxs-user"></i>
                </div>
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    autoCapitalize="none"
                    inputMode="email"
                    autoCorrect="off"
                    spellCheck={false}
                  />
                  <i className="bx bxl-gmail"></i>
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                  />
                  <i className="bx bxs-location-plus"></i>
                </div>
                <div className="field">
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                  />
                  <i className="bx bxs-phone"></i>
                </div>
              </div>

              <div className="message">
                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
                <i className="bx bxs-message-dots"></i>
              </div>
            </div>

            <div className="button-area">
              <button className="send bx bx-send" type="submit">{sending ? "Sending..." : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
