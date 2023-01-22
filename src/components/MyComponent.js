import React from "react";

class MyComponent extends React.Component{
    state = {
        name: "Kiet",
        age: 23,
        address: `HCM`,
        school: `Nguyen Tat Thanh`
    };
    // handleClick(){
    //     console.log(`Click my pussy!`)
    // };
    handleClick = (event) =>{
        console.log(`Check state`, this.state)
    }
    handleOnMouseOver = (event) =>{
        console.log(`Check Event`, event.pageX, this.state.name )
    }

    //JSX
    render() {
        return(
            <div>
                My name is: {this.state.name}, 
                I age: {this.state.age}, ``
                I live in: {this.state.address}
                <button onClick={this.handleClick}>Click me!</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
            </div>
        );
    }
}
export default MyComponent;

