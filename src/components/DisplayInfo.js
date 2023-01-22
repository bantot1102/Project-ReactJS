import React from "react";

class DisplayInfo extends React.Component {
    render() {
        const {listUsers} = this.props;

        return (
            <div>
            {listUsers.map((user) =>{
                return (
                    <div>
                        <div key={user.id}>
                            <div>Name is: {user.name}</div>
                            <div>Age is: {user.age}</div>
                        </div>
                        <hr/>
                    </div>
                )
            })}
            </div>  
        )
    }
}
export default DisplayInfo