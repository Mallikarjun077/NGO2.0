import React from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className="min-h-screen bg-[rgba(18,23,26)]  flex flex-col items-center py-12 px-6 md:px-16">
      {/* Title */}
      <h1 className="text-4xl  md:text-5xl font-bold text-white mb-8 text-center mt-24">
        Contact Us 
      </h1>
      <p className="text-green-700 text-center max-w-2xl mb-10">
        Have questions, ideas, or want to get involved?  
        We’d love to hear from you. Fill out the form below or reach us directly.
      </p>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 bg-white md:grid-cols-2 gap-10 w-full max-w-6xl  shadow-2xl rounded-xl p-8 md:p-12">
       

        {/* Contact Form */}
        <form className="space-y-6   ">
          <div>
            <label className="block  font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block  font-medium mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-900  text-white px-6 py-3 rounded-lg font-semibold transition duration-300 w-full md:w-auto"
          >
            Send Message
          </button>
        </form>


         <div className="w-full max-w-6xl mt-8">
        <iframe
          title="NGO Location"
          className="w-full h-80 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.865097432604!2d77.59456231482177!3d12.971598790856955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f3b07b25%3A0xc8eac94a5c29db05!2sBangalore%20Karnataka!5e0!3m2!1sen!2sin!4v1614345610331!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
     <div className="mt-8 space-y-4 space-x-4 font-semibold text-gray-700">
      <h1 className="font-extrabold">Contact Information</h1>
         <h1 >Email : shreebalajifoundation74@gmail.com</h1>
        <h1>Phone : +91 8087678977  | +91 8459485202</h1>
     </div>
      </div>
      
      </div>

    </div>
    </>

  );
};

export default Contact;
