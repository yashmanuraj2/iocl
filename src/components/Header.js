import React from 'react'
import {useContext} from 'react'
 import {Container ,NAvbar,Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {AuthContext} from '../context/AuthContext'
import './header.scss'
export default function Header( props) {


    const {user} = useContext(AuthContext)
    return (
        <>
      <div className="header">
  <p className ="logo">{props.text}</p>
  <div class="header-right">
    
    <button>{props.Logout}</button>
  </div>
</div>
      </>
        
    )
}
