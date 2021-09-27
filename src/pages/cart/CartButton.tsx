import * as React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { cartState } from '../../store/cartState';
import { ROUTES_CONFIG } from '../../routes';

const StyledRootDiv = styled('div')({
  zIndex: 10000,
  position: 'fixed',
  right: 10,
  top: 10,
});

const StyledCartlink = styled(Link)({
  width: 160,
  fontSize: 12,
  fontStyle: "normal",
  fontWeight: 600,
  fontFamily: "Quicksand",
  WebkitFontSmoothing: 'antialiased',
  color: "black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "right",
  textDecoration: "none",
  transition: '1s',
  "&:hover": {
    color: "black",
    transition: "0.7s",
    textDecoration: "none",
  },
  "&:focus": {
    color: "black",
    transition: "0.7s",
    textDecoration: "none",
  }
});
const StyledItemsInCartDiv = styled('div')({
  border: '1px solid gray',
  borderRadius: '3px',
  padding: 5,
  display: 'flex',
  alignItems: 'center',
  "&:hover": {
    border: '1px solid white',
    background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    color: "white",
    opacity: 1,
    transition: "0.7s",
    // textDecoration: "none! important",
  },
});

export const CartButton: React.FC = () => {
  const cart = useRecoilValue(cartState);

  return (
    <StyledRootDiv>
      <StyledCartlink to={ROUTES_CONFIG.CART}>
      {cart === undefined || cart.length === 0 
      ? <ShoppingCartIcon/> 
      : <StyledItemsInCartDiv>
          <AddShoppingCartIcon />
          <span style={{marginLeft: 10, marginRight: 10}}>{`${cart.length} items in cart`}</span>
        </StyledItemsInCartDiv>}
      </StyledCartlink>
    </StyledRootDiv>
  )
};