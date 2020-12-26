import React,{Component} from "react"
import Auxilliary from '../../container/hoc/Auxilliary/Auxilliary'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import BottomToolbar from '../../components/BottomToolbar/BottomToolbar'



class Layout extends Component{
  state = {
      toggle: false
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


render(){
    return(
       <Auxilliary>
          <Toolbar toggleClick={this.toggleClickHandler}
                    toggleIcon={this.state.toggle}/>
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