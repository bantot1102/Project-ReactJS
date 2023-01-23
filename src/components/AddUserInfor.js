import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: `...`,
        age: `...`,
    };

    handleOnChangeName = (event) => {
        this.setState({
        name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
        age: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) +1 ) + `- ramdom`,
            name: this.state.name,
            age: this.state.age
        });
    };
    render() {
        return (
        <div>
            <p>My name is: {this.state.name}</p>
            <p>I age: {this.state.age}</p>

            <form
            onSubmit={(event) => {
                this.handleOnSubmit(event);
            }}>

            <label>Your name: </label>
            <input
                value={this.state.name}
                type="text"
                onChange={(event) => this.handleOnChangeName(event)}
            />

            <label>Your age: </label>
            <input
                value={this.state.age}
                type="text"
                onChange={(event) => this.handleOnChangeAge(event)}
            />

            <button>Sumit</button>
            </form>
        </div>
        );
    }
}
export default AddUserInfor;
