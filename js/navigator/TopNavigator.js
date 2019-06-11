import {createAppContainer, createMaterialTopTabNavigator} from "react-navigation";
import React from 'react';
import PopularTab from '../page/PopularTab';

type Props = {};
const navigator = createMaterialTopTabNavigator({
  PopularTab1: {
    screen: PopularTab,
    navigationOptions: {
      title: 'Tab1'
    }
  },
  PopularTab2: {
    screen: PopularTab,
    navigationOptions: {
      title: 'Tab2'
    }
  }
});

export default createAppContainer(navigator);