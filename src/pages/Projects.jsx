import { useEffect, useRef, useContext } from "react";
import Project from "./Project";
import Subproject from "./Subproject";
import { ThemeContext } from "../context/ThemeContext";
import { useInViewport } from "react-in-viewport";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewport]);

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
        <Project
          variant={projectVariant1}
          orientation="left"
          href="https://betterbudget.up.railway.app/"
          src={project1}
          title="BetterBudget"
          description="BetterBudget simplifies the budgeting process so you can have more
          time in your day along with more money in your pocket at the end
          of each month. You can customize and personalize your budget,
          track expenses and income, and even plan budgets for the future."
          technologies={[
            "React.js",
            "Styled Components",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
          ]}
          github="https://github.com/JohnSebastian3/better-budget"
          theme={theme}
        />
        <Project
          variant={projectVariant2}
          orientation="right"
          href="https://divbyte.up.railway.app/"
          src={project2}
          title="DivByte"
          description="A fully responsive Full-Stack application where users can add and
          track their stock performance with real time market data. Users
          can create a profile, research stock metrics, leave comments, and
          check in everyday to see how their portfolio is performing."
          technologies={[
            "HTML5",
            "CSS3",
            "EJS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
          ]}
          github="https://github.com/JohnSebastian3/divbyte-stock-tracker"
          theme={theme}
        />
        <Project
          variant={projectVariant1}
          orientation="left"
          href="https://www.bellasalonoceanside.com/"
          src={project3}
          title="Bella Hair Salon"
          description=" A beautiful, responsive website made for a client. Salon customers
          can see prices, hours, location, recent work, and more. Website
          includes a contact form to schedule appointments and/or ask
          questions."
          technologies={["HTML5", "CSS3", "JavaScript"]}
          github="https://github.com/JohnSebastian3/bella-hair-salon-v2"
          theme={theme}
        />
        <Project
          variant={projectVariant2}
          orientation="right"
          href="https://cleave.netlify.app/"
          src={project4}
          title="Cleave"
          description="Cleave is a sleek tip calculator. Set the amount of the bill, the
          percentage you want to tip, and the number of people, and Cleave
          will split your bill for you. It will determine how much you
          should tip, and how much each person should tip."
          technologies={["HTML5", "CSS3", "JavaScript"]}
          github="https://github.com/JohnSebastian3/cleave"
          theme={theme}
        />

        <div>
          <h2 className="text-2xl md:text-3xl text-aqua text-center">
            Other Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 gap-4 xs:grid-cols-2 xs:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          <Subproject
            theme={theme}
            title="Libberly"
            href="https://johnsebastian3.github.io/libberly/"
            github="https://github.com/JohnSebastian3/libberly"
            description=" A minimalistic library app to keep track of read and unread books
              in your library."
            technologies={["HTML5", "CSS3", "JavaScript"]}
            delay={0}
          />
          <Subproject
            theme={theme}
            title="Luxury Salon"
            href="https://jgsalon.netlify.app/"
            github="https://github.com/JohnSebastian3/luxury-salon"
            description="A fully responsive design and layout for a salon business."
            technologies={["HTML5", "CSS3", "JavaScript"]}
            delay={0.3}
          />
          <Subproject
            theme={theme}
            title="Jitsuno MMA"
            href="https://jitsunomma.netlify.app/"
            github="https://github.com/JohnSebastian3/jitsuno-mma"
            description="A fully responsive desgin and layout for local MMA Gym."
            technologies={["HTML5", "CSS3"]}
            delay={0.6}
          />
          <Subproject
            theme={theme}
            title="Admin Dashboard"
            href="https://johnsebastian3.github.io/admin-dashboard/"
            github="https://github.com/JohnSebastian3/admin-dashboard"
            description="An elegant design and layout for a sample Dashboard"
            technologies={["HTML5", "CSS3"]}
            delay={0.9}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
