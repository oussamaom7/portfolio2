import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px 120px;
  z-index: 1;
  min-height: 100vh;
  background: radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 60%);

  @media (max-width: 960px) {
    padding: 80px 16px 100px;
    min-height: auto;
  }

  @media (max-width: 640px) {
    padding: 60px 16px 80px;
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
  justify-content: center;
  align-items: center;
  
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 56px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-family: "Space Grotesk", "Inter", sans-serif;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 44px;
    margin-bottom: 8px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

const TextLoop = styled.div`
  font-weight: 500;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.4;
  margin-top: 12px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  background: ${({ theme }) => theme.gradient_text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;

const SubTitle = styled.div`
  font-size: 17px;
  line-height: 1.7;
  margin: 24px 0 36px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 540px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 15px;
    max-width: 100%;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  background: ${({ theme }) => theme.gradient};
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 640px) {
    padding: 14px 28px;
    font-size: 15px;
  }
`;

const HeroImage = styled.img`
  border-radius: 50%;
  display: block;
  width: 100%;
  height: auto;
  max-width: 380px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 3px solid transparent;
  background: linear-gradient(${({ theme }) => theme.bg}, ${({ theme }) => theme.bg}) padding-box,
              ${({ theme }) => theme.gradient} border-box;
  box-shadow: 0 20px 50px rgba(99, 102, 241, 0.25),
              0 0 0 1px rgba(99, 102, 241, 0.1);
  animation: float 6s ease-in-out infinite;

  @media (max-width: 640px) {
    max-width: 260px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  align-items: center;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_border};
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
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
