import React, {useState, useEffect} from 'react'


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
    console.log(studentData)

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
        const{type, value}=e.target;
        setDatum({...datum, [type]: value})
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
        <form onSubmit={handleSubmit}>
            <label>
                Type:
                <input
                className='type-text-box'
                type='text'
                name='type'
                value={datum.type}
                onChange={handleChange}
                />
            </label>
            <br />

            <label>
                Comment:
                <input
                className='comment-text-box'
                type='text'
                name='comment'
                value={datum.comment}
                onChange={handleChange}
                />
            </label>
            <label>
                User:
                <select classname='student-text-box'
                onChange={handleDataChange}>
                    {optionElements}
                </select>
            </label>

            <button className='data-submit-button' type='submit'>submit
            </button>
        </form>
        
        <input type='text'>
        </input>
    </div>
    
)
}

export default Data;

