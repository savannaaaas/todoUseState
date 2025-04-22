import React from "react";
const ChildComponent = ({name,count})=>{
    return (
        <div>
            <p>Hello, {name}- {count}</p>
        </div>
    )

}
export default ChildComponent;