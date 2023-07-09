import { AiOutlineBell } from "react-icons/ai";
import { TbVideoPlus } from "react-icons/tb";
import SearchInput from "../components/SearchInput";
import MenuAndLogo from "../components/MenuAndLogo";
import { HiOutlineSearch } from "react-icons/hi";
import { iconsClassNames } from "../utils/ClassName";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const Navbar = () => {
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as per your requirement
    };

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const handleMobileSearchToggle = () => {
    setMobileSearchActive((prev) => !prev);
  };

  const renderMobileSearchBar = () => (
    <nav className="fixed z-20 top-0 left-0 w-full flex items-center gap-8 justify-between px-4 py-2 bg-Black">
      <button
        className={`${iconsClassNames}`}
        onClick={handleMobileSearchToggle}
      >
        <BsArrowLeft className="text-White text-xl" />
      </button>
      <SearchInput
        isSmallScreen={isSmallScreen}
        mobileSearchActive={mobileSearchActive}
      />
    </nav>
  );

  const renderDesktopNavbar = () => (
    <nav className="fixed z-20 top-0 left-0 w-full flex items-center sm:gap-8 justify-between px-4 py-2 bg-Black">
      <MenuAndLogo />
      <SearchInput
        isSmallScreen={isSmallScreen}
        mobileSearchActive={mobileSearchActive}
      />
      <div className="flex items-center gap-4">
        {isSmallScreen && (
          <button
            className={`${iconsClassNames} sm:hidden`}
            onClick={handleMobileSearchToggle}
          >
            <HiOutlineSearch className="text-2xl" />
          </button>
        )}
        <button className={iconsClassNames}>
          <TbVideoPlus className="text-2xl" />
        </button>
        <button className={iconsClassNames}>
          <AiOutlineBell className="text-2xl" />
        </button>
      </div>
    </nav>
  );

  return (
    <>
      {isSmallScreen && mobileSearchActive
        ? renderMobileSearchBar()
        : renderDesktopNavbar()}
    </>
  );
};

export default Navbar;
