import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    state = {
        counter: 0,
    };
    render() {
        return (
            <div>
                <h1>Hello!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById);
