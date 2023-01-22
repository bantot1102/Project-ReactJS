import React from "react";

class DisplayInfo extends React.Component {
    render() {
        const {name, age, listTT} = this.props;
        return (
            <div>
                <div>Name is: {name}</div>
                <div>Age is: {age}</div>
                <div>Show list: {listTT.age}</div>
            </div>
        )
    }
}
export default DisplayInfo