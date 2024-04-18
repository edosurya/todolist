import { Component } from "react";

class Counter extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         counter: 0,
    //     }

    //     // this.increament = this.increament.bind(this)
    // }

    state = {
        counter:0,
    }

    increament =() => {
        this.setState ({
            counter: this.state.counter + 1,
        })
    }

    decreament() {
        this.setState ({
            counter: this.state.counter - 1,
        })
    }
    render() {
        return (
        <div>
            <h1>Counter: {this.state.counter}</h1>
            <button onClick={this.increament}>Increament </button>
            <button onClick={()=> this.decreament()}>Decreament </button>
        </div>
        );
    }
}

export default Counter;