import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


class Home extends Component {
    render() {
        console.log(window.history)
        return (
            <div>

                {this.props.navClick !== "" ?
                    <Redirect to="/account"/>
                    :
                    <div>
                        {this.props.auth.user.username}
                    </div>

                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Home);