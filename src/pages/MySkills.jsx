import { useEffect, useRef, useContext } from "react";
import Skill from "./Skill";
import { ThemeContext } from "../context/ThemeContext";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";

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
          <Skill theme={theme} title="HTML 5" icon="AiFillHtml5" />
          <Skill theme={theme} title="CSS 3" icon="DiCss3" />
          <Skill theme={theme} title="JavaScript" icon="IoLogoJavascript" />
          <Skill theme={theme} title="TypeScript" icon="SiTypescript" />
          <Skill theme={theme} title="React" icon="FaReact" />
          <Skill theme={theme} title="Redux" icon="SiRedux" />
          <Skill theme={theme} title="Node.js" icon="IoLogoNodejs" />
          <Skill theme={theme} title="Express.js" icon="SiExpress" />
          <Skill theme={theme} title="MongoDB" icon="SiMongodb" />
          <Skill theme={theme} title="PostgreSQL" icon="DiPostgresql" />
          <Skill theme={theme} title="Python" icon="DiPython" />
          <Skill theme={theme} title="Java" icon="DiJava" />
          <Skill theme={theme} title="Passport.js" icon="SiPassport" />
          <Skill theme={theme} title="Git" icon="DiGit" />
          <Skill theme={theme} title="Github" icon="AiFillGithub" />
          <Skill theme={theme} title="NPM" icon="DiNpm" />
          <Skill theme={theme} title="Postman" icon="SiPostman" />
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
