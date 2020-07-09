import GoogleIn from './screens/GoogleIn'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GoogleFitData from './screens/GoogleFit';
import DataForm from './screens/DataForm';

const AppNavigator = createStackNavigator({
    GoogleIn: GoogleIn,
    GoogleFitData: GoogleFitData,
    DataForm: DataForm,
    },{
    intialRouteName: GoogleIn,
  })

const Navigator = createAppContainer(AppNavigator);

export default Navigator

