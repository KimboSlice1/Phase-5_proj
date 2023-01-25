// import React, {useState} from 'react'
import Data from './Data'

// function DataMap({data}){
    // i dont know if thats the right prop to pass ^^^
//  const [datum, setDatum]=useState({
//     type:'',
//     comment:'',
// });
// const handleDataChange=e=>{
//     console.log(`just selected id: ${e.target.value}`)
// }
// const optionElements=data.map(
//     datum=>{
//         return(
//             <option key={datum.id} value={datum.id}>
//                 {datum.comment}
//             </option>
//         )
//     }
// )

// const handleChange=(e)=>{
//     const{type, value}=e.target;
//     setDatum({...datum, [type]: value})
// };

// const handleSubmit=(e)=> {
//     e.preventDefault();
//     fetch('/data', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(datum),
//     })
//     .then((r)=>r.json())
//     .then(addData);
// };
// return (
//     <div className='data-container'>
//         {data.name?map((datum)=>            // Do i need to specify what data I am mapping? is that why  not working
                
//         <li key={datum.id}>
//                    {datum.type}
//                    {datum.comment}
//                    </li>
//                 )
//             };
//         <form onSubmit={handleSubmit}>
//         <label>
//     Type:
//     <input
//     className='type-text-box'
//     type='text'
//     name='type'
//     value={datum.type}
//     onChange={handleChange}
//     />
// </label>
// <br />

// <label>
//     Comment:
//     <input
//     className='comment-text-box'
//     type='text'
//     name='comment'
//     value={datum.comment}
//     onChange={handleChange}
//     />
// </label>
// <label>
//     User:
//     <select classname='student-text-box'
//     onChange={handleDataChange}>
//         {optionElements}
//     </select>
// </label>

// <button className='data-submit-button' type='submit'>submit
// </button>
// </form>

// <input type='text'>
// </input>


// </div>
// )
// }

// export default DataMap;