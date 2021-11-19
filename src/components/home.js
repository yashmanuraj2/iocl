import React, { useEffect } from "react";
import { useState, useEfFect, useHistory, useRef, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./form.scss";
import AddModal from "./addmodal.js";

export default function Home() {
  const [name, setName] = useState("");
  const [userData,setuserData] = useState("");
  const [open, setOpen] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [myRec, setmyrec] = useState([]);
  const [isapproved, setApproved] = useState(0);
  const [approved_at, setApproved_at] = useState("");
  const [admin_status, setAdmin_status] = useState(0);
  const [reject, setReject] = useState("");
  const [ip, setIp] = useState("");
  const[openhistory,setopenhistory] = useState(false);
  const [show, setShow] = useState(false);

  const { user } = useContext(AuthContext);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClosetable = () => {
    setOpen(false); 
  };
  const handleOpenmodal = () => {
    setopenhistory(true)

  }
  const handleCloseModal = () => {
setopenhistory(false)
  }
  const handleSHow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  const changeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const changePurpose = (e) => {
    e.preventDefault();
    setPurpose(e.target.value);
  };

  const changeApproved = (e) => {
    e.preventDefault();
    setApproved(e.target.value);
  };
  const changeApproved_at = (e) => {
    e.preventDefault();
    setApproved_at(e.target.value);
  };
  const changeAdmin_status = (e) => {
    e.preventDefault();
    setAdmin_status(e.target.value);
  };
  const changeReject = (e) => {
    e.preventDefault();
    setReject(e.target.value);
  };
  const changeIp = (e) => {
    e.preventDefault();
    setIp(e.target.value);
  };

  const Header = (props) => {
    return (
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">{props.text}</div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
         
        <div className="item">
  	
			
		
	</div>
                
        </div>
      </div>
    );
  };
  const updateOne = async () => {
    const created = user.name;
    const newData = {
      application_name: name,
      purpose: purpose,
      created_by: created,
      created_at: new Date(),
      is_approved: isapproved,
      admin_status: admin_status,
      approved_at: approved_at,
      reject: reject,
      ip_address: ip,
    };
    await axios.all([axios.put(
      "http://localhost:5000/record/add/" + user.HOD,
      newData
    ),
    axios.put("http://localhost:5000/history/" + user.name, newData)]);
    };

  const Logout = () => {
    const history = useHistory();
    history.push("/login");
  };
const onApprove =() =>

{
  
  
  

 
}
  
  useEffect(() => {
    const getRecords = async () => {
      const sol = await axios.get("http://localhost:5000/getRec/" + user.name);
      setuserData(sol.data);
    
      
      
    };
    getRecords();
  }, [user.name]);

  
 const allData = new Array(userData.records)
 const historyData = new Array(userData.history)

 const  ViewHistory =(props)=> {
 if(!props.show)
 return null;
 else 
 return(

<table>
      <caption>
       User History
      </caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Purpose</th>
          <th scope="col">Date of Creation</th>
          <th scope="col">HOD Approval Status</th>
          <th scope="col">Admin Approval Status</th>


        </tr>
      </thead>
      <tfoot>+
        <tr>
          
        </tr>
      </tfoot>
      <tbody>
        {historyData[0].map((value) => (
        <tr key ={value.id}>
          <th scope="row"></th>
          <td>{value.name}</td>
          <td>{value.purpose}</td>
          <td>{value.created_at}</td>
          <td>{value.is_approved}</td>
          <td>{value.admin_status}</td>
        </tr>
      ))}
      </tbody>
    </table>
 )
 }
       

 
 console.log(allData)

  const ViewRecords = (props) => {
    
   if(!props.show)

   return null;
 else 
    return (
      <div className="container">
        <h1>RECORD TABLE</h1>
        <span className="close" onClick = {handleClosetable}> &times;</span>
        <table>
          <thead>
            <tr>
              <th>Application Name</th>
              <th>Purpose</th>
              <th>IP Address</th>
              <th>Created by</th>
              <th>Created At</th>
              <th> Approve/Reject</th>

            </tr>
          </thead>
          <tbody>
            {allData[0].map((i) => (
              <tr key={i.id}>
                <td>{i.application_name}</td>
                <td>{i.purpose}</td>
                <td>{i.ip_address}</td>
                <td>{i.created_by}</td>
                <td><button>Approve</button><button>Reject</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
    <Header
          text={` Welcome ${user.name}, ${user.Designation}`}
          Logout={Logout}
        />
      
        

        <Button onClick={() => handleSHow()}>Add Record</Button>

        <AddModal
          show={show}
          changeName={changeName}
          changePurpose={changePurpose}
          changeIp={changeIp}
          onCreate={updateOne}
          onClose={handleClose}
        />

        <Button onClick={handleOpen}> View Records</Button>
        <ViewRecords show={open}/>
        <Button onClick = {ViewHistory}> View History</Button>
      
    </>
  );
}
