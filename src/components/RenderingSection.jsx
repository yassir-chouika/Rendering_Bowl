import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const RenderingSection = () => {
  const [activeTab, setActiveTab] = useState("html");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [renderedContent, setRenderedContent] = useState("");

  const handleRun = () => {
    const combinedCode = `
      <style>${cssCode}</style>
      ${htmlCode}
      <script>${jsCode}</script>
    `;
    setRenderedContent(combinedCode);
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
      <div className="laptop:w-1/2 ">
        <div className="flex flex-row justify-between pt-2 tablet:px-1">
          <div className="flex flex-row py-2 tablet:p-2">
            {["Html", "Css", "Javascript"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`text-white bg-SlightlyBlack hover:bg-[#2D3238] focus:ring-4 focus:ring-[#00ADB5]/50  font-medium rounded-lg text-sm px-5 py-2.5 me-2 ${
                  activeTab === tab.toLowerCase() ? "bg-[#00ADB5]" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleRun}
            className="text-white bg-PaletteTeal hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <FontAwesomeIcon className=" mr-3" icon={faPlay} />
            Run
          </button>
        </div>
        {/* Code editor */}
        <div className="border-solid border-4 border-PaletteGray p-1 rounded-lg">
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
        className=" laptop:w-1/2 bg-white border-solid border-4 border-PaletteTeal p-2 rounded-lg"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    </main>
  );
};

export default RenderingSection;
