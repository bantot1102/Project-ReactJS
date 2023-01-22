import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "Kiet",
        age: 23,
        address: `HCM`,
        school: `Nguyen Tat Thanh`,
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

    handleOnChangeAddress = (event) => {
        this.setState({
        address: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Check state`, this.state);
    };
    render() {
        return (
        <div>
            <p>My name is: {this.state.name}</p>
            <p>I age: {this.state.age}</p>
            <p>I live in: {this.state.address}</p>

            <form
            onSubmit={(event) => {
                this.handleSubmit(event);
            }}>

            <label>Hãy điền thông tin tên: </label>
            <input
                value={this.state.name}
                type="text"
                onChange={(event) => this.handleOnChangeName(event)}
            />
            <button>Sumit</button>

            <label>Hãy điền thông tin tuổi: </label>
            <input
                value={this.state.age}
                type="text"
                onChange={(event) => this.handleOnChangeAge(event)}
            />

            <label>Hãy điền thông tin thành phố: </label>
            <input
                value={this.state.address}
                type="text"
                onChange={(event) => this.handleOnChangeAddress(event)}
            />
            <button>Sumit</button>
            </form>
        </div>
        );
    }
}
export default UserInfor;
