import GoogleIn from './screens/GoogleIn'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import GoogleFit from './screens/GoogleFit';

const AppNavigator = createSwitchNavigator({
    GoogleIn: GoogleIn,
    GoogleFit: GoogleFit
})

const Navigator = createAppContainer(AppNavigator);

export default Navigator

