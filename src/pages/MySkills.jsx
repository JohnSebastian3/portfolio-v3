import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
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

const MySkills = () => {

  return (
    <section id="skills" className="pt-32 pb-32 md:pt-36 md:pb-36">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            SKILLS & <span className="text-aqua">EXPERIENCE</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      <div className="w-full flex-col md:mt-12 flex md:flex-row">
        <motion.div
          className="mr-0 justify-center items-center md:mr-10 flex 
          flex-1 flex-wrap md:justify-start md:items-start"
        >
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[65px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <AiFillHtml5 className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">HTML 5</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <DiCss3 className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">CSS 3</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <IoLogoJavascript className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">JavaScript</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <SiTypescript className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">TypeScript</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <FaReact className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">React</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <SiRedux className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Redux</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <IoLogoNodejs className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Node.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <SiExpress className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Express.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <SiMongodb className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">MongoDB</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <DiPostgresql className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">PostgreSQL</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <DiPython className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Python</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <DiJava className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Java</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <SiPassport className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Passport.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <DiGit className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Git</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <AiFillGithub className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Github</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <DiNpm className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">NPM</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col text-center m-2 md:m-4 transition duration-300 w-[60px] md:w-[80px]"
          >
            <div
              className="bg-carbon w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex justify-center 
              items-center hover:shadow-md hover:shadow-aqua transition duration-200 hover:-translate-y-1"
            >
              <SiPostman className="w-2/3 h-2/3 text-steel" />
            </div>
            <p className="text-sm md:text-xl font-bold mt-2">Postman</p>
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
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-start items-start mb-4"
                >
                  <h4 className="font-bold">Freelance Web Developer</h4>
                  <p className="mt-1">John's Consulting</p>
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
