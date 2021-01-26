import React,{Component} from "react"
import Auxilliary from '../../container/hoc/Auxilliary/Auxilliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BottomToolbar from '../../components/BottomToolbar/BottomToolbar';
import LoginFirebase from '../../components/LoginFirebase/LoginFireabse';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon'


class Layout extends Component{
  state = {
      toggle: false,
     // showLogin: false,
      showProfileIcon: true,
      showProfileLobby: false,
      showOrderList: false,
      basketItems: []
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

showProfileIconHandler = () => {
   const showProfile = this.state.showProfileIcon
   const showProfileLobby = this.state.showProfileLobby
   this.setState({
       showProfileIcon: !showProfile
   })
   if(showProfile){
      this.setState({
          showProfileLobby: false,
          showOrderList: false
      })
   }
}


showProfileLobbyHandler = () => {
    const showProfileLobby = this.state.showProfileLobby
    this.setState({
        showProfileLobby: !showProfileLobby,
        showOrderList: false
    })
}

showOrderListHandler = () => {
  const showOrderList = this.state.showOrderList
   this.setState({
         showOrderList: !showOrderList,
         showProfileLobby: false
   })
}

render(){
    return(
       <Auxilliary>
          <Toolbar toggleClicked={this.toggleClickHandler}
                    toggleAnimation={this.state.toggle}
                    />
            {/* <LoginFirebase showLogin={this.state.showLogin}
                   showBackdrop={this.state.showLogin}
                   closeBackdrop={this.closeLoginBackdrop}/> */}
            <ProfileIcon showProfileIconHandler={this.showProfileIconHandler} 
                         showProfileIcon={this.state.showProfileIcon}
                         showProfileLobby={this.state.showProfileLobby}
                         showProfileLobbyHandler={this.showProfileLobbyHandler}
                         showOrderList={this.state.showOrderList}
                         showOrderListHandler={this.showOrderListHandler}
                         basket={this.state.basketItems}/>
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