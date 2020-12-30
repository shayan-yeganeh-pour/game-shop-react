import React, {Component} from "react"
import Layout from './container/Layout/Layout'
import Auxilliary from './container/hoc/Auxilliary/Auxilliary'
import {BrowserRouter} from "react-router-dom"


class App extends Component {


  render(){

    return (
    <BrowserRouter>
     <Auxilliary>
         <Layout>
           <div></div>
         </Layout>
      </Auxilliary>
      </BrowserRouter>
    )
  }
}


export default App