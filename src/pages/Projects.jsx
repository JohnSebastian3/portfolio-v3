import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90
  transition duration-300 bg-carbon z-30 flex flex-col justify-center 
  items-center text-center text-steel`;

  return (
    <section id="projects" className="pt-32 pb-32">
      {/* HEADINGS */}
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
            <span className="text-aqua">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center mt-10">
        <motion.div
          className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <motion.div variants={projectVariant} className="relative">
            <div className={`${overlayStyles} rounded-md`}>
              <p className="text-base xs:text-xl font-bold">BetterBudget</p>
              <p className="mt-2 mb-4 xs:mt-4 xs:mb-6 text-xs xs:text-sm px-1 sm:px-4">
                A web app to create and maintain a personal budget.
              </p>
              <div className="flex gap-6">
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiExternalLink className="text-xl" />
                </a>
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </div>
            <img src={project1} alt={"BetterBudget"} className="rounded-md" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={`${overlayStyles} rounded-md`}>
              <p className="text-base xs:text-xl font-bold">DivByte</p>
              <p className="mt-2 mb-4 xs:mt-4 xs:mb-6 text-xs xs:text-sm px-1 sm:px-4">
                A web app to keep track of your own stock portfolio using
                real-time market data.
              </p>
              <div className="flex gap-6">
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiExternalLink className="text-xl" />
                </a>
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </div>
            <img src={project2} alt={"DivByte"} className="rounded-md" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={`${overlayStyles} rounded-md`}>
              <p className="text-base xs:text-xl font-bold">Bella Hair Salon</p>
              <p className="mt-2 mb-4 xs:mt-4 xs:mb-6 text-xs xs:text-sm px-1 sm:px-4">
                A beautiful, responsive website for a client.
              </p>
              <div className="flex gap-6">
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiExternalLink className="text-xl" />
                </a>
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </div>
            <img
              src={project3}
              alt={"Bella Hair Salon"}
              className="rounded-md"
            />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={`${overlayStyles} rounded-md`}>
              <p className="text-base xs:text-xl font-bold">Cleave</p>
              <p className="mt-2 mb-4 xs:mt-4 xs:mb-6 text-xs xs:text-sm px-1 sm:px-4">
                A sleek web app to quickly determine tip amounts for group
                dinners. 
              </p>
              <div className="flex gap-6">
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiExternalLink className="text-xl" />
                </a>
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </div>
            <img src={project4} alt={"Cleave"} className="rounded-md" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={`${overlayStyles} rounded-md`}>
              <p className="text-base xs:text-xl font-bold">Libberly</p>
              <p className="mt-2 mb-4 xs:mt-4 xs:mb-6 text-xs xs:text-sm px-1 sm:px-4">
                A minimalistic library app to keep track of read and unread
                books in your library. 
              </p>
              <div className="flex gap-6">
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiExternalLink className="text-xl" />
                </a>
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </div>
            <img src={project5} alt={"Libberly"} className="rounded-md" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={`${overlayStyles} rounded-md`}>
              <p className="text-base xs:text-xl font-bold">Luxury Salon</p>
              <p className="mt-2 mb-4 xs:mt-4 xs:mb-6 text-xs xs:text-sm px-1 sm:px-4">
                A fully responsive design and layout for a salon business. 
              </p>
              <div className="flex gap-6">
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiExternalLink className="text-xl" />
                </a>
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </div>
            <img src={project6} alt={"Luxury Salon"} className="rounded-md" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={`${overlayStyles} rounded-md`}>
              <p className="text-base xs:text-xl font-bold">Jitsuno MMA</p>
              <p className="mt-2 mb-4 xs:mt-4 xs:mb-6 text-xs xs:text-sm px-1 sm:px-4">
                A fully responsive desgin and layout for local MMA Gym.
              </p>
              <div className="flex gap-6">
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiExternalLink className="text-xl" />
                </a>
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </div>
            <img src={project7} alt={"Jitsuno MMA"} className="rounded-md" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={`${overlayStyles} rounded-md`}>
              <p className="text-base xs:text-xl font-bold">Admin Dashboard</p>
              <p className="mt-2 mb-4 xs:mt-4 xs:mb-6 text-xs xs:text-sm px-1 sm:px-4">
                An elegant design and layout for a sample Dashboard.
              </p>
              <div className="flex gap-6">
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiExternalLink className="text-xl" />
                </a>
                <a href="" className="hover:text-aqua transition duration-200">
                  <FiGithub className="text-xl" />
                </a>
              </div>
            </div>
            <img
              src={project8}
              alt={"Admin Dashboard"}
              className="rounded-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
