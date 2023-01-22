import React from "react";

class MyComponent extends React.Component{
    state = {
        name: "Kiet",
        age: 23,
        address: `HCM`,
        school: `Nguyen Tat Thanh`
    };

    handleClick = (event) =>{
        // console.log(`Check state`, this.state,event)
        this.setState({
            name: `Van Kiet`,
            age: Math.floor((Math.random() * 100) +1)
        })
    }

    handleOnMouseOver = (event) =>{
        console.log(`Check Event`, event.pageX, this.state.name)
    }

    //JSX
    render() {
        return(
            <div>
                <p>My name is: {this.state.name}</p> 
                <p>I age: {this.state.age}</p>
                <p>I live in: {this.state.address}</p>
                <button onClick={this.handleClick}>Click me!</button>
                <button onMouseOver={(event)=>{this.handleOnMouseOver(event)}}>Hover me!</button>
            </div>
        );
    }
}
export default MyComponent;

