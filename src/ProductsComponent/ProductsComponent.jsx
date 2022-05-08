import React, {useEffect, useState} from 'react';
import classes from './Products.module.css';
import ModalAdd from "../AddModalComponent/AddModalComponent";
import FinalAdd from "../FinalAddComponent/FInalAddComponent";
import DeleteModal from "../CorfirmDeleteModal/DeleteModalComponent";

const ProductsComponent =(props)=>{
console.log(props)
    let itemsForBasket = Object.values(props.products);
    const [basket,setBasket] = useState([]);
    const [basketItem,setBasketItem] = useState({
        countValue :"Your Count",
        weightValue:"Your Weight",
        widthValue:"Your Width",
        heightValue :"Your Height",
        commentValue: "Your Comment"
    });
    const [modalActive,setModalActive] = useState(false);

    const [finalModalActive,setFinalModalActive] = useState(false);
    const [productId,setProductId] = useState(1) ;
    useEffect(()=>{
        console.log(basket)
    },[basket]);
    useEffect(()=>{
        console.log(basketItem);
        addToBasket()
    },[basketItem])
    function addToBasket (){
        setBasket([...basket,basketItem])
        setFinalModalActive(false)
    }
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
           <div className={classes.container}>
               {allProducts}
           </div>
    <div className={classes.basketContainer}>
        <div>Your Products</div>
        {basket.map((item)=>{
            return(<div className={classes.basketItem}>
                    <div>Count:{item.countValue}</div>
                    <div>Weight:{item.weightValue}</div>
                    <div>Width:{item.widthValue}</div>
                    <div>Height:{item.heightValue}</div>
                    <div>Comment:{item.commentValue}</div>
                    <div>Data:{item.dataValue}</div>
            </div>
            )
        })}
    </div>
    <ModalAdd active={modalActive} setActive={setModalActive} setFinalActive={setFinalModalActive}  productId={productId} />
    <FinalAdd active={finalModalActive} setActive={setFinalModalActive} productId={productId} setBasketItem={setBasketItem} items={itemsForBasket} />
</div>
    )
}
export default ProductsComponent;