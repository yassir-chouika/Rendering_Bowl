import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import RenderingSection from "./components/RenderingSection.jsx";
import InfoSection from "./components/InfoSection.jsx";
import Footer from "./components/Footer.jsx";
import Squares from "./animations/Squares.jsx";

function App() {
  return (
    <ThemeProvider>
      <>
        <div className="blur-[1px] absolute inset-0 -z-10">
          <Squares speed={0.5} squareSize={40} direction="diagonal" />
        </div>
        <NavBar />
        <Hero />
        <RenderingSection />
        <InfoSection />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
