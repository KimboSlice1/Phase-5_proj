import React, {useState} from "react";



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
            <h1> shit work? fuck</h1>
        
            {/* put a button here to make you go to create data */}
            </div>
    )
}







export default UserHome;