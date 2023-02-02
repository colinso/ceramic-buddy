import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { NativeBaseProvider, Box, Heading, extendTheme, HStack, Center } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Body from './components/Body';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Footer from './components/Footer';

//Image by rawpixel.comon Freepik
const HeaderTextureImage = require('./assets/images/header-texture.jpg');
const Stack = createStackNavigator();

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
}
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const [selected, setSelected] = useState(1);

  return (
    <NativeBaseProvider theme={theme}>
        <Box style={styles.container}>
          <Box style={styles.header}>
            <Box style={styles.headerTextContainer}>
              <Heading style={styles.headerText}>Ceramic Buddy</Heading>
            </Box>
          </Box>
          {/* <Box style={styles.bodyContainer}> */}
          <Body selectedTab={selected} />
          {/* </Box> */}
          <Box>
            <Footer setTab={(val) => setSelected(val)} />
          </Box>
          <Toast/>
        </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedac8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    // backgroundColor: '#dedac8',
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
    backgroundColor: '#25292e',
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
    color: '#fff',
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
  footer: {
    justifyContent: "center",
  },
});
