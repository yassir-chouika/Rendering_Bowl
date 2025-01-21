import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="relative px-4 min-h-screen flex flex-col items-center">
      <h1 className="text-white text-5xl tablet:text-6xl laptop:text-8xl text-center mt-16 dark:text-gray-900">
        Welcome to RenderBowl —<br className="hidden laptop:block" /> Code Rendering Reimagined
      </h1>
      <p className="text-PaletteGray text-center text-lg tablet:text-2xl laptop:text-4xl">
        Your One-Stop Solution for Modern Web <br className="hidden tablet:block" /> Development Compilation
      </p>
      <button
        type="button"
        className="text-white bg-PaletteTeal hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50 font-bold rounded-lg text-md px-5 py-2.5 m-5 focus:outline-none"
      >
        Discover
      </button>
      <div className="absolute bottom-28">
        <FontAwesomeIcon className="dark:hidden" style={{ color: "white" }} icon={faAnglesDown} />
        <FontAwesomeIcon className="hidden dark:block" style={{ color: "black" }} icon={faAnglesDown} />
      </div>
    </div>
  );
};

export default Hero;
