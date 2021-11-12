import React, { useEffect } from "react";
import { useState, useEfFect, useHistory, useRef, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./form.scss";
import AddModal from "./addmodal.js";
import Header from "../components/Header";

export default function Home() {
  const [name, setName] = useState("");

  const [record, setRecord] = useState([]);
  const [purpose, setPurpose] = useState("");
  const [myRec, setmyrec] = useState("");
  const [isapproved, setApproved] = useState(0);
  const [approved_at, setApproved_at] = useState("");
  const [admin_status, setAdmin_status] = useState(0);
  const [reject, setReject] = useState("");
  const [ip, setIp] = useState("");
  const [show, setShow] = useState(false);

  const { user } = useContext(AuthContext);

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
  const changeRecord = (e) => {
    e.preventDefault();
    setRecord(e.target.value);
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
    const res = await axios.put("/records/add/" + user.HOD, { newData });
    setmyrec(res.data);
  };
  const onCreate = async () => {
    const created = user.name;

    const data = {
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
    await axios.post("http://localhost:5000/record/add", { data });
  };

  const getRecords = async () => {
    await axios.get("http://localhost:5000/getRec" + user.name).then((res) => {
      setRecord(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className="container">
      <h1 className="heading">
        {" "}
        Welcome {user.name} {user.Designation}{" "}
      </h1>

      <Button onClick={()=>handleSHow()}>Add Record</Button>

      <AddModal
        show={show}
        changeName={changeName}
        changePurpose={changePurpose}
        changeIp={changeIp}
        onCreate={onCreate}
        onClose = {handleClose}

      />

      <Button> View Records</Button>
      {getRecords}
      <Button> View History</Button>
    </div>
  );
}
