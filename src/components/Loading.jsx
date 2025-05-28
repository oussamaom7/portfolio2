import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.fullScreen ? '100vh' : '100%'};
  width: 100%;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.bgLight};
  border-top: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.div`
  margin-top: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const Loading = ({ fullScreen, text }) => {
  return (
    <LoadingWrapper fullScreen={fullScreen}>
      <div style={{ textAlign: 'center' }}>
        <Spinner />
        {text && <LoadingText>{text}</LoadingText>}
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
