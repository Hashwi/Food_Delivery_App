import React from 'react'
import classes from './Cart.module.css'

const CheckOut = () => {
  return (
    <form>
        <div className={classes.control}>
            <lable htmlFor="name">Your Name</lable>
            <input type='text' id='name'/>
        </div>
        <div className={classes.control}>
            <lable htmlFor="street">Street</lable>
            <input type='text' id='street'/>
        </div>
        <div className={classes.control}>
            <lable htmlFor="postal">Postal Code</lable>
            <input type='text' id='postal'/>
        </div>
        <div className={classes.control}>
            <lable htmlFor="city">City</lable>
            <input type='text' id='city'/>
        </div>
        <button>Confirm</button>
    </form>
    
  )
}

export default CheckOut