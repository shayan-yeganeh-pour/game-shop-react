import React from "react"
import classes from './Toolbar.module.css'
import ToolbarToggle from '../ToolbarToggle/ToolbarToggle'
import SiteIcon from '../SiteIcon/SiteIcon'
import { Link } from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {signIn} from '../../actions/index'

 

function Toolbar(props){
  const counter = useSelector(state=> state.counter)
  const isLogged = useSelector(state=> state.login)
  const dispatch = useDispatch()


  let login = [classes.LogIn]

  if(isLogged){
      login = [classes.Profile]
  }

 


    return(
        <header className={classes.Toolbar}>     
                <div>{isLogged ?  
                        <Link to="./profile" className={login.join(" ")}>پروفایل</Link>: 
                        <div onClick={props.showLogin} className={login.join(" ")}>ورود</div>}
                </div>
                <div><Link to="./"><SiteIcon /></Link></div>
               <ToolbarToggle toggleClick={props.toggleClicked} 
                              toggleAnimation={props.toggleAnimation}/>
                                   
        </header>

    )
 

}

export default Toolbar