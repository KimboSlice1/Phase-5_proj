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
            
    
            <NavLink className='nav-links' to="/">
                Login
            </NavLink>
            <NavLink className='nav-links' to="/userinsession">
                Home Page
            </NavLink>
            <NavLink className='nav-links' to="/students">
                See My Students
            </NavLink>
            <NavLink className='nav-links' to="/AddData">
                Add New Data
            </NavLink>
            {/* <NavLink className='nav-links' to="/">
                SignUp 
             </NavLink> */}
            </div>
            </nav>
            )}

export default NavBar;