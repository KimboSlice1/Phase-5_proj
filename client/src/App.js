import logo from './logo.svg';
import './App.css';
import UserHome from './UserHomePage'
import React, { useState, useEffect } from "react";
import { Routes, Route} from 'react-router-dom';
import UserLoginRegistration from './LoginRegistration'
import NavBar from './NavBar'


function App() {


    // fetch('/')
    //   .then(r => r.json())
    //   .then(console.log("did it work"))
        
// const [userToLogin, updateUserToLoginInfo]=useState(
//   {
//     username: '',
//     password: ''
//   }
// )
// console.log('STATE OF USERTOLOGIN:', userToLogin)

// const handleOnChangeForUserToLogin=(synthEvent)=>{
//   console.log(synthEvent)
//   updateUserToLoginInfo({...userToLogin, [synthEvent.target.name]: synthEvent.target.value })
// }



// const handleLoginSubmit=(synthEvent)=>{
// synthEvent.preventDefault()

// console.log('Lets see!')
//     fetch("/login", {
//       method: 'POST', 
//       headers: {
//         'Content-type': 'application/json'},
//       body: JSON.stringify(userToLogin)
// }
//     )
//     .then(r=>r.json())
//     .then(console.log)
// }

  return (

  
    <div className="App">
      {/* <NavBar/> */}
      {/* <Routes>

        
      <Route exact path = '/'>
          <UserLoginRegistration />
        </Route>


      </Routes> */}

      <h1>This is my home page! Yay!</h1>
      

      <h2>Yo login before you start fuckin' with these kids' data</h2>
      <UserLoginRegistration login={UserLoginRegistration}/>
      {/* <NavBar /> */}

      {/* <form onSubmit={handleLoginSubmit}>
        <input 
        onChange={handleOnChangeForUserToLogin}
        name='username'
        />

        <input type='password'
        onChange={handleOnChangeForUserToLogin}name='password'
        />

        <input type='submit'/>
      </form> */}


<br></br><br></br>
<br></br><br></br>


      <h2>If you wanna fuck around with some data sign up here</h2>
    </div>
  );
}

export default App;

// console.log('Lets see!')
  //   fetch("/login", {
  //     method: 'POST', 
  //     headers: {
  //       'Content-type': 'application/json'},
  //     body: JSON.stringify(
  //       {
  //       email: 'kh582013@gmail.com',
  //       password: 'Testing_1234'
  //     }
  //     )

  //   }
  //   )
      
  // ;

// const [username, setUsername] = useState('') 
// console.log('STATE OF USERNAME:', username)
// const [password, setPassword] = useState('') 
// console.log('STATE OF PASSWORD:', password)

// const handleUsernameOnChange=(synthEvent)=>{
//   console.log(synthEvent)
//   setUsername(synthEvent.target.value)
// }

// const handlePasswordOnChange=(synthEvent)=>{
//   console.log(synthEvent)
//   setPassword(synthEvent.target.value)
// }