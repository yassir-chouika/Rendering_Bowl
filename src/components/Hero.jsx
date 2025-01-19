import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <h1 className="text-white text-8xl text-center mt-10">
        Welcome to RenderBowl —<br /> Code Rendering Reimagined
      </h1>
      <p className="text-PaletteGray text-center text-4xl">
        Your One-Stop Solution for Modern Web <br /> Development Compilation
      </p>
      <button
        type="button"
        className="text-white bg-PaletteTeal hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50 font-bold rounded-lg text-md px-5 py-2.5 m-5 focus:outline-none"
      >
        Discover
      </button>
      {/* The FontAwesomeIcon positioned at the bottom */}
      <div className="absolute bottom-28">
        <FontAwesomeIcon style={{color:'white'}} icon={faAnglesDown} />
      </div>
    </div>
  );
};

export default Hero;
