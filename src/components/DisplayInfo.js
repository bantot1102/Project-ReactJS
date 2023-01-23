import React from "react";
import './DisplayInfo.scss'
import logo from './../logo.svg'
class DisplayInfo extends React.Component {
    state = {
        isShowListUsers: true
    }
    handlShowHide = () =>{
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }
    handleDeleteUser = (userId) =>{
        let listUsersClone = this.state.listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        this.setState({listUsers: listUsersClone})
    }
    componentDidMount() {
        console.log(`call me component Did Mount`)
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`call me component Did Update`, prevProps, this.props)
        if(this.props.listUsers !== prevProps.listUsers){
            if(this.props.listUsers.length === 5){
                alert(`Đã có đủ 5 user`)
            }
        }
    }


    render() {
        const { listUsers,handleDeleteUser } = this.props;

        return (
        <div className="Display-info-container">
            <div>
                <span onClick={()=>{ this.handlShowHide()}}>
                {this.state.isShowListUsers === true ? `Hide list users` : `Show list users`}
                </span>
            </div>
            
            {this.state.isShowListUsers &&
            <>
            {listUsers.map((user) => {
                return (
                <div
                    key={user.id}
                    className={+user.age < 23 ? "colorBlue" : "colorRed"}>
                    <div>Name is: {user.name}</div>
                    <div>Age is: {user.age}</div>
                    <div>
                        <button onClick={() => this.props.handleDeleteUser(user.id)}><img src={logo}></img></button>
                    </div>
                    <hr />
                </div>
                );
            })}
            </>}
            
        </div>
        );
    }
}
export default DisplayInfo;
