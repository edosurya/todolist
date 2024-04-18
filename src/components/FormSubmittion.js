import { Component } from "react";

class FormSubmittion extends Component {
    state = {
        firstname: "",
        lastname: "",
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstname: event.target.value,
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value,
        })
    }

    handleSubmit = (event)=> {
        event.preventDefault();
        console.log({
        fname : this.state.firstname,
        lname : this.state.lastname
        })
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input name="firstname" value={this.state.firstname} onChange={this.handleFirstNameChange}></input>
                <input name="lastname" value={this.state.lastname} onChange={this.handleLastNameChange}></input>
                <button type="submit">Submit</button>
            </form>

        </div>
    }
}

export default FormSubmittion;