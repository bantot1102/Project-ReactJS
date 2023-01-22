import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
    
    //JSX
    render() {
        const myName = `Sui Van Kiet`;
        const myAge = 23;
        const listTT = {
            name: `Kiet`,
            age: 18,
            address: `HCM`
        }
        return (
        <div>
            <UserInfor/>
            <br/>
            <DisplayInfo name={myName} age={myAge} listTT = {listTT}/>
        </div>
        );
    }
    }
export default MyComponent;
