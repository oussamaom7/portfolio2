import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { darkTheme } from "../../utils/Themes";

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

// Override library defaults that use !important
const TimelineOverrides = createGlobalStyle`
  .vertical-timeline-element-content {
    background: ${({ theme }) => theme.card} !important;
    color: ${({ theme }) => theme.text_primary} !important;
    border: 1px solid rgba(148, 163, 184, 0.20) !important;
  }
  .vertical-timeline-element-content-arrow {
    border-right-color: ${({ theme }) => theme.card} !important;
  }
  .vertical-timeline-element-icon {
    background: ${({ theme }) => theme.card} !important;
    color: ${({ theme }) => theme.text_primary} !important;
    box-shadow: 0 0 0 4px rgba(148,163,184,0.20), inset 0 0 0 1px rgba(148,163,184,0.25) !important;
  }
  .vertical-timeline-element-date {
    color: ${({ theme }) => theme.text_secondary} !important;
  }
  .vertical-timeline-element-content p,
  .vertical-timeline-element-content div,
  .vertical-timeline-element-title,
  .vertical-timeline-element-subtitle {
    color: ${({ theme }) => theme.text_primary} !important;
  }
`;

const EducationCard = ({ education, theme }) => {
  const isDarkTheme = theme === darkTheme;

  return (
    <>
      <TimelineOverrides />
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
        background: theme.card,
        backgroundColor: theme.card,
        color: theme.text_primary,
        boxShadow: isDarkTheme
          ? "rgba(0, 0, 0, 0.5) 0px 8px 24px"
          : "rgba(23, 92, 230, 0.08) 0px 4px 24px",
        border: isDarkTheme
          ? "1px solid rgba(148, 163, 184, 0.20)" // slate-400 @ 20%
          : "1px solid #E2E8F0", // slate-200
        borderRadius: "12px",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme.card}`,
      }}
      iconStyle={{
        background: theme.card,
        color: theme.text_primary,
        boxShadow: isDarkTheme
          ? "0 0 0 4px rgba(148,163,184,0.20), inset 0 0 0 1px rgba(148,163,184,0.25)"
          : "0 0 0 4px #E2E8F0, inset 0 0 0 1px #CBD5E1",
      }}
      date={
        <span style={{
          color: isDarkTheme ? theme.text_primary : theme.text_secondary,
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
