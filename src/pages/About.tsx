import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  margin: '30%',
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  maxWidth: '50%',
  backgroundColor: 'Gainsboro',
  boxShadow: "none",
});

const StyledCardContent = styled(CardContent)({
  width: '80%',
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center"
});

const StyledTypography = styled(Typography)({
  display: "flex",
  flexWrap: "wrap",
  fontWeight: 100,
  fontFamily: "Helvetica",
  color: 'black',
  fontSize: 14,
  width: '100%',
});
export const About: React.FC = () => {

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTypography>
          This is a "Frontend only" demo project, deployed to Netlify. At the moment it lacks a Backend.
          However the next step will be to add a Strapi headless CMS backend. This way we can manage content,
          while at the same time connecting to a Postgres Schema for the purpose of this eShop.<br/><br/>
          Checkout will be done using a 3rd party integration such as Stripe.
        </StyledTypography><br/> 
      </StyledCardContent>
    </StyledCard>
  );
};