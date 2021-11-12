import React from 'react'
import {useContext} from 'react'
 import {Container ,NAvbar,Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {AuthContext} from '../context/AuthContext'
import './header.scss'
export default function Header() {


    const {user} = useContext(AuthContext)
    return (
        <>
      <div className="header">
     
        <img
          className="header__logo"
          src="images/Logo.svg" alt=""
        />
      

     

      <div className="header__nav">
        
          <div  className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.name}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        
        

       

        
          <div className="header__optionBasket">
            LOGOUT
            
          </div>
       
      </div>
    </div>
      </>
        
    )
}
