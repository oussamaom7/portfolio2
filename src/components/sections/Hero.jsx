import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: linear-gradient(
    225deg,
    #ff5f5f 0%,
    #ff2a2a 100%
  );
  background: -moz-linear-gradient(
    225deg,
    #ff5f5f 0%,
    #ff2a2a 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    #ff5f5f 0%,
    #ff2a2a 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const HeroImage = styled.img`
  border-radius: 50%;
  display: block;
  width: 100%;
  height: auto;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  align-items: center;
`;

const SocialMediaIcon = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="about">
      <HeroInnerContainer>
        <HeroLeftContainer>
          <Title role="heading" aria-level="1">
            Hi, I am <br /> {Bio?.name || ""}
          </Title>
          <TextLoop>
            <span>
              I am a{" "}
              <Span aria-label="roles">
                <Typewriter
                  options={{
                    strings: Bio?.roles || [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </span>
          </TextLoop>
          <SubTitle role="paragraph">{Bio?.description || ""}</SubTitle>
          <ResumeButton
            href={Bio?.resume || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
          >
            Check Resume
          </ResumeButton>
          <SocialMediaIcons>
            <SocialMediaIcon
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </SocialMediaIcon>
            <SocialMediaIcon
              href={Bio?.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </SocialMediaIcon>
          </SocialMediaIcons>
        </HeroLeftContainer>

        <HeroRightContainer>
          <Tilt options={{ max: 20, scale: 1.05 }}>
            <HeroImage
              src={process.env.PUBLIC_URL + "/hero.jpg"}
              alt="Oussama Maache"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              width="400"
              height="400"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAQAAABl9Q8tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAH0lEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAA4HcGygAAd8yq1wAAAABJRU5ErkJggg==";
              }}
            />
          </Tilt>
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default Hero;
