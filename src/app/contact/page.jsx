import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="container w-2/3">
        <h2 className="text-center my-10 text-4xl font-semibold">Contact Us</h2>

        <ContactCard></ContactCard>

        <div>
            <h2 className="text-xl font-semibold mt-10 text-center">We''d love to hear  <span className="text-red-500">from you</span> </h2>

            <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
