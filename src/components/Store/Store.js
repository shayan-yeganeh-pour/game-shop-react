import React,{ Component,useEffect } from "react"
import classes from './Store.module.css'
import Posts from '../Posts/Posts'
import instance from '../../axios'




class Store extends Component {

   constructor(props){
       super(props)
       this.state= {posts:[], filterPosts:[], basketItems:[] }
       this.additionHandler = this.additionHandler.bind(this)
      
   }


   componentWillMount(){
    instance.get("/posts.json")
    .then(response=>{
        console.log("asdassd" +response.data)
        const fetchPost = []
        for(let key in response.data){
            fetchPost.push({
             ...response.data[key],
            id:key
             })
         }
        this.setState({
            posts: fetchPost,
            filterPosts: fetchPost.reverse()
        })
    })


    if(localStorage.getItem("basketItems")){
         this.setState({
            basketItems: JSON.parse(localStorage.getItem("basketItems"))
        })
       }

   
     localStorage.clear()
  

 }
 
 

    additionHandler = (e, post)=> {
  
      this.setState(state=>{
          const basketItems = state.basketItems;
          let allow = false;
          basketItems.forEach(item=>{
              if(post.id == item.id){
                  allow = true
                  item.count++
                  
              }
          })

          if(!allow){
              basketItems.push({
                  ...post,
                  count: 1
              })
          }
    
            localStorage.setItem("basketItems" , JSON.stringify(basketItems)) 
            alert("aas")
            
            return {basketItems}
           

          
      })

    }
   

    render(){



     const post = this.state.filterPosts.map(post => (
         <Posts title={post.title}
                 id={post.id}
                 subject={post.subject}
                 price={post.price}
                 image={post.image}
                 description={post.text}
                 addition={(e)=>this.additionHandler(e,post)}/>
     ))

    // let basket = (
    //     <div>
    //         <ul>
    //             {this.state.basketItems.map(item=>{
    //                 return <li>{item.title}</li>
    //             })}
    //         </ul>
    //     </div>
    // )
 

     const leftSidedrawer = (
        
        <div className={classes.LeftSidedrawer}>
          <div className={classes.ProductsSideDrawer}>
              <div className={classes.ProductTitleList}>
                <h3>جدید ها</h3>
                <div className={classes.ProductTitleListToggle}>News</div>
              </div>
           <ul>
               {this.state.filterPosts.slice(0,10).map(item=>(
                   <li key={item.id}>{item.title}</li>
               ))}
           </ul>
          </div>
          <hr style={{border:"1px solid grey"}}/>
        </div>
   
     )
     const {basketItems} = this.state
     const alertAddition = (
         <div className={classes.AlertAddition}>
             <div>
               <ul>
                  {basketItems.map(item=>(
                      <li key={item.id}>آیتم {item.title} به سبد کالا اضافه شد</li>
                   ))}
               </ul>
            </div>
            <div className={classes.BasketCloseToggle}></div>
         </div>
     )

     const postsSide = (
            <div>
               <div className={classes.PostsTitleList}>
                    <h3>فروشگاه</h3>
               </div>
          <div className={classes.PostsTitleListToggle}>News</div>
            <div className={classes.PostsSide}>
               {post}
            </div>
        </div>
       
     )

        return(
            <div className={classes.Store} >
                <div className={classes.PostsBox}>
                    <div className="row">
                      <div className="col-12 col-lg-2">
                           {leftSidedrawer}
                           </div>
                        <div className="col-12 col-lg-10">
                            {postsSide}
                        </div>

                    </div>
                  
                </div>   
            </div>
        )
    }
}


export default Store