import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from 'react-navigation'
import Welcome from '../page/Welcome'
import Home from '../page/Home'
import Detail from '../page/Detail'

const InitNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail
  }
});

export default createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  defaultNavigationOptions: {
    header: null
  }
})