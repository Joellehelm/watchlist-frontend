import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/Account.css'
import { Tab } from 'semantic-ui-react'
import AccountInfo from './AccountInfo'
import ChangeEmail from './ChangeEmail'
import ChangePassword from './ChangePassword'

class Account extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            passwordConfirmation: "",
            success: false,
            passwordError: false,
            newPassword: ""
        }
    }



    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    submitChanges = (event) => {
        event.preventDefault()
        this.setState({ success: false, passwordError: false })
        if (this.state.password !== this.state.passwordConfirmation) {
            this.setState({ success: false, passwordError: true })
        } else {

            fetch(`http://localhost:3000/users/${this.props.auth.user.id}`, {
                // fetch(`https://showbookmark-backend.herokuapp.com//users/${this.props.auth.user.id}`, {
                method: "PATCH",
                headers: {
                    "Authorization": `JWT ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ email: this.state.email, password: this.state.password, password_confirmation: this.state.passwordConfirmation })
            })
                .then(r => r.json())
                .then(response => {
                    console.log(response)
                    console.log(this.props.auth)
                    this.setState({ success: true, passwordError: false })

                })
        }
    }

    handlePWSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/users/${this.props.auth.user.id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `JWT ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({password: this.state.newPassword, password_confirmation: this.state.password})
        })
        .then(r => r.json())
        .then(response => {
            console.log(response)
        })
    }

    render() {
        const user = this.props.auth.user
        const panes = [
            { menuItem: 'Account Info', render: () => <Tab.Pane><AccountInfo user={user} /></Tab.Pane> },
            { menuItem: 'Change Email', render: () => <Tab.Pane><ChangeEmail success={this.state.success} passwordError={this.state.passwordError} user={user} submitChanges={this.submitChanges} handleChange={this.handleChange} email={this.state.email} password={this.state.password} passwordConfirmation={this.state.passwordConfirmation} /></Tab.Pane> },
            { menuItem: 'Change Password', render: () => <Tab.Pane><ChangePassword handleSubmit={this.handlePWSubmit} success={this.state.success} passwordError={this.state.passwordError} handleChange={this.handleChange} newPassword={this.state.newPassword} password={this.state.password} passwordConfirmation={this.state.passwordConfirmation} /></Tab.Pane> },
        ]
        return (
            <div className="account-container">
                <div className="account-inner">
                    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})



export default connect(mapStateToProps)(Account);

