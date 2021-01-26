import React,{useContext, useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom';
import app from '../../../base'
import {AuthContext} from '../../../Auth'
import instance from '../../../axios'
import classes from '../NewPost.module.css';

const db = app.firestore()



const PostBox = ({history}) => {
  const {currentUser} = useContext(AuthContext)
  const [fileUrl , setFileUrl] = useState(null)


  let disabled = false
  let warning = <p></p>

  const onFileChange = async(e) => {
      const file = e.target.files[0]
      const storageRef = app.storage().ref()
      const fileRef = storageRef.child(file.name)
      fileRef.put(file)
      setFileUrl( await fileRef.getDownloadURL())
  }


  


  const onSubmit = async(e)=> {
      e.preventDefault()
      let date = new Date;
      let year = date.toLocaleDateString("fa-IR" , {year:"numeric"})
      let month = date.toLocaleDateString("fa-IR" , {month:"long"})
      let day = date.toLocaleDateString("fa-IR" , {day:"numeric"})
      let fullTime = `${year}/${month}/${day}`
    
    
      const post = {
          title: e.target.title.value,
          description: e.target.description.value,
          price: e.target.price.value,
          time: fullTime,
          image: fileUrl
      }
      if(post.title.length < 2 || fileUrl == null){
        warning = <p style={{color:"red"}}>asdsada</p>
        return
      }

      instance.post("/posts.json", post)
         .then(res=>res)
        history.push("/")
  
             
      }
     
    
return(
    <div>
           {!currentUser? <div className={classes.NotAble}><h2>شما به این قسمت دسترسی ندارید!</h2></div> : 
             <div>
              {currentUser.email == "shayan270@hotmail.com" ?
              <form className={classes.NewPostBox} onSubmit={onSubmit}>
                  <div className="row  p-5 justify-content-center ">
                    <div className="col-12 col-md-6 ">
                         <h4 className="mb-4 d-md-none">پست خود را بسازید</h4>
                               {warning}
                         <div className={classes.NewImage}>
                             <img src={`${fileUrl}`} alt="عکس خود را بروز کنید" />
                          </div>
                          <h3 className="d-none d-md-block mt-4">پست خود را ایجاد کنید!</h3>
                       </div>
                       <div className="col-12 col-md-6">
                            <div className="form-group mt-2">
                               <input type="text" name="title" placeholder="عنوان پست"/>
                            </div >
                            <div className="form-group">
                                <textarea type="text" name="description" placeholder="متن پست"/>
                            </div >
                            <div className="form-group">
                               <input type="text" name="price" placeholder="قیمت"/>
                            </div >
                            <div className="form-group ">
                                <input className="btn" type="file" onChange={onFileChange}/>
                            </div>
                           <button disabled={disabled} className="text-center btn btn-primary" type="submit">ایجاد پست</button>
                       </div>
                    </div>
            </form>  : 
                  <h2>شما به این قسمت دسترسی ندارید</h2> 
                 } 
          </div> }
    </div>
)

                }

export default PostBox