import React, {Component} from "react"
import Layout from './container/Layout/Layout'
import Auxilliary from './container/hoc/Auxilliary/Auxilliary'


class App extends Component {


  render(){

    return (
     <Auxilliary>
         <Layout>
           <div></div>
         </Layout>
      </Auxilliary>
    )
  }
}


export default App