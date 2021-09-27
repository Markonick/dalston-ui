import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../customTypes";


export const GetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
    
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get<IProduct[]>("http://localhost:1337/products").then(response => {
        setProducts(response?.data);
      });
    };
    fetchProducts();
  }, []);
  
  return (
    {products}
  
  );
}
    