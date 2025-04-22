import React,  { useState } from 'react'
function ParentComponent() {
    const [counter, setCounter] = useState(0)
    const increment = ()=>{
        setCounter((counter)=>counter+1)
    }
    const reset = ()=>{
        setCounter((counter)=> counter? 0 : counter)
    }
    const decrement = ()=>{
        setCounter((counter)=> counter>0?counter-1: counter)
    }
    const randomCount = ()=>{
        setCounter(()=>  Math.floor(Math.random()*(10-1)*1))
    }
    return (
        <div>
            <button onClick ={increment}>Увеличить</button>
            <button onClick = {reset}>Сбросить</button>
            <button onClick = {decrement}>Уменьшить</button>
            <button onClick = {randomCount}>Случайное значение</button>
            <p>counter : {counter}</p>
        </div>

    )
  
}

export default ParentComponent;
