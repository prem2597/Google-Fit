import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

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

  postData = async () => {
    // axios({
    //   method: 'post',
    //   url: 'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
    //   headers: {
    //     'Authorization': 'Bearer ' + this.state.access_token
    //   }, 
    //   data: {
    //     "aggregateBy": [{
    //       "dataTypeName": "com.google.step_count.delta",
    //       "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
    //     }],
    //     "bucketByTime": { "durationMillis": 86400000 },
    //     "startTimeMillis": 1594060200000,
    //     "endTimeMillis": 1594146600000
    //   }
    // }).then((resp) => {
    //   console.log(resp.data)
    // });
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                You can see your Google Fit data now
            </Text>
            <View>
              <View>
                <Text style={styles.header}>You can see the below mentioned details in your Data sheet</Text>
                <Text style={styles.header}>Please tap on click here button</Text>
              </View>
              <View>

              </View>
              <View>
                <Text style={{ fontSize: 20, color:'white', margin: 15, textAlign:'center', paddingTop: 55 }}>Step Count</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20, color:'white', margin: 15, textAlign:'center' }}>Physical Measurement</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20, color:'white', margin: 15, textAlign:'center' }}>Heart Rate</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => this.postData()}>
                  <Text style={{ fontSize: 20, color:'red', margin: 15, textAlign:'center', padding: 55 }}>Click Here</Text>
              </TouchableOpacity>
            </View>
        </View> 
    );
  }
}

export default GoogleFitData

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    color: 'gold',
    fontSize: 22,
    textAlign: 'center',
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00a8b5',
    paddingTop: 35
  },
    welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    margin: 10,
    paddingTop: 15
  },
});



