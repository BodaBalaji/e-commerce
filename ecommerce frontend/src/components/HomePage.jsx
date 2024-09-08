import React from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import ProductService from "../services/ProductService";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const HomePage = ({ user }) => {
  const [productList, setproductList] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const list = await ProductService.getAllProducts();
        setproductList(list.data);
        console.log(list.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="homepage">
      <NavigationBar/>
      {!loading && (
        <div className="productCard">
          {productList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
