import React, { useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';




function LoginRegistration(){
 const [loggedInUser, setLoggedInUser]=useState(null)
 const [errors, setErrors] = useState([])
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
  
  
    //console.log('am i fucking up here?')
    fetch("/login", 
    {
      method: 'POST', 
        headers: {
          'Content-type': 'application/json'},
        body: JSON.stringify(userToLogin)
    }
    )
      // .then(() => {
      //   navigate('/user_in_session')
      //   .then(r=>r.json())
      //   .then(aGoddamnUser =>setLoggedInUser(aGoddamnUser))
      // })

    .then(r=>{
      if(r.ok) {
        r.json().then(loggedInUser=>{
          setLoggedInUser(loggedInUser)
          navigate('/user_in_session')
        })
      }else{
        r.json().then(json=> setErrors(json.errors))
      }
    }
      )
    .then(aGoddamnUser => {
      console.log(aGoddamnUser)

      setLoggedInUser(aGoddamnUser)
      // aGoddamnUser.student.data

    })
   
  }
      
  

      // .then(r=>r.json())
      // .then(aGoddamnUser => {
      //   navigate('/userinsession')
      //   .then(r=>r.json())
      //   .then(aGoddamnUser =>setLoggedInUser(aGoddamnUser))
      // })

  function handleLogout() {
    fetch('/logout', { method: "DELETE" })
      .then(r => r.json())
      .then(deleteResponse => {
        console.log('deleteResponse' , deleteResponse)
        setLoggedInUser(null);
      });
  }


//  function handSignUp(){

//  }

return (
    <div className='login-form-container'>
        {/* {
        loggedInUser ?
        (<>
        <h2>Welcome {loggedInUser.name}! </h2>
        } */}

      {/* <NavBar/> */}
      <h2>Let's Login!</h2>
        
        <form onSubmit={handleLoginSubmit}>
        <input className='username-form-container' 
        onChange={handleOnChangeForUserToLogin}
        name='username'
        placeholder="username"
        />

        <input 
        className='password-form-container' type='password'
        onChange={handleOnChangeForUserToLogin}name='password'
        placeholder="password"
        />

        <input className='login-submit-button'
        type='submit'/>

        

        {/* <h2>If you wanna fuck around with some data sign up here</h2> */}

      </form>

      <button
        className='logout-submit-button'
        onClick={handleLogout}>Logout
      </button>
      
      </div>
)
      }

// function newFunction() {
//   navigate('/userinsession');
// }



export default LoginRegistration;