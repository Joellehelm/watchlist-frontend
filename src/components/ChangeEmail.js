import React from 'react';
import { Button, Input, Message, Transition } from 'semantic-ui-react'

function ChangeEmail(props) {
    return (
        <div className="change-email-container">
            <p className="update-email-header">Update Email</p>
            <form onSubmit={props.submitChanges}>
                <Input onChange={props.handleChange} type="email" name="email" placeholder={props.user.email} value={props.email} />
                <Input onChange={props.handleChange} error={props.passwordError} type="password" name="password" placeholder="Password" value={props.password} />
                <Input onChange={props.handleChange} error={props.passwordError} type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={props.passwordConfirmation} />
                <Transition animation="jiggle" duration={1000}  visible={props.passwordError}>
                  <Message visible={props.passwordError} hidden={props.success} negative>
                    <Message.Header>Password and password confirmation must match.</Message.Header>
                  </Message>
                </Transition>
              
                <Transition animation="jiggle" duration={1000}  visible={props.success}>
                  <Message visible={props.success} hidden={props.success === false} positive>
                    <Message.Header>Email successfully updated.</Message.Header>
                  </Message>
                </Transition>

                <Button className="update-email-btn" type="submit" value="Submit">Submit</Button>
            </form>
    
        </div>
    );
}

export default ChangeEmail;