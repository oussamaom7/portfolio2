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

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
display: flex;
border: 1.5px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
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
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  margin: 8px 0;
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.primary};
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
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
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
            <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
            <Divider />
            <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
              WEB APPS
            </ToggleButton>
            <Divider />
            <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}>
              ANDROID APPS
            </ToggleButton>
            <Divider />
            <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
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
