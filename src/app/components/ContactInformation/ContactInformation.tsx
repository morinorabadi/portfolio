import React from "react";

const ContactInformation = () => {
  const contactDetails = {
    email: "mori.norabadi@gmail.com",
    github: "https://github.com/morinorabadi",
    phone: "+98938 949 3807",
  };

  return (
    <div className="flex items-center justify-center bg-bgwhite">
      <section className="p-6 rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          Contact Information
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="text-gray-400 font-medium w-20">Email:</span>
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-green-500 hover:underline"
            >
              {contactDetails.email}
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 font-medium w-20">GitHub:</span>
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              {contactDetails.github}
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-gray-400 font-medium w-20">Phone:</span>
            <a
              href={`tel:${contactDetails.phone}`}
              className="text-green-500 hover:underline"
            >
              {contactDetails.phone}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContactInformation;
