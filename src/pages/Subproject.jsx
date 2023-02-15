import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Subproject = ({
  theme,
  title,
  href,
  github,
  description,
  technologies,
  delay,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5, delay: delay }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`${
        theme === "dark" ? "bg-carbon" : "bg-steel"
      } py-6 px-4 rounded-md relative xs:shadow-lg h-[300px] bg-opacity-60`}
    >
      <h2 className="text-aqua text-2xl md:text-3xl">{title}</h2>
      <p className="lg:max-w-[450px] mt-2 mb-4 xs:mb-2 md:mb-4 relative py-4 rounded-md z-2">
        {description}
      </p>
      <div
        className={`mb-4 flex flex-wrap gap-3 justify-end ${
          theme === "dark" ? "text-iron" : "text-dark-aqua"
        } absolute bottom-10 right-4 text-xs sm:text-base`}
      >
        {technologies.map((tech, index) => {
          return <span key={index}>{tech}</span>;
        })}
      </div>
      <div className="flex gap-6 lg:justify-end justify-start absolute bottom-4 right-4">
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
    </motion.div>
  );
};

export default Subproject;
