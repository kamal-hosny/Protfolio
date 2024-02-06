import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json"
import contactAnimation from "../../../public/animation/contact.json"

export default function Contact() {
  const [state, handleSubmit] = useForm("xeqyekpp");
  return (
    <section id="projects" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
      Let's have a chat. <br/>
      I'm currently open to new opportunities.
      </p>
      <div className="flex form-container">
        <form onSubmit={handleSubmit}>
          <div className="email">
            {/* <label htmlFor="email">Email Address:</label> */}
            <input
              autoComplete="off"
              required
              type="text"
              id="email"
              name="email"
              placeholder="Your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="message">
            {/* <label htmlFor="message">Your message:</label> */}
            <textarea required id="message" name="message" placeholder="Your Message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (<p className="message-succeeded flex"> <Lottie loop={false} className="form-animation" animationData={doneAnimation} /> Your message has been sent successfully!</p>)}

        </form>
        <div className="animation"><Lottie  className="mail-animation" animationData={contactAnimation} /></div>
      </div>
    </section>
  );
}
