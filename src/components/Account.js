import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/Account.css'
import { Tab } from 'semantic-ui-react'
import AccountInfo from './AccountInfo'
import ChangeEmail from './ChangeEmail'
import ChangePassword from './ChangePassword'
import { logout } from '../actions/auth'
import { Redirect } from 'react-router-dom'

class Account extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            passwordConfirmation: "",
            success: false,
            passwordError: false,
            newPassword: "",
            emailNotUpdated: false,
        }
    }



    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    submitChanges = (event) => {
        event.preventDefault()
        this.setState({ emailNotUpdated: false })
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
                    if (response.updated) {
                        this.setState({ emailNotUpdated: false, success: true, passwordError: false, password: "", passwordConfirmation: "", email: "" })
                    } else {
                        this.setState({ success: false, passwordError: false, emailNotUpdated: true })
                    }

                })
        }
    }



    render() {
        const user = this.props.auth.user
        const panes = [
            { menuItem: 'Account Info', render: () => <Tab.Pane><AccountInfo logout={this.props.logout} history={this.props.history} user={user} /></Tab.Pane> },
            { menuItem: 'Change Email', render: () => <Tab.Pane><ChangeEmail success={this.state.success} emailNotUpdated={this.state.emailNotUpdated} passwordError={this.state.passwordError} user={user} submitChanges={this.submitChanges} handleChange={this.handleChange} email={this.state.email} password={this.state.password} passwordConfirmation={this.state.passwordConfirmation} /></Tab.Pane> },
            { menuItem: 'Change Password', render: () => <Tab.Pane><ChangePassword /></Tab.Pane> },

        ]
        return (
            <>
                {localStorage.getItem('token') ?
                    <div className="account-container">
                        <div className="account-inner">
                            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
                        </div>
                    </div>
                    :
                    <Redirect to={{ pathname: '/' }} />
                }
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    logout
}



export default connect(mapStateToProps, mapDispatchToProps)(Account);

