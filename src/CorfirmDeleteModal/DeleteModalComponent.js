import React from 'react';
import classes from './DeleteModalComponent.module.css'
  const DeleteModal = ({active,setActive, finalActive}) =>{
console.log(active)
      return(
          <div  className={active ? classes.active : classes.modalAdd  }>
              Are you sure?
              <div className={classes.dflex}>
                  <button onClick={()=>setActive(false)} className={classes.button}>Cancel</button>
                  <button onClick={()=>{finalActive(false)
                      setActive(false)} } className={classes.button}>Delete</button>
              </div>

          </div>
      )
  }

  export  default DeleteModal;