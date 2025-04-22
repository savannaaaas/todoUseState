import React,  { useState } from 'react'
function ParentComponent() {
    const [counter, setCounter] = useState(0)
    const increment = ()=>{
        setCounter((counter)=>counter+1)
    }
    return (
        <div>
            <button onClick ={increment}>Увеличить</button>
            <p>counter : {counter}</p>
        </div>
    )
  
}

export default ParentComponent;
