import { bebasneue } from "@/app/layout";
import React from "react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="md:m-20" id="contact">
      <h1 className={`${bebasneue.className} text-center`}>Get in touch</h1>
      <div className="justify-center items-center flex p-12">
        <div className="flex flex-col md:flex-row md:text-left text-center items-center justify-center md:space-x-[180px]">
          <div className="p-4">
            <h3>Life & Sole</h3>
            <p>Unit 8 The Enterprise Park</p>
            <p>Forres, Moray</p>
            <p>IV36 2RH</p>
            <p>Phone: 01309 676632</p>
            <p>Email: getfit@lifesoleforres.co.uk</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
