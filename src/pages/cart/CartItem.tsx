import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ROUTES_CONFIG } from '../../routes';
import { IProduct } from '../../customTypes';
import { RemoveButton } from '../../components/shared/RemoveButton';

const useStyles = makeStyles(({
  "@keyframes rainbow": {
    "0%": { backgroundPosition:'left'},
    "50%": {backgroundPosition: 'right'},
    "100%": { backgroundPosition:'left'},
  },
  gradient: {
    backgroundSize: '200% 200%',
    animation: '$rainbow 2s ease-in-out infinite',
    background: 'linear-gradient(to right, crimson,pink,springgreen)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'rgba(0,0,0,0)',
    fontSize: 16,
    width: 300,
    margin:' auto',
    fontWeight: 400,
    fontStyle: 'italic',
    display: 'block',
    transition: 'color .2s ease-in-out',
  }
}));

const StyledDivRoot = styled('div')({
  // boxShadow: "none",
  margin: 10,
});
  
const StyledCard = styled(Card)({
  boxShadow: 'none',
  // elevation: 0,
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: "row",
  justifyContent: 'start-left',
  alignItems: 'center',
  boxShadow: 'none',
  elevation: 0,
  fontWeight: 100,
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontSize: 14,
  borderBottom: '1px solid #DCDCDC',
});

const StyledLink = styled(Link)({
  marginLeft: 40,
});

const StyledImg = styled('img')({
  width: 120,
  height: 150,
  marginRight: 40,
  "&:hover": {
    cursor: 'pointer',
  }
});

type Props = {
  cartItem: IProduct,
  removeFromCart: (id: number) => void;
};

export const CartItem: React.FC<Props> = ({cartItem, removeFromCart}) => {
  const classes = useStyles();
  
  return (
    <StyledDivRoot >
      <StyledCard>
        <StyledCardContent> 
          <RemoveButton onClick={() => removeFromCart(cartItem.id)}/>     
          <StyledLink to={{ pathname: ROUTES_CONFIG.PRODUCT_DETAIL, state: cartItem }} >
            <StyledImg src={cartItem.images[0].url} alt={cartItem.name} key={cartItem.id}/>                   
          </StyledLink>
          <div style={{ display: 'flex',
            flexDirection: "column",
            justifyContent: 'left',
          }}>
            <div className={classes.gradient} style={{ fontWeight: 400, marginBottom: 10, }}>{cartItem.brand}</div>
            <div style={{alignItems: 'center', width: 300, fontSize: 16, fontWeight: 400, fontStyle: 'italic', marginBottom: 10, }}>{cartItem.name}</div>
            <div>EU {cartItem.size}</div>
            <div>Quantity: {cartItem.quantity}</div>
            <div>€ {cartItem.price}</div>
          </div>
        </StyledCardContent>
      </StyledCard>
    </StyledDivRoot>
  );
}
