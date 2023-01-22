import React from "react";

class TestComponent extends React.Component{
    state = {
        name: `Long`,
        age: 25,
        address: `Thu Duc`,
        school: `NTT`
    };
    render(){ 
        return (         
            <div>
                Test Test Component: {this.state.name} 
            </div>
        );
    }
}
export default TestComponent;