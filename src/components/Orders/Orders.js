import React,{Component, useEffect} from 'react';
import classes from "./Orders.module.css";
import "./orders.css"



class Orders extends Component {
   
    state = {
        basket: []
    }


     componentDidMount(){

    //     if(localStorage.getItem("basketItems")){
    //         this.setState({
    //             basket: JSON.parse(localStorage.getItem("basketItems"))
    //         })
    //   }

  
  localStorage.clear()
       
     
 
    }

removeHandler=(item)=>{
 
   this.setState(state=>{
        const basket = state.basket.filter(elm=> elm.id != item.id)
        localStorage.setItem("basket", basket)
        return {basket}
        })
    
       
    
}
    


    render(){
      const {basket} = this.state
        return(
           <div className={classes.Orders}>
               <h2>لیست خرید شما</h2>
                  {basket.length > 0 && 
                     <div>
                        {basket.map(item => (        
                           <div className="orderItems">
                            <div className="row orderBox justify-content-between">
                                <div className="col-2">
                                       <div >
                                          <button className="btn btn-danger mt-3" onClick={()=>this.removeHandler(item)}>خذف</button>
                                       </div>
                                   </div>
                                 <div className="col-8">
                                      <div className="orderBody">
                                          <span className="orderTitle">{item.title}</span>   
                                      </div>
                                   </div> 
                                  <div className="col-2 ">
                                       <div className="orderImage">
                                          <img src={item.image} />
                                       </div>
                                   </div>
                                   </div>
                                </div>        
                        ))}
                    </div> 
                    }
                    <h2 >فاکتور خرید</h2>
                   
           </div>
           
        )
    }
}


export default Orders;