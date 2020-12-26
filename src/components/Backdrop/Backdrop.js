import React from "react"
import classes from "./Backdrop.module.css"


const backdrop = (props) => {


    return props.showBackdrop ? <div onClick={props.closeBackdrop} className={classes.Backdrop}></div> : null 
   
}

export default backdrop