import React, {useState} from "react";
import Student from './Student'



function UserHome(){

const [data, setData]=useState([]);
const [user, setUser]=useState(null)

    fetch('/user_in_session')
        .then(r=>r.json())
        .then(arrayOfData => setData(arrayOfData))


    const addData = (data)=> setData(current => [...current, data])
    const updateData = (user)=> setUser(user)


    
    return (
        <div className="UserHomePage">
            <h2>Your list of students should go here</h2>
            <h2>{<Student />}</h2>
            {/* <StudentMap /> */}
        
        {/* {StudentMap} */}
            {/* put a button here to make you go to create data */}
            </div>
    )
}







export default UserHome;