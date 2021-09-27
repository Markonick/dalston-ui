import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
  width: 200,
  height: 60,
  backgroundColor: "inherit",
  color: "black",
  border: "1px solid black",
  fontSize: "14px",
  fontWeight: 200,
  '&:hover': {
    background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    border: "none",  
    color: "white",
    opacity: 0.7,
  },
});

interface IButtonProps {
    children?: React.ReactNode;
    text: string;
    onClick?: any;
}

export const DalstonButton: React.FC<IButtonProps> = ({ onClick, children, text }) => {
  return (
    <StyledButton variant="text" onClick={onClick}>
      {text}
    </StyledButton>
  )
};
