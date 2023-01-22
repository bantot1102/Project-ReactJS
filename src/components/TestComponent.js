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
                Tên Trưởng nhóm: {this.state.name} 
            </div>
        );
    }
}
export default TestComponent;