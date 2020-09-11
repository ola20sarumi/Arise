import React, { useState } from "react";
import "../../App.css";

export default function ContactUs() {
  return (
    <form className="form">
      <h1>CONTACT US</h1>

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
