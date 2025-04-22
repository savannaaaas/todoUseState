import React,  { useState } from 'react'
function ParentComponent() {
    const [counter, setCounter] = useState(0)
    const increment = ()=>{
        setCounter((counter)=>counter+1)
    }
    const reset = ()=>{
        setCounter((counter)=> counter)
    }
    return (
        <div>
            <button onClick ={increment}>Увеличить</button>
            <button onClick = {reset}>Сбросить</button>
            <p>counter : {counter}</p>
        </div>

    )
  
}

export default ParentComponent;
