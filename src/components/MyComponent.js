import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             {id: 1, name: "Kiệt", age: 23},
//             {id: 2, name: "Long", age: 25},
//             {id: 3, name: "Tín", age: 25},
//         ]
//     }
    
//     isHandleAddNewUser = (userObj) =>{
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
    
//     handleDeleteUser = (userId) =>{
//         let listUsersClone = this.state.listUsers
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({listUsers: listUsersClone})
//     }

    

//     //JSX
//     render() {
//         //DTY: don't repeat youseft
//         return (
        // <div>
        //     <AddUserInfor
        //     handleAddNewUser = {this.isHandleAddNewUser}/>
        //     <br/>
        //     <DisplayInfo 
        //     listUsers = {this.state.listUsers}
        //     handleDeleteUser = {this.handleDeleteUser}  
        //     />
        // </div>
//         );
//     }
//     }


const MyComponent = (props) =>{

    const [listUsers, setListUsers] = useState(
        [
            {id: 1, name: "Kiệt", age: 23},
            {id: 2, name: "Long", age: 25},
            {id: 3, name: "Tín", age: 25}
        ] 
    )


    const handleAddNewUser = (userObj) =>{
        setListUsers([userObj, ...listUsers])
        }
    
    const handleDeleteUser = (userId) =>{
        let listUsersClone = listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
    }

    return(
        <>
            <AddUserInfor
            handleAddNewUser = {handleAddNewUser}/>
            <br/>
            <DisplayInfo 
            listUsers = {listUsers}
            handleDeleteUser = {handleDeleteUser}  
            />
        </>
    )
}

export default MyComponent;
