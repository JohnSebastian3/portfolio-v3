import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./pages/Navbar";
import DotGroup from "./pages/DotGroup";
import Landing from "./pages/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./pages/MySkills";
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-charcoal font-dosis">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 sm:w-2/3 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 xs:w-2/3 sm:w-5/6 mx-auto">
        <Projects setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient />
      <div className="w-5/6 sm:w-2/3 mx-auto">
        <MySkills setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient />
      <div className="w-5/6 sm:w-2/3 mx-auto">
        <About setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient />
      <div className="w-5/6 sm:w-2/3 mx-auto">
        <Contact setSelectedPage={setSelectedPage}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
