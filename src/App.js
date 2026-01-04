import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import { useState, useEffect } from "react";
import { ThemeContext } from "./utils/ThemeContext";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  transition: all 0.3s ease;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.08) 0%,
      rgba(139, 92, 246, 0.05) 50%,
      transparent 100%
    ),
    linear-gradient(
      225deg,
      transparent 0%,
      rgba(168, 85, 247, 0.05) 50%,
      rgba(99, 102, 241, 0.08) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default to dark theme
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <Body>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>
              <Footer />

              {openModal.state && (
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
              )}
            </div>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
