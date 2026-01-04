import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 60px 0 40px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.bgLight};
  border-top: 1px solid ${({ theme }) => theme.card_border};
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 24px;
  background: ${({ theme }) => theme.gradient_text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: "Space Grotesk", "Inter", sans-serif;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 8px 12px;
  border-radius: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: rgba(99, 102, 241, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_border};
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Oussama Maache</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2025 Oussama Maache. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
