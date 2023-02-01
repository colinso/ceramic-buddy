import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ShrinkageExample from './ShrinkageExample';
import Toast from 'react-native-toast-message';

export default function Calculator() {
  const [shrinkage, setShrinkage] = useState('');
  const [desiredSize, setDesiredSize] = useState('');
  return (
    <View style={styles.calcContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Shrinkage Rate</Text>
            <TextInput 
              style={styles.textInput}
              keyboardType='numeric'
              onChangeText={newText => setNumberState(newText, setShrinkage)}
            />
            <Text style={styles.text}>%</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text} >Desired Size</Text>
            <TextInput 
              style={styles.textInput}
              keyboardType='numeric'
              onChangeText={newText => setNumberState(newText, setDesiredSize)}
            />
            <Text style={styles.text}>cm</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text} >Pre-fire Size</Text>
            <Text style={styles.text}>{calculatePreFireSize(desiredSize, shrinkage)} cm</Text>
        </View>
        <View style={styles.example}>
            <ShrinkageExample shrinkPercentage={shrinkage}/>
            <Text style={styles.subtext}>Visualization</Text>
        </View>
    </View>
  );
}

function setNumberState(value, setter) {

  if (isNaN(value) && value !== undefined) {
    console.log(value)
    Toast.show({
      type: 'error',
      text1: 'Please enter a number',
      position: 'bottom'
    })
    return
  }
  setter(value)
}

function calculatePreFireSize(desired, shrinkage) {
  if (isNaN(desired) || isNaN(shrinkage)) {
    Toast.show({
      type: 'error',
      text1: 'Please enter a number',
      position: 'bottom'
    })
    return 0
  }
  let shrinkageRate = shrinkage/100
  let size = desired/(1-shrinkageRate)
  return size.toFixed(2)
}

const styles = StyleSheet.create({
    calcContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: "#f54278", // Temp just to be able to see it
        // borderWidth: 1
    },
    row: {
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    text: {
        color: '#fff',
        padding: 10,
        fontFamily: 'Cochin',
        fontSize: 20
        
    },
    subtext: {
      color: '#dedac8',
      padding: 10,
      fontFamily: 'Cochin',
      fontSize: 13
      
  },
    textInput: {
        color: '#fff',
        borderColor: "#fff", // Temp just to be able to see it
        borderBottomWidth: 1,
        width: "10%",
        fontFamily: 'Cochin',
        fontSize: 20
    },
    example: {
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})