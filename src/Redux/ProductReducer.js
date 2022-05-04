import axios from 'axios';
const SET_PRODUCTS = "SET-PRODUCTS";
let initialState = {
    products:[
        {
            "id": 1,
            "imageUrl": "some url",
            "name": "Product Name",
            "count": 4,
            "size": {
                "width": 200,
                "height": 200
            },
            "weight": "200g",
            "comments": ["comment","comment"]
        }
    ]
}




const ProductReducer = (state=initialState,action)=>{
        switch (action.type) {
            case SET_PRODUCTS:
        return {
            ...state,"products": { ...state.products, ...action.products }
        }
default: return state;
}
}
export const setProductsAC = (products)=>({type:SET_PRODUCTS,products});
export default ProductReducer;