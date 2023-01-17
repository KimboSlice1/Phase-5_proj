import React, { useEffect, useState} from "react";


function UserLoginRegistration(){
 const [loggedInUser, setLoggedInUser]=useState(null)

 console.log('state of loggedInUser: ', loggedInUser)

  useEffect(()=>{
        fetch('/userinsession')
        .then(r=>r.json())
        .then(userAlreadyLoggedIn=> {
            setLoggedInUser(userAlreadyLoggedIn)
        })
      }, []
  )


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
  
//   console.log('Lets see!')
      fetch("/login", {
        method: 'POST', 
        headers: {
          'Content-type': 'application/json'},
        body: JSON.stringify(userToLogin)
  }
      )
      .then(r=>r.json())
      .then(aGoddamnUser => {
        setLoggedInUser(aGoddamnUser)
      })
  }


  const handleLogout =()=> {
    fetch('/logout', {method: "DELETE"})
    .then(r=>r.json())
    .then(deletResponse => {
      setLoggedInUser(null)
    })
  }
return (
    <div>
        <h2> You should log that fine little ass in first </h2>

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
      </form>
      </div>
)}

export default UserLoginRegistration;