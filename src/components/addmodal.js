import React from 'react'
import './modal.scss'




export default function AddModal (props)
{
  

   if(!props.show)

   return null;
 
   else

   return(
          

  
  <div className = "modal-content" >
    <span className="close" onClick = {props.onClose}>&times;</span>
    <h3>Add a New Record</h3>
    
    <fieldset>
      <input placeholder="Application Name" type="text" tabindex="1" onChange={props.changeName} required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Application Purpose" type="email" tabindex="2" onChange={props.changePurpose} required/>
    </fieldset>
    <fieldset>
      <input placeholder="IP Address" type="tel" tabindex="3" onChange={props.changeIp} required/>
    </fieldset>
   
    <fieldset>
      <button  type="submit" id="contact-submit" data-submit="...Sending" onClick={props.onCreate}>SUBMIT</button>
    </fieldset>
  
 </div>
  

      
       
   )



}
