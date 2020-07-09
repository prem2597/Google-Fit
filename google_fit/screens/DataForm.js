import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

class DataForm extends Component {

    constructor(props) {
        super(props);
        const navigation = this.props.navigation.state.params;
        this.state = {
          access_token: navigation.access_token,
          startDate: "",
          endDate: "",
        }
    }

    handleStartDate = (text) => {
      var myDate = +new Date(text+'T00:00:00+0000')
      console.log(myDate)
      this.setState({
        startDate: text
      });
    }
  
    handleEndDate = (text) => {
      this.setState({
        endDate: text
      });
    }

    onSubmit = () => {
      // console.log(this.state.startDate)
      // console.log(this.state.endDate)
      // this.props.navigation.navigate('SecondPage', {

      // });
    }

    render() {
      return (
        <ScrollView >
          <View style={{ marginTop: 60, backgroundColor: '#00a8b5' }}>
            <Text style={{ fontSize: 25, padding: 15, textAlign: 'center' }}>
              Please fill the form below
            </Text>
            <View style={{backgroundColor: "lightblue", textAlign: "center", paddingTop: 15}}>
              <Text style={styles.textStyle}>Enter the start date : </Text>
                <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="YYYY-MM-DD"
                placeholderTextColor = "black"
                autoCapitalize="none"
                onChangeText={this.handleStartDate}
              />
              <Text style={styles.textStyle}>Enter the End date : </Text>
                <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="YYYY-MM-DD"
                placeholderTextColor = "black"
                autoCapitalize="none"
                onChangeText={this.handleEndDate}
              />
              <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
                <Text style={{ fontSize: 20, color:'white' }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )
    }  

}

export default DataForm

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
    button: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#3F51B5',
      
      margin: 35,
      borderRadius: 20,
    },
  
    input: {
      margin: 25,
      padding: 10,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 15,
    },
  
    textStyle: {
      // backgroundColor: '#fff',
      fontSize: 20,
      marginTop: 10,
      color: 'black',
      textAlign: 'center'
    },
});

