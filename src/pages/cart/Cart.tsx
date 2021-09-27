import * as React from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from '@mui/material/styles';
import { CartItemsCard } from './CartItemsCard';
import { cartState } from '../../store/cartState';
import { IProduct } from '../../customTypes';
import { CheckoutCard } from './CheckoutCard';

const StyledCheckoutCard = styled(CheckoutCard)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    width: '90%',
    maxWidth: '90%',
});

export const Cart: React.FC = () => {  
  const [cart, setCart] = useRecoilState<Array<IProduct>>(cartState);
  const cartItems = useRecoilValue(cartState);

  const removeFromCart = (id: number) => {
    console.log(`REMOVING ITEM WITH ID ${id} FROM CART...!!!`)
    setCart(() => {
      return cart.filter(item => item.id !== id);
    });
  }
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",}}>
      <CartItemsCard cartItems={cartItems} removeFromCart={removeFromCart}></CartItemsCard>
      <StyledCheckoutCard cartItems={cartItems}/>
    </div>
  )
};