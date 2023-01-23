import React, {useState} from "react";
import Student from './Student'
import Data from './Data'
import { useNavigate } from "react-router-dom";



function UserHome(){

const [data, setData]=useState([]);
const [user, setUser]=useState(null)

    fetch('/user_in_session')
        .then(r=>r.json())
        .then(arrayOfData => setData(arrayOfData))


    const addData = (data)=> setData(current => [...current, data])
    const updateData = (user)=> setUser(user)
const navigate =useNavigate();

    
    return (
        <div className="UserHomePage">
            <h2>Your list of students should go here</h2>
            <h2>{<Student />}</h2>
            {/* <StudentMap /> */}
        <button onClick={()=>navigate('/data')}>Add Data
            

        </button>
        {/* {StudentMap} */}
            {/* put a button here to make you go to create data */}
            </div>
    )
}







export default UserHome;