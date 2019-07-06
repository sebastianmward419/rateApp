import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, Button, View} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    padding: 60px 40px 40px 50px;
    justify-content: center;
  `


class SignIn extends Component {
    constructor (props) {
        super(props);

        this.state = 
            {
                username: '',
                password: '',
            }
    }

    handleSubmit () {
        const url = 'http://127.0.0.1:3004/api/sign-in';
        const data = JSON.stringify(this.state);
    
        fetch(url, 
          {
            method: 'POST',
            body: data,
            headers: 
            {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          })
        .then(response => console.log('Success:', response))
        .catch(error   => console.log('Error:', error));
      }

      render () {
          return (
            <Container>
                <TextInput style={{height: 40}} placeholder='UserName'
                onChangeText={userName => this.setState({userName})} />
            
                <TextInput style={{height: 40}} placeholder='Password'
                onChangeText={password => this.setState({password})} />
     
                <Button onPress={this.handleSubmit.bind(this)} title='Sign-in'/>
                <Button onPress={e => this.props.history.push('/register')} title='Register'/>
            
           </Container> 
          )
      }


}

export default SignIn;