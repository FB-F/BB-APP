import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const ThirdRegister = ({ navigation }) => {
    const handleChangeView = () => {
        navigation.navigate('ProfilePage');
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
                <View style={styles.part2}>
                    <Text style={styles.part2Text}>
                        Create account for your {' '}
                        <Text style={styles.yellowText}>BB</Text>{' '}
                    </Text>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>User Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                        placeholderTextColor="#FFF"
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your e-mail"
                        placeholderTextColor="#FFF"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Enter your password"
                        placeholderTextColor="#FFF"
                    />
                </View>

                <TouchableOpacity style={styles.registerButton} onPress={handleChangeView}>
                    <Text style={styles.registerButtonText}>Register</Text>
                    <Image
                        source={require('./assets/login.png')} // Replace with your logo file
                        style={styles.registerButtonImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButtonGoogle} onPress={handleChangeView}>
                    <Text style={styles.registerButtonTextGoogle}>Sign in </Text>
                    <Image
                        source={require('./assets/Google.png')} // Replace with your logo file
                        style={styles.registerButtonImage}
                    />
                </TouchableOpacity>
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
        position: 'relative', // Ensure the parent view can position its children
        alignItems: 'center',
        paddingBottom: 50,
    },
    button: {
        //position: 'absolute',
        left: 10,
        bottom: 140,
    },
    buttonText: {
        fontSize: 36,
        paddingLeft: 80,
        paddingBottom: 50,
    },
    buttonImage: {
        width: '100%', // Full width of parent container
        height: 200,
    },
    part2: {
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
    containerInput: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10,
        paddingTop: 10,
    },
    label: {
        color: '#FFD700', // Yellow color for the label
        marginBottom: 10,
        fontSize: 16,
    },
    input: {
        height: 50,
        borderColor: '#FFD700', // Yellow color for the border
        borderWidth: 2,
        borderRadius: 8, // Rounded corners
        paddingHorizontal: 10,
        color: '#FFF', // Text color
        backgroundColor: '#000', // Background color for the input field
        width: '100%',
    },
    registerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFE500',
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
        width: '90%', // Adjust the width as needed
        justifyContent: 'space-between',
    },
    registerButtonText: {
        color: 'black',
        fontSize: 28,

    },
    registerButtonImage: {
        width: 24,
        height: 24,
    },
    registerButtonGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFE500',
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
        width: '90%', // Adjust the width as needed
        justifyContent: 'space-between',
    },
    registerButtonTextGoogle: {
        color: 'black',
        fontSize: 28,
    },
    registerButtonImageGoogle: {
        width: 50,
        height: 50,
    },
});

export default ThirdRegister;
