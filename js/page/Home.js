/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import BottomNavigator from '../navigator/BottomNavigator';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class Home extends Component<Props> {
  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <BottomNavigator/>;
  }
}
