import React,  { useState } from 'react'
import ChildComponent from "./ChildComponent"
import SiblingComponent from './SiblingComponent'
function ParentComponent() {
    const [counter, setCounter] = useState(0)
    const increment = ()=>{
        setCounter((counter)=>counter+1)
    }
    const reset = ()=>{
        setCounter(()=> 0)
    }
    const decrement = ()=>{
        setCounter((count)=> count>0?count-1: count)
    }
    const randomCount = ()=>{
        setCounter(()=>Math.floor(Math.random()*(10-1)+1))
    }
    return (
        <div>
            <button onClick ={increment}>Увеличить</button>
            <button onClick = {reset}>Сбросить</button>
            <button onClick = {decrement}>Уменьшить</button>
            <button onClick = {randomCount}>Случайное значение</button>
            <p>counter : {counter}</p>
            <ChildComponent name = "Anna" count = {counter}/>
        </div>

    )
  
}

export default ParentComponent;
