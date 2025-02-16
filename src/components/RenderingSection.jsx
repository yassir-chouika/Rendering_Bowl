import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faExpand,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";

const RenderingSection = () => {
  const [activeTab, setActiveTab] = useState("html");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [renderedContent, setRenderedContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRun = () => {
    const combinedCode = `
      <style>${cssCode}</style>
      ${htmlCode}
      <script>${jsCode}</script>
    `;
    setRenderedContent(combinedCode);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getEditorLanguage = () => {
    switch (activeTab) {
      case "html":
        return html();
      case "css":
        return css();
      case "javascript":
        return javascript();
      default:
        return html();
    }
  };

  return (
    <main className="w-full flex flex-col gap-2 laptop:flex-row laptop:gap-1 p-2">
      {/* Code typing area */}
      <div id="target-section" className="laptop:w-1/2">
        <div className="flex flex-row justify-between pt-2 tablet:px-1">
          <div className="flex flex-row py-2 tablet:p-2">
            {["Html", "Css", "Javascript"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`text-white bg-SlightlyBlack hover:bg-[#2D3238] focus:ring-4 focus:ring-[#00ADB5]/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 hover:scale-105 duration-200 ${
                  activeTab === tab.toLowerCase() ? "bg-[#00ADB5]" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div>
            <button
              type="button"
              onClick={handleRun}
              className="text-white bg-PaletteTeal hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-2 focus:outline-none hover:scale-105 duration-200"
            >
              <FontAwesomeIcon className="mr-3" icon={faPlay} />
              Run
            </button>
            <button
              type="button"
              onClick={handleExpand}
              className="hidden tablet:inline-block text-white bg-PaletteTeal hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50 font-medium rounded-lg text-sm px-4 py-2.5 me-2  focus:outline-none hover:scale-105 duration-200"
            >
              <FontAwesomeIcon
                icon={isExpanded ? faCompress : faExpand}
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </div>
        {/* Code editor */}
        <div className="border-solid border-4 bg-PaletteGray border-PaletteGray dark:bg-gray-900 dark:border-gray-900 p-1 rounded-lg">
          <CodeMirror
            value={
              activeTab === "html"
                ? htmlCode
                : activeTab === "css"
                ? cssCode
                : jsCode
            }
            height="500px"
            theme="dark"
            extensions={[getEditorLanguage()]}
            onChange={(value) => {
              if (activeTab === "html") setHtmlCode(value);
              if (activeTab === "css") setCssCode(value);
              if (activeTab === "javascript") setJsCode(value);
            }}
          />
        </div>
      </div>

      {/* Rendered output */}
      <div
        className={`${
          isExpanded
            ? "fixed inset-0 z-50 p-4 bg-black bg-opacity-75"
            : "laptop:w-1/2"
        }`}
      >
        <div className="bg-white border-solid border-4 border-PaletteTeal p-2 rounded-lg h-full">
          <iframe
            srcDoc={renderedContent}
            title="Rendered Output"
            sandbox="allow-scripts"
            className="w-full h-full"
          />
        </div>
        {isExpanded && (
          <button
            type="button"
            onClick={handleExpand}
            className="fixed top-2 right-2 text-white bg-PaletteTeal hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50 font-medium rounded-lg text-sm px-3 py-2 focus:outline-none hover:scale-105 duration-200"
          >
            <FontAwesomeIcon
              icon={faCompress}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </button>
        )}
      </div>
    </main>
  );
};

export default RenderingSection;
