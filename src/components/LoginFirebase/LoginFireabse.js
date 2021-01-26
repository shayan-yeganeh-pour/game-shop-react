
import React,{useCallback , useContext} from 'react';
import {withRouter , Redirect} from "react-router-dom";
import './LoginFirebase.css';
import classes from './LoginFirebase.module.css'
import app from '../../base';
import {AuthContext} from '../../Auth'
import {Link } from "react-router-dom"

const LoginFirebase = ({ history }, props) => {
     
   

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email , password} = event.target.elements;
        try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
              history.push("/");
           }  catch (error) {
               alert("رمز عبور یا ایمیل وارد شده اشتباه است")
           }
    },[history]);

    const {currentUser} = useContext(AuthContext);

    if(currentUser) {
        return <Redirect to="/" />
    }

    // return (
    //     <div className="mt-5">
    //         <h1>ثبت نام</h1>
    //         <form onSubmit={handleSignUp}>
    //             <label>ایمیل</label>
    //             <input type="email" name="email" placeholder="ایمیل" />
    //             <label>رمز عبور</label>
    //             <input type="password" name="password" placeholder="رمز عبور" />
    //             <br />
    //             <button type="submit">ورود</button>
    //         </form>
    //     </div>
    // )

    return(
    
    
          <div className={classes.Login}>
             <div className="row justify-content-center align-items-center text-center">
                   <form className="form-container" onSubmit={handleSignUp}>
                     <h5 className="mb-3" >لطفا برای ورد به پنل کاربری ایمیل و رمز عبور خود را وارد کنید</h5>
                     <div className="form-group">
                         <label htmlFor="email">ایمیل</label>
                         <input  className="form-control text-left" type="email" name="email" placeholder="موبایل"/>
                     </div>
                     <div className="form-group">
                         <label htmlFor="password">رمز ورود</label>
                         <input  className="form-control text-left" type="password" name="password" placeholder="رمز عبور"/>
                     </div>
                     <div style={{border:"1px solid white",width:"70px",display:"inline-block"}}></div>
                     ورود
                     <div style={{border:"1px solid white",width:"70px",display:"inline-block"}}></div>
                     <div className="form-group mt-3">
                         <button type="submit" className="btn btn-primary text-center">ورود</button>
                     </div>
                     <p className="mt-4" style={{fontSize:"12px"}}> حساب کاربری نیاز دارید؟<span><Link to="/signUp" className={classes.NeedAccount}>کلیک کنید</Link></span></p>
                 </form>
                 
              </div>
             </div>

       
     )

}

export default withRouter(LoginFirebase)