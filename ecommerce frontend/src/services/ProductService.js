import axios from "axios";


const PRODUCT_BASE_URL = "http://localhost:8080/product/"
class ProductService{

    //Post Mapping product
    addProduct(product){
        return axios.post(PRODUCT_BASE_URL,product);
    }

    //Get Product
    getProductById(id)
    {
        return axios.get(PRODUCT_BASE_URL+"getProduct/"+id);
    }

    //Get all products
    getAllProducts()
    {
        return axios.get(PRODUCT_BASE_URL)
    }

    //Update Product
    updateProduct(product,id)
    {
        return axios.put(PRODUCT_BASE_URL+"updateProduct/"+id,product);
    }


    //Delete Product
    deleteProduct(id)
    {
        return axios.delete(PRODUCT_BASE_URL+"delete/"+id);
    }
}

export default new ProductService();