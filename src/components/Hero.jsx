import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="relative px-4 min-h-screen flex flex-col items-center">
      <h1 className="[text-shadow:_0_2px_8px_#778DA9] dark:[text-shadow:_0_2px_8px_#3e4043] text-white text-5xl tablet:text-6xl laptop:text-8xl text-center mt-16 dark:text-PaletteTeal motion-opacity-in-0 motion-translate-x-in-100 motion-blur-in-md motion-duration-1000">
        Welcome to RenderBowl —<br className="hidden laptop:block" /> Code
        Rendering Reimagined
      </h1>
      <p
        className="text-PaletteGray dark:text-gray-700 text-center text-lg tablet:text-2xl laptop:text-4xl motion-opacity-in-0 motion-translate-x-in-[-100%] motion-blur-in-md motion-duration-1000 motion-delay-100
"
      >
        Your One-Stop Solution for Modern Web{" "}
        <br className="hidden tablet:block" /> Development Compilation
      </p>
      <Link
        to="target-section" // ID of the target div
        smooth={true} // Enables smooth scrolling
        duration={700} // Scroll duration in milliseconds
        offset={-90}
      >
        <button
          type="button"
          className="text-white bg-PaletteTeal hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50 font-bold rounded-lg text-md px-5 py-2.5 m-5 focus:outline-none motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-1000 motion-delay-400 motion-ease-bounce transition-transform hover:scale-105 duration-200 hover:shadow-[7px_5px_56px_-14px_#009198]"
        >
          Discover
        </button>
      </Link>

      <div className="absolute bottom-28 motion-translate-y-loop-25">
        <FontAwesomeIcon
          className="dark:hidden"
          style={{ color: "white" }}
          icon={faAnglesDown}
        />
        <FontAwesomeIcon
          className="hidden dark:block "
          style={{ color: "black" }}
          icon={faAnglesDown}
        />
      </div>
    </div>
  );
};

export default Hero;
