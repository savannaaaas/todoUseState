import React, {useState} from "react";
const SiblingComponent = ()=>{
    const [text,setText] = useState('')
    const ChangeText = ()=>{
        setText((text)=> "redev")
    }

}
export default SiblingComponent;