import React, { Component } from 'react';
import { connect } from 'react-redux';


class Account extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            passwordConfirmation: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    submitChanges = (event) => {
        event.preventDefault()
        console.log("hello")
        fetch(`http://localhost:3000/users/${this.props.auth.user.id}`, {
            // fetch(`https://showbookmark-backend.herokuapp.com//users/${this.props.auth.user.id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `JWT ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({email: this.state.email})
        })
        .then(r => r.json())
        .then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                {`Account container... logged in user is ${this.props.auth.user.email}`}
                <form onSubmit={this.submitChanges}>
                    <input onChange={this.handleChange} type="text" name="email" placeholder={this.props.auth.user.email} value={this.state.email}/>
                    <input onChange={this.handleChange} type="text" name="password" placeholder="Password" value={this.state.password}/>
                    <input onChange={this.handleChange} type="text" name="passwordConfirmation" placeholder="Password Confirmation" value={this.state.passwordConfirmation}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})



export default connect(mapStateToProps)(Account);

