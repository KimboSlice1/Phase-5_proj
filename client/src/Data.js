import React, {useState, useEffect} from 'react'
import Student from './Student'


function Data({addData, data}){
    

    const [datum, setDatum]=useState({
        type:'',
        comment:'',
    });

    const [studentData, setStudentData]=useState([]);
    //I'm getting the data array I want until I added in ^^^^^ that


    useEffect(()=> {
        fetch('/data')
        .then(r=>r.json())
        .then(setStudentData)
    }, [])
    // console.log(studentData)

    // const addStudentData=(datum) => setStudentData(current=> [...current, datum])

    // const updateUser=(user)=>setUser(user)

    // const currentUser =()=>{ }
    // const [searchText, setSearchText]= useState('')

    // function handleDeleteData(id){
    //     const deleteData=data.filter(datum => datum.id !== id)
    //     setStudentData(deleteData)
    // }
    

    // const filteredStudentData = data.map((eachDataObj) => {
    //     return eachDataObj.data
    // })

    const handleDataChange=e=>{
        console.log(`just selected id: ${e.target.value}`)
    }
    const optionElements=studentData.map((studentDatum =>{
        return(
            <option key={studentDatum.id}>
                {studentDatum.type}
                {studentDatum.comment}
            </option>
        )
    }))
    // return(
    //    <ul>
    //     {studentData.map((studentDatum)=>{
    //         return(
    //         <li key={studentDatum.id}>
    //             {studentDatum.type}
    //             {studentDatum.comment}
    //         </li>
    //         )
    //     }
    //     )
    //     }
    //    </ul>
    // )
 
    const handleChange=(e)=>{
        const{data_type, value}=e.target;
        setDatum({...datum, [data_type]: value})
    };

    const handleSubmit=(e)=> {
        e.preventDefault();
        fetch('/data', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datum),
        })
        .then((r)=>r.json())
        .then(addData);
    };

    
    
return (
    <div className='data-container'>
        <h2>{studentData.name}</h2>
        <h3>{optionElements}</h3>
        {/* <h3><Student /></h3> */}
        <form onSubmit={handleSubmit}>
            {/* <label>
                User:
                <input
                className='type-text-box'
                type='text'
                name='type'
                value={datum.type}
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
                value={datum.comment}
                onChange={handleDataChange}
                placeholder='Write Your Data Here'
                />
            </label>
            <label>
                Type:
                <select 
                classname='type-select-box'
                type='select'
                value={datum.data_type}
                onChange={handleChange}>
                    
                </select>
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

