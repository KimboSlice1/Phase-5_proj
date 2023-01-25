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
            <h1 className='nav-title'></h1>
            
            {/* <button className="home_button" onClick= {goHome} >Home</button> */}
            
    
            <NavLink className='nav-links' to="/login">
                Login
            </NavLink>
            <NavLink className='nav-links' to="/user_in_session">
                Home Page
            </NavLink>
            <NavLink className='nav-links' to="/students">
                See My Students
            </NavLink>
            <NavLink className='nav-links' to="/Data">
                Add New Data
            </NavLink>
            {/* <NavLink className='nav-links' to="/">
                SignUp 
             </NavLink> */}
            </div>
            </nav>
            )}

export default NavBar;