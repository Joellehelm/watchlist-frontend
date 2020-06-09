import React, { Component } from 'react';
import Login from './Login'
import SignUp from './SignUp'
import { connect } from 'react-redux';
import '../style/Landing.css'
import { Col, Container, Row } from 'react-bootstrap';

import {
    Redirect
  } from "react-router-dom";
  


class Landing extends Component {


    render() {
        return (
            <div className="landing-container">
                <Container>
                <Col lg={8}>
            
                <Row><p>Description of the app. It does things...and stuff.</p></Row>
                
                {
                    this.props.auth.user.username ?
                        <Redirect to="/home" />
                        :
                        <div>
                     
                            <Row><Login /></Row>
                            <Row><SignUp /></Row>
                  
                        </div>
                }
            </Col>
            </Container>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps)(Landing);