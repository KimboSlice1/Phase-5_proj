// import React, {useState, useEffect, useParams} from "react"
// import { Route, Routes, useNavigate, createSearchParams } from "react-router-dom"
// import { redirect } from "react-router-dom"
// import StudentCard from './StudentCard'

// const Student = ({filteredStudentData, setData, path = '/Adddata'}) => {
//     // const params = useParams();
  
  
//     const [singleStudentData, setSingleStudentData] = useState([])
//     useEffect(() => {
//       fetch(`/Addata/`)
//       .then((r) => r.json())
//       .then(setSingleStudentData)
//     }, [])
    
  
//     const navigate = useNavigate()
   
//     const goToStudentId = () =>
//       navigate({
//         pathname: "/Student",
//         })
//         return (
//             <div>
//                 <h1 className='student-name'>Students!!</h1>
//                  <select onChange={goToStudentId} >
//                   {singleStudentData.map( singleStudentData => {
//                     return ( 
//                       <option
//                         key={singleStudentData.id} 
//                         value={singleStudentData.id}>
//                           {singleStudentData.name}
//                       </option>)})}
//                   </select>
//                  <button onClick={ () => navigate(path)}>back</button>
        
//                  <StudentCard singleStudentData={singleStudentData}/>
//                 <h3 className='student-info'></h3>
//             </div>
        
//           )
//         }

//         export default Student;