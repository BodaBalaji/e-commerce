import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

const ProductEdit = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const updateProduct = (e) => {
    e.preventDefault();
    ProductService.updateProduct(product, id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="editProduct">
      {!loading && (
        <>
          <div>
            <img src={product.imageUrl} alt="Product Image" />
          </div>
          <form action="">
            <label htmlFor="input">Product Image url</label>
            <input
              type="url"
              name="imageUrl"
              value={product.imageUrl}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label htmlFor="input">Product price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <label htmlFor="input">Product quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <button onClick={(e) => updateProduct(e)} style={{width:"80px", borderRadius:"20px"}}>Update</button>
            <button onClick={() => navigate('/products')}style={{width:"80px", borderRadius:"20px"}}>Cancel</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ProductEdit;
