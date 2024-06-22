import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const ToggleableItem = ({ label, imagePath }) => {
    const [showMark, setShowMark] = React.useState(false);

    const toggleMark = () => {
        setShowMark(!showMark);
    };

    return (
        <TouchableOpacity style={styles.toggleableItem} onPress={toggleMark}>
            <Text style={styles.toggleableItemText}>{label}</Text>
            {showMark && <Image source={imagePath} style={styles.toggleableItemImage} />}
        </TouchableOpacity>
    );
};

const Languages = ({ navigation }) => {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    // Example data for FlatList
    const data = [
        { key: '1', label: 'English', imagePath: require('./assets/mark.png') },
        { key: '2', label: 'French', imagePath: require('./assets/mark.png') },
        { key: '3', label: 'Armenian', imagePath: require('./assets/mark.png') },
        { key: '4', label: 'Farsi', imagePath: require('./assets/mark.png') },
        { key: '5', label: 'Italian', imagePath: require('./assets/mark.png') },
        { key: '6', label: 'Arabic', imagePath: require('./assets/mark.png') },
        { key: '7', label: 'Russian', imagePath: require('./assets/mark.png') },
        { key: '8', label: 'Mexican', imagePath: require('./assets/mark.png') },
        { key: '9', label: 'Chinese', imagePath: require('./assets/mark.png') },
        // Add more items as needed
    ];

    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/mountainsUp.png')}
                style={styles.buttonImage}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('ProfilePage')}>
                <Text style={styles.buttonText}>Languages</Text>
            </TouchableOpacity>
            <View style={styles.part2}>
                <Text style={styles.part2Text}>
                    Select the languages you {' '}
                </Text>
                <Text style={styles.part2Text}>
                    want to use. {' '}
                </Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Search</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Find any language"
                    placeholderTextColor="#FFF"
                />
            </View>
            <FlatList
                style={styles.scrollView}
                data={data}
                renderItem={({ item }) => <ToggleableItem label={item.label} imagePath={item.imagePath} />}
                keyExtractor={item => item.key}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center', // Center content vertically
    },
    button: {
        position: 'absolute', // Position the button absolutely
        top: 50, // Adjust as per your design
        left: 20, // Adjust as per your design
    },
    buttonText: {
        fontSize: 36,
        paddingLeft: 120,
        paddingBottom: 50,
        color: '#000',
    },
    buttonImage: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    part2: {
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    part2Text: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
    containerInput: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10,
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
    scrollView: {
        flex: 1, // Take up remaining space
        width: '100%',
    },
    toggleableItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 30,
        marginTop: 20,
        width: '90%',
        borderWidth: 2,
        borderColor: '#FFE500',
        marginLeft: 20,
    },
    toggleableItemText: {
        color: '#FFE500',
        fontSize: 28,
    },
    toggleableItemImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default Languages;
