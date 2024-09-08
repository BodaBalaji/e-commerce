import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = ({ product }) => {
  const naviagte = useNavigate();
  return (
    <tr>
      <td>
        <img className="prodImg" src={product.imageUrl} alt="image" />
      </td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <div className="editDel">
          <div>{product.quantity}</div>
          <img src="\images\delete.png" alt="delete" />
          <img src="\images\edit.png" alt="edit"  onClick={() => naviagte("/editProduct/"+product.id)}/>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
