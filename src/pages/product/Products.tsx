import * as React from 'react';
import { useLocation } from "react-router-dom";
import { ProductImageList } from './ProductImageList';
// import productData from './productData';
import { GetProducts } from '../../api/GetProducts';

export const Products: React.FC = () => {
  const search = useLocation().search;
  const category = new URLSearchParams(search).get("cat") || '';

  const productData = GetProducts().products;
  const products = category === ''
    ? productData
    : productData.filter(x => x.categories.some(g => Object.values(g).includes(category)));
  
  console.log(productData)
  console.log(category)
  console.log(products)
  return (<div><ProductImageList products={products} /></div>);
};

