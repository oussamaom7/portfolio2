import React from "react";
import styled from "styled-components";
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
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div``;

const EducationCard = ({ education, theme }) => {
  const isDarkTheme = theme === darkTheme;

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: theme.card,
        color: theme.text_primary,
        boxShadow: isDarkTheme 
          ? "rgba(23, 92, 230, 0.15) 0px 4px 24px"
          : "rgba(23, 92, 230, 0.1) 0px 4px 24px",
        border: `1px solid ${isDarkTheme ? theme.card_light : theme.bgLight}`,
        borderRadius: "12px",
        backdropFilter: "blur(4px)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme.card}`,
      }}
      date={education.date}
    >
      <Top>
        <Image src={education.img} />
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
  );
};

export default EducationCard;
