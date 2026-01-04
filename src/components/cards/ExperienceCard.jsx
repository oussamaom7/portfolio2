import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

const Top = styled(motion.div)`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", "Inter", sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 8px;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled(motion.span)`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const ExperienceCard = ({ experience, theme }) => {
  const cardBg = theme?.card || "rgba(18, 18, 26, 0.8)";
  const iconBg = theme?.bg === "#fafafa" 
    ? "rgba(255, 255, 255, 0.95)" 
    : "rgba(18, 18, 26, 0.9)";
  const textColor = theme?.text_primary || "#f8fafc";
  
  return (
    <VerticalTimelineElement
      icon={
        <Image
          src={experience.img}
          alt={experience.company}
          loading="lazy"
          decoding="async"
          style={{ borderRadius: "50%", objectFit: "cover" }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wwAAgMBApB2xH8AAAAASUVORK5CYII=";
          }}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: cardBg,
        color: textColor,
        boxShadow: theme?.glow || "0 0 40px rgba(99, 102, 241, 0.1)",
        border: `1px solid ${theme?.card_border || "rgba(99, 102, 241, 0.15)"}`,
        borderRadius: "20px",
        backdropFilter: "blur(20px)",
      }}
      iconStyle={{
        background: iconBg,
        color: textColor,
        boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.2), inset 0 0 0 1px rgba(99, 102, 241, 0.3)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${cardBg}`,
      }}
      date={experience.date}
    >
      <Top
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={experience.img}
          alt={experience.company}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wwAAgMBApB2xH8AAAAASUVORK5CYII=";
          }}
        />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>{experience.desc}</Description>
      {experience.skills && (
        <Skills>
          <b>Skills:</b>
          <ItemWrapper>
            {experience.skills.map((skill, index) => (
              <Skill
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                • {skill}
              </Skill>
            ))}
          </ItemWrapper>
        </Skills>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
