import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import qs from 'qs';
import config from './config';

function OAuth(client_id) {

  Linking.addEventListener('url', handleUrl);

  function handleUrl(event) {
    console.log(event.url);
    Linking.removeEventListener('url', handleUrl);
    const [, query_string] = event.url.match(/\#(.*)/);
    console.log(query_string);
    const query = qs.parse(query_string);
    console.log(`query: ${JSON.stringify(query)}`);
    cb(query.access_token);
  }

  Linking.openURL('https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000&prompt=consent&response_type=token&client_id='+client_id+'&scope=https://www.googleapis.com/auth/fitness.activity.read&access_type=online').catch(err => console.error('Error processing linking', err));
}


class App extends Component {
  
  componentDidMount() {
    OAuth(config.client_id);
  }
 
  onSubmit = () => {

  }

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to Google Fit Integration
      </Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
          <Text style={{ fontSize: 20, color:'white' }}>Click here to browse your data</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
  }
}

export default App

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

