import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import Loading from "../Loading";

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

const ToggleButtonGroup = styled.div`
  display: flex;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.card_border};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  padding: 4px;
  gap: 4px;
  
  @media (max-width: 768px) {
    font-size: 11px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ToggleButton = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
  
  ${({ $active, theme }) =>
    $active &&
    `
    background: ${theme.gradient};
    color: white;
    box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
  `}
`;

const Divider = styled.div`
  display: none;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
  align-items: stretch;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 14px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.card_border};
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.text_primary};
  font-size: 15px;
  margin: 8px 0;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 24px;
`;

const ProjectsContainer = styled.section`
  padding: 100px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 70%);
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(
        (project) =>
          (toggle === "all" || project.category === toggle) &&
          (project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase())))
      )
    );
  }, [toggle, search]);

  if (isLoading) {
    return <Loading text="Loading Projects..." />;
  }

  return (
    <ProjectsContainer id="projects">
      <Wrapper>
        <Title role="heading" aria-level="2">Projects</Title>
        <Desc>Here are some of my notable projects that showcase my skills and experience.</Desc>
        
        <FilterContainer>
          <SearchInput 
            placeholder="Search projects by name, description, or technology..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
          <ToggleButtonGroup>
            <ToggleButton $active={toggle === "all"} onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
            <Divider />
            <ToggleButton $active={toggle === "web app"} onClick={() => setToggle("web app")}>
              WEB APPS
            </ToggleButton>
            <Divider />
            <ToggleButton $active={toggle === "android app"} onClick={() => setToggle("android app")}>
              ANDROID APPS
            </ToggleButton>
            <Divider />
            <ToggleButton $active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
              MACHINE LEARNING
            </ToggleButton>
          </ToggleButtonGroup>
        </FilterContainer>

        <CardContainer>
          {filteredProjects.length === 0 ? (
            <div style={{ 
              color: ({ theme }) => theme.text_secondary,
              textAlign: 'center',
              marginTop: '2rem'
            }}>
              No projects found matching your criteria.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                aria-label={`Project: ${project.title}`}
                itemScope
                itemType="http://schema.org/CreativeWork"
              />
            ))
          )}
        </CardContainer>
      </Wrapper>
    </ProjectsContainer>
  );
};

export default Projects;
