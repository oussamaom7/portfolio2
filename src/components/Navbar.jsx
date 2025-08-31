import React, { useState, useEffect, useRef } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import ThemeToggle from "./ThemeToggle";

// Styled components
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease;
`;

const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme, $active }) => ($active ? theme.primary : theme.text_primary)};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.2s ease-in-out;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = ({ isDarkTheme, toggleTheme }) => {  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const theme = useTheme();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollYRef.current && window.scrollY > 300) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  // IntersectionObserver to highlight active nav link
  useEffect(() => {
    const ids = ["home", "about", "skills", "experience", "projects", "education", "contact"];
    const sections = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((s) => s.el);

    if (sections.length === 0) return;

    let current = activeSection;
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (id && id !== current) {
            current = id;
            setActiveSection(id);
          }
        }
      },
      {
        root: null,
        // Trigger when ~30% visible, with some top/bottom margin to avoid early switches
        threshold: [0.3, 0.6, 0.9],
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Nav style={{ top: showNavbar ? "0" : "-80px" }}>
      <NavbarContainer>
        <NavLogo to="/">
          <ColorText>&lt;</ColorText>
          <span style={{ color: theme.text_primary }}>Oussama</span>
          <div style={{ color: theme.primary }}>/</div>
          <span style={{ color: theme.text_primary }}>Maache</span>
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about" $active={activeSection === "about"} aria-current={activeSection === "about" ? "page" : undefined}>About</NavLink>
          <NavLink href="#skills" $active={activeSection === "skills"} aria-current={activeSection === "skills" ? "page" : undefined}>Skills</NavLink>
          <NavLink href="#experience" $active={activeSection === "experience"} aria-current={activeSection === "experience" ? "page" : undefined}>Experience</NavLink>
          <NavLink href="#projects" $active={activeSection === "projects"} aria-current={activeSection === "projects" ? "page" : undefined}>Projects</NavLink>
          <NavLink href="#education" $active={activeSection === "education"} aria-current={activeSection === "education" ? "page" : undefined}>Education</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#about" $active={activeSection === "about"} aria-current={activeSection === "about" ? "page" : undefined}>
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#skills" $active={activeSection === "skills"} aria-current={activeSection === "skills" ? "page" : undefined}>
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#experience" $active={activeSection === "experience"} aria-current={activeSection === "experience" ? "page" : undefined}>
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#projects" $active={activeSection === "projects"} aria-current={activeSection === "projects" ? "page" : undefined}>
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#education" $active={activeSection === "education"} aria-current={activeSection === "education" ? "page" : undefined}>
              Education
            </NavLink>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <GithubButton href={Bio.github} target="_Blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
