import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../customTypes";


export const GetCategoryProducts = (category:string) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log('IN PROD CATSSSSSS!!!!!', category)
  
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get<IProduct[]>(`${baseUrl}/products?categories.name=${category}`).then(response => {
        console.log(response)
        setProducts(response?.data);
      })
      .catch(function (err) {
        console.log(err)
      });;
    };
    fetchProducts();
  }, []);
  
  return (
    {products}
  );
}
    