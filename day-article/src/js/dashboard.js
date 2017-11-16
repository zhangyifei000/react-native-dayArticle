import React, { Component } from 'react'
import {StyleSheet ,View ,WebView} from 'react-native';
import NetWork from './util/network-util.js';

export default class Dashboard extends Component {

  constructor (props) {
    super(props)
    
    this.state = {
      title:'',
      content: ''
    };
  }
  
  componentDidMount () {
    NetWork.getTodayProfile((res) => {
      const {data: {
        title,
        content
      }} = res;
      console.log(res.data.content);
      this.setState({
        title,
        content
      });
    }, (error) => {
      console.log(error)
    });
  }

  render() {
    const {content, title} = this.state;

    return (
      <View style={styles.container}>
        <WebView
          style={styles.webView}
          automaticallyAdjustContentInsets={true}
          source={
            {
              html:`<!DOCTYPE html>
              <html>
                <head>
                  <style text=\"text/css\">
                    p {font-size: 35px ; text-indent: 2em} 
                    h2{text-align:center; font-size: 50px }
                  </style>
                </head>
                <body>
                  <h2>${title}</h2>
                  ${content}
                </body>
              </html>`
            }
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    marginTop: 24
  }
});