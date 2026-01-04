import React from "react";
import styled, { useTheme } from "styled-components";
import { experiences } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../cards/ExperienceCard";

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

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: center;
  }
`;

const Experience = () => {
  const theme = useTheme();
  
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>
        <TimelineSection>
          <VerticalTimeline
            animate={false}
            lineColor="rgba(99, 102, 241, 0.3)"
          >
            {(experiences || []).map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                theme={theme}
              />
            ))}
          </VerticalTimeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
