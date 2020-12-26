
import React from "react"
import classes from './SideDrawer.module.css'
import Auxilliary from "../../container/hoc/Auxilliary/Auxilliary"
import Backdrop from '../Backdrop/Backdrop'


const sideDrawer = (props) => {
    let sideDrawer = [classes.SideDrawer, classes.Close]
    
  if(props.sideDrawer){
        sideDrawer = [classes.SideDrawer, classes.Open]
  }

    return(
      <Auxilliary>
         <Backdrop showBackdrop={props.showDrop} closeBackdrop={props.closeDrop}/>
         <div className={sideDrawer.join(" ")}>

         </div>
       </Auxilliary>
    )
}

export default sideDrawer