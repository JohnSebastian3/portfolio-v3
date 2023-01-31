import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import mobileIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  isTopOfPage,
  setIsMenuToggled,
}) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? `${isTopOfPage ? "text-aqua" : "text-charcoal"}`
          : ""
      }  transition duration-200 hover:${isTopOfPage ? 'text-aqua' : 'text-charcoal'}`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(false);
      }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-aqua";

  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0 py-4 transition duration-200`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 sm:w-2/3">
        <h4 className="font-dosis text-3xl font-bold">JG</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-6 md:gap-16 font-dosis text-lg font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
              setIsMenuToggled={setIsMenuToggled}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-aqua p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={mobileIcon} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        <AnimatePresence>
          {!isAboveSmallScreens && isMenuToggled && (
            <motion.div
              key="sidebar"
              className="fixed right-0 bottom-0 h-full bg-aqua w-[300px]"
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0
              }}
              transition={{ duration: 0.3 }}
            >
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img alt="close-icon" src={closeIcon} />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 text-3xl ml-[33%] text-steel font-dosis">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
