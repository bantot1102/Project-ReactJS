import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: "Kiệt", age: 23},
            {id: 2, name: "Long", age: 25},
            {id: 3, name: "Tín", age: 25},
            {id: 4, name: "Nhân", age: 22},
            {id: 5, name: "Tú", age: 22},
            {id: 6, name: "Nhật", age: 22}
        ]
    }
    handleAddNewUser = (userObj) =>{
        console.log(`Check userObj`, userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    //JSX
    render() {
        //DTY: don't repeat youseft
        return (
        <div>
            <AddUserInfor
            handleAddNewUser = {this.handleAddNewUser}/>
            <br/>
            <DisplayInfo 
            listUsers = {this.state.listUsers}/>
        </div>
        );
    }
    }
export default MyComponent;
