import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useThemeContext } from "../../utils/ThemeContext";
import { darkTheme, lightTheme } from "../../utils/Themes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 16px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  background: ${({ theme }) => theme.gradient_text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: "Space Grotesk", "Inter", sans-serif;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  line-height: 1.6;
  margin-top: 12px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Education = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <VerticalTimeline lineColor={isDarkTheme ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.2)"}>
          {(education || []).map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
              theme={isDarkTheme ? darkTheme : lightTheme}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Education;
