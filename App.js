import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Calculator from './components/Calculator';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

//Image by rawpixel.comon Freepik
const HeaderTextureImage = require('./assets/images/header-texture.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Ceramic Buddy</Text>
        </View>
      </View>
      <View style={styles.container}>
          <Calculator />
      </View>
      <Toast/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  table: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignSelf: 'stretch',
    height: '12%',
    backgroundColor: '#dedac8',
    borderRadius: 10, 
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    // textAlign: 'center',
    // justifyContent: 'center',
    padding: 10
  },
  headerText: {
    color: '#25292e',
    fontSize: 30,
    fontFamily: 'Cochin',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  headerTextContainer: {
    // marginTop: '13%',
    // backgroundColor: '#fff',
    // borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    // borderColor: '#828074',
    // borderWidth: 2
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.2
  },
});
