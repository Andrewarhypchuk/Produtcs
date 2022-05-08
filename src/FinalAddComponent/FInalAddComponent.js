import classes from "./AddFinalModalComponent.module.css"
import React,{useState}  from "react";
import DeleteModalComponent from "../CorfirmDeleteModal/DeleteModalComponent";

const FinalAdd = ({active,setActive,productId,setBasketItem,items}) =>{
    const [item, setItem] = useState({
        countValue :items[productId-1].count,
        weightValue:items[productId-1].weight,
        widthValue:items[productId-1].size.width,
        heightValue :items[productId-1].size.height,
        commentValue: items[productId-1].comments[0],
        dataValue:''
    })
    const count = React.createRef();
    const weight = React.createRef();
    const width = React.createRef();
    const height = React.createRef();
    const comment = React.createRef();
    const data = React.createRef();
    function countHandleClick (){
     setItem({...item,countValue :count.current.value})
}
    function dataHandleClick (){
        setItem({...item,dataValue :data.current.value})
    }
    function weightHandleClick (){
        setItem({...item,weightValue:weight.current.value})
    }
    function widthHandleClick (){
        setItem({...item,widthValue:width.current.value})
    }
    function heightHandleClick (){
        setItem({...item,heightValue:height.current.value})
    }
    function commentHandleClick (){
        setItem({...item,commentValue: comment.current.value})
    }
    const [deleteModalActive,setDeleteModalActive] = useState(false)
    return(
        <div  className={active ? classes.active : classes.modalAdd  }>
            <p className={classes.text}>Before buying you can edit a product</p>
            <div className={classes.editContainer}>
                <span>Weight:</span><input onChange={countHandleClick} className={classes.input} ref={count} value={item.countValue} type="text" />
                <span>Weight:</span><input onChange={weightHandleClick} className={classes.input} ref={weight} value={item.weightValue}  type="text" />
                <p>Size</p>
                <span>Width:</span><input onChange={widthHandleClick} className={classes.input} ref={width} value={item.widthValue} type="text" />
                <span>Height:</span><input onChange={heightHandleClick} className={classes.input} ref={height} value={item.heightValue} type="text" />
                <span>Add a data!</span><input onChange={dataHandleClick} className={classes.input} ref={data} value={item.dataValue} type="text" />
                <span>Add a comment:</span><input onChange={commentHandleClick} className={classes.input} ref={comment} value={item.commentValue} type="text" />
            </div>
            <div className={classes.dflex}>
                <button onClick={()=>{
                    if( item.dataValue ===''){
                        alert('data is empty')
                    }else{
                        setBasketItem(item)
                    }
                }} className={classes.button} >Confirm </button>
                <button onClick={()=>{ setDeleteModalActive(true) }} className={classes.button} >Delete</button>
                <DeleteModalComponent  active={deleteModalActive} setActive={setDeleteModalActive}  finalActive={setActive}/>
            </div>

        </div>
    )
}
export default FinalAdd;