import React from "react";
import Image from "../Img/wiseman.png";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Copyright from "../Components/Copyright";

const Stack = ({ stacks }) => {
    return (
        <>
            <div className=" bg-transparent mt-4">
                {stacks.map((stack, idx) => (
                    <p key={idx} className=" bg-transparent mt-4">
                        {stack}
                    </p>
                ))}
            </div>
        </>
    );
};

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-row justify-center items-center mt-20 gap-24 dark:bg-transparent dark:bg-[#0D2538] md:grid md:gap-5 md:px-10">
                <img
                    src={Image}
                    className="rounded-full size-64 ml-4 mt-4 border-8 border-blue-600 md:ml-20"
                    alt=""
                />
                <div className="w-96 h-80 bg-[white] rounded-lg md:ml-6">
                    <div className="bg-transparent">
                        <p className="mt-7 bg-transparent font-semibold text-4xl ml-5">
                            Hi, I'm David
                        </p>
                        <p className="bg-transparent text-lg font-medium ml-5 mt-1">
                            I am a Full Stack Engineer
                        </p>
                        <div className="flex flex-row gap-2 bg-transparent hover:translate-y-[-5px] duration-300 mt-2 ">
                            <p className="ml-10 bg-transparent text-xs">📌</p>
                            <p className="text-xs bg-transparent mb-2">
                                Based in Kigali, Rwanda
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 bg-transparent hover:translate-y-[-5px] duration-300">
                            <p className="ml-8 bg-transparent text-lg">🧑🏻‍💻</p>
                            <p className="text-xs bg-transparent mt-1">
                                Software Engineer | Web Designer
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 bg-transparent hover:translate-y-[-5px] duration-300">
                            <p className="ml-8 bg-transparent text-lg">👌🏻</p>
                            <p className="text-xs bg-transparent mt-1">
                                Let's join forces and create web magic!
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 bg-transparent hover:translate-y-[-5px] duration-300">
                            <p className="ml-8 bg-transparent text-lg">📨</p>
                            <p className="text-xs bg-transparent mt-2">Send me an email</p>
                        </div>
                    </div>
                    <div className="bg-transparent ">
                        <div className="bg-transparent flex flex-row mt-10 gap-10 justify-center items-center ">
                            <Link
                                className="bg-transparent"
                                to="https://www.twitter.com/in/NTWALIDavid18474"
                            >
                                <FaTwitter className="bg-transparent text-4xl hover:translate-y-[-5px] duration-300 hover:text-gray-600" />
                            </Link>
                            <Link
                                className="bg-transparent"
                                to="https://www.instagram.com/dn.avid"
                            >
                                <FaInstagram className="bg-transparent text-4xl hover:translate-y-[-5px] duration-300 hover:text-gray-600" />
                            </Link>
                            <Link
                                className="bg-transparent"
                                to="https://www.github.com/Daweed234"
                            >
                                <FaGithub className=" bg-transparent text-4xl hover:translate-y-[-5px] duration-300 hover:text-gray-600" />
                            </Link>
                            <Link
                                className="bg-transparent"
                                to="https://www.linkedin.com/in/ntwali-david-a44a34301/"
                            >
                                <FaLinkedin className="bg-transparent text-4xl hover:translate-y-[-5px] duration-300 hover:text-gray-600" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <Copyright />
        </>
    );
};

export default Hero;
