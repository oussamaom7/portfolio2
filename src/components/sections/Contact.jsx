import React from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 80px 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 600px;
    height: 300px;
    background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  
  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 24px;
  padding: 48px 40px;
  box-shadow: ${({ theme }) => theme.glow};
  gap: 24px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  background: ${({ theme }) => theme.gradient_text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: "Space Grotesk", "Inter", sans-serif;
  letter-spacing: -0.02em;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 180px;
  
  @media (max-width: 480px) {
    min-width: 100%;
    padding: 14px 24px;
  }
`;

const EmailButton = styled(ContactButton)`
  background: ${({ theme }) => theme.gradient};
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
  }
`;

const WhatsAppButton = styled(ContactButton)`
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);
  }
`;

const SubText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  line-height: 1.6;
  margin: 0;
`;

const Contact = () => {
  const email = "om7.oussama@gmail.com";
  const whatsappNumber = "212767389825"; 
  const whatsappMessage = "Hello Oussama! I found your portfolio and would like to work together.";

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Let's Connect</Title>
        <SubText>
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </SubText>
        <ButtonsContainer>
          <EmailButton 
            href={`mailto:${email}`}
            aria-label="Send email"
          >
            <EmailIcon /> Send Email
          </EmailButton>
          <WhatsAppButton 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon /> WhatsApp
          </WhatsAppButton>
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;