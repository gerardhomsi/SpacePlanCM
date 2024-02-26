"use client";

import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";

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

  // Tailwind CSS classes
  const containerClasses = "w-full text-center flex flex-col items-center justify-center py-10 sm:p-10 gradientLight";
  const titleClasses = "text-[2.5rem] sm:text-6xl text-center underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow mb-4";
  const linkClasses = "underline underline-offset-4 decoration-[#032e83] text-[#cd9a41]";
  const formClasses = "mt-10 flex flex-col w-2/3 sm:w-1/2 lg:w-2/5 normal-case";
  const inputClasses = "h-14 px-4 mb-3 rounded-lg transition-all bg-gray-200 placeholder-[#032e83]";
  const textareaClasses = "h-52 my-3 rounded-lg border p-4 transition-all bg-gray-200 placeholder-[#032e83]";
  const buttonClasses =
    "max-w-sm whitespace-nowrap transition my-6 text-center py-2 px-10 hover:px-2 border-r-2 border-r-[#cd9a41] border-l-2 border-l-[#cd9a41] hover:border-2 hover:border-[#cd9a41] rounded mx-auto";

  return (
    <section id="contact" className={containerClasses}>
      <h2 className={titleClasses}>CONTACT US</h2>
      <h2 className="primaryColor flex flex-col gap-2">
        Please contact Us directly at:
        <a className={linkClasses} href="mailto:gerard.homsi@gmail.com">
          example@gmail.com
        </a>
        <p className="thirdColor">OR</p> through the form below:
      </h2>

      <form className={formClasses} onSubmit={handleSubmit}>
        <input className={inputClasses} name="senderName" type="string" required maxLength={50} placeholder="Full Name" value={formData.senderName} onChange={handleChange} />
        <input className={inputClasses} name="senderEmail" type="email" required maxLength={500} placeholder="Your email" value={formData.senderEmail} onChange={handleChange} />
        <textarea className={textareaClasses} name="message" placeholder="Your message" required maxLength={5000} value={formData.message} onChange={handleChange} />
        <button type="submit" className={buttonClasses}>
          --- Submit ---
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
