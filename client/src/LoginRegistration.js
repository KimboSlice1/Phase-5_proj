import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import NavBar from 'react';



function UserLoginRegistration(){
 const [loggedInUser, setLoggedInUser]=useState(null)
const navigate = useNavigate()

 console.log('state of loggedInUser: ', loggedInUser)

  // useEffect(()=>{
  //       fetch('/login')
  //       .then(r=>r.json())
  //       .then(userAlreadyLoggedIn=> {
  //           setLoggedInUser(userAlreadyLoggedIn)
  //       })
  //     }, []
  // )


const [userToLogin, updateUserToLoginInfo]=useState(
    {
      username: '',
      password: ''
    }
  )
  console.log('STATE OF USERTOLOGIN:', userToLogin)
  
  const handleOnChangeForUserToLogin=(synthEvent)=>{
    console.log(synthEvent)
    updateUserToLoginInfo({...userToLogin, [synthEvent.target.name]: synthEvent.target.value })
  }
  
  
  
  const handleLoginSubmit=(synthEvent)=>{
  synthEvent.preventDefault()
  
  
console.log('am i fucking up here?')
  
// method: 'POST', 
//         headers: {
//           'Content-type': 'application/json'},
//         body: JSON.stringify(userToLogin)
//   }
//       )

// /my issue is here? 
      fetch("/login") 
      .then(r=>r.json())
      .then(aGoddamnUser => {
        navigate('/userinsession');
        setLoggedInUser(aGoddamnUser)
      })}
  console.log("hi Nathan")
  

  function handleLogout() {
    fetch('/logout', { method: "DELETE" })
      .then(r => r.json())
      .then(deleteResponse => {
        setLoggedInUser(null);
      });
  }


//  function handSignUp(){

//  }

return (
    <div>
      {/* <NavBar/> */}
      <h2>Yo login before you start fuckin' with these kids' data</h2>
        
        <form onSubmit={handleLoginSubmit}>
        <input 
        onChange={handleOnChangeForUserToLogin}
        name='username'
        />

        <input type='password'
        onChange={handleOnChangeForUserToLogin}name='password'
        />

        <input type='submit'/>

        <button onClick={handleLogout}>Logout</button>

        <h2>If you wanna fuck around with some data sign up here</h2>

      </form>
      
      </div>
)

// function newFunction() {
//   navigate('/userinsession');
// }
}

export default UserLoginRegistration;