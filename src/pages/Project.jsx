import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = ({
  variant,
  orientation,
  href,
  src,
  title,
  description,
  technologies,
  github,
  theme,
}) => {
  return (
    <>
      {orientation === "left" ? (
        <motion.div
          variants={variant}
          className="relative flex  flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-auto w-fit xs:shadow-xl md:hover:scale-105 transition duration-200">
            <a href={href} target="_blank" rel="noreferrer">
              <img src={src} alt={title} className="md:h-[325px] w-full " />
            </a>
          </div>
          <div className="lg:absolute  lg:text-right lg:right-0  text-left flex flex-col gap-3 lg:items-end">
            <h2 className="text-2xl md:text-3xl">{title}</h2>
            <p
              className={`lg:max-w-[450px] xs:shadow-md ${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } bg-opacity-50 backdrop-blur relative py-4 px-2 rounded-md z-2`}
            >
              {description}
            </p>
            <div
              className={`flex flex-wrap gap-3 mb-4 max-w-[450px] ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } justify-start lg:justify-end`}
            >
              {technologies.map((tech, index) => {
                return <span key={index}>{tech}</span>;
              })}
            </div>
            <div className="flex gap-6 lg:justify-end justify-start">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={variant}
          className="relative flex justify-end flex-col lg:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-auto w-fit xs:shadow-xl md:hover:scale-105 transition duration-200">
            <a href={href} target="_blank" rel="noreferrer">
              <img src={src} alt={title} className="md:h-[325px]  w-full" />
            </a>
          </div>
          <div className="lg:absolute left-0 text-left flex flex-col gap-3 lg:items-start">
            <h2 className="text-2xl md:text-3xl">{title}</h2>
            <p
              className={`lg:max-w-[450px] xs:shadow-md ${
                theme === "dark" ? "bg-carbon" : "bg-steel"
              } bg-opacity-50 backdrop-blur relative py-4 px-2 rounded-md z-2`}
            >
              {description}
            </p>
            <div
              className={`flex flex-wrap gap-3 mb-4 max-w-[450px] ${
                theme === "dark" ? "text-iron" : "text-dark-aqua"
              } justify-start lg:justify-end`}
            >
              {technologies.map((tech, index) => {
                return <span key={index}>{tech}</span>;
              })}
            </div>
            <div className="flex gap-6 lg:justify-end justify-start">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiExternalLink className="text-2xl" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-aqua transition duration-200"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Project;
