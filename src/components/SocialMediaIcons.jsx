import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:text-light-aqua transition duration-200"
        href="https://www.linkedin.com/in/johnsguerrero/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={'35px'} />
      </a>
      <a
        className="hover:text-light-aqua transition duration-200"
        href="https://twitter.com/SebaCodes"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineTwitter size={'35px'}/>
      </a>
      <a
        className="hover:text-light-aqua transition duration-200"
        href="https://twitter.com/SebaCodes"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub size={'35px'}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
