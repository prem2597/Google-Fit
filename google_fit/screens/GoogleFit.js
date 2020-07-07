import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import GoogleFit, { Scopes } from 'react-native-google-fit'

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
        Alert.alert("You have Successfully logined into your Google account")
      }
  }

  authorization = async() => {

    console.log(GoogleFit.checkIsAuthorized())

    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ_WRITE,
        Scopes.FITNESS_BODY_READ_WRITE,
      ],
    }

    const result = await GoogleFit.authorize(options)
      .then(authResult => {
        if (authResult.success) {
          console.log("AUTH_SUCCESS")
        } else {
          console.log("AUTH_DENIED", authResult)
        }
      })
      .catch(() => {
        console.log("AUTH_ERROR")
      })

    console.log(result)

  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                You should authorize google fit in order to fetch the data
            </Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => this.authorization()}>
                    <Text style={{ fontSize: 20, color:'white' }}>Click here to Authorize</Text>
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



