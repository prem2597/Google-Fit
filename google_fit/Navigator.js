import GoogleIn from './screens/GoogleIn'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import GoogleFitData from './screens/GoogleFit';

const AppNavigator = createSwitchNavigator({
    GoogleIn: GoogleIn,
    GoogleFitData: GoogleFitData
    },{
    intialRouteName: GoogleFitData,
  })

const Navigator = createAppContainer(AppNavigator);

export default Navigator

