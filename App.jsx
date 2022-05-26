import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/Home'
import ItemDetails from './src/screens/Details'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: ItemDetails
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Juicy Delicious'
    }
  }
)

export default createAppContainer(navigator)