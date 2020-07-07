import GoogleIn from './screens/GoogleIn'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const AppNavigator = createSwitchNavigator({
    GoogleIn: GoogleIn,
})

const Navigator = createAppContainer(AppNavigator);

export default Navigator

