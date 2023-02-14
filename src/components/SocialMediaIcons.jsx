import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const SocialMediaIcons = ({ page }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className={`${
          page === "landing"
            ? theme === "dark"
              ? "text-steel hover:text-aqua"
              : "text-carbon hover:text-iron"
            : "text-steel hover:text-light-aqua"
        } transition duration-200`}
        href="https://www.linkedin.com/in/johnsguerrero/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={"35px"} />
      </a>
      <a
        className={`${
          page === "landing"
            ? theme === "dark"
              ? "text-steel hover:text-aqua"
              : "text-carbon hover:text-iron"
            : "text-steel hover:text-light-aqua"
        } hover:text-light-aqua transition duration-200`}
        href="https://twitter.com/SebaCodes"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineTwitter size={"35px"} />
      </a>
      <a
        className={`${
          page === "landing"
            ? theme === "dark"
              ? "text-steel hover:text-aqua"
              : "text-carbon hover:text-iron"
            : "text-steel hover:text-light-aqua"
        } hover:text-light-aqua transition duration-200`}
        href="https://github.com/JohnSebastian3"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub size={"35px"} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
