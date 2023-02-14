import React from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

function setStates(state, stateFunc1, stateFunc2) {
  stateFunc1(state);
  stateFunc2(state);
}

export default function Footer({setTab}) {
  const [selected, setSelected] = React.useState(0);
  
  return(
      <Center style={styles.container} safeAreaTop={5}  width="100%" justifyContent={"center"} alignSelf={"center"} >
        <HStack alignItems="center" safeAreaBottom shadow={6} >
          <Pressable cursor="pointer" borderLeftRadius={30} bg={"muted.300"} padding={"5"} opacity={selected === 0 ? 1 : 0.5} py="3" onPress={() => setStates(0, setSelected, setTab)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'calculator-variant' : 'calculator-variant-outline'} />} size="sm" />
              <Text fontSize="12">
                Calc
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" borderRightRadius={30} bg={"muted.300"} padding={"5"} opacity={selected === 1 ? 1 : 0.5} py="3" onPress={() => setStates(1, setSelected, setTab)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name='mirror-rectangle' />} size="sm" />
              <Text fontSize="12">
                Tiles
              </Text>
            </Center>
          </Pressable>
          {/* <Pressable cursor="pointer" borderRightRadius={30} bg={"muted.300"} padding={"5"} opacity={selected === 2 ? 1 : 0.5} py="3" onPress={() => setStates(2, setSelected, setTab)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'coffee' : 'coffee-outline'} />} size="sm" />
              <Text fontSize="12">
                Work
              </Text>
            </Center>
          </Pressable> */}
        </HStack>
      </Center>)
}
    
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    borderTopColor: '#574e35',
    borderWidth: '1',
    borderRadius: 10
  }
})