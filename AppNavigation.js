import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    header: null,
  },
});

export default createAppContainer(AppNavigator);
