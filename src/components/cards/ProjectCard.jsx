import React from "react";
import styled from "styled-components";

const Card = styled.article`
  width: 100%;
  max-width: 360px;
  height: 540px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
    border-color: ${({ theme }) => theme.primary}40;
  }

  &:hover::before {
    opacity: 1;
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
  border-radius: 14px;
  object-fit: cover;
  transition: all 0.4s ease;
  
  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const Video = styled.video`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.card_light};
  border-radius: 14px;
  object-fit: cover;
  transition: all 0.4s ease;
  
  ${Card}:hover & {
    transform: scale(1.03);
  }
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
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: rgba(99, 102, 241, 0.12);
  padding: 4px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #ffffff;
    border-color: ${({ theme }) => theme.primary};
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
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  transition: color 0.3s ease;
  font-family: "Space Grotesk", "Inter", sans-serif;
  
  ${Card}:hover & {
    color: ${({ theme }) => theme.primary};
  }
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
  background: ${({ theme }) => theme.gradient};
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
  
  &:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  }
`;

const ButtonOutline = styled.a`
  flex: 1;
  text-align: center;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.card_border};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover { 
    background: ${({ theme }) => theme.card_light}; 
    transform: translateY(-2px); 
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectCard = ({ project, setOpenModal }) => {
  const fallback = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABQCAYAAABu7m8SAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABGhJREFUeNrs3cENgzAQBVA6//+m0l2mVhQm0lQk5qg7cQ2Q5x2yq7y0p9yWv2gQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwC+u2bZtW3V3eQwQm9P9f4G7vVbD4eE8g+8v8hQ3Jw8A2a1Z9w7JxgWw5JX9l7vQfE1n0Qm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xgQm4o8xiQ9uD3dQwAAAPB0YQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8E74AAf2mVJb0Jb5wAAAAAElFTkSuQmCC";
  return (
    <Card onClick={() => setOpenModal && setOpenModal({ state: true, project })}>
      {project.isVideo ? (
        <Video
          src={project.image}
          autoPlay
          loop
          muted
          playsInline
          width="330"
          height="180"
        />
      ) : (
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
      )}
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
