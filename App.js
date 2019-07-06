/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, Button, View} from 'react-native';
import styled from 'styled-components';
import { NativeRouter, Switch, Route } from 'react-router-native';

// components
import SignIn   from './components/accountAccess/signIn.js';
import Register from './components/accountAccess/register.js';

export default class App extends Component {

  constructor (props) {
    super(props);

  }

  render() {

    return (
      <NativeRouter>
        
          <Switch>
            <Route exact path='/' component={SignIn}/>
            <Route exact path='/register' component={Register}/>
          </Switch>

      </NativeRouter>
    );
  }
}

