import React, {useState, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import StudentCard from './StudentCard'



const Student=({filteredStudentInfo, setData, path='/Students'})=>
{
    const [students, setStudents] = useState([]);
    
    // const [studentName, setStudentName]= useState([])

    useEffect(()=> {
      fetch('/students')
        .then(r => r.json())
        .then(setStudents)
    },[])
    // studentName.map(studentObj =>
    //     key={studentObj.id}
    //     student={studentObj.name}
    //     />)
    // console.log(students)
const navigate=useNavigate()


const goToStudentId=()=>
navigate({
  pathname: '/students',
})  

    return(
        <div className='students-list'>
          <h2>come on. Anything?</h2>
          <select onChange={goToStudentId}>
          {students.map((student =>
            {
              return(
                <option
                key={students.id}
                value={students.id}>
                  {students.name}
                </option>
              )
            }))}


          </select>
          <button onClick={()=>navigate(path)}>back</button>


          <StudentCard student={students}/>
            {/* {students.map((student) => (
                <li key={student.id}>{student.name} </li>
            )
            )} */}
        {/* <li key={students.id}>Name</li> */}
        </div>    
        

)
    
}


// const Student = ({filteredStudentData, setData, path = '/Adddata'}) => {
//     // const params = useParams();
  
  
//     // const [singleStudentData, setSingleStudentData] = useState([])
//     // useEffect(() => {
//     //   fetch('/Addata/')
//     //   .then((r) => r.json())
//     //   .then(setSingleStudentData)
//     // }, [])
    
  
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
        
//                  {/* <StudentCard singleStudentData={singleStudentData}/> */}
//                 <h3 className='student-info'></h3>
//             </div>
        
//           )
//         }

        export default Student;