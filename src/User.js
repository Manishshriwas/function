import React from "react";

function User(props)
{    const data="Manish"
    return (
        <div>
            <h2>Parent Calling</h2>
            <button onClick={()=>props.alert(data)}>Click Me</button>
        </div>
    )
}
export default User;