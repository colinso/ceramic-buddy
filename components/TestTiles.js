import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Fab, Icon, Box, Center, Image, ScrollView, Row, Heading } from 'native-base';
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'expo-image-picker';

const dataKey = '@TestTiles'

export default function TestTiles() {
    // let imageCache = getImageList()
    const [imageArray, setTheArray] = useState([]);

    useEffect(() => {
        async function getImages() {
            let list = await getImageList()
            setTheArray(list)
        }

        getImages()
    }, [])

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        });

        if (!result.canceled) {
            await addToImageList(result.assets[0])
            setTheArray([...imageArray, result.assets[0].uri]);
        } else {
            alert('You did not select any image.');
        }
    };

    return (
        <Box style={styles.container}>
            <Fab onPress={pickImageAsync} colorScheme={'light'} renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
            <Heading style={styles.heading} size={'xl'}>Test Tiles</Heading>
            <Center style={styles.container}>
                <ScrollView style={styles.scroll}>
                    {getImageComponents(imageArray)}
                </ScrollView>
            </Center>
        </Box>
    )
}

async function addToImageList(asset) {
    try {
        let imageList = await getImageList()
        imageList.push(asset.uri)
        await AsyncStorage.setItem(
          '@TestTiles',
          JSON.stringify(imageList),
        );
      } catch (error) {
        alert("Error saving image")
        console.log(error)
      }
}

async function getImageList() {
    try {
        let itemJson = await AsyncStorage.getItem(dataKey)
        let obj = JSON.parse(itemJson)
        if (obj == null ) {
            return []
        }
        return obj
    } catch (error) {
        alert("Error getting image")
        console.log(error)
    }
}

function getImageComponents(images) {
    let imageList = [];
    let imageRow = [];
    for (let i = 0; i < images.length; i++) {
        imageRow.push(
            <Center>
                <Image key={i} style={styles.image} source={{uri: images[i]}} alt="Alternate Text" size="xl" />
                {/* <Text style={styles.subtitle}>Subtitle</Text> */}
            </Center>
        )
        if (imageRow.length == 2) {
            imageList.push(<Row>{imageRow}</Row>)
            imageRow = []
        }
    }
    if (imageRow.length != 0) {
        imageList.push(<Row>{imageRow}</Row>)
    }
    return <Box style={styles.imageContainer} shadow={8}>{imageList}</Box>
}

const styles = StyleSheet.create({
    heading: {
        padding: 12,
    },
    container: {
        alignSelf: 'stretch',
        alignContent: 'center',
        alignItems: 'center',
        // paddingTop: '10%',
        // backgroundColor: 'red',
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column'
    },
    imageContainer: {
        alignSelf: 'center',
        alignContent: 'center',
        flex: 1,
    },
    image: {
        borderRadius: 10,
        margin: 15
    },
    scroll: {
        flex: 1,
        alignContent: 'center',
        // backgroundColor: 'blue',
        width: '100%'
    },

})