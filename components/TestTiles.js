import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Fab, Icon, Box, Center } from 'native-base';
import { AntDesign } from "@expo/vector-icons";

export default function TestTiles() {
    return (
        <Box style={styles.container}>
            <Fab bg='light.400' renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignContent: 'center',
        // backgroundColor: 'red',
        // flex: 1,
        flexGrow: 1,
        padding: 150,
        flexDirection: 'column'
    }
})