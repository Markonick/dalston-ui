import React from 'react';
import { useSetRecoilState } from "recoil";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IProduct } from '../../customTypes';
import { DalstonButton } from '../../components/shared/DalstonButton';
import { cartState } from '../../store/cartState';

const StyledCard = styled(Card)({
  maxWidth: '100%',
  boxShadow: "none",
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "start-left",
});

const StyledMediaDiv = styled('div')({
  width: '50%',
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
});

const StyledImg = styled('img')({
  width: '100%',
  marginBottom: 20,
});

const StyledInfoDiv = styled('div')({
  width: '40%',
  marginLeft: 40,
});

const StyledTitleTypography = styled(Typography)({
    display: "flex",
    flexWrap: "wrap",
    fontWeight: 100,
    fontFamily: "Helvetica",
    color: 'black',
    fontSize: 20,
    width: '100%',
});
  
const StyledFieldsTypography = styled(Typography)({
  fontWeight: 200,
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontSize: 14,
  color: 'black',
});

const StyledSoldoutTypography = styled(Typography)({
  fontSize: 18,
});

export const ProductCard: React.FC<IProduct> = (product:IProduct) => {

  const setCart = useSetRecoilState<Array<IProduct>>(cartState);
  const { id, brand, name, description, size, price, condition, material, quantity, images } = product;

  const addToCart = () => {
    console.log(`ADDING ITEM WITH ID ${id} TO CART...!!!`)
    setCart(cart => cart.find(item => item.id === id) ? cart : [...cart, product]);
  };

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledMediaDiv>
          {images.map(({id, url}) => ( 
            <StyledImg src={`http://localhost:1337${url}`} alt={url} key={id}/> 
          ))}
        </StyledMediaDiv>
        <StyledInfoDiv>
          <StyledTitleTypography>
            {brand}
          </StyledTitleTypography><br/>
          <StyledFieldsTypography>
            {description}
          </StyledFieldsTypography><br/>
          <Divider style={{width: 40, color: 'black', }}/><br/>
          <StyledFieldsTypography>
            <span style={{color: 'black', fontSize: 20}}>€{price}<br/><br/></span>
          </StyledFieldsTypography>
          <StyledFieldsTypography>
            Size EU {size}
          </StyledFieldsTypography><br/>
          <StyledFieldsTypography>
            {material}
          </StyledFieldsTypography><br/>
          <StyledFieldsTypography>
            {condition}
          </StyledFieldsTypography><br />
          {quantity > 0
            ? <DalstonButton onClick={addToCart} text='ADD TO CART'/>
            : <StyledSoldoutTypography>SOLD OUT 😢</StyledSoldoutTypography>}
        </StyledInfoDiv>
      </StyledCardContent>
    </StyledCard>
  );
}
