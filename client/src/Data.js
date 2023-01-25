import React, {useState, useEffect} from 'react'
import Students from './Students'


function Data(){
    const [newStudentDataObj, setNewStudentDataObj]=useState({
        data_type:'',
        comment:'',
    });

    const [data, setMyData]=useState('')

const [comment, setComment]=useState('')
const [type, setType]=useState('')
    // const [studentData, setStudentData]=useState([]);
    //I'm getting the data array I want until I added in ^^^^^ that

    const addData =(data)=>
    setMyData(current=> [...current, data])
//this is what it was!
    // useEffect(()=> {
    //     fetch('/data')
    //     .then(r=>r.json())
    //     .then(setMyData)
            
    // }, [])
    // console.log(data)

    // useEffect(()=> {
    //     fetch('/data')
    //     .then((myDataRails)=> {
    //         console.log('my Data', myDataRails)
    //         setMyData(myDataRails)
    //     })
    // }, [])
    // // console.log(studentData)
    // const [user, setUser] = useState(null)

    // const handleDataChange=synthE=>{
    //     console.log(synthE)
    //     setNewStudentDataObj({...newStudentDataObj, [synthE.target.name]: synthE.target.value})
    // }
    // const optionElements=studentData.map((studentDatum =>{
    //     return(
    //         <option key={studentDatum.id}>
    //             {studentDatum.type}
    //             {studentDatum.comment}
    //         </option>
    //     )
    // }))
    
 
    const handleChange=(e)=>{
        const{name, value}=e.target;
        setNewStudentDataObj({...newStudentDataObj, [name]: value})
    };
    

    const handleSubmit=(e)=> {
        e.preventDefault();
        let newData={
            comment: newStudentDataObj.comment, 
            type: newStudentDataObj.data_type
        }

        console.log('I wanna send this bad boiy')
        console.log(newData)
        // fetch('/data', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(newData),
        // })
        
        // data(newData)
        // .then((r)=>r.json())
        // .then(addData);
    };

return (
    <div className='data-container'>
    
    {/* <ul>
        {studentData.map((studentDatum)=>{
            return(
            <li key={studentDatum.id}>
                {studentDatum.type}
                {studentDatum.comment}
            </li>
            )
        }
        )
        }
    </ul> */}
        
        {/* <h2>{.name}</h2> */}
        {/* <h3>{optionElements}</h3> */}
        <h3><Students /></h3>
        <h4>post new student data here</h4>
        
        <form onSubmit={handleSubmit}>
            {/* <label>
                User:
                <input
                className='type-text-box'
                type='text'
                name='type'
                value={newStudentDataObj.type}
                onChange={handleChange}
                />
            </label>
            <br /> */}

            <label>
                Comment
                <input
                className='comment-text-box'
                type='text'
                name='comment'
                placeholder='comment here'
                // value=''
                onChange={handleChange}
                // onChange={() => {

                // }}
                />
            </label>
            <label>
                Type:
                <input
                className='type-select-box'
                type='select'
                name='data_type'
                placeholder='data type here'
                // value={newStudentDataObj.data_type}
                onChange={handleChange}
                    />
            </label>
            {/* <label>
                Type:
                <select classname='student-text-box'
                onChange={handleDataChange}>
                    {optionElements}
                </select>
            </label> */}

            <button  className='data-submit-button'
            type='submit'>submit
            </button>
        </form>
        
        {/* <input type='text'>
        </input> */}
    </div>
    
)
}

export default Data;

