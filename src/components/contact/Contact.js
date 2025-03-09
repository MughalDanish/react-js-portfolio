import React, { useState } from "react";
import { motion } from "framer-motion";
import RightContact from "./RightContact";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrMsg("Name is required!");
    } else if (!email.trim()) {
      setErrMsg("Please enter your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Enter a valid Email!");
    } else if (!message.trim()) {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(`Thank you, ${username}! Your message has been sent.`);
      setErrMsg("");
      setUsername("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    }

    setTimeout(() => {
      setErrMsg("");
    }, 5000);
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-20 bg-gradient-to-b from-[#0a0f1f] to-[#1a1f33] text-white flex justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-[90%] max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left Contact Form */}
        <motion.div
          className="w-full md:w-1/2 bg-[#121829] shadow-2xl rounded-2xl p-8 border border-[#1f2a48] backdrop-blur-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-[#80d0c7]">
            Get in Touch
          </h2>

          {errMsg && (
            <motion.p
              className="text-red-400 text-sm text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {errMsg}
            </motion.p>
          )}
          {successMsg && (
            <motion.p
              className="text-green-400 text-sm text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {successMsg}
            </motion.p>
          )}

          <form className="flex flex-col gap-4">
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-full p-4 bg-[#1e253a] border border-[#2c3c58] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80d0c7]"
              type="text"
              placeholder="Your Name"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-4 bg-[#1e253a] border border-[#2c3c58] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80d0c7]"
              type="email"
              placeholder="Your Email"
            />

            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full p-4 bg-[#1e253a] border border-[#2c3c58] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#80d0c7]"
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button
              onClick={handleSend}
              className="w-full h-12 bg-[#80d0c7] rounded-xl text-lg font-semibold uppercase text-[#1a1f33] transition-all duration-300 hover:bg-[#5bb6ad] hover:shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Contact Details */}
        <RightContact />
      </div>
    </motion.section>
  );
};

export default Contact;
