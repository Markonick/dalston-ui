import * as React from "react";
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { IProduct } from '../../customTypes';
import { ProductCard } from '../product/ProductCard';

const StyledRootDiv = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  flexDirection: 'row',
  overflow: 'hidden',
  backgroundColor: 'white',
  marginLeft: 50,
});


const StyledProductCard = styled(ProductCard)({
  width: '90%',
});

export const Product: React.FC<IProduct> = () => {
  const location = useLocation<IProduct>();

  const product = location.state;
  
  return (
    <StyledRootDiv>
      <StyledProductCard {...product}/>
    </StyledRootDiv>
  ) 
};