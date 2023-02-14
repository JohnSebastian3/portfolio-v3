import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { SiPassport } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { DiNpm } from "react-icons/di";
import { SiPostman } from "react-icons/si";

const MySkills = ({ setSelectedPage }) => {
  const { theme } = useContext(ThemeContext);

  const skillsRef = useRef();

  const { inViewport } = useInViewport(skillsRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewport) {
      setSelectedPage("skills");
    }
  }, [inViewport]);

  return (
    <section id="skills" className="py-28 " ref={skillsRef}>
      <motion.div
        className="text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p
          className="flex flex-col xs:flex-row pb-2 gap-2 w-full font-semibold justify-center text-3xl 
                      border-b border-aqua border-opacity-40 md:text-4xl mb-5 
                      after:hidden xs:border-none xs:after:block after:h-[1px] after:flex-1 after:bg-aqua 
                      after:bg-opacity-40 after:relative after:top-5 after:ml-[20px] "
        >
          SKILLS & <span className="text-aqua">EXPERIENCE</span>
        </p>
      </motion.div>

      <div className="w-full flex-col md:mt-24 flex md:flex-row">
        <motion.div
          className="mr-0 justify-center items-center md:mr-10 flex 
          flex-1 flex-wrap md:justify-start md:items-start"
        >
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[65px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <AiFillHtml5
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">HTML 5</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <DiCss3
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">CSS 3</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <IoLogoJavascript
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">JavaScript</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <SiTypescript
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">TypeScript</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <FaReact
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">React</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <SiRedux
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Redux</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <IoLogoNodejs
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Node.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <SiExpress
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Express.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <SiMongodb
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">MongoDB</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <DiPostgresql
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">PostgreSQL</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <DiPython
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Python</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <DiJava
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Java</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <SiPassport
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Passport.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <DiGit
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Git</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <AiFillGithub
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Github</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <DiNpm
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">NPM</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-200 w-[60px] md:w-[80px]"
          >
            <div
              className={`${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1`}
            >
              <SiPostman
                className={`w-2/3 h-2/3 ${
                  theme === "dark" ? "text-steel" : "text-carbon"
                }`}
              />
            </div>
            <p className="text-xs md:text-lg font-bold mt-2">Postman</p>
          </motion.div>
        </motion.div>

        <div className="mt-8 md:mt-0 flex flex-col flex-1 justify-start items-start">
          <motion.div className="w-full flex flex-row justify-start items-start mt-4 mb-4">
            <div className="mr-4 xs:mr-12">
              <p className="font-bold text-aqua md:text-xl">2022</p>
            </div>
            <motion.div className="flex-1">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-start items-start mb-4"
                >
                  <h4 className="font-bold">Software Engineer</h4>
                  <p className="mt-1">100Devs</p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
          <motion.div className="w-full flex flex-row justify-start items-start mt-4 mb-4">
            <div className="mr-4 xs:mr-12">
              <p className="font-bold text-aqua md:text-xl">2021</p>
            </div>
            <motion.div className="flex-1">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-start items-start mb-4"
                >
                  <h4 className="font-bold">Math Tutor</h4>
                  <p className="mt-1">SUNY New Paltz</p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
