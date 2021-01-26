import React,{useContext} from "react"
import classes from './Toolbar.module.css'
import ToolbarToggle from '../ToolbarToggle/ToolbarToggle'
import app from '../../base' 
import {AuthContext} from '../../Auth'
import SiteIcon from '../SiteIcon/SiteIcon'
import { Link } from 'react-router-dom'
//import {useSelector , useDispatch} from 'react-redux'
//import {signIn} from '../../actions/index'

 

const Toolbar = (props) =>{
  //const counter = useSelector(state=> state.counter)
  //const isLogged = useSelector(state=> state.login)
 // const dispatch = useDispatch()

const {currentUser} = useContext(AuthContext)


 // if(isLogged){
  //    login = [classes.Profile]
  //}

 


    return(
        <header className={classes.Toolbar}>
             <div className={classes.ToolbarBox}>     
                {currentUser? <div className={classes.LogIn}><button>پروفایل</button><div className={classes.ButtonOverlay}></div></div> : <div className={classes.LogIn}><Link to="/Login"><button>ورود</button></Link></div>}      
                <div><Link to="./"><SiteIcon /></Link></div>
               <ToolbarToggle toggleClick={props.toggleClicked} 
                              toggleAnimation={props.toggleAnimation}/>
             </div>                 
        </header>

    )
 

}

export default Toolbar