/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {connect} from 'react-redux';

import Popular from "../page/Popular";
import Trending from "../page/Trending";
import Favorite from "../page/Favorite";
import My from "../page/My";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


type Props = {};

const TABS = {
  Popular: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}}/>
      )
    }
  },
  Trending: {
    screen: Trending,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name={'md-trending-up'} size={26} style={{color: tintColor}}/>
      )
    }
  },
  Favorite: {
    screen: Favorite,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}}/>
      )
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Entypo name={'user'} size={26} style={{color: tintColor}}/>
      )
    }
  }
};

class BottomNavigator extends Component<Props> {
  _tabNavigator() {
    if (this.Tab) {
      return this.Tab;
    }
    const {Popular, Trending, Favorite, My} = TABS;
    const tabs = {Popular, Trending, Favorite, My};
    return this.Tab = createAppContainer(createBottomTabNavigator(tabs, {
      tabBarComponent: props => <TabBarComponent theme={this.props.theme} {...props}/>
    }));
  }
  render() {
    const Tab = this._tabNavigator();
    return <Tab/>
  }
}

class TabBarComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime()
    }
  }
  render() {
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.props.theme}
    />
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps)(BottomNavigator);