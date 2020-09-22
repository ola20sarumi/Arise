import React, { useState } from "react";
import "./ContactUs.css";
import images from "../../images/img-8.jpg";

function ContactUs() {
  return (
    <form className="form">
      <h1> CONTACT US</h1>

      <label>Name</label>
      <input placeholder="Name" />

      <label>Email</label>
      <input placeholder="Email" />

      <label>Message</label>
      <textarea placeholder="Message"></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}
export default ContactUs;
