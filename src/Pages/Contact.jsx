import React from "react";
import Navbar from "../Components/Navbar";
import Copyright from '../Components/Copyright';



const Contact = () => {
  const handleClick = () => {
    const email = "your.email@example.com";
    const subject = "Hello";
    const body = "Hello,%0D%0A%0D%0AI'm reaching out to say hello.";
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="">
          <div className="container px-1 py-8">
            <div class="container mx-auto px-4 py-8">
              <div class="bg-white rounded-lg shadow-lg p-8 w-[460px] md:w-96 md:ml-16 ">
                <h1 class="text-3xl font-bold bg-transparent">
                  Let's Get in Touch.
                </h1>
                <p class="text-lg text-gray-700 mb-4 mt-4 bg-transparent">
                  Feel free to email me. I'm available to
                  collaborate on impactful projects and talk
                  about everything relating to Tech.
                </p>
               <button class="px-7 py-4 bg-[#DCD6C8] rounded-md font-medium hover:bg-[#C3BAAB] hover:-translate-y-3 duration-300" onClick={handleClick}>
                  Say Hello
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Contact;