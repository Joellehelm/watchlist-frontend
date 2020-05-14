import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
               {this.props.auth.username}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Home);