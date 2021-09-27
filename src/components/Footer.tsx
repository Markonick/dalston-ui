import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from "@mui/styles";
import instagram  from '../assets/images/instalogo.png';
import facebook  from '../assets/images/facebooklogo.png';
import { ROUTES_CONFIG } from '../routes';

const colorArray = ["crimson", "pink", "springgreen", "orange"];
const getRandomColor = () => colorArray[Math.floor(Math.random() * colorArray.length)];

const StyledRootDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  padding: '40px 0px 0px 40px',
  height: 200,
  backgroundColor: 'rgba(0,0,0,0.08)',
  color: 'black',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 14,
  textAlign: 'center',
  fontFamily: 'Helvetica',
});

const StyledSocialLogosDiv = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start-left',
    flexDirection: 'row',
});

const StyledInfoDiv = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'top',
    flexDirection: 'column',
    paddingLeft: 40,
    marginLeft: 40,
    marginRight: '10%',
});

const StyledImg = styled('img')({
    height: '30%',
    "&:hover": {
      cursor: 'pointer',
      opacity: 0.7,
    }
});

const StyledLink = styled(Link)({
  marginLeft: 30,
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 600,
  fontFamily: "Quicksand",
  WebkitFontSmoothing: 'antialiased',
  color: "black",
  display: "flex",
  flexDirection: "row",
  textDecoration: "none",
  transition: '1s',
  "&:hover": {
    color: getRandomColor(),
    transition: "0.7s",
    textDecoration: `underline ${getRandomColor()}`,
  },
  "&:focus": {
    color: getRandomColor(),
    transition: "0.7s",
    textDecoration: `underline ${getRandomColor()}`,
  }
});

const StyledTrademarkSpan = styled('span')({
  display: 'flex',
  alignSelf: 'flex-end',
  marginRight: 20,
  fontSize: 12,
  fontStyle: "normal",
  fontWeight: 600,
  fontFamily: "Quicksand",
  WebkitFontSmoothing: 'antialiased',
  color: "gray",
})

export const Footer: React.FC = () => {
  return (
    <StyledRootDiv>
      <StyledSocialLogosDiv>
        <StyledImg alt='insta' src={instagram}onClick={() => window.location.href = ROUTES_CONFIG.INSTAGRAM}></StyledImg>
        <StyledImg alt='fb' src={facebook} onClick={()=> window.location.href=ROUTES_CONFIG.FACEBOOK}></StyledImg>
       </StyledSocialLogosDiv> 
      <StyledInfoDiv>
        <StyledLink to={{ pathname: ROUTES_CONFIG.ABOUT}}>about</StyledLink>
        <StyledLink to={{ pathname: ROUTES_CONFIG.INFO}}>contact</StyledLink>
        <StyledLink to={{ pathname: ROUTES_CONFIG.INFO}}>faq</StyledLink>
        <StyledLink to={{ pathname: ROUTES_CONFIG.INFO}}>shipping & returns</StyledLink>
      </StyledInfoDiv>
      <StyledTrademarkSpan>created by markonick &#8482;</StyledTrademarkSpan>
    </StyledRootDiv>
  );
}