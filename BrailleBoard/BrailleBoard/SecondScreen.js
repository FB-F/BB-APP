import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const SecondScreen = ({ navigation }) => {
    const handleChangeView = () => {
        navigation.navigate('ThirdRegister');
    };

    const openCamera = () => {
        // Implement your camera opening logic here
        console.log('Opening camera...');
    };

    return (
        <View style={styles.container}>
            {/* Part 4 */}
            <View style={styles.part4}>
                {/* Render your image here */}
                <Image
                    source={require('./assets/mountainsUp.png')} // Replace with your image file
                    style={styles.buttonImage} // Apply your image styles here
                />
                <TouchableOpacity style={styles.button} onPress={handleChangeView}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>

            {/* Part 2: Texts with yellow highlights */}
            <View style={styles.part2}>
                <Text style={styles.part2Text}>
                    Please scan the{' '}
                    <Text style={styles.yellowText}>QR</Text> code on the{' '}
                    <Text>QR</Text> back of{' '}
                    <Text style={styles.yellowText}> your Braille Board</Text> box.
                </Text>
            </View>

            {/* Part 3: Button with image */}
            <TouchableOpacity style={styles.part3} onPress={handleChangeView}>
                <Image
                    style={styles.cameraButton}
                    source={require('./assets/camera.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            {/* Part 5: Input with orange background */}
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Input your keyboard ID"
                // You can add more TextInput props as needed
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    part4: {
        position: 'relative',
        alignItems: 'center',
        paddingBottom: 50,
    },
    buttonImage: {
        width: '100%',
        height: 200,
        paddingBottom: 50,
    },
    button: {
        position: 'absolute',
        left: 40,
        bottom: 20,
    },
    buttonText: {
        fontSize: 36,
        paddingLeft: 130,
        paddingBottom: 120,
    },
    part2: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    part2Text: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
    yellowText: {
        color: '#FFE500', // Yellow color
    },
    part3: {
        alignItems: 'center',
        paddingTop: 300,
    },
    cameraButton: {
        height: 100,
        width: 100,
    },
    containerInput: {
        //width: "100%",
        backgroundColor: '#FFE500', // Orange background color
        padding: 20,
        //marginHorizontal: 20,
        borderTopLeftRadius: 40,
        marginTop: 50,
        height: 250,
    },
    textInput: {
        width: '100%',
        height: 60,
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
    },
});

export default SecondScreen;
