import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar(){

    // const navigate = useNavigate()
//    const goHome = () => {
//     navigate.push('/')
//    }
//    

    return(
        <nav>
        <div className="navbar">
            
            {/* <button className="home_button" onClick= {goHome} >Home</button> */}
            <h1 className='nav-title'></h1>
    
            <NavLink className='nav-links' to="/">
                Home
            </NavLink>
            {/* <NavLink className='nav-links' to="/AddStudent">
                Add A New Student
            </NavLink>
            <NavLink className='nav-links' to="/userinsession">
                See My Data
            </NavLink>
            <NavLink className='nav-links' to="/AddData">
                Add New Data
            </NavLink>
            <NavLink className='nav-links' to="/">
                SignUp 
             </NavLink> */}
            </div>
            </nav>
            )}

export default NavBar;