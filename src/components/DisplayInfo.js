import React, { useState } from "react";
import './DisplayInfo.scss'
import logo from './../logo.svg'


// class DisplayInfo extends React.Component {

//     render() {
//         const { listUsers,handleDeleteUser,isShowListUsers,handlShowHide } = this.props;

//         return (
//         <div className="Display-info-container">
//             <div>
//                 <span onClick={()=>{ this.props.handlShowHide()}}>
//                 {this.props.isShowListUsers === true ? `Hide list users` : `Show list users`}
//                 </span>
//             </div>
            
//             {this.props.isShowListUsers &&
//             <>
//             {listUsers.map((user) => {
//                 return (
//                 <div
//                     key={user.id}
//                     className={+user.age < 23 ? "colorBlue" : "colorRed"}>
//                     <div>Name is: {user.name}</div>
//                     <div>Age is: {user.age}</div>
//                     <div>
//                         <button onClick={() => this.props.handleDeleteUser(user.id)}><img src={logo}></img></button>
//                     </div>
//                     <hr />
//                 </div>
//                 );
//             })}
//             </>}
            
//         </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers,handleDeleteUser } = props; // listUsers phải có props vì nó là 1 state, còn handleDeleteUser k có cũng đc vì nó là 1 func
    const [isShowListUsers, setShowListUsers] = useState(true);
    const handleShowHide = () =>{
        setShowListUsers (!isShowListUsers);
    }
    
    return(
        <div className="Display-info-container">
            <div>
                <span onClick={()=>{handleShowHide()}}>
                {isShowListUsers === true ? `Hide list users` : `Show list users`}
                </span>
            </div>
            
            {isShowListUsers &&
            <>
            {listUsers.map((user) => {
                return (
                <div
                    key={user.id}
                    className={+user.age < 23 ? "colorBlue" : "colorRed"}>
                    <div>Name is: {user.name}</div>
                    <div>Age is: {user.age}</div>
                    <div>
                        <button onClick={() => props.handleDeleteUser(user.id)}><img src={logo}></img></button>
                    </div>
                    <hr />
                </div>
                );
            })}
            </>}  
        </div>
    )
    
}
export default DisplayInfo;
