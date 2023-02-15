import React from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

const Skill = ({ theme, title, icon }) => {
  return (
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
        <Icon icon={icon} theme={theme} />
      </div>
      <p className="text-xs md:text-lg font-bold mt-2">{title}</p>
    </motion.div>
  );
};

export default Skill;
