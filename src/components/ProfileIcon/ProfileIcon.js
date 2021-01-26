import React,{useContext} from 'react'
import classes from "./ProfileIcon.module.css"
import app from '../../base'
import {AuthContext} from '../../Auth'
import {Link} from "react-router-dom"
import profileIcon from "../../icons/profileIcon.png";


const Home = (props) => {


  const {currentUser} = useContext(AuthContext)

  let attachedProfileIcon = [classes.Profile , classes.OpenProfileIcon]
  let attachedProfileLobby = [classes.ProfileLobby , classes.ProfileLobbyClose]
  let attachedOrders = [classes.OrderList , classes.OrdersClose]


 if(!props.showProfileIcon){
   attachedProfileIcon = [classes.Profile , classes.CloseProfileIcon]
 }

 if(props.showProfileLobby){
   attachedProfileLobby = [classes.ProfileLobby , classes.ProfileLobbyOpen]
 }


 if(props.showOrderList){
     attachedOrders = [classes.OrderList , classes.OrderOpen]
 }
 const signOut = (
    <div className={classes.SignOut}>
      <button onClick={props.showProfileLobbyHandler} >پروفایل</button>
      <br />
      <hr />
      <button onClick={props.showOrderListHandler}>سفارشات</button>
      <hr />
      <button onClick={()=> app.auth().signOut()}>خروج</button>
    </div>
 )

 const SignIn = (
   <div className={classes.SignIn}>
     <Link to="/Login"><button >ورود</button></Link>
   </div>
 )


 //                                           Porfile collection
  const profile = (
    <div className={attachedProfileIcon.join(' ')}>
          {currentUser ? <div>{signOut}</div> :
           <div>{SignIn}</div> } 
    </div>
  ) 
//                                           Porfile Collection
 const profileToggle = (
       <div onClick={props.showProfileIconHandler} className={classes.ProfileToggle}>
         <img src={profileIcon} />
        </div>
 )

const profileLobby = (
 
  <div className={attachedProfileLobby.join(" ")}>
  {currentUser ? 
     <ul>
       <li>
          <label>نام و نام خانوادگی</label>
          <p>علی جوانمردی</p>
       </li>
       <li>
          <label>ایمیل</label>
          <p>{currentUser.email}</p>
       </li>

       <li>
          <label> موبایل</label>
          <p>01231212231</p>
       </li>
       <li>
          <label>آدرس</label>
          <p>سی یسشسی شسیشس تمنسشیت کشسشسی شسنمتای شسیشس یشسیشسس ی</p>
       </li>
       
     </ul> : null}
  </div>
)

const orderList = (
 
  <div className={attachedOrders.join(" ")}>
     <h2>سید کالا شما</h2>
    
  </div>
)

    return (
        <div className={classes.Home} style={{marginTop:"10px"}}>
           {profile}
           {profileToggle}
           {profileLobby}
           {orderList}
      </div>
    )
}

export default Home