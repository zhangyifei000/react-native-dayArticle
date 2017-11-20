import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import DashBoard from './src/js/dashboard.js';
import Util from './src/js/util/common-util.js';
import NetWork from './src/js/util/network-util.js';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      today: '',
      prevDay: ''
    }
  }

  componentDidMount () {
    NetWork.getTodayProfile((res) => {
      const {data: {
        date
      }} = res;
      const {curr, prev} = date;

      this.setState({
        today: curr,
        prevDay: prev
      });
    }, (error) => {
      console.log(error)
    });
  }

  render() {
    const {today, prevDay} = this.state;
    // const contentOffset = {x: Util.scrrenWidth, y: 0};

    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true} 
        contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={true}
        // contentOffset={contentOffset}
      >
        <DashBoard style={styles.dashBoard} date={prevDay}/>
        <DashBoard style={styles.dashBoard} date={today}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Util.scrrenHeight,
    width: Util.scrrenWidth * 2
  },
  dashBoard: {
    flex: 1
  }
});