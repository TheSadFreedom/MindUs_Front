import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShopPageStyled } from "./ShopPage.styled";
import { CardProduct } from "../../Components/CardProduct/CardProduct";

interface Product {
  aiModelId: number;
  aiModelName: string;
  aiModelAuthor: string;
  aiModelDescription: string;
}

export const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>("https://localhost:7168/api/AiModels");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ShopPageStyled>
      {products.map((product) => (
        <CardProduct
          key={product.aiModelId}
          name={product.aiModelName}
          author={product.aiModelAuthor}
          description={product.aiModelDescription} 
          id={product.aiModelId}
          />
      ))}
    </ShopPageStyled>
  );
};
