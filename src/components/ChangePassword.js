import React, { Component } from 'react';
import { Button, Input, Message, Transition } from 'semantic-ui-react'

class ChangePassword extends Component {
  constructor() {
    super()
    this.state = {
      passwordNotMatch: false,
      passwordUpdated: false,
      passwordError: false,
      password: "",
      passwordConfirmation: "",
      newPassword: ""
    }
  }


  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ passwordUpdated: false, passwordNotMatch: false, passwordError: false })
    if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({ passwordNotMatch: true })
    } else {
      fetch(`http://localhost:3000/update_password`, {
        method: "PATCH",
        headers: {
          "Authorization": `JWT ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ user: { password: this.state.password, new_password: this.state.newPassword } })
      })
        .then(r => r.json())
        .then(response => {
          console.log(response)
          if (response.updated) {
            this.setState({ password: "", passwordConfirmation: "", newPassword: "", passwordUpdated: true })
          } else {
            this.setState({ passwordUpdated: false, passwordNotMatch: false, passwordError: true })
          }
        })
    }
  }


  render() {
    return (

      <div className="change-email-container">
        <p className="update-email-header">Update Password</p>
        <form method="patch" onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} type="text" name="newPassword" placeholder="New Password" value={this.state.newPassword} />
          <Input onChange={this.handleChange} error={this.state.passwordNotMatch} type="password" name="password" placeholder="Password" value={this.state.password} />
          <Input onChange={this.handleChange} error={this.state.passwordNotMatch} type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={this.state.passwordConfirmation} />
          <Transition animation="jiggle" duration={1000} visible={this.state.passwordNotMatch}>
            <Message visible={this.state.passwordNotMatch} hidden={this.state.passwordNotMatch === false} negative>
              <Message.Header>Password and password confirmation must match.</Message.Header>
            </Message>
          </Transition>

          <Transition animation="jiggle" duration={1000} visible={this.state.passwordUpdated}>
            <Message visible={this.state.passwordUpdated} hidden={this.state.passwordUpdated === false} positive>
              <Message.Header>Password successfully changed.</Message.Header>
            </Message>
          </Transition>

          <Transition animation="jiggle" duration={1000}  visible={this.state.passwordError}>
                   <Message visible={this.state.passwordError} hidden={this.state.passwordError === false} negative>
                     <Message.Header>Error password was not updated.</Message.Header>
                   </Message>
                 </Transition>

          <Button className="update-email-btn" type="submit" value="Submit">Submit</Button>
        </form>

      </div>

    );
  }
}

export default ChangePassword;



// import React from 'react';
// import { Button, Input, Message, Transition } from 'semantic-ui-react'

// function ChangePassword(props) {


//     return (
//         <div className="change-email-container">
//             <p className="update-email-header">Change Password</p>
//             <form onSubmit={props.handleSubmit} method="patch">
//                 <Input onChange={props.handleChange} type="text" name="newPassword" placeholder="New Password" value={props.newPassword} />
//                 <Input onChange={props.handleChange} error={props.passwordError} type="password" name="password" placeholder="Password" value={props.password} />
//                 <Input onChange={props.handleChange} error={props.passwordError} type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={props.passwordConfirmation} />
//                 <Transition animation="jiggle" duration={1000}  visible={props.passwordError}>
//                   <Message visible={props.passwordError} hidden={props.success} negative>
//                     <Message.Header>Password and password confirmation must match.</Message.Header>
//                   </Message>
//                 </Transition>

//                 <Transition animation="jiggle" duration={1000}  visible={props.success}>
//                   <Message visible={props.success} hidden={props.success === false} positive>
//                     <Message.Header>Password Successfully changed.</Message.Header>
//                   </Message>
//                 </Transition>

//                 <Button className="update-email-btn" type="submit" value="Submit">Submit</Button>
//             </form>

//         </div>
//     );
// }

// export default ChangePassword;




    // handlePWSubmit = (event) => {
    //     event.preventDefault()
    //     this.setState({success: false})
    //     if (this.state.password !== this.state.passwordConfirmation) {
    //         this.setState({ passwordError: true })
    //     } else {
    //         fetch(`http://localhost:3000/update_password`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Authorization": `JWT ${localStorage.getItem("token")}`,
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             },
    //             body: JSON.stringify({ user: { password: this.state.password, new_password: this.state.newPassword } })
    //         })
    //             .then(r => r.json())
    //             .then(response => {
    //                 console.log(response)
    //                 if (response.updated) {
    //                     this.setState({ password: "", passwordConfirmation: "", newPassword: "", success: true, passwordError: false})
    //                 } else {
    //                     this.setState({ success: false })
    //                 }
    //             })
    //     }
    // }