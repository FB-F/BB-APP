import { StatusBar, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import SecondScreen from './SecondScreen'; // Import the new screen
import ThirdRegister from './ThirdRegister';
import ProfilePage from './ProfilePage';
import Menu from './Menu';
import Languages from './Languages';
import HotKey from './HotKey';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdRegister" component={ThirdRegister} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Languages" component={Languages} />
        <Stack.Screen name="HotKey" component={HotKey} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const handleChangeView = () => {
    navigation.navigate('SecondScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Part 1 */}
      <View style={styles.part1}>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>

      {/* Part 2 */}
      <View style={styles.part2}>
        <Image
          style={styles.animation}
          source={require('./assets/homePageAnimaction.png')}
          resizeMode="contain"
        />
      </View>

      {/* Part 3 */}
      <View style={styles.part3}>
        <Text style={styles.textRow1}>Hello, you can register</Text>
        <Text style={styles.textRow2}>Braille Board.</Text>
      </View>

      {/* Part 4 */}
      <View style={styles.part4}>
        {/* Render your image here */}
        <Image
          source={require('./assets/mountains.png')} // Replace with your image file
          style={styles.buttonImage} // Apply your image styles here
        />
        <TouchableOpacity style={styles.button} onPress={handleChangeView}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
  welcomeText: {
    fontFamily: 'Quicksand-SemiBold', // Assuming the font is available
    fontSize: 15,
    color: '#000', // White text color
  },
  part2: {
    paddingTop: 86,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  animation: {
    width: '100%', // Adjust width as needed
    height: 300, // Adjust height as needed
    borderRadius: 50,
  },
  part3: {
    alignItems: 'center',
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
    marginTop: 80,
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
});

export default App;
