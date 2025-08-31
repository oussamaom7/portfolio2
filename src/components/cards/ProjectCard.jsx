import React from "react";
import styled from "styled-components";

const Card = styled.article`
  width: 100%;
  max-width: 360px;
  height: 540px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
    border-color: ${({ theme }) => theme.primary + 30};
  }

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 470px;
  }

  @media (max-width: 480px) {
    height: 440px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.card_light};
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: rgba(79, 70, 229, 0.12);
  padding: 2px 8px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #ffffff;
  }
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  transition: color 0.3s ease;
`;
const Subtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 2px 0 0 0;
`;
const Date = styled.span`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.5;
`;

const CaseList = styled.ul`
  margin: 8px 0 0 0;
  padding-left: 16px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  line-height: 1.5;
  display: grid;
  gap: 4px;
  & > li { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
`;

const Actions = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;
`;

const ButtonPrimary = styled.a`
  flex: 1;
  text-align: center;
  padding: 10px 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover { background: ${({ theme }) => theme.primary_light}; transform: translateY(-2px); }
`;

const ButtonOutline = styled.a`
  flex: 1;
  text-align: center;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.16);
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  &:hover { background: ${({ theme }) => theme.card_light}; transform: translateY(-2px); border-color: ${({ theme }) => theme.primary}; }
`;

const ProjectCard = ({ project, setOpenModal }) => {
  const fallback = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABQCAYAAABu7m8SAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABGhJREFUeNrs3cENgzAQBVA6//+m0l2mVhQm0lQk5qg7cQ2Q5x2yq7y0p9yWv2gQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwC+u2bZtW3V3eQwQm9P9f4G7vVbD4eE8g+8v8hQ3Jw8A2a1Z9w7JxgWw5JX9l7vQfE1n0Qm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xiQ9uD3dQwAAAPB0YQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8E74AAf2mVJb0Jb5wAAAAAElFTkSuQmCC";
  return (
    <Card onClick={() => setOpenModal && setOpenModal({ state: true, project })}>
      <Image
        src={project.image}
        alt={project.title}
        loading="eager"
        decoding="async"
        fetchpriority="high"
        width="330"
        height="180"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = fallback;
        }}
      />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
        {(project.problem || project.solution || project.impact) && (
          <CaseList>
            {project.problem && <li><strong>Problem:</strong> {project.problem}</li>}
            {project.solution && <li><strong>Solution:</strong> {project.solution}</li>}
            {project.impact && <li><strong>Impact:</strong> {project.impact}</li>}
          </CaseList>
        )}
      </Details>
      <Actions>
        {project.webapp && (
          <ButtonPrimary onClick={(e)=>e.stopPropagation()} href={project.webapp} target="_blank" rel="noopener noreferrer" aria-label={`Open live: ${project.title}`}>Live</ButtonPrimary>
        )}
        {project.github && (
          <ButtonOutline onClick={(e)=>e.stopPropagation()} href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open code: ${project.title}`}>Code</ButtonOutline>
        )}
        {project.caseStudy && (
          <ButtonOutline onClick={(e)=>e.stopPropagation()} href={project.caseStudy} target="_blank" rel="noopener noreferrer" aria-label={`Open case study: ${project.title}`}>Case Study</ButtonOutline>
        )}
      </Actions>
    </Card>
  );
};

export default ProjectCard;
