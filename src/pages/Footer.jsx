import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {

  return (
    <footer className="h-64 bg-aqua pt-10">
      <div className="w-5/6 md:w-2/3 mx-auto">
        <div className="flex flex-col justift-center items-center justify-between text-center">
        <SocialMediaIcons />
          <small className="text-base text-charcoal">
            Homebrewed by John Guerrero &copy; 2023
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
