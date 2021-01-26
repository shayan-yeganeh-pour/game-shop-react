import React,{useContext,useEffect} from 'react'
import classes from './Posts.module.css'
import {AuthContext} from '../../Auth';
import plus from '../../icons/plus.png'
import app from '../../base'


const db = app.firestore()


const Posts = (props) => {

  

    return(
        <article className={classes.Posts} key={props.id}>
           <div className={classes.PostBox}>
              <div className={classes.PostBody}>
              <h5>{props.title.slice(0,35)+"..."}</h5>
               </div> 
               <div  className={classes.Image}>
                 <img src={props.image}/>
              </div>
              <div className={classes.PlusButton} ><button onClick={props.addition}><img src={plus} /></button></div>
            </div>   
            <div className={classes.Small}><p><small >{props.price} تومان</small></p></div>
            
        </article>
    )
}


export default Posts