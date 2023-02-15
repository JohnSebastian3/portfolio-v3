import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  DiCss3,
  DiPostgresql,
  DiPython,
  DiJava,
  DiGit,
  DiNpm,
} from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPassport,
  SiPostman,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Icon = ({ icon, theme }) => {
  const iconStyles = `w-2/3 h-2/3 ${
    theme === "dark" ? "text-steel" : "text-carbon"
  }`;
  return (
    <>
      {icon === "AiFillHtml5" ? (
        <AiFillHtml5 className={iconStyles} />
      ) : icon === "AiFillGithub" ? (
        <AiFillGithub className={iconStyles} />
      ) : icon === "DiCss3" ? (
        <DiCss3 className={iconStyles} />
      ) : icon === "DiPostgresql" ? (
        <DiPostgresql className={iconStyles} />
      ) : icon === "DiPython" ? (
        <DiPython className={iconStyles} />
      ) : icon === "DiJava" ? (
        <DiJava className={iconStyles} />
      ) : icon === "DiGit" ? (
        <DiGit className={iconStyles} />
      ) : icon === "DiNpm" ? (
        <DiNpm className={iconStyles} />
      ) : icon === "IoLogoJavascript" ? (
        <IoLogoJavascript className={iconStyles} />
      ) : icon === "IoLogoNodejs" ? (
        <IoLogoNodejs className={iconStyles} />
      ) : icon === "SiTypescript" ? (
        <SiTypescript className={iconStyles} />
      ) : icon === "SiRedux" ? (
        <SiRedux className={iconStyles} />
      ) : icon === "SiExpress" ? (
        <SiExpress className={iconStyles} />
      ) : icon === "SiMongodb" ? (
        <SiMongodb className={iconStyles} />
      ) : icon === "SiPassport" ? (
        <SiPassport className={iconStyles} />
      ) : icon === "SiPostman" ? (
        <SiPostman className={iconStyles} />
      ) : icon === "FaReact" ? (
        <FaReact className={iconStyles} />
      ) : (
        ""
      )}
    </>
  );
};

export default Icon;
