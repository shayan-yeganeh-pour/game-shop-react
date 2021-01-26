import React, {Component} from "react"
import Layout from './container/Layout/Layout'
import Auxilliary from './container/hoc/Auxilliary/Auxilliary'
import {BrowserRouter} from "react-router-dom"
import {Router , Route} from "react-router-dom"
import {AuthProvider} from './Auth'
import PrivateRoute from './PrivateRoute'
import LoginFirebase from './components/LoginFirebase/LoginFireabse'
import SignUp from './components/SignUp/SignUp';
import Orders from "./components/Orders/Orders"
import NewPost from './components/NewPost/NewPost';
import Store from './components/Store/Store'


class App extends Component {


  render(){

    return (
      <BrowserRouter>
       <AuthProvider>
        <Auxilliary>
          <Layout>
               <Route exact path="/"  component={Store} />
               <Route exact path="/Login"  component={LoginFirebase} />
               <Route exact path="/signUp"  component={SignUp} />
               <Route exact path="/Admin" component={NewPost} />
               {/* <Route exact path="/Orders" component={Orders} />   */}
            </Layout>
        </Auxilliary> 
      </AuthProvider>
      </BrowserRouter>
   
    )
  }
}


export default App