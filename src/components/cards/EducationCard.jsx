import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  font-family: "Space Grotesk", "Inter", sans-serif;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Degree = styled.div`
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
  color: ${({ theme }) => theme.text_primary} !important;
  line-height: 1.6;
  white-space: pre-line;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div``;

// Override library defaults that use !important - removed as we handle styles inline now

const EducationCard = ({ education, theme }) => {
  // Check if dark mode by comparing bg color (more reliable than object reference)
  const isDarkTheme = theme?.bg === "#0a0a0f";
  const cardBg = isDarkTheme ? "rgba(18, 18, 26, 0.8)" : "rgba(255, 255, 255, 0.9)";
  const iconBg = isDarkTheme 
    ? "rgba(18, 18, 26, 0.9)" 
    : "rgba(255, 255, 255, 0.95)";

  return (
    <>
      <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.img}
          loading="lazy"
          decoding="async"
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
        backdropFilter: "blur(20px)",
        color: theme.text_primary,
        boxShadow: theme?.glow || "0 0 40px rgba(99, 102, 241, 0.1)",
        border: `1px solid ${theme?.card_border || "rgba(99, 102, 241, 0.15)"}`,
        borderRadius: "20px",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${cardBg}`,
      }}
      iconStyle={{
        background: iconBg,
        color: theme.text_primary,
        boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.2), inset 0 0 0 1px rgba(99, 102, 241, 0.3)",
      }}
      date={
        <span style={{
          color: theme.text_secondary,
          fontWeight: 500,
        }}>
          {education.date}
        </span>
      }
    >
      <Top>
        <Image
          src={education.img}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wwAAgMBApB2xH8AAAAASUVORK5CYII=";
          }}
        />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </VerticalTimelineElement>
    </>
  );
};

export default EducationCard;
