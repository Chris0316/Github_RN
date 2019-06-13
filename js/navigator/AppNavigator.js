import {
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'
import Welcome from '../page/Welcome'
import Home from '../page/Home'
import Detail from '../page/Detail'
import {connect} from 'react-redux'
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

export const rootCom = 'Init';

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

export const RootNavigator = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  defaultNavigationOptions: {
    header: null
  }
});

/**
 * 1.初始化react-navigation与redux的中间件，
 * 该方法的一个很大的作用就是为reduxifyNavigator的key设置actionSubscribers(行为订阅者)
 * 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29
 * 检测订阅者是否存在@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L97
 * @type {Middleware}
 */
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav
);

const App = createReduxContainer(RootNavigator);

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
  state: state.nav,//v2
});
/**
 * 3.连接 React 组件与 Redux store
 */
export default connect(mapStateToProps)(App);