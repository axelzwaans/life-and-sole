"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { CiUser, CiMail, CiInboxIn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { FiChevronsRight } from "react-icons/fi";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <form className="flex flex-col gap-y-4 w-[400px]" onSubmit={handleSubmit}>
      <h3 className="border-b border-[#ff0000] w-fit text-left">
        Do you have any questions? <br /> Send us a message and we&apos;ll get
        back to you.
      </h3>
      <div className="relative flex items-center">
        <Input
          required
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
          minLength={2}
        />
        <CiUser className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          required
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          minLength={2}
        />
        <CiMail className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input
          required
          type="text"
          name="subject"
          value={form.subject}
          placeholder="Subject"
          onChange={handleChange}
          minLength={2}
        />
        <CiInboxIn className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea
          required
          name="message"
          value={form.message}
          placeholder="Type your message here..."
          onChange={handleChange}
          minLength={20}
        />
        <FaRegMessage className="absolute top-4 right-6" size={20} />
      </div>
      <button
        className="btn-primary flex items-center justify-between group w-[110px]"
        type="submit"
      >
        Submit
        <div className="group-hover:translate-x-1 duration-300">
          <FiChevronsRight size={20} />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
