import React from 'react'
import classes from './BottomToolbar.module.css'
import { Link } from "react-router-dom"


const bottomToolbar = () => {
    
   

    return(
        <div className={classes.BtmToolbar}>
            <div className={classes.BtmToolbarBox}>
             <div className="row justify-content-center text-center d-lg-block">
                 <div className="col-12 ">
                     <p>برای ارتباط با بخش پشتیبانی میتوانید از ایمیل زیر اقدام کنید . لازم به ذکر است ارسال محصولات بین 3 تا 24 ساع کاری زمان خواهد بر</p>
                    <br />        
                    <a type="email">example@example.com</a>
                 </div>
                 <hr className=""/>
                 <div className="col-12">
                     <ul className="d-lg-flex text-center justify-content-center ml-3">
                         <li><Link to="./">صحفه اصلی</Link></li>
                         <li><Link to="./store">فروشگاه</Link></li> 
                         <li><Link to="./about">درباره ما</Link></li>
                     </ul>
                 </div>
                 <hr className=""/>
                 <div className="col-12"><p>این سایت تایع قوانین جمهوری اسلامی می باشد </p></div>
             </div>
            </div>
        </div>
    )
}

export default bottomToolbar