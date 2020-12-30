import React,{Component} from "react"
import Auxilliary from '../../container/hoc/Auxilliary/Auxilliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BottomToolbar from '../../components/BottomToolbar/BottomToolbar';
import Login from '../../components/Login/Login'


class Layout extends Component{
  state = {
      toggle: false,
      showLogin: false
  }

toggleClickHandler = ()=> {
   const toggle = this.state.toggle
   this.setState({
       toggle: !toggle
   })
}

closeBackdrop = () => {
    const toggle = this.state.toggle
    this.setState({
        toggle: !toggle
    })
}

closeLoginBackdrop = () => {
    const showLogin = this.state
    this.setState({
        showLogin: !showLogin
    })
}

showLogin= ()=> {
   const showLogin = this.state.showLogin
   this.setState({
       showLogin: !showLogin
   })

}

render(){
    return(
       <Auxilliary>
          <Toolbar toggleClicked={this.toggleClickHandler}
                    toggleAnimation={this.state.toggle}
                    showLogin={this.showLogin}/>
            <Login showLogin={this.state.showLogin}
                   showBackdrop={this.state.showLogin}
                   closeBackdrop={this.closeLoginBackdrop}/>
           <SideDrawer sideDrawer={this.state.toggle}
                       showDrop={this.state.toggle}
                       closeDrop={this.closeBackdrop}/>         
              {this.props.children}
            <BottomToolbar />
       </Auxilliary>
    )
}
}
export default Layout