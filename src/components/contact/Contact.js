import React, { useState } from "react";
import Title from "../layouts/Title";
import RightContact from "./RightContact";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Name is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setEmail("");
      setMessage("");

      // Clear the success message after 5 seconds
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    }

    // Clear the error message after 5 seconds
    setTimeout(() => {
      setErrMsg("");
    }, 5000);
  };

  return (
    <section id="contact" className="w-full py-20 dark:bg-black bg-[#FFFFFF]">
      <div className="flex justify-center text-center items-center">
        <Title title={"Contact"} des={"Contact With Me"} />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-center  items-center gap-10">
          <div className="w-full lgl:w-[35%] h-full py-10 dark:bg-[#001919] bg-[#F5FCFF] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-md">
            <form className="w-full flex flex-col dark:bg-transparent justify-between  gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3  bg-transparent text-center text-red-600 text-base tracking-wide animate-bounce rounded-lg">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-transparent text-center text-green-500 text-base tracking-wide animate-bounce rounded-lg">
                  {successMsg}
                </p>
              )}

              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className={`${
                  errMsg === "Name is required!" && "outline-[#5e3bee]"
                } contactInput dark:bg-transparent`}
                type="text"
                placeholder="Enter your name"
              />

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`${
                  errMsg === "Please give your email!" && "outline-[#5e3bee]"
                } contactInput dark:bg-transparent`}
                type="email"
                placeholder="Enter your email"
              />

              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`${
                  errMsg === "Message is required!" && "outline-[#5e3bee]"
                } contactTextArea dark:bg-transparent`}
                cols="30"
                rows="8"
                placeholder="Enter your message"
              ></textarea>

              <div className="full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#FFFFFF] dark:bg-gray-300 border border-[#282938] rounded-xl text-xl font-semibold text-[#282938] tracking-wider uppercase dark:hover:bg-black hover:text-white duration-300 hover:border-[1px] hover:border-[#5e3bee] dark:hover:border-[#001919] hover:bg-[#5e3bee]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <RightContact />
        </div>
      </div>
    </section>
  );
};

export default Contact;
