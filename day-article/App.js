import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import DashBoard from './src/js/dashboard.js';
import Util from './src/js/util/common-util.js';

export default class App extends React.Component {
  render() {
    console.log(styles.container)
    return (
      <ScrollView
        horizontal={true} 
        contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={true}
      >
        <DashBoard style={styles.dashBoard}/>
        <DashBoard style={styles.dashBoard}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Util.scrrenHeight,
    width: Util.scrrenWidth * 3
  },
  dashBoard: {
    flex: 1
  }
});