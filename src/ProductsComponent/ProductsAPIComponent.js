import React from 'react';
import axios from "axios";
import ProductsComponent from "./ProductsComponent";


const ProductsAPIComponent =(props)=>{
console.log(props)
    if(props.products.products.products.length === 1){
        axios.get('http://localhost:3000/products')
            .then(response=>{
                return response.data
            }).then( response2 => {
                console.log(response2)
           props.setUsers(response2)
        })
    }
    console.log(props)
    return(
       <ProductsComponent products={props.products.products.products} />
    )
}
export default ProductsAPIComponent;