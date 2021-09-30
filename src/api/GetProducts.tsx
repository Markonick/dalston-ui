import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../customTypes";


export const GetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
    
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get<IProduct[]>("https://dalston-strapi.herokuapp.com/products").then(response => {
        setProducts(response?.data);
      });
    };
    fetchProducts();
  }, []);
  
  return (
    {products}
  
  );
}
    