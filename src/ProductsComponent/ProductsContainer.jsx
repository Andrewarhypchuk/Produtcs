import {connect} from 'react-redux';
import {setProductsAC} from '../Redux/ProductReducer';
import ProductsAPIComponent from "./ProductsAPIComponent";

let mapStateToProps = (state)=>{
    return{
        products:state
    }
}

export default connect(mapStateToProps,{
    setUsers:setProductsAC
})(ProductsAPIComponent)