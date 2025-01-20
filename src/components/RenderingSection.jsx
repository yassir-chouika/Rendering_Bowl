import React, { useState } from "react";

const RenderingSection = () => {
  const [activeTab, setActiveTab] = useState("html"); // Active editor tab
  const [htmlCode, setHtmlCode] = useState(""); // HTML code state
  const [cssCode, setCssCode] = useState(""); // CSS code state
  const [jsCode, setJsCode] = useState(""); // JavaScript code state
  const [renderedContent, setRenderedContent] = useState(""); // Rendered output

  // Function to handle 'Run' button
  const handleRun = () => {
    const combinedCode = `
      <style>${cssCode}</style>
      ${htmlCode}
      <script>${jsCode}</script>
    `;
    setRenderedContent(combinedCode);
  };

  return (
    <main className="w-full h-dvh flex flex-row gap-1">
      {/* Code typing area */}
      <div className="w-1/2">
        <div className="flex flex-row justify-between pt-2 px-1">
          <div className="flex flex-row p-2">
            {["Html", "Css", "Javascript"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`text-white bg-SlightlyBlack hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ${
                  activeTab === tab.toLowerCase() ? "bg-blue-700" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleRun}
            className="text-white bg-PaletteTeal hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Run
          </button>
        </div>
        {/* Code editor */}
        <div className="bg-slate-400 p-2">
          {activeTab === "html" && (
            <textarea
              className="w-full h-40"
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              placeholder="Write HTML here..."
            />
          )}
          {activeTab === "css" && (
            <textarea
              className="w-full h-40"
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              placeholder="Write CSS here..."
            />
          )}
          {activeTab === "javascript" && (
            <textarea
              className="w-full h-40"
              value={jsCode}
              onChange={(e) => setJsCode(e.target.value)}
              placeholder="Write JavaScript here..."
            />
          )}
        </div>
      </div>
      {/* Rendered output */}
      <div
        className="w-1/2 bg-slate-500 p-2"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    </main>
  );
};

export default RenderingSection;

