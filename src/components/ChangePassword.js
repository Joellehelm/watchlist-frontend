import React from 'react';
import { Button, Input, Message, Transition } from 'semantic-ui-react'

function ChangePassword(props) {
    return (
        <div className="change-email-container">
            <p className="update-email-header">Change Password</p>
            <form onSubmit={props.submitChanges}>
                <Input onChange={props.handleChange} type="text" name="newPassword" placeholder="New Password" value={props.newPassword} />
                <Input onChange={props.handleChange} error={props.passwordError} type="password" name="password" placeholder="Password" value={props.password} />
                <Input onChange={props.handleChange} error={props.passwordError} type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={props.passwordConfirmation} />
                <Transition animation="jiggle" duration={1000}  visible={props.passwordError}>
                  <Message visible={props.passwordError} hidden={props.success} negative>
                    <Message.Header>Password and password confirmation must match.</Message.Header>
                  </Message>
                </Transition>
              
                <Transition animation="jiggle" duration={1000}  visible={props.success}>
                  <Message visible={props.success} hidden={props.success === false} positive>
                    <Message.Header>Password Successfully changed.</Message.Header>
                  </Message>
                </Transition>

                <Button className="update-email-btn" type="submit" value="Submit">Submit</Button>
            </form>
    
        </div>
    );
}

export default ChangePassword;