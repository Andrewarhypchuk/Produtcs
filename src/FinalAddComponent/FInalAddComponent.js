import classes from "./AddFinalModalComponent.module.css"
const FinalAdd = ({active,setActive,addToBasket}) =>{
    console.log(active)
    return(
        <div  className={active ? classes.active : classes.modalAdd  }>
            <p>Before buying you can edit a product</p>
            <button onClick={addToBasket} className={classes.button} >Confirm </button>
            <button onClick={()=>setActive(false) } className={classes.button} > Cancel</button>
        </div>
    )
}
export default FinalAdd;