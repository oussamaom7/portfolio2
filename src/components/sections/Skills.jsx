import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

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

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.card_border};
  box-shadow: ${({ theme }) => theme.glow};
  border-radius: 20px;
  padding: 28px 32px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
    border-color: ${({ theme }) => theme.primary}40;
  }
`;

const SkillTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", "Inter", sans-serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.gradient};
    border-radius: 2px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.15);
    border-color: ${({ theme }) => theme.primary}40;
    transform: translateY(-2px);
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working for the past 3
          years.
        </Desc>
        <SkillsContainer>
          {(skills || []).map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {(skill.skills || []).map((item, index) => (
                  <SkillItem key={index}>
                    <SkillImage
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      width={24}
                      height={24}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wwAAgMBApB2xH8AAAAASUVORK5CYII=";
                      }}
                    />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
