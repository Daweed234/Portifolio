import React from "react";
import Navbar from "../Components/Navbar";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="">
          {/* <div class="bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-3xl font-bold ">A Pretty Big Div</h1>
            <p class="text-lg text-gray-700 mb-4">This div is styled using Tailwind CSS. It's pretty big, isn't it?</p>
            <p class="text-lg text-gray-700 mb-4">Tailwind CSS allows us to easily create responsive and stylish designs without writing custom CSS.</p>
            <p class="text-lg text-gray-700">Hope you like it!</p>
          </div> */}
          <div className="container px-1 py-8">
            <div class="container mx-auto px-4 py-8">
              <div class="bg-white rounded-lg shadow-lg p-8">
                <h1 class="text-3xl font-bold bg-transparent">
                  Let's Get in Touch.
                </h1>
                <p class="text-lg text-gray-700 mb-4 mt-4 bg-transparent">
                  Feel free to email me. I'm available to <br />
                  collaborate on impactful projects and talk <br />
                  about everything relating to Tech.
                </p>
               <button class="px-7 py-4 bg-[#DCD6C8] rounded-md font-medium hover:bg-[#C3BAAB] hover:-translate-y-3 duration-300">
                  Say Hello
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
