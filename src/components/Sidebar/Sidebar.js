import React from 'react'
import{AccessAlarmsOutlined, CircleOutlined, MoreVertOutlined} from "@mui/icons-material"
import "./Sidebar.css"
import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className='sidebar'>
<h2>LOGO</h2>
<div>
<form>
         <select name = "dropdown">
            <option value = "NEET PG" selected>NEET PG</option>
            <option value = "Java">Java</option>
            <option value = "Discrete Mathematics">Discrete Mathematics</option>
         </select>
      </form>
  </div>
  <divd>
    <ul>
        <li>
            <CircleOutlined className='icon'/>
            <Link to="/home">Dashboard</Link>
        </li>
        <li>
            <CircleOutlined className='icon'/>Resource
        </li>
        <li>
            <CircleOutlined className='icon'/>FAQ s
        </li>
        <li>
            <CircleOutlined className='icon'/><Link to="/allotment">Allotments</Link>
        </li>
        <li>
            <CircleOutlined className='icon'/>Closing Ranks
        </li>
        <li>
            <CircleOutlined className='icon'/>Seat Matrix
        </li>
        <li>
            <CircleOutlined className='icon'/>Counseling
        </li>
        <li>
            <CircleOutlined className='icon'/>Fees
        </li>
        <li>
            <CircleOutlined className='icon'/>Universites
        </li>
        <li>
            <CircleOutlined className='icon'/>Institutes
        </li>
        <li>
            <CircleOutlined className='icon'/>Courses
        </li>
    </ul>
    <ul>
        <li>
        <CircleOutlined className='icon'/>Contact Us
        </li>
        <li>
        <CircleOutlined className='icon'/>Subscription plans
        </li>
    </ul>
    <div>
        <h2>UserName <MoreVertOutlined/></h2>
    </div>
  </divd>
    </div>
  )
}

export default Sidebar