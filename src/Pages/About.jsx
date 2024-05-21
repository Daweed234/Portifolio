import React from "react";
import Navbar from "../Components/Navbar";
import Copyright from "../Components/Copyright";

const Stack = ({ stacks }) => {
  return (
    <>
      <div className=" bg-transparent mt-4">
        {stacks.map((stack, idx) => (
          <p
            key={idx}
            className=" hover:-translate-y-3 bg-transparent duration-300 mt-4"
          >
            {stack}
          </p>
        ))}
      </div>
    </>
  );
};
const About = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center ">
        <div className="flex bg-[#27242f] text-white w-[600px] md:w-[400px] md:py-6  py-5 h-auto rounded-lg ">
          <p className="bg-transparent px-4 text-lg md:text-base">
            <div className="top-0 py-2 flex flex-row md:gap-2 gap-3">
              <div className="w-4 rounded-full bg-red-400 md:bg-black md:w-3 md:h-3"></div>
              <div className="w-4 rounded-full bg-yellow-400 md:w-3 md:h-3"></div>
              <div className="circle3 bg-green-400 md:w-3 md:h-3"></div>
            </div>
            <p className="bg-transparent text-[#008DDA]">
              ntwali ${" "}
              <span className="bg-transparent text-white">
                cat about ntwali
              </span>{" "}
            </p>
            <span className="bg-transparent text-[#008DDA]">about ntwali</span>{" "}
            <span className="bg-transparent text-[#27C93F]">(main)</span>{" "}
            <span className="bg-transparent text-[#008DDA]">$</span> ls
            <div className="flex flex-row bg-transparent">
              <div className=" bg-transparent py-4">
                <p className="bg-transparent py-1 md:py-3">
                  Meet Ntwali, a self-reliant web-app developer fascinated by
                  Solidity and Web 3.0. Driven by determination, <br /> I craft
                  intuitive web applications, seamlessly blending functionality
                  and user experience. My journey is marked by relentless
                  pursuit of knowledge. Each project showcases creative
                  ingenuity, exceeding expectations. Fascinated by decentralized
                  technologies , I shape the future of web development,
                  revolutionizing traditional systems.
                  <br /> <br />
                  In a rapidly evolving digital landscape, I am committed to
                  staying ahead of the curve, continuously learning, and making
                  a meaningful impact through innovative solutions.
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-5">
        <div className="flex bg-[#27242f] text-white w-[600px] md:w-[400px] md:py-6  py-5 h-auto rounded-lg ">
          <p className="bg-transparent px-4 text-lg md:text-base">
            <div className="top-0 py-2 flex flex-row gap-3">
            <div className="w-4 rounded-full bg-red-400"></div>
              <div className="w-4 rounded-full bg-yellow-400"></div>
              <div className="circle3  bg-green-400"></div>
            </div>
            <p className="bg-transparent text-[#008DDA]">Work Experience $ </p>

            <p className="bg-transparent text-[#008DDA] mt-4">InfluencerHub</p>
            <div className="flex flex-row bg-transparent">
              <div className=" bg-transparent mt-4">
                <p className="bg-transparent">
                  Web-App Designer and Front-end developer - Dec 2023 to April
                  2024
                </p>
              </div>
            </div>

            <p className="bg-transparent text-[#008DDA] mt-4">
              Youth-Code Camp
            </p>
            <div className="flex flex-row bg-transparent">
              <div className=" bg-transparent mt-4">
                <p className="bg-transparent">
                  Front-end developer - Nov 2023 to April 202
                </p>
              </div>
            </div>

            <p className="bg-transparent text-[#008DDA] mt-4">KG Harvest</p>
            <div className="flex flex-row bg-transparent">
              <div className=" bg-transparent mt-4 mb-8">
                <p className="bg-transparent">
                  Project Manager , Full-stack Developer April 2024 - Present
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div className="flex bg-[#27242f] text-white w-[600px] md:w-[400px] md:py-6  py-5 h-auto rounded-lg ">
          <p className="bg-transparent px-4 text-lg md:text-base">
            <div className="top-0 py-2 flex flex-row gap-3">
            <div className="w-4 rounded-full bg-red-400"></div>
              <div className="w-4 rounded-full bg-yellow-400"></div>
              <div className="circle3  bg-green-400"></div>         </div>
            <p className="bg-transparent text-[#008DDA]">
              ntwali ${" "}
              <span className="bg-transparent text-white">cd skills</span>
            </p>
            <p className="bg-transparent mt-2">
              <span className="bg-transparent text-[#008DDA]">skills</span>{" "}
              <span className="bg-transparent text-[#27C93F]">(main)</span>{" "}
              <span className="bg-transparent text-[#008DDA]">$</span> ls
            </p>

            <p className="bg-transparent text-[#008DDA] mt-4">frontEnd</p>
            <div className="flex flex-row bg-transparent gap-40 md:gap-20">
              <Stack
                stacks={[
                  "Reactjs",
                  "React Native",
                  "Nextjs",
                  "Html/Css",
                  "Javascript",
                  "Typescript",
                ]}
              />
              <div className=" bg-transparent mt-4">
                <Stack
                  stacks={[
                    "Tailwind",
                    "Framer Motion",
                    "Material ui",
                    "Sass",
                    "Bootstrap",
                    "",
                  ]}
                />
              </div>
            </div>
            <p className="bg-transparent text-[#008DDA] mt-7">backEnd</p>
            <div className="flex flex-row bg-transparent gap-48 md:gap-28">
              <div className=" bg-transparent mt-4">
                <Stack
                  stacks={["Nodejs", "Expressjs", "MongoDb", "Rest Api"]}
                />
              </div>
              <div className=" bg-transparent mt-4">
                <Stack stacks={["Php", "Python", "Firebase", "Google Cloud"]} />
              </div>
            </div>

            <p className="bg-transparent text-[#008DDA] mt-7">
              developmentTools
            </p>
            <div className="flex flex-row bg-transparent gap-52 md:gap-32">
              <div className=" bg-transparent mt-4">
                <Stack stacks={["Git", "Vite", "Vercel", "Netlify"]} />
              </div>
              <div className=" bg-transparent mt-4">
                <Stack stacks={["Npm", "Jest", "Figma", "CPanel"]} />
              </div>
            </div>

            <p className="bg-transparent text-[#008DDA] mt-7">learning</p>
            <div className="flex flex-row bg-transparent gap-40 md:gap-16 mb-8">
              <div className=" bg-transparent mt-4">
                <Stack stacks={["Web 3.0", "3D Animations"]} />
                <p className=" bg-transparent mt-4"></p>
                <p className=" bg-transparent mt-4"></p>
              </div>
              <div className=" bg-transparent mt-4">
                <Stack stacks={["Solidity"]} />

                <p className=" bg-transparent mt-4"></p>
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-5">
        <div className="flex bg-[#27242f] text-white w-[600px] md:w-[400px] md:py-6  py-5 h-auto rounded-lg ">
          <p className="bg-transparent px-4 text-lg md:text-base">
            <div className="top-0 py-2 flex flex-row gap-3">
            <div className="circle1 bg-red-400"></div>
              <div className="circle2 circle1 bg-yellow-400"></div>
              <div className="circle3 circle1 bg-green-400"></div>
            </div>
            <p className="bg-transparent text-[#008DDA] ">
              ntwali ${" "}
              <span className="bg-transparent text-white">
                cd hobbies/interests
              </span>
            </p>
            <p className="bg-transparent mt-2">
              <span className="bg-transparent text-[#008DDA]">
                hobbies/interests
              </span>{" "}
              <span className="bg-transparent text-[#27C93F]">(main)</span>{" "}
              <span className="bg-transparent text-[#008DDA]">$</span> ls
            </p>

            <div className="bg-transparent py4">
              <Stack
                stacks={[
                  "🧑🏻‍💻 Coding",
                  "🥂 Partying",
                  "🛠️ Problem solving",
                  "🏀 Basketball",
                ]}
              />
            </div>
          </p>
        </div>
      </div>
      <Copyright />
    </>
  );
};
export default About;
