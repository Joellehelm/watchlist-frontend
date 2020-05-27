import React, { Component } from 'react';
import { connect } from 'react-redux';
import { autoLogin } from '../actions/auth';

class Account extends Component {

    componentDidMount() {
    
    }

    render() {
        return (
            <div>
                {`Account container... logged in user is ${this.props.auth.user.email}`}
                <form>
                    <input name="email" placeholder={this.props.auth.user.email}/>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})



export default connect(mapStateToProps)(Account);

