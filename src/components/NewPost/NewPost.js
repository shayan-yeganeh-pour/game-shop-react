import React,{Component} from 'react'
import {Redirect} from 'react-router-dom';
import {Switch , Route , Link} from "react-router-dom";
import classes from './NewPost.module.css';
import PostBox from './PostBox/PostBox'





class NewPost extends Component {

render(){
    return(
        <div>
            <div className={classes.NewPost}> 
             <div className={classes.AdminLinks}>
                 <ul>
                    <li><Link to="/Admin/edit">ویرایش</Link></li>
                     <li><Link to="/">حذف پست ها</Link></li>
                 </ul>
             </div>
              <Switch>
                  <Route path="/Admin" exact component={PostBox} />
              </Switch>
          </div>       
        </div>
    

    )
}
}


export default NewPost