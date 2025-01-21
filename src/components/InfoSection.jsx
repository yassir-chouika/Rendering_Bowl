import CardComponent from "./CardComponent";

const cards = [
  {
    id: 1,
    CardLogo: "/htmlLogo.svg",
    CardInfo:
      "Use semantic elements like nav, header, and footer instead of div for better accessibility and SEO optimization. Also the viewport meta tag is crucial for responsive design - never forget it in your head section.",
  },
  {
    id: 2,
    CardLogo: "/cssLogo.svg",
    CardInfo:
      "Learn flexbox before grid - it's simpler and handles most layouts. Start with justify-content and align-items. Also use rem for font sizes and padding/margin to maintain proportions when users change their browser's font size.",
  },
  {
    id: 3,
    CardLogo: "/jsLogo.svg",
    CardInfo:
      "console.table() shows arrays and objects in a neat table format - much better than console.log for debugging. Also learn async/await early - it makes handling promises much cleaner than using .then() chains.",
  },
  {
    id: 4,
    CardLogo: "/htmlLogo.svg",
    CardInfo:
      "Never forget to set character encoding with meta tag UTF-8 to properly display special characters. Also always close your tags properly - use a code validator to catch unclosed tags early.",
  },
  {
    id: 5,
    CardLogo: "/cssLogo.svg",
    CardInfo:
      "Use CSS variables (custom properties) for colors and repeated values to maintain consistency. Also mobile-first approach saves time - start with small screens and work your way up.",
  },
  {
    id: 6,
    CardLogo: "/jsLogo.svg",
    CardInfo:
      "Store DOM elements in variables if you'll reuse them multiple times for better performance. Also use template literals (${variable}) instead of string concatenation for cleaner code.",
  },
];

const InfoSection = () => {
  return (
    <section>
      <h2 className="text-white text-2xl text-center laptop:text-left tablet:text-5xl font-semibold mt-10  tablet:ml-10">
        What is RenderBowl exactly ?
      </h2>
      <p className="text-PaletteGray ml-5 mr-5 text-md text-justify tablet:text-lg laptop:ml-11 laptop:mt-2 laptop:mr-28 mb-28">
        An online code editor is a web-based tool that allows you to write, run,
        and test your code directly in your browser. It provides a convenient
        environment for coding without needing to install additional software.
        Use our HTML/CSS Code Editor above to write your code and instantly see
        the results. Whether you're experimenting with new ideas or learning the
        basics, our editor streamlines the process of coding and compiling.
      </p>

      <h3 className="text-center text-2xl tablet:text-3xl laptop:text-4xl font-bold mb-6 text-white dark:text-PaletteBlack laptop:mb-16 intersect:motion-scale-in-0 duration-700">
        Tips you{" "}
        <span className="text-PaletteTeal text-4xl tablet:text-6xl">
          DO NOT
        </span>{" "}
        want to miss
      </h3>
      <div className="flex justify-center flex-wrap laptop:flex mb-28 tablet:mb-28 md:mb-28 laptop:mb-16">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            CardLogo={card.CardLogo}
            CardInfo={card.CardInfo}
          />
        ))}
      </div>

      <div className="group relative flex justify-center items-center">
        <button>
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-14 hover:scale-125 duration-200 stroke-PaletteGray hover:stroke-PaletteTeal"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </button>
        <span
          className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border 
         border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
        >
          GitHub
        </span>
      </div>
    </section>
  );
};

export default InfoSection;
