import React from "react";
import Student from './Student';

function StudentMap({students}){
  console.log(students)

  return(
    <ul className='cards'>
{
  students.map(studentObj =>         <Student 
      key={studentObj.id}
      student={studentObj}
      />)
}

    </ul>
  )
}
// const StudentCard = ({singleStudentData}) => {
//     // const [studentCard, setStudentCard] = useState()

//     // useEffect(() => {
//     //   fetch('/students')
//     //   .then((r) => r.json())
//     //   .then(setStudentCard)
//     // }, [])
    
    
    
//     // const params = useParams()
//     singleStudentData = []
    
//     return(
//       <div>
//           <h1>Student stuff</h1>



//       </div>



//     )
//   }
// }

  export default StudentMap;