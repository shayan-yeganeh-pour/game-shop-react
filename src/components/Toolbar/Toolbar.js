import React from "react"
import classes from './Toolbar.module.css'
import ToolbarToggle from '../ToolbarToggle/ToolbarToggle'


const toolbar = (props) => {



    return(
        <header className={classes.Toolbar}>     
                <div><ToolbarToggle toggleClick={props.toggleClick} toggleIcon={props.toggleIcon}/></div>
                <div>GameShop</div>
                <div>GameShop</div>
        </header>

    )
}

export default toolbar