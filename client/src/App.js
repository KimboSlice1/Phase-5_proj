import logo from './logo.svg';
import './App.css';
import UserHome from './UserHome'
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate} from 'react-router-dom';
import UserLoginRegistration from './LoginRegistration'
import NavBar from './NavBar'
import Student from './Student'


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
<header className='App-header'>
      <h1>Parachute
      <NavBar/>
      </h1>
      </header>

      
      {/* <Routes>
      <Route path='/login' element={<UserLoginRegistration />} />
      <Route path='/userinsession' element={<UserHome />} />
      </Routes> */}
{/* <UserLoginRegistration /> */}

      <Routes>
        <Route path='/' element={<UserLoginRegistration />} />
        <Route path='/userinsession' element={<UserHome />} />
        <Route path='/students' element={<Student />} />
      </Routes>
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