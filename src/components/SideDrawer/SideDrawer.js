
import React from "react"
import classes from './SideDrawer.module.css'
import Auxilliary from "../../container/hoc/Auxilliary/Auxilliary"
import Backdrop from '../Backdrop/Backdrop';
import {Link} from "react-router-dom"


const sideDrawer = (props) => {
    let sideDrawer = [classes.SideDrawer, classes.Close]
    
  if(props.sideDrawer){
        sideDrawer = [classes.SideDrawer, classes.Open]
  }

    return(
      <Auxilliary>
         <Backdrop showBackdrop={props.showDrop} closeBackdrop={props.closeDrop}/>
         <div className={sideDrawer.join(" ")}>
            <ul>
              <li><Link to="store">فروشگاه</Link></li>
              <li><Link>فروشگاه</Link></li>
              <li><Link>فروشگاه</Link></li>
            </ul>
         </div>
       </Auxilliary>
    )
}

export default sideDrawer