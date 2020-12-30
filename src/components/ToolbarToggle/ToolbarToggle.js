import classes from './ToolbarToggle.module.css'
import React from 'react'


const toggle = (props) => {
    let attachedClass = [classes.Toggle , classes.Close]
   if(props.toggleAnimation){
     attachedClass = [classes.Toggle , classes.Open]
   }
    

    return(
          <div onClick={props.toggleClick} className={attachedClass.join(" ")}>  
               <div></div>
               <div></div>
               <div></div>
        </div>
    )
}

export default toggle