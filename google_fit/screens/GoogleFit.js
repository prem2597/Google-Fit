import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

class GoogleFitData extends Component {

  constructor(props) {
    super(props);
    const navigation = this.props.navigation.state.params;
    this.state = {
      access_token: navigation.access_token
    }
  }

  componentDidMount() {
      if(this.state.access_token) {
        Alert.alert(this.state.access_token)
      }
  }

  async postData() {

    const url = 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate'
 
    const data = {
      "aggregateBy": [{
           "dataTypeName": "com.google.step_count.delta",
              "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
       }],
      "bucketByTime": { "durationMillis": 86400000 },
       "startTimeMillis": 1593801000000,
      "endTimeMillis": 1593973800000
    }

    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      header: { 
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.state.access_token
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data
    });

    console.log(response.json())
    return response.json();
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                You can see your Google Fit data now
            </Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => this.postData()}>
                    <Text style={{ fontSize: 20, color:'white' }}>Click here to see the data</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
  }
}

export default GoogleFitData

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



