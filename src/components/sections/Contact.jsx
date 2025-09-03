import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary_light} 0%, ${({ theme }) => theme.background} 100%);
  @media (max-width: 960px) {
    padding: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.card_background || "#ffffff"};
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  gap: 16px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary_light});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${({ theme }) => theme.background};
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primary_light};
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary_light}20;
    transform: scale(1.02);
  }
`;

const EmailLink = styled.a`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CopyButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary_light};
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  &:disabled {
    background: ${({ theme }) => theme.text_secondary};
    cursor: not-allowed;
  }
`;

const StatusText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.success || "#2ecc71"};
  text-align: center;
  margin-top: 8px;
`;

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("om7.oussama@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Me</Title>
        <EmailContainer>
          <EmailLink href="mailto:om7.oussama@gmail.com">
            om7.oussama@gmail.com
          </EmailLink>
          <CopyButton onClick={handleCopy} disabled={copied}>
            {copied ? "Copied!" : "Copy"}
          </CopyButton>
        </EmailContainer>
        {copied && <StatusText>Email copied to clipboard!</StatusText>}
      </Wrapper>
    </Container>
  );
};

export default Contact;