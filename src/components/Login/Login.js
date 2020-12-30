import React,{Component} from "react"
import classes from './Login.module.css'
import './Login.css'
import Auxilliary from '../../container/hoc/Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop'



class Login extends Component {

    state= {

    }


inputChange = input => e => {
    this.setState({
        [input]: e.target.value
    })
}


render(){

 
    return(
       this.props.showLogin?
      <Auxilliary>
        <Backdrop showBackdrop={this.props.showBackdrop} closeBackdrop={this.props.closeBackdrop}/>
         <div className={classes.Login}>
            <div className="row justify-content-center align-items-center text-center">
                  <div className="form-container">
                    <p>لطفا برای ورد به پنل کاربری ایمیل و رمز عبور خود را وارد کنید</p>
                    <div className="form-group">
                        <label htmlFor="email">ایمیل</label>
                        <input type="username" className="form-control text-left" value={this.state.username} onChange={(e)=> this.setState({username: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">رمز ورود</label>
                        <input type="password" className="form-control text-left" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})}/>
                    </div>
                    <div className="">
                        <button className="btn btn-primary text-center">ورود</button>
                    </div>
                </div>
             </div>
            </div>
         </Auxilliary>
          :
           null
    )
}
}

export default Login