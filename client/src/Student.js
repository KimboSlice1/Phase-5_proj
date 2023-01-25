import React, {useState, useEffect} from "react"



function Student(){
    const [students, setStudents] = useState([]);
    
    // const [studentName, setStudentName]= useState([])

    
      fetch('/students')
        .then(r => r.json())
        .then(arrayOfData =>
          console.log(arrayOfData)
          )
    

    // studentName.map(studentObj =>
    //     key={studentObj.id}
    //     student={studentObj.name}
    //     />)
    // console.log(students)

  

    return(
        <div className='students-list'>
            {students.map((student) => (
                <li key={student.id}>{student.name} </li>
            )
            )}
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