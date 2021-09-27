import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { cartTotal } from '../../store/cartState';
import { ROUTES_CONFIG } from '../../routes';
import { IProduct } from '../../customTypes';
import { DalstonButton as CheckoutButton} from '../../components/shared/DalstonButton';

const StyledDivRoot = styled('div')({
  marginTop: 40,
  boxShadow: "none",
  display: 'flex',
  width: '50%',
  marginLeft: 100,
});
  
const StyledCard = styled(Card)({
  boxShadow: 'none',
  elevation: 0,
});

const StyledCheckoutLink = styled(Link)({
  marginBottom: '5%',
  marginRight: 120,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textDecoration: 'none',
});

type Props = {
  cartItems: IProduct[],
};

export const CheckoutCard: React.FC<Props> = ({cartItems}) => {
  const total = useRecoilValue(cartTotal);
  const goToCheckout = () => { };
    
  return (
    <StyledDivRoot >
      <StyledCard>
        <CardContent>
          <div style={{ marginBottom: '5%' }}>Subtotal  € {total}</div>
          <StyledCheckoutLink to={{ 
            pathname: ROUTES_CONFIG.CHECKOUT,
            state: cartItems
          }}>
          <CheckoutButton onClick={goToCheckout} text='CHECKOUT'/>
        </StyledCheckoutLink>
        </CardContent>
      </StyledCard>
    </StyledDivRoot>
  );
}
