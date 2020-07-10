import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShowProgress extends Component {

    componentDidMount(){

    }


    render() {
        return (
            <div>
                im show progress
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
  })
  
  const mapDispatchToProps = {
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(ShowProgress);