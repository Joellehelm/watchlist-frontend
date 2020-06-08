import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import '../style/Home.css'


class Home extends Component {
    render() {
        return (
            <div>

                {this.props.navClick !== "" ?
                    <Redirect to="/account"/>
                    :
                    <div className="home-container">
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