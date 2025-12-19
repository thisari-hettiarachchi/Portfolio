import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
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
    <section className="relative bg-gray-50 py-16" id="contact">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-80 h-80 rounded-full bg-blue-400/10"></div>
        <div className="absolute bottom-1/5 right-1/5 w-80 h-80 rounded-full bg-blue-400/8"></div>
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
        <i className="bx bx-headphone"></i> Contact Me
        <span className="block w-20 h-1 mx-auto mt-2 bg-blue-400 rounded"></span>
      </h2>

      {/* Form Container */}
      <div className="relative z-10 container mx-auto px-6">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md border border-blue-200 rounded-2xl p-8 flex flex-col gap-6 shadow-lg"
        >
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          {/* Row 1: Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full h-14 px-4 pl-14 rounded-lg border-2 border-blue-200 focus:border-blue-400 focus:shadow-lg transition"
              />
              <i className="bx bxs-user absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-xl pointer-events-none"></i>
            </div>
            <div className="relative flex-1">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full h-14 px-4 pl-14 rounded-lg border-2 border-blue-200 focus:border-blue-400 focus:shadow-lg transition"
              />
              <i className="bx bxl-gmail absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-xl pointer-events-none"></i>
            </div>
          </div>

          {/* Row 2: Address & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="w-full h-14 px-4 pl-14 rounded-lg border-2 border-blue-200 focus:border-blue-400 focus:shadow-lg transition"
              />
              <i className="bx bxs-location-plus absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-xl pointer-events-none"></i>
            </div>
            <div className="relative flex-1">
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                className="w-full h-14 px-4 pl-14 rounded-lg border-2 border-blue-200 focus:border-blue-400 focus:shadow-lg transition"
              />
              <i className="bx bxs-phone absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-xl pointer-events-none"></i>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
              className="w-full min-h-[150px] max-h-[250px] px-4 pl-14 py-4 rounded-lg border-2 border-blue-200 focus:border-blue-400 focus:shadow-lg resize-y transition"
            />
            <i className="bx bxs-message-dots absolute left-4 top-4 text-blue-400 text-xl pointer-events-none"></i>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-3 bg-blue-400 text-white py-4 rounded-full font-semibold text-lg hover:bg-blue-500 transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <i className="bx bx-send"></i>
            {sending ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
