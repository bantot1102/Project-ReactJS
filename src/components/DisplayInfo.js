import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUsers: true
    }
    handlShowHide = () =>{
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }
    render() {
        const { listUsers } = this.props;

        return (
        <div>
            <div>
                <span onClick={()=>{ this.handlShowHide()}}>
                {this.state.isShowListUsers === true ? `Hide list users` : `Show list users`}
                </span>
            </div>
            {this.state.isShowListUsers &&
            <div>
            {listUsers.map((user) => {
                return (
                <div
                    key={user.id}
                    className={+user.age < 23 ? "colorBlue" : "colorRed"}>
                    <div>Name is: {user.name}</div>
                    <div>Age is: {user.age}</div>
                    <hr />
                </div>
                );
            })}
            </div>}
        </div>
        );
    }
}
export default DisplayInfo;
