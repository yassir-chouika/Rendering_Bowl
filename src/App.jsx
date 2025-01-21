import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import RenderingSection from "./components/RenderingSection.jsx";
import InfoSection from "./components/InfoSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="">
        <NavBar />
        <Hero />
        <RenderingSection />
        <InfoSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
