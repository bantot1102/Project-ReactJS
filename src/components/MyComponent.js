import React from "react";

class MyComponent extends React.Component{
    state = {
        name: "Kiet",
        age: 23,
        address: `HCM`,
        school: `Nguyen Tat Thanh`
    };

    //JSX
    render() {
        return(
            <div>
                My name is: {this.state.name}, 
                I age: {this.state.age}, 
                I live in: {this.state.address}
            </div>
        );
    }
}
export default MyComponent;

