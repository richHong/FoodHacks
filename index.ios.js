/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class foodhacks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            FOOD HACKS
          </Text>
        </View>
        <View style={styles.main}>
          <Text>
            Main
          </Text>
        </View>
        <View style={styles.footer}>
          <Text>
            Footer
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex:3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('foodhacks', () => foodhacks);
