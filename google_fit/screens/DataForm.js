import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

class DataForm extends Component {

    constructor(props) {
        super(props);
        const navigation = this.props.navigation.state.params;
        this.state = {
          access_token: navigation.access_token
        }
    }

    render() {
        return (
            <View>
                
            </View>
        )
    }  

}

export default DataForm


