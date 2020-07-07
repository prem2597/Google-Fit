import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { logger } from 'react-native-logs';
import config from '../config';
import * as Google from 'expo-google-app-auth';

class GoogleIn extends Component {
  
  signIn = async() => {
    var log = logger.createLogger();
    try {
      const result = await Google.logInAsync({
        androidClientId: config.Android_client_id,
        iosClientId: config.IOS_client_secret
      });

      if (result.type === 'success') {
        console.log(result.accessToken)
      }
    }
    catch(e) {
      console.log(e)
      return {error: true}
    }
  }

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to Google Fit Integration
      </Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this.signIn()}>
          <Text style={{ fontSize: 20, color:'white' }}>Click here to Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
  }
}

export default GoogleIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a8b5',
  },
    welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    margin: 10,
  },
});



