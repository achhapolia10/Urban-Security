import React from 'react'
import './Layout.css'
import {Navbar,Nav,Container} from 'react-bootstrap'
import hgrad from './images/header.svg'
import logo from './images/Capture.PNG'

class Header extends React.Component{

  render(){
    return(      
      <Navbar variant="dark" className={"cnavbar"}>
        <Navbar.Brand href="#home">
          <img
            alt={""}
            src={logo}
            width={"40"}
            height={"40"}
            className={"d-inline-block align-top"}
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home" style={{color:'#23DC2D',fontSize:'150%',fontWeight:'bold'}}>0.B1</Navbar.Brand>
      </Navbar>
  )
  }
}


class Layout extends React.Component{

  render() {
    return(
      <div>
      <Header  active={this.props.active}/>
        <Container style={{marginTop:'20px'}}>
        {this.props.children}
      </Container>
        </div>
      )}
  };

export default Layout
