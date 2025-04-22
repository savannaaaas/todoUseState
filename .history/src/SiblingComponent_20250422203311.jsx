import React, {useState} from "react";
const SiblingComponent = ()=>{
    const [text,setText] = useState('')
    const ChangeText = ()=>{
        setText(()=> "Redev")
    }
return (
    <div>
        <button onClick={ChangeText}>Изменить текст</button>
        {
            <p>text {text}</p>
        }
    </div>
)

}
export default SiblingComponent;