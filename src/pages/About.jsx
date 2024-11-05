import { motion } from "framer-motion";
import profile from "../assets/profile-image.jpg";
import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

const About = ({ setSelectedPage }) => {
  const aboutRef = useRef();

  const { inViewport } = useInViewport(aboutRef, { threshold: 0.5 });

  useEffect(() => {
    if (inViewport) {
      setSelectedPage("about");
    }
  }, [inViewport]);

  return (
    <section id="about" className="py-28" ref={aboutRef}>
      {/* HEADING */}
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
          className="flex pb-2 gap-2 w-full font-semibold justify-center text-3xl 
                      border-b border-aqua border-opacity-40 md:text-4xl mb-5 
                      after:hidden xs:border-none xs:after:block after:h-[1px] after:flex-1 after:bg-aqua 
                      after:bg-opacity-40 after:relative after:top-5 after:ml-[20px] "
        >
          <span className="text-aqua">ABOUT</span> <span>ME</span>
        </p>
      </motion.div>

      {/* ABOUT */}
      <div className="flex flex-col flex-col-reverse items-center md:flex-row md:justify-evenly mt-24 gap-16">
        <motion.div
          className="relative md:max-w-[400px] flex flex-col justify-start "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="">
            Hello! My name is John and I turn ideas into real life products. My
            passion for Web Development started back in 2020 when I discovered
            how to inspect websites on Google Chrome. It turns out that showing
            my friends how to break websites using the DevTools was a good way
            to learn HTML and CSS!
          </p>
          <p className="mt-4">
            Today, I've had the liberty of working for the Anti Money Laundering
            (AML) team at MUFG Bank as a Full-Stack Software Engineer and as a
            Freelance Web Developer. I've cultivated a deep passion for
            developing efficient solutions and products, and am always looking
            to improve my capabilities one line of code at a time.
          </p>
        </motion.div>

        <motion.div
          className="relative w-5/6 xs:max-w-[325px] before:transition-all
          before:absolute before:top-4 before:left-4 before:rounded-md before:w-full before:max-w-[400px] 
          before:h-full before:border-2 before:border-aqua before:z-[-1] hover:before:top-6 hover:before:left-6
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div
            className="absolute h-full w-full opacity-20 hover:opacity-0
                  transition duration-200 bg-aqua z-30 
                  "
          ></div>
          <img
            src={profile}
            alt="profile"
            className="rounded-md transition duration-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
