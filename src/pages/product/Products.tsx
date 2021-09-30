import * as React from 'react';
import { useLocation } from "react-router-dom";
import { ProductImageList } from './ProductImageList';
// import productData from './productData';
import { GetProducts } from '../../api/GetProducts';
import { GetCategoryProducts } from '../../api/GetCategoryProducts';

export const Products: React.FC = () => {
  const search = useLocation().search;
  const category = new URLSearchParams(search).get("cat") || '';

  console.log('CLICKED ON A NAV FILTER!')
  const products = category === '' ? GetProducts().products : GetCategoryProducts(category).products;
  
  return (<div><ProductImageList products={products} /></div>);
};

