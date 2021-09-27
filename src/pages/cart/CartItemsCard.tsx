import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IProduct } from '../../customTypes';
import { CartItem } from './CartItem';

const useStyles = makeStyles(({
  root: {
    marginLeft: '10%',
    width: '90%',
    boxShadow: "none",
  }
}));


type Props = {
  cartItems: IProduct[],
  removeFromCart: (id: number) => void;
};

export const CartItemsCard: React.FC<Props> = ({cartItems, removeFromCart}) => {
  const classes = useStyles();
  console.log(cartItems)
  return (
    <Card className={classes.root} >
      <CardContent>
        {cartItems.map((item) => (
          <CartItem cartItem={item} removeFromCart={removeFromCart}/>
        ))}
      </CardContent>
    </Card>
  );
}