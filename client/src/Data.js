import React, {useState, useEffect} from 'react'

function Data(){
    const [data, setData]=useState([]);

    useEffect(()=> {
        fetch('/data')
        .then(r=>r.json())
        .then(dataArray =>
            console.log(dataArray))

           

    }, [])

return (
    <div className='data-container'>
        {data.map((data)=> (
            
            <li key={data.id}>
               {data.type}
               {data.comment}
            </li>
            
        ))}
        
    </div>
    
)


}

export default Data;