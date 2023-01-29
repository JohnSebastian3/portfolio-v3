import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {

  return (
    <footer className="h-64 bg-aqua pt-10">
      <div className="w-5/6 md:w-2/3 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justift-center md:justify-between text-center">
          <span className="font-semibold text-2xl text-charcoal">
            John Guerrero
          </span>
          <small className="text-base text-charcoal">
            @2023 All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
