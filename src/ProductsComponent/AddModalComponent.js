import React from 'react';
import classes from './AddModalComponent.module.css'
  const ModalAdd = ({active,setActive,setFinalActive,productId}) =>{
console.log(active)
      return(
          <div  className={active ? classes.active : classes.modalAdd  }>
              <p>Are you sure ,you want to add this?
               Product number {productId}</p>

              <button onClick={()=>{
                  setActive(false)
                  setFinalActive(true)

              } } className={classes.button} >Confirm </button>
              <button onClick={()=>setActive(false) } className={classes.button} > Cancel</button>
          </div>
      )
  }
  export  default ModalAdd;