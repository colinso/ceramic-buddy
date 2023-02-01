import { StyleSheet, View } from 'react-native';

export default function ShrinkageExample({shrinkPercentage}) {
    return (
        <View style={styles.circleContainer}>
            <View style={[styles.miniContainer, {width: `${getSize(shrinkPercentage)}%`, height: `${getSize(shrinkPercentage)}%`}]}/>
        </View>
    )
}

function getSize(shrinkage) {
    return 100-shrinkage
}

const styles = StyleSheet.create({
    circleContainer: {
      width: 150,
      height: 150,
      marginHorizontal: 60,
      borderWidth: 1.5,
      borderColor: '#fff',
      borderRadius: 100,
      
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#c9a66d'
    },
    miniContainer: {
        width: '100%',
        height: '100%',
        marginHorizontal: 60,
        borderWidth: 1.5,
        borderColor: '#fff',
        borderRadius: 100,
        backgroundColor: '#6d92c9'
      }
  });