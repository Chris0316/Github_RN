import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import React from 'react';
import Popular from "../page/Popular";
import Trending from "../page/Trending";
import Favorite from "../page/Favorite";
import My from "../page/My";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const navigator = createBottomTabNavigator({
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
});

export default createAppContainer(navigator);