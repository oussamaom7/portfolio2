import React from 'react';
import styled from 'styled-components';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.card};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.primary + 20};
  }

  svg {
    color: ${({ theme }) => theme.text_primary};
    font-size: 20px;
  }
`;

const ThemeToggle = ({ isDarkTheme, toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
    </ToggleButton>
  );
};

export default ThemeToggle;
