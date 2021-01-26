import React,{Component} from "react"




class Basket extends Component {
   
    state= {
        basketItems: []
    }


    componentWillMount(){

        if(localStorage.getItem("basketItems")){
            this.setState({
                basketItems: JSON.parse(localStorage.getItem("basketItems"))
            })
        }
    }

    removeHandler = (item)=> {
        this.setState(state=>{
          const removeItem = state.basketItems.filter(elm=> elm.id != item.id)
          localStorage.setItem("removeItem" , removeItem)
          return {removeItem}
        })
       } 
    
  
render(){
 
const {basketItems} = this.state

    return(
       <div>
           <ul>
               {basketItems.map(item=>(
                   <li>{item.title}/ {item.price} <button onClick={()=>this.removeHandler(item)}>X</button></li>
               ))}
           </ul>
       </div>
    )
}
}


export default Basket