import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../customTypes";


export const GetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get<IProduct[]>(`${baseUrl}/products`).then(response => {
        setProducts(response?.data);
      });
    };
    fetchProducts();
  }, []);
  
  return (
    {products}
  );
}
    