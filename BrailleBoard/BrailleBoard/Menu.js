import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Menu = ({ navigation }) => {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.part4}>
                <Image
                    source={require('./assets/mountainsUp.png')}
                    style={styles.buttonImage}
                />
                <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('ProfilePage')}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                <View style={styles.part2}>
                    <Text style={styles.part2Text}>
                        You can change the {' '}
                    </Text>
                    <Text style={styles.part2Text}>
                        settings to customize the {' '}
                    </Text>
                    <Text style={styles.part2Text}>
                        keyboard for you. {' '}
                    </Text>
                </View>
                <TouchableOpacity style={styles.registerButton} onPress={() => navigateToScreen('Languages')}>
                    <Text style={styles.registerButtonText}>Languages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton} onPress={() => navigateToScreen('HotKey')}>
                    <Text style={styles.registerButtonText}>Hot Keys </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton} onPress={() => navigateToScreen('Switches')}>
                    <Text style={styles.registerButtonText}>Switches </Text>
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
        alignItems: 'center',
        paddingBottom: 50,
    },
    button: {
        left: 10,
        bottom: 140,
    },
    buttonText: {
        fontSize: 36,
        paddingLeft: 40,
        paddingBottom: 50,
        color: '#000',
    },
    buttonImage: {
        width: '100%',
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
    registerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 20,
        marginTop: 40,
        width: '90%',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#FFE500',
    },
    registerButtonText: {
        color: '#FFE500',
        fontSize: 28,
    },
});

export default Menu;
