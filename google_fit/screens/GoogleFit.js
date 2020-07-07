import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

class GoogleFit extends Component {

  constructor(props) {
    super(props);
    const navigation = this.props.navigation.state.params;
    this.state = {
      access_token: navigation.access_token
    }
  }

  componentDidMount() {
      if(this.state.access_token) {
        Alert.alert("You have Successfully logined into your account")
      }
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                You should authorize google fit in order to fetch the data
            </Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => this.signIn()}>
                    <Text style={{ fontSize: 20, color:'white' }}>Authorize</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
  }
}

export default GoogleFit

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



