"use client";

import { sendEmail } from "@/actions/sendEmail";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(formData);
      setFormData({ senderName: "", senderEmail: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="w-full text-center flex flex-col items-center justify-center primaryColor py-10 sm:p-10 white-gradient">
      <h2 className="text-[3.5rem] sm:text-[6rem] text-center underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow">CONTACT US</h2>
      <h2 className="primaryColor flex flex-col gap-2">
        Please contact Us directly at:
        <a className="underline underline-offset-4 decoration-[#032e83] text-[#cd9a41]" href="mailto:gerard.homsi@gmail.com">
          example@gmail.com
        </a>
        <p className="thirdColor">OR</p> through the form below:
      </h2>

      <form className="mt-10 flex flex-col w-2/3 sm:w-1/2 lg:w-2/5 normal-case" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 mb-3 rounded-lg transition-all bg-[#cd9a41] placeholder-[#032e83]"
          name="senderName"
          type="string"
          required
          maxLength={50}
          placeholder="Full Name"
          value={formData.senderName}
          onChange={handleChange}
        />
        <input
          className="h-14 px-4 rounded-lg transition-all bg-[#cd9a41] placeholder-[#032e83]"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={handleChange}
        />
        <textarea
          className="h-52 my-3 rounded-lg border p-4 transition-all bg-[#cd9a41] placeholder-[#032e83]"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-2/5 whitespace-nowrap transition-all text-center p-2 border-r-2 border-r-[#cd9a41] border-l-2 border-l-[#cd9a41] hover:border-2 hover:border-[#cd9a41] hover:w-1/3 rounded mt-6 mx-auto"
        >
          ------ SUBMIT ------
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
