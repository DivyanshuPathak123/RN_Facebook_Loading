/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Picker } from 'react-native';
import ContentLoader from 'react-native-content-loader';
import { Circle, Rect } from 'react-native-svg';

const InstagramLoader = () => (
  <ContentLoader height={300} duration={1000}>
    <Circle cx="30" cy="30" r="30" />
    <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
    <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
    <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
  </ContentLoader>
);

const FacebookLoader = () => (
  <ContentLoader primaryColor="#e8f7ff"
    secondaryColor="#4dadf7"
    duration={700}
    height={140}>
    <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    <Rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
    <Rect x="0" y="100" rx="3" ry="3" width="200" height="10" />
    <Rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
  </ContentLoader>
);

const CodeStyleLoader = () => (
  <ContentLoader
    primaryColor="#fff0f6"
    secondaryColor="#f783ac"
    height={80}>
    <Rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
    <Rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
    <Rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
    <Rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
    <Rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
    <Rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
    <Rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
    <Rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
    <Rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
  </ContentLoader>
);

const CustomStyleLoader = () => (
  <ContentLoader
    height={160}
    duration={1000}
  >
    <Rect x="66" y="16" rx="4" ry="4" width="100" height="10" />
    <Rect x="66" y="36" rx="3" ry="3" width="70" height="10" />
    <Rect x="66" y="56" rx="3" ry="3" width="200" height="10" />
    <Rect x="66" y="76" rx="3" ry="3" width="250" height="10" />
    <Rect x="66" y="96" rx="3" ry="3" width="200" height="10" />
    <Circle cx="30" cy="55" r="30" />
  </ContentLoader>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingStyle: "instagram"
    }
  }
  render() {
    let { loadingStyle } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Picker
          selectedValue={this.state.loadingStyle}
          style={{ height: 50, width: 250 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ loadingStyle: itemValue })
          }>
          <Picker.Item label="Instagram style loader" value="instagram" />
          <Picker.Item label="Facebook style loader" value="facebook" />
          <Picker.Item label="Code style loader" value="code" />
          <Picker.Item label="Custom style" value="custom" />
        </Picker>
        {
          loadingStyle == "instagram" ?
            <InstagramLoader />
            :
            loadingStyle == "facebook" ?
              <FacebookLoader />
              :
              loadingStyle == "code" ?
                <CodeStyleLoader />
                :
                loadingStyle == "custom" ?
                  <CustomStyleLoader />
                  : null
        }
      </ScrollView>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
