import React from "react";

const ContactUs = () => {
  const submitHandler = () => {
    alert("Message sent successfully.");
  };

  return (
    <div className="h-screen p-10">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("contact.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly h-full pl-10 text-white relative z-10 gap-10">
        <div className="bg-white bg-opacity-20 p-8 mt-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-md text-black w-full lg:w-1/2 max-w-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              onClick={submitHandler}
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 h-full lg:h-[500px] rounded-lg overflow-hidden md:mt-16">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.8530598644206!2d84.82941117539421!3d25.57655497746886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992a9001d14ec65%3A0xae5cfb86e1debacd!2sNIT%20PATNA%20BIHTA%20CAMPUS!5e0!3m2!1sen!2sin!4v1732255691462!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
