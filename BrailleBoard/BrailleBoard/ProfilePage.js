import { StatusBar, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const ProfilePage = ({ navigation }) => {
    const handleChangeView = () => {
        navigation.navigate('Menu');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Part 1 */}
            <View style={styles.part1}>
                <Text style={styles.welcomeText}>ID:BB6478826</Text>
            </View>

            {/* Part 2 */}
            <TouchableOpacity style={styles.part3} onPress={handleChangeView}>
                <Image
                    style={styles.cameraButton}
                    source={require('./assets/BBoard.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>


            <View style={styles.containerProfile}>
                <Image
                    source={require('./assets/Charles.png')} // Replace with your logo file
                    style={styles.imageProfile}
                    resizeMethod='cover'
                />

                <Text style={styles.textProfile}>Ray Charles</Text>
            </View>

            {/* Part 4 */}
            <View style={styles.part4}>
                {/* Render your image here */}
                <Image
                    source={require('./assets/mountains.png')} // Replace with your image file
                    style={styles.buttonImage} // Apply your image styles here
                />
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Hi!</Text>

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Black background color
    },
    part1: {
        backgroundColor: '#FFE500', // Orange background color
        height: 36,
        borderBottomRightRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    part3: {
        alignItems: 'center',
    },
    welcomeText: {
        fontFamily: 'Quicksand-SemiBold', // Assuming the font is available
        fontSize: 15,
        color: '#000', // White text color
    },
    containerProfile: {
        flexDirection: 'row',
        alignItems: 'center', // Center items vertically
        height: 100,
        paddingHorizontal: 10, // Adjust padding as needed
        backgroundColor: '#000',
    },
    imageProfile: {
        width: 80, // Adjust image width as needed
        height: 80, // Adjust image height as needed
        marginRight: 10, // Adjust margin between image and text
        borderRadius: 40,
    },
    textProfile: {
        flex: 1, // Take remaining space for text
        color: '#FFF', // White text color
        fontSize: 18,
    },
    part2: {
        paddingTop: 86,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    animation: {
        width: '100%', // Adjust width as needed
        height: 200, // Adjust height as needed
        borderRadius: 50,
    },
    textRow1: {
        fontFamily: 'Quicksand-Regular', // Assuming the font is available
        fontSize: 18,
        color: '#FFFFFF', // White text color
    },
    textRow2: {
        fontFamily: 'Quicksand-SemiBold', // Assuming the font is available
        fontSize: 18,
        color: '#FFE500', // Orange text color
    },
    part4: {
        position: 'relative', // Ensure the parent view can position its children
        marginTop: 70,
        alignItems: 'center',
    },
    buttonImage: {
        width: '100%', // Full width of parent container
        height: 280,
        paddingBottom: 50,
    },
    button: {
        position: 'absolute',
        left: 40,
        bottom: 20, // Adjust the position from the bottom as needed
    },
    buttonText: {
        fontSize: 48,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 28,

    },
});

export default ProfilePage;
