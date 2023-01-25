import React, {useState, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import StudentCard from './StudentCard'



const Students=({filteredStudentInfo, setData})=>
{
    const [myStudents, setMyStudents] = useState([]);
    
    // const [studentName, setStudentName]= useState([])

    useEffect(()=> {
      fetch('/students')
        .then(r => r.json())
        .then((myStudentsRails)=>{
          console.log('myStudents' , myStudentsRails)
          setMyStudents(myStudentsRails)
        })
    },[])
    // studentName.map(studentObj =>
    //     key={studentObj.id}
    //     student={studentObj.name}
    //     />)
    // console.log(students)
    const navigate=useNavigate()
    // console.log(myStudents[0].data)


const goToStudentId=()=>
navigate({
  pathname: '/data',
})  

    return(
        <div className='students-list'>
          {/* <h2>come on. Anything?</h2> */}
          <select className='select-bar'
          onChange={goToStudentId}>
          {myStudents.map((singleStudent =>
            {
              return(
                <option
                key={singleStudent.id}
                value={singleStudent.id}>
                  {singleStudent.name}
                </option>
              )
            }))}

          </select>
          {/* <button onClick={()=>navigate(path)}>back</button> */}


          {/* <StudentCard student={singleStu}/> */}
            {/* {students.map((student) => (
                <li key={student.id}>{student.name} </li>
            )
            )} */}
        {/* <li key={students.id}>Name</li> */}
        {/* <button onClick={()=>navigate('/data')}>Add Data
        </button> */}
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

        export default Students;