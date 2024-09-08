import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import ProductTable from "../uicomponent/ProductTable";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] =useState([]);

  const [product, setProduct] = useState({
    name:"",
    price:"",
    quantity:"",
    imageUrl:""
  });

  useEffect(() => {
    const getProducts = async ()=>{
      setLoading(true);
      try {
        const response = await ProductService.getAllProducts();
             setProductList(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getProducts();
  }, [])

  const handleChange = (e) =>{
    const value = e.target.value;
    setProduct({...product, [e.target.name]:value})
  }
  const addProduct = (e) =>{
    ProductService.addProduct(product)
    .then(response =>{
      console.log("Shubham",response.data);
    }).catch(error =>{
      console.log(error);
    })
  }
  
  return (
    <div className="addProd">
      <div className="tablular">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            { !loading && (
              <>
              {productList.map((product) =>(
                <ProductTable product={product}/>
              ))}
              </>              
            )}
          
          </tbody>
        </table>
      </div>
      <div className="form"  >
        <div className="addProduct">
          <h1>Add Product</h1>
          <form>
            <input
             id="productName"
              type="text"
              name="name"
              value={product.name}
              onChange={(e) => handleChange(e)}
              placeHolder="Enter the product name"
            />
            <br/>
            <input
              id="productPrice"
              type="text"
              name="price"
              value={product.price}
              onChange={(e) => handleChange(e)}
              placeHolder="Enter the product price"
            />
            <br/>
            <input
              type="url"
              id="productImageURL"
              name="imageUrl"
              value={product.imageUrl}
              onChange={(e) =>handleChange(e)}
              placeHolder="Enter the product image url"
            />
            <br/>
            <input
            id="productQuantity "
              type="text"
              name="quantity"
              value={product.quantity}
              onChange={(e) => handleChange(e)}
              placeHolder="Enter the product quantity"
            />
            <br/>
            <button id="addProductButton" onClick={(e) =>{addProduct(e)}}>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
