import {createAppContainer, createMaterialTopTabNavigator} from "react-navigation";
import React, {Component} from 'react';
import PopularTab from '../page/PopularTab';
import {StyleSheet} from "react-native";

type Props = {};

export default class TopNavigator extends Component<Props> {
  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
  }

  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item
        }
      }
    });
    return tabs;
  }

  render() {
    const topNav = createMaterialTopTabNavigator(this._genTabs(), {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        upperCaseLabel: false,
        scrollEnabled: false,
        style: {
          backgroundColor: '#678'
        },
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle
      }
    });
    const Navigator = createAppContainer(topNav);
    return <Navigator/>
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    minWidth: 50
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white'
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  }
});