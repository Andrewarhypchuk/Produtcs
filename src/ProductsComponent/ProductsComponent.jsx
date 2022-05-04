import React, {useEffect, useState} from 'react';
import classes from './Products.module.css';
import ModalAdd from "./AddModalComponent";
import FinalAdd from "../FinalAddComponent/FInalAddComponent";

const ProductsComponent =(props)=>{
console.log(props)
    let itemsForBasket = Object.values(props.products);
    const [basket,setBasket] = useState([]);
    const [finalModalActive,setFinalModalActive] = useState(false);
    useEffect(()=>{
        console.log(basket)
    },[basket])
    function addToBasket (){
        setBasket([...basket,itemsForBasket[productId-1]])
        setFinalModalActive(false)
    }
    const [modalActive,setModalActive] = useState(false);

    const [productId,setProductId] = useState(0) ;
    let allProducts = Object.values(props.products).map((product) => {
        return <div className={classes.productStyle}>
            <p> Product ID:  {product.id}</p>
            <p> Name of product:  {product.name}</p>
            <p>Count:  {product.count}</p>
            <p>Size:width {product.size.width},
              height: {product.size.height} </p>
            <p>Weight of product : {product.weight}</p>
            <button onClick={()=> {
                setModalActive(true)
                setProductId(product.id) }} className={classes.button}>Add</button>
        </div>} )

    return(
<div>
    <ModalAdd active={modalActive} setActive={setModalActive} setFinalActive={setFinalModalActive}  productId={productId} />
    <FinalAdd active={finalModalActive} setActive={setFinalModalActive} addToBasket={addToBasket} />
           <div className={classes.container}>
               {allProducts}
           </div>

</div>
    )
}
export default ProductsComponent;