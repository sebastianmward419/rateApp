import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, Button, View} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    padding: 60px 40px 40px 50px;
    justify-content: center;
  `

class Register extends Component {
    constructor (props) {
        super(props);
    }

    handleSubmit () {

    }

    render () {
        return (
            <Container>
                <TextInput style={{height: 40}} placeholder='UserName'
                onChangeText={userName => this.setState({userName})} />
            
                <TextInput style={{height: 40}} placeholder='Password'
                onChangeText={password => this.setState({password})} />
     
                <Button onPress={this.handleSubmit.bind(this)} title='Register'/>
                <Button onPress={e => this.props.history.push('/')} title='Sign-in'/>
            
           </Container> 
        )
    }
}

export default Register;