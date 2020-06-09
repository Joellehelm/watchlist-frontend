import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import '../style/Home.css'


class Home extends Component {
    render() {
        return (
            <div className="home-container">

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