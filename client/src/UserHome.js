import React, {useState} from "react";
import Student from './Student'
import Data from './Data'
import { useNavigate } from "react-router-dom";



function UserHome(){

const [info, setInfo]=useState([]);
//const [user, setUser]=useState(null)

    fetch('/user_in_session')
        .then(r=>r.json())
        .then(arrayOfInfo => setInfo(arrayOfInfo))


    // const addData = (data)=> setData(current => [...current, data])
    // const updateData = (user)=> setUser(user)
const navigate =useNavigate();

    
    return (
        <div className="UserHomePage">
            <h2>Your list of students should go here</h2>
            <h2>{<Student />}</h2>
            
        <button onClick={()=>navigate('/data')}>Add Data
        </button>

        </div>
    )
}







export default UserHome;