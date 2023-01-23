import React, {useState, useEffect} from 'react'

function Data(){
    const [datum, setData]=useState([]);

    useEffect(()=> {
        fetch('/data')
        .then(r=>r.json())
        .then(dataArray =>
            setData(dataArray))

           

    }, [])

return (
    <div className='data-container'>
        {datum.map((datum)=> (
            
            <li key={datum.id}>
               {datum.type}
               {datum.comment}
            </li>
            
        ))}
        
    </div>
    
)


}

export default Data;