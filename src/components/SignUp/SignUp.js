
import React,{useCallback} from 'react';
import {withRouter} from "react-router-dom"
import app from '../../base'
import classes from './SignUp.module.css'

const SignUp = ({ history }) => {
   
    let warning = <div></div>

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email , password} = event.target.elements;

        try {
            await app
              .auth()
              .createUserWithEmailAndPassword(email.value, password.value);
              history.push("/");
           }  catch (error) {
                   alert("خطلا در ساخت پروفایل کاربری")
           }
         },[history]);



    return (
        <div className={classes.SignUp}>
            
            <form className="form-container justify-content-center text-center p-5" onSubmit={handleSignUp}>
                <h5 className="" style={{fontSize:"20px"}}>ساخت حساب کاربری</h5>
                {warning}
                <div className="form-group">
                    <label htmlFor="email">ایمیل</label>
                    <input className="form-control text-center" type="email" name="email" placeholder="ایمیل" />
                </div>
                <div className="form-group">
                   <label htmlFor="password">رمز عبور</label>
                   <input className="form-control text-center " type="password" name="password" placeholder="رمز عبور" />
                </div>
                <button className="btn btn-primary" type="submit">ایجاد حساب کاربری</button>
            </form>
        </div>
    )

}

export default withRouter(SignUp)