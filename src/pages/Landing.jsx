import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInViewport } from "react-in-viewport";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { BsArrowDownCircleFill } from "react-icons/bs";
import useMediaQuery from "../hooks/useMediaQuery";

const Landing = ({ setSelectedPage }) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const landingRef = useRef();

  const { inViewport, enterCount, leaveCount } = useInViewport(landingRef);
 
  useEffect(() => {
    if (inViewport) {
      setSelectedPage("home");
    }
  }, [inViewport]);

  return (
    <section
      id="home"
      className="flex items-center h-full gap-16 py-14 mt-32 sm:mt-0 relative "
      ref={landingRef}
    >
      {/* MAIN SECTION */}
      <div className="z-30">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="text-aqua text-md md:text-lg ">Hi! My name is</span>
          <p
            className="w-full sm:max-w-[550px] md:max-w-none text-3xl xs:text-4xl 
                      sm:text-5xl md:text-7xl font-dosis z-10 mt-2 mb-2 md:mt-6 md:mb-6 font-bold"
          >
            John {""}
            Guerrero,
          </p>
          <p
            className="w-full sm:max-w-[550px] md:max-w-none text-iron 
                      text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold"
          >
            A Software Engineer.
          </p>
          <p
            className="w-full xs:max-w-[400px] md:max-w-none mt-3 mb-3 md:mt-6 
                        md:mb-6 md:w-[500px]"
          >
            I am a Software Engineer specializing in creating noteworthy web
            experiences. These days, I am focused on building human-centered
            digital products.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 max-w-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-aqua text-charcoal rounded-sm py-2 px-4 xs:px-7 font-semibold
              hover:text-white transition duration-200"
            onClick={() => setSelectedPage("contact")}
            href="#projects"
          >
            Explore
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-aqua py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-charcoal hover:text-aqua transition duration-200 w-full 
            h-full flex items-center justify-center px-4 xs:px-7 "
            >
              Contact
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>

      {isAboveSmallScreens && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 2, type: "spring" }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute bottom-20 right-0 left-0 flex justify-center"
        >
          <AnchorLink
            onClick={() => setSelectedPage("projects")}
            href="#projects"
          >
            <BsArrowDownCircleFill
              className="text-aqua text-4xl hover:cursor-pointer
                       hover:-translate-y-1 transition duration-200 hover:text-light-aqua"
            />
          </AnchorLink>
        </motion.div>
      )}
    </section>
  );
};

export default Landing;
