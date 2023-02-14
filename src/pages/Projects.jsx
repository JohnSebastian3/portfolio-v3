import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import useMediaQuery from "../hooks/useMediaQuery";

const Projects = ({ setSelectedPage }) => {
  const { theme } = useContext(ThemeContext);

  const projectsRef = useRef();

  const isAboveExtraSmallScreens = useMediaQuery("(min-width: 480px)");

  const { inViewport } = useInViewport(projectsRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewport) {
      setSelectedPage("projects");
    }
  }, [inViewport]);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariant1 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const projectVariant2 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="projects"
      className={`py-28 ${isAboveExtraSmallScreens ? "" : "overflow-x-hidden"}`}
      ref={projectsRef}
    >
      {/* HEADINGS */}
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
          className="flex pb-2 w-full font-semibold justify-center text-3xl 
                      border-b border-aqua border-opacity-40 md:text-4xl mb-5 
                      after:hidden xs:border-none xs:after:block after:h-[1px] after:flex-1 after:bg-aqua 
                      after:bg-opacity-40 after:relative after:top-5 after:ml-[20px]"
        >
          <span className="text-aqua">PRO</span>JECTS
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex flex-col gap-24 mt-24">
        <motion.div
          variants={projectVariant1}
          className="relative flex  flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-auto w-fit xs:shadow-xl md:hover:scale-105 transition duration-200">
            <a
              href="https://betterbudget.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project1}
                alt={"BetterBudget"}
                className="md:h-[325px] w-full "
              />
            </a>
          </div>
          <div className="lg:absolute  lg:text-right lg:right-0  text-left flex flex-col gap-3 lg:items-end">
            <h2 className="text-2xl md:text-3xl">BetterBudget</h2>
            <p
              className={`lg:max-w-[450px] xs:shadow-md ${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } bg-opacity-50 backdrop-blur relative py-4 px-2 rounded-md z-2`}
            >
              BetterBudget simplifies the budgeting process so you can have more
              time in your day along with more money in your pocket at the end
              of each month. You can customize and personalize your budget,
              track expenses and income, and even plan budgets for the future.
            </p>
            <div
              className={`flex flex-wrap gap-3 mb-4 max-w-[450px] ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } justify-start lg:justify-end`}
            >
              <span>React</span>
              <span>Styled Components</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className="flex gap-6 lg:justify-end justify-start">
              <a
                href="https://betterbudget.up.railway.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href="https://github.com/JohnSebastian3/better-budget"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={projectVariant2}
          className="relative flex justify-end flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-auto w-fit xs:shadow-xl md:hover:scale-105 transition duration-200">
            <a
              href="https://divbyte.up.railway.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project2}
                alt={"BetterBudget"}
                className="md:h-[325px]  w-full"
              />
            </a>
          </div>
          <div className="lg:absolute left-0 text-left flex flex-col gap-3 lg:items-start">
            <h2 className="text-2xl md:text-3xl">DivByte</h2>
            <p
              className={`lg:max-w-[450px] xs:shadow-md ${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } bg-opacity-50 backdrop-blur relative py-4 px-2 rounded-md z-2`}
            >
              A fully responsive Full-Stack application where users can add and
              track their stock performance with real time market data. Users
              can create a profile, research stock metrics, leave comments, and
              check in everyday to see how their portfolio is performing.
            </p>
            <div
              className={`flex flex-wrap gap-3 mb-4 max-w-[450px] ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } justify-start lg:justify-end`}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>EJS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className="flex gap-6 lg:justify-end justify-start">
              <a
                href="https://divbyte.up.railway.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href="https://github.com/JohnSebastian3/divbyte-stock-tracker"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={projectVariant1}
          className="relative flex justify-start flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-auto w-fit xs:shadow-xl md:hover:scale-105 transition duration-200">
            <a
              href="https://www.bellasalonoceanside.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project3}
                alt={"BetterBudget"}
                className="md:h-[325px]  w-full"
              />
            </a>
          </div>
          <div className="lg:absolute lg:right-0 lg:text-right text-left flex flex-col gap-3 lg:items-end">
            <h2 className="text-2xl md:text-3xl">Bella Hair Salon</h2>
            <p
              className={`lg:max-w-[450px] xs:shadow-md ${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } bg-opacity-50 backdrop-blur relative py-4 px-2 rounded-md z-2`}
            >
              A beautiful, responsive website made for a client. Salon customers
              can see prices, hours, location, recent work, and more. Website
              includes a contact form to schedule appointments and/or ask
              questions.
            </p>
            <div
              className={`flex flex-wrap gap-3 mb-4 max-w-[450px] ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } justify-start lg:justify-end`}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
            <div className="flex gap-6 lg:justify-end justify-start">
              <a
                href="https://www.bellasalonoceanside.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href="https://github.com/JohnSebastian3/bella-hair-salon-v2"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={projectVariant2}
          className="relative flex justify-end flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-auto w-fit xs:shadow-xl md:hover:scale-105 transition duration-200">
            <a
              href="https://cleave.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project4}
                alt={"BetterBudget"}
                className="md:h-[325px]  w-full"
              />
            </a>
          </div>
          <div className="lg:absolute left-0 text-left flex flex-col gap-3 lg:items-start">
            <h2 className="text-2xl md:text-3xl">Cleave</h2>
            <p
              className={`lg:max-w-[450px] xs:shadow-md ${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } bg-opacity-50 backdrop-blur relative py-4 px-2 rounded-md z-2`}
            >
              Cleave is a sleek tip calculator. Set the amount of the bill, the
              percentage you want to tip, and the number of people, and Cleave
              will split your bill for you. It will determine how much you
              should tip, and how much each person should tip.
            </p>
            <div
              className={`flex flex-wrap gap-3 mb-4 max-w-[450px] ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } justify-start lg:justify-end`}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
            <div className="flex gap-6 lg:justify-end justify-start">
              <a
                href="https://cleave.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href="https://github.com/JohnSebastian3/cleave"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </motion.div>

        <div>
          <h2 className="text-2xl md:text-3xl text-aqua text-center">
            Other Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 gap-4 xs:grid-cols-2 xs:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${
              theme === "dark" ? "bg-carbon" : "bg-steel"
            } py-6 px-4 rounded-md relative xs:shadow-lg h-[300px] bg-opacity-60`}
          >
            <h2 className="text-aqua text-2xl md:text-3xl">Libberly</h2>
            <p className="lg:max-w-[450px] mt-2 mb-4 xs:mb-2 md:mb-4 relative py-4 rounded-md z-2">
              A minimalistic library app to keep track of read and unread books
              in your library.
            </p>
            <div
              className={`mb-4 flex flex-wrap gap-3 justify-end ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } absolute bottom-10 right-4 text-xs sm:text-base`}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
            <div className="flex gap-6 lg:justify-end justify-start absolute bottom-4 right-4">
              <a
                href="https://johnsebastian3.github.io/libberly/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href="https://github.com/JohnSebastian3/libberly"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${
              theme === "dark" ? "bg-carbon" : "bg-steel"
            } py-6 px-4 rounded-md relative xs:shadow-lg h-[300px] bg-opacity-60`}
          >
            <h2 className="text-aqua text-2xl md:text-3xl">Luxury Salon</h2>
            <p className="lg:max-w-[450px] mt-2 mb-4 xs:mb-2 md:mb-4 relative py-4 rounded-md z-2">
              A fully responsive design and layout for a salon business.
            </p>
            <div
              className={`mb-4 flex flex-wrap gap-3 justify-end ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } absolute bottom-10 right-4 text-xs sm:text-base`}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
            <div className="flex gap-6 lg:justify-end justify-start absolute bottom-4 right-4">
              <a
                href="https://jgsalon.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href="https://github.com/JohnSebastian3/luxury-salon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${
              theme === "dark" ? "bg-carbon" : "bg-steel"
            } py-6 px-4 rounded-md relative xs:shadow-lg h-[300px] bg-opacity-60`}
          >
            <h2 className="text-aqua text-2xl md:text-3xl">Jitsuno MMA</h2>
            <p className="lg:max-w-[450px] mt-2 mb-4 xs:mb-2 md:mb-4 relative py-4 rounded-md z-2">
              A fully responsive desgin and layout for local MMA Gym.
            </p>
            <div
              className={`mb-4 flex flex-wrap gap-3 justify-end ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } absolute bottom-10 right-4 text-xs sm:text-base`}
            >
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
            <div className="flex gap-6 lg:justify-end justify-start absolute bottom-4 right-4">
              <a
                href="https://jitsunomma.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href="https://github.com/JohnSebastian3/jitsuno-mma"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${
              theme === "dark" ? "bg-carbon" : "bg-steel"
            } py-6 px-4 rounded-md relative xs:shadow-lg h-[300px] bg-opacity-60`}
          >
            <h2 className="text-aqua text-2xl md:text-3xl">Admin Dashboard</h2>
            <p className="lg:max-w-[450px] mt-2 mb-4 xs:mb-2 md:mb-4relative py-4 rounded-md z-2">
              An elegant design and layout for a sample Dashboard
            </p>
            <div
              className={`mb-4 flex flex-wrap gap-3 justify-end ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } absolute bottom-10 right-4 text-xs sm:text-base`}
            >
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </div>
            <div className="flex gap-6 lg:justify-end justify-start absolute bottom-4 right-4">
              <a
                href="https://johnsebastian3.github.io/admin-dashboard/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href="https://github.com/JohnSebastian3/admin-dashboard"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
