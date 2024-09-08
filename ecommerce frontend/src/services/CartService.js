import axios from "axios";

const CART_BASE_URL = "http://localhost:8080/cart/"
class CartService{

    //Adding item to cart
    addToCart(cart)
    {
        return axios.post(CART_BASE_URL+"addToCart",cart);
    }

    //Get cartList of corresponding user
    getCartByUserId(userId)
    {
        console.log("CartService",userId);
        return axios.post(CART_BASE_URL+"getCartList/"+userId);
    }

    //Editing Cart
    editCart(id,cart)
    {
        return axios.put(CART_BASE_URL+"editCart/"+id,cart);
    }

    //Deleting Cart

    deleteCart(id)
    {
        return axios.delete(CART_BASE_URL+"delete/"+id);
    }

}

export default new CartService();